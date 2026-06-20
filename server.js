import { createServer } from 'node:http';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomUUID } from 'node:crypto';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');
const port = Number(process.env.PORT || 80);
const leadWebhookUrl =
  process.env.LEAD_WEBHOOK_URL || 'https://n8n.sixzenith.com/webhook/cfr-june2026-leadform';

const CAMPAIGN_ID = 'cfr-august2026';
const EVENT_NAME = 'Alpha Managers - 13 Agustus 2026';
const DEFAULT_UTM_CAMPAIGN = 'alpha-managers-august-2026';
const DEFAULT_UTM_SOURCE = 'alpha-managers-august-lp';
const DEFAULT_SOURCE = 'alpha-managers-august-lp';

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
};

const requiredFields = [
  'name',
  'whatsapp',
  'company',
  'role',
  'city',
  'participant_count',
  'manager_challenge',
];

const sendJson = (response, status, payload) => {
  response.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  response.end(JSON.stringify(payload));
};

const readBody = async (request) => {
  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    size += chunk.length;
    if (size > 100_000) {
      throw new Error('Payload terlalu besar.');
    }
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
};

const cleanText = (value, maxLength = 240) => String(value || '').trim().slice(0, maxLength);

const normalizeWhatsapp = (value) => {
  let raw = cleanText(value, 40).replace(/\D/g, '');
  if (raw.startsWith('0')) raw = `62${raw.slice(1)}`;
  if (!raw.startsWith('62')) raw = `62${raw}`;
  return raw;
};

const validateLead = (payload) => {
  const missing = requiredFields.filter((field) => !cleanText(payload[field]));
  if (missing.length > 0) {
    return `Lengkapi field: ${missing.join(', ')}.`;
  }

  const whatsapp = normalizeWhatsapp(payload.whatsapp);
  if (whatsapp.length < 10 || whatsapp.length > 16) {
    return 'Nomor WhatsApp belum valid.';
  }

  return '';
};

const normalizeLeadPayload = (payload, request) => {
  const whatsapp = normalizeWhatsapp(payload.whatsapp);
  const eventId = cleanText(payload.event_id || `${CAMPAIGN_ID}-${randomUUID()}`, 120);
  const metadata = typeof payload.metadata === 'object' && payload.metadata ? payload.metadata : {};

  return {
    name: cleanText(payload.name, 120),
    whatsapp,
    email: cleanText(payload.email, 160),
    company: cleanText(payload.company || payload.business, 160),
    business: cleanText(payload.company || payload.business, 160),
    role: cleanText(payload.role, 80),
    city: cleanText(payload.city || metadata.city, 120),
    participant_count: cleanText(payload.participant_count, 80),
    manager_challenge: cleanText(payload.manager_challenge || payload.challenge, 1000),
    challenge: cleanText(payload.manager_challenge || payload.challenge, 1000),
    event_id: eventId,
    fbp: cleanText(payload.fbp, 180),
    fbc: cleanText(payload.fbc, 180),
    source: cleanText(payload.source || DEFAULT_SOURCE, 120),
    page_url: cleanText(payload.page_url, 500),
    utm_source: cleanText(payload.utm_source || DEFAULT_UTM_SOURCE, 120),
    utm_medium: cleanText(payload.utm_medium, 120),
    utm_campaign: cleanText(payload.utm_campaign || DEFAULT_UTM_CAMPAIGN, 120),
    utm_content: cleanText(payload.utm_content, 120),
    user_agent: cleanText(request.headers['user-agent'], 300),
    campaign: CAMPAIGN_ID,
    business_category: cleanText(metadata.businessCategory, 120),
    monthly_revenue: cleanText(metadata.monthlyRevenue, 120),
    page_title: 'Alpha Managers August 2026',
    event_name: EVENT_NAME,
    metadata: {
      event_date: '2026-08-13',
      event_name: EVENT_NAME,
    },
  };
};

const postLeadToWebhook = async (lead) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);

  try {
    const response = await fetch(leadWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
      signal: controller.signal,
    });
    const text = await response.text();
    let body = {};

    try {
      body = text ? JSON.parse(text) : {};
    } catch {
      body = { raw: text.slice(0, 500) };
    }

    if (!response.ok || body.ok === false) {
      return {
        ok: false,
        status: response.status,
        error: cleanText(body.error || body.message || 'Lead belum berhasil tersimpan.', 240),
      };
    }

    return {
      ok: true,
      status: response.status,
      id: body.id || body.leadId || lead.event_id,
      campaign: body.campaign || lead.campaign,
    };
  } catch (error) {
    const aborted = error instanceof Error && error.name === 'AbortError';
    return {
      ok: false,
      status: 502,
      error: aborted ? 'Lead capture timeout. Coba kirim ulang.' : 'Lead capture belum tersedia. Coba beberapa saat lagi.',
    };
  } finally {
    clearTimeout(timeout);
  }
};

const serveStatic = async (request, response) => {
  const url = new URL(request.url || '/', 'http://localhost');
  const decodedPath = decodeURIComponent(url.pathname);
  const safePath = decodedPath === '/' ? '/index.html' : decodedPath;
  const filePath = path.normalize(path.join(distDir, safePath));

  if (!filePath.startsWith(distDir)) {
    response.writeHead(403);
    response.end('Forbidden');
    return;
  }

  let target = filePath;
  try {
    const stat = await fs.stat(target);
    if (stat.isDirectory()) target = path.join(target, 'index.html');
  } catch {
    target = path.join(distDir, 'index.html');
  }

  const extension = path.extname(target);
  const content = await fs.readFile(target);
  response.writeHead(200, {
    'Content-Type': contentTypes[extension] || 'application/octet-stream',
    'Cache-Control': target.endsWith('index.html') ? 'no-cache' : 'public, max-age=31536000, immutable',
  });
  response.end(content);
};

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url || '/', 'http://localhost');

    if (request.method === 'GET' && url.pathname === '/healthz') {
      sendJson(response, 200, { ok: true });
      return;
    }

    if (request.method === 'POST' && url.pathname === '/api/leads') {
      const body = await readBody(request);
      const rawPayload = JSON.parse(body || '{}');
      const payload = normalizeLeadPayload(rawPayload, request);
      const validationError = validateLead(payload);
      if (validationError) {
        sendJson(response, 400, { ok: false, error: validationError });
        return;
      }

      const result = await postLeadToWebhook(payload);
      if (!result.ok) {
        sendJson(response, result.status || 502, { ok: false, error: result.error });
        return;
      }

      sendJson(response, 200, {
        ok: true,
        leadId: String(result.id),
        eventId: payload.event_id,
        campaign: result.campaign,
      });
      return;
    }

    if (url.pathname.startsWith('/api/')) {
      sendJson(response, 404, { ok: false, error: 'Endpoint tidak ditemukan.' });
      return;
    }

    await serveStatic(request, response);
  } catch (error) {
    const message = error instanceof SyntaxError ? 'JSON tidak valid.' : 'Server belum bisa memproses request.';
    sendJson(response, error instanceof SyntaxError ? 400 : 500, { ok: false, error: message });
  }
});

server.listen(port, '0.0.0.0', () => {
  console.log(`autopilot-business-august2026 listening on ${port}`);
});
