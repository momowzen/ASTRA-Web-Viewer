const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const { getFirestore } = require('firebase-admin/firestore');
const { readFileSync } = require('fs');
const { join } = require('path');

const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT ||
  readFileSync(join(__dirname, 'service-account.json'), 'utf8')
);
admin.initializeApp({ credential: admin.cert(serviceAccount) });
const db = getFirestore();

const app = express();
app.use(cors());

// REST endpoints
app.get('/api/timers', async (req, res) => {
  try {
    const doc = await db.collection('timers').doc('global').get();
    const timers = doc.exists ? doc.data().timers || {} : {};
    res.json({ timers });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/config', async (req, res) => {
  try {
    const doc = await db.collection('config').doc('discordBot').get();
    const config = doc.exists ? doc.data() : {};
    res.json({ config });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// SSE real-time stream
app.get('/api/timers/stream', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
  });
  res.write('data: {"connected":true}\n\n');

  const unsubscribe = db.collection('timers').doc('global').onSnapshot(
    (doc) => {
      const timers = doc.exists ? doc.data().timers || {} : {};
      res.write(`data: ${JSON.stringify({ timers })}\n\n`);
    },
    (err) => {
      res.write(`data: ${JSON.stringify({ error: err.message })}\n\n`);
    }
  );

  req.on('close', () => {
    unsubscribe();
  });
});

app.use(express.static(join(__dirname, 'web-app')));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`ASTRA Dashboard running on http://localhost:${PORT}`);
});
