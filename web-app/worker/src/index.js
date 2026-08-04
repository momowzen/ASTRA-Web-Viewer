const UPSTREAM = 'https://www.raidium.quest/api/tools/relic-calculator/prices?realm=OLD_REALM';
const FX_URL   = 'https://open.er-api.com/v6/latest/USD';
const TTL      = 120000; // serve cached prices for 2 min before refetching

const CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Cache-Control': 'no-store'
};

let mem = { ts: 0, json: null };

async function fetchUpstream(force) {
  const now = Date.now();
  if (!force && mem.json && now - mem.ts < TTL) return { json: mem.json, cached: true };
  const r = await fetch(UPSTREAM);
  if (!r.ok) throw new Error('upstream ' + r.status);
  mem.json = await r.json();
  mem.ts = now;
  return { json: mem.json, cached: false };
}

async function getFx() {
  try {
    const r = await fetch(FX_URL);
    if (!r.ok) throw new Error('fx ' + r.status);
    const d = await r.json();
    const rates = (d && d.rates) || {};
    return { usd: 1, php: +rates.PHP || 0, jpy: +rates.JPY || 0, krw: +rates.KRW || 0 };
  } catch {
    return { usd: 1, php: 0, jpy: 0, krw: 0 };
  }
}

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: { 'Content-Type': 'application/json', ...CORS }
  });
}

export default {
  async fetch(request) {
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS });
    const force = new URL(request.url).searchParams.get('force') === '1';

    try {
      const { json: data, cached } = await fetchUpstream(force);
      if (!data || data.success === false) throw new Error(data.message || 'bad upstream');

      const fx = await getFx();
      if (fx.php <= 0 && data.exchangeRate) fx.php = +data.exchangeRate || 0;

      const prices = {};
      for (const [k, v] of Object.entries(data.prices || {})) {
        prices[k] = { priceUSDT: +v.priceUSDT || 0 };
      }

      return json({
        success: true,
        realm: 'OLD_REALM',
        prices,
        fx,
        lastUpdated: data.lastUpdated || null,
        cached
      });
    } catch (e) {
      return json({ success: false, message: 'Failed to load prices: ' + e.message }, 502);
    }
  }
};