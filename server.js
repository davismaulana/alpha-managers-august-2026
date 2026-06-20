import { createServer } from 'node:http';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');
const port = Number(process.env.PORT || 80);

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

const sendJson = (response, status, payload) => {
  response.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  response.end(JSON.stringify(payload));
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
  console.log(`autopilot-business-june2026 listening on ${port}`);
});
