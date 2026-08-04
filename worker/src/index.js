const MARKET_BASE = 'https://api.nextmarket.games/l9asia';
const FX_URL      = 'https://open.er-api.com/v6/latest/USD';
const TTL         = 60000; // serve cached prices for 60s before refetching
const PAGE_SIZE   = 500;

const CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Cache-Control': 'no-store'
};

let mem = { ts: 0, json: null };

// Fetch a single page of marketplace listings. The NEXT Market search API is
// a POST to /v1/sale/c2c with a JSON body; listings are returned cheapest-first
// when sort=PRICE_ASC is provided.
async function fetchPage(page, realmCode) {
  const r = await fetch(
    `${MARKET_BASE}/v1/sale/c2c?page=${page}&size=${PAGE_SIZE}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ presetIdList: [36], realmCode, sort: 'PRICE_ASC' })
    }
  );
  if (!r.ok) throw new Error('market ' + r.status);
  return r.json();
}

// Scan all pages, keeping the lowest USDT price per chest tier (T1..T5).
async function fetchCheapest(realmCode) {
  const page0 = await fetchPage(0, realmCode);
  const total = page0.totalElements || 0;
  const pagesNeeded = Math.min(Math.ceil(total / PAGE_SIZE), 6);
  const pages = [page0];
  for (let p = 1; p < pagesNeeded; p++) {
    try { pages.push(await fetchPage(p, realmCode)); } catch (e) {}
  }

  const cheap = {};
  for (const page of pages) {
    for (const it of (page.content || [])) {
      const m = (it.item && it.item.name) ? String(it.item.name).match(/T(\d)\b.*?x([\d,]+)/) : null;
      if (!m) continue;
      const tier = 'T' + m[1];
      const price = +(it.cryptoPriceInfo && it.cryptoPriceInfo.price);
      if (!isFinite(price) || price <= 0) continue;
      if (!(tier in cheap) || price < cheap[tier]) cheap[tier] = price;
    }
  }
  return cheap;
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
    const url = new URL(request.url);
    const force = url.searchParams.get('force') === '1';
    const realmCode = url.searchParams.get('realm') || 'OLD_REALM';

    try {
      const now = Date.now();
      if (!force && mem.json && now - mem.ts < TTL) {
        return json({ ...mem.json, cached: true });
      }

      const prices = await fetchCheapest(realmCode);
      if (!Object.keys(prices).length) throw new Error('no listings');

      const fx = await getFx();
      if (fx.php <= 0) fx.php = 0;

      const payload = {
        success: true,
        realm: realmCode,
        prices,
        fx,
        lastUpdated: new Date(now).toISOString(),
        cached: false
      };
      mem.json = payload;
      mem.ts = now;
      return json(payload);
    } catch (e) {
      if (mem.json) return json({ ...mem.json, cached: true });
      return json({ success: false, message: 'Failed to load prices: ' + e.message }, 502);
    }
  }
};