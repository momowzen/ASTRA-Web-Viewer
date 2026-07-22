const admin = require('firebase-admin');
const { getFirestore } = require('firebase-admin/firestore');
const { writeFileSync } = require('fs');
const { join } = require('path');

if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
  console.error('FIREBASE_SERVICE_ACCOUNT env var not set');
  process.exit(1);
}

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
admin.initializeApp({ credential: admin.cert(serviceAccount) });
const db = getFirestore();

async function main() {
  const [timerDoc, configDoc] = await Promise.all([
    db.collection('timers').doc('global').get(),
    db.collection('config').doc('discordBot').get()
  ]);

  const timers = timerDoc.exists ? timerDoc.data().timers || {} : {};
  const config = configDoc.exists ? configDoc.data() : {};

  const data = { timers, config, exportedAt: Date.now() };
  const outPath = join(__dirname, '..', 'web-app', 'data.json');
  writeFileSync(outPath, JSON.stringify(data));

  const count = Object.keys(timers).length;
  console.log(`Exported ${count} timers to data.json`);
}

main().catch((err) => {
  console.error('Export failed:', err.message);
  process.exit(1);
});
