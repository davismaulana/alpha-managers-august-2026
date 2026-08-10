import { readFileSync } from 'node:fs';

const octoberHost = 'https://oct-2026.zenova.id';
const sectionOrder = [
  'Hero',
  'ProblemStatement',
  'TargetAudience',
  'WhatYoullLearn',
  'Speakers',
  'EventFormat',
  'LimitedSeats',
  'IndustryTrust',
  'VideoProof',
  'FinalCTA',
  'FAQ',
];
const requiredMarkers = [
  'oct-2026',
  'cfr-oct-2026',
  '1 Oktober 2026',
  '/october-event-poster.png',
  '/industry-trust-october.png',
  'oct_2026_cta_click',
];
const forbiddenMarkers = [
  'august-event',
  'cfr-august2026',
  'alpha-managers-august-2026',
  'alpha-managers-august-lp',
  '13 Agustus 2026',
  'Validasi awal dalam 8 langkah.',
  'Manager Anda Belum Kerja Seperti Yang Anda Harapkan?',
];
const files = [
  'src/App.tsx',
  'src/lib/constants.ts',
  'src/components/sections/Hero.tsx',
  'src/components/sections/EventFormat.tsx',
  'src/components/sections/IndustryTrust.tsx',
  'src/components/sections/VideoProof.tsx',
  'src/components/sections/FinalCTA.tsx',
  'src/components/sections/Footer.tsx',
  'src/components/sections/LeadCapture.tsx',
  'server.js',
];

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const assertIncludes = (content, markers, label) => {
  const missing = markers.filter((marker) => !content.includes(marker));
  assert(missing.length === 0, `${label} missing: ${missing.join(' | ')}`);
};

const assertExcludes = (content, markers, label) => {
  const found = markers.filter((marker) => content.includes(marker));
  assert(found.length === 0, `${label} contains forbidden marker(s): ${found.join(' | ')}`);
};

const assertSectionOrder = (appSource) => {
  let previous = -1;
  for (const section of sectionOrder) {
    const position = appSource.indexOf(`<${section} />`);
    assert(position > previous, `App section order is missing or invalid at ${section}.`);
    previous = position;
  }
};

const source = files.map((file) => readFileSync(file, 'utf8')).join('\n');
assertSectionOrder(readFileSync('src/App.tsx', 'utf8'));
assertIncludes(source, requiredMarkers, 'local October source');
assertExcludes(source, forbiddenMarkers, 'local October source');
console.log('Local October parity and event isolation: PASS');

if (process.argv.includes('--live')) {
  const html = await (await fetch(`${octoberHost}/`)).text();
  const asset = html.match(/assets\/index-[A-Za-z0-9_-]+\.js/)?.[0];
  assert(asset, `${octoberHost} did not expose an entry bundle.`);
  const bundle = await (await fetch(`${octoberHost}/${asset}`)).text();
  assertIncludes(bundle, ['oct-2026', '1 Oktober 2026'], 'live October bundle');
  assertExcludes(bundle, ['13 Agustus 2026', 'cfr-august2026'], 'live October bundle');
  console.log('Live October event isolation: PASS');
}
