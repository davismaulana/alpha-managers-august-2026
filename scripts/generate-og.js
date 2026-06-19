import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#050505"/>
      <stop offset="60%" stop-color="#111111"/>
      <stop offset="100%" stop-color="#1e160c"/>
    </linearGradient>
    <radialGradient id="glow" cx="85%" cy="10%" r="55%">
      <stop offset="0%" stop-color="rgba(212,175,106,0.35)"/>
      <stop offset="100%" stop-color="rgba(212,175,106,0)"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="56" y="56" width="1088" height="518" rx="18" fill="rgba(255,255,255,0.02)" stroke="rgba(212,175,106,0.28)"/>
  <text x="88" y="118" fill="#ECD49A" font-size="20" font-family="Arial, sans-serif" font-weight="700" letter-spacing="3">
    ALPHA MANAGERS | EXCLUSIVE COMMUNITY SHARING | BY INVITATION ONLY
  </text>
  <text x="88" y="212" fill="#ffffff" font-size="64" font-family="Georgia, Times New Roman, serif" font-weight="700">
    Ubah Manager Anda dari
  </text>
  <text x="88" y="286" fill="#D4AF6A" font-size="76" font-family="Georgia, Times New Roman, serif" font-weight="700">
    Pemadam Kebakaran
  </text>
  <text x="88" y="360" fill="#ffffff" font-size="64" font-family="Georgia, Times New Roman, serif" font-weight="700">
    menjadi Penggerak Pertumbuhan
  </text>
  <text x="88" y="430" fill="#d4d4d8" font-size="28" font-family="Arial, sans-serif">
    Bangun manager yang menjaga KPI, delegasi, accountability,
  </text>
  <text x="88" y="468" fill="#d4d4d8" font-size="28" font-family="Arial, sans-serif">
    dan performa tim tanpa owner turun tangan setiap hari.
  </text>
  <rect x="760" y="120" width="340" height="390" rx="12" fill="rgba(0,0,0,0.55)" stroke="rgba(212,175,106,0.28)"/>
  <text x="790" y="165" fill="#E5C88A" font-size="18" font-family="Arial, sans-serif" font-weight="700" letter-spacing="2">
    MANAGER PERFORMANCE COMMAND BOARD
  </text>
  <line x1="790" y1="205" x2="1070" y2="205" stroke="rgba(255,255,255,0.14)"/>
  <text x="790" y="238" fill="#ffffff" font-size="26" font-family="Arial, sans-serif" font-weight="700">KPI Discipline</text>
  <text x="790" y="270" fill="#d4d4d8" font-size="18" font-family="Arial, sans-serif">Target tidak lagi hanya dikejar</text>
  <text x="790" y="296" fill="#d4d4d8" font-size="18" font-family="Arial, sans-serif">saat owner turun tangan</text>
  <line x1="790" y1="324" x2="1070" y2="324" stroke="rgba(255,255,255,0.14)"/>
  <text x="790" y="357" fill="#ffffff" font-size="26" font-family="Arial, sans-serif" font-weight="700">Delegation Standard</text>
  <text x="790" y="389" fill="#d4d4d8" font-size="18" font-family="Arial, sans-serif">Pekerjaan selesai dengan standar</text>
  <text x="790" y="415" fill="#d4d4d8" font-size="18" font-family="Arial, sans-serif">yang jelas</text>
  <line x1="790" y1="443" x2="1070" y2="443" stroke="rgba(255,255,255,0.14)"/>
  <text x="790" y="476" fill="#ffffff" font-size="26" font-family="Arial, sans-serif" font-weight="700">13 Agustus 2026 | Jakarta</text>
  <text x="790" y="508" fill="#E5C88A" font-size="18" font-family="Arial, sans-serif">By invitation only</text>
  <rect x="88" y="514" width="270" height="54" rx="27" fill="#D4AF6A"/>
  <text x="123" y="549" fill="#050505" font-size="24" font-family="Arial, sans-serif" font-weight="700">Daftarkan Manager Anda</text>
</svg>`;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const resvg = new Resvg(svg, {
  fitTo: {
    mode: 'width',
    value: 1200,
  },
});

const outputPath = path.join(__dirname, '..', 'public', 'alpha-managers-og.png');
fs.writeFileSync(outputPath, resvg.render().asPng());
