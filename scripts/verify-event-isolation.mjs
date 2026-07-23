import { readFileSync } from 'node:fs';

const augustHost = 'https://august-zenith.zenova.id';
const julyHost = 'https://july-zenith.zenova.id';
const augustMarkers = [
  'Manager Anda Belum Kerja Seperti Yang Anda Harapkan? Semua Masih Anda Yang Harus Kerjakan Sendiri?',
  'Daftar via WA',
  'Validasi awal dalam 8 langkah.',
  'august-zenith-form-card',
  'workshopFocus',
];
const julyMarkers = ['Workshop Eksklusif Cash Flow', '6 Agustus 2026'];

function assertIncludes(content, markers, label) {
  const missing = markers.filter((marker) => !content.includes(marker));
  if (missing.length) throw new Error(`${label} missing: ${missing.join(' | ')}`);
}

function assertAugust(content, label) {
  assertIncludes(content, augustMarkers, label);
  const foreign = julyMarkers.filter((marker) => content.includes(marker));
  if (foreign.length) throw new Error(`${label} contains July marker(s): ${foreign.join(' | ')}`);
}

function expectFailure(label, fn) {
  try {
    fn();
  } catch (error) {
    console.log(`${label}: FAIL as expected — ${error.message}`);
    return;
  }
  throw new Error(`${label} unexpectedly passed`);
}

function localSource() {
  return [
    readFileSync('src/components/sections/Hero.tsx', 'utf8'),
    readFileSync('src/lib/constants.ts', 'utf8'),
    readFileSync('src/components/sections/LeadCapture.tsx', 'utf8'),
  ].join('\n');
}

async function liveBundle(host) {
  const html = await (await fetch(`${host}/`)).text();
  const asset = html.match(/assets\/index-[A-Za-z0-9_-]+\.js/)?.[0];
  if (!asset) throw new Error(`${host} did not expose an entry bundle`);
  return (await fetch(`${host}/${asset}`)).text();
}

const source = localSource();
assertAugust(source, 'local August source');
expectFailure('swapped missing-stepper fixture', () => assertAugust(source.replace('Validasi awal dalam 8 langkah.', ''), 'swapped stepper fixture'));
expectFailure('swapped July fixture', () => assertAugust(`${source}\n${julyMarkers.join('\n')}`, 'swapped July fixture'));
console.log('Local August source: PASS');

if (process.argv.includes('--live')) {
  const [august, july] = await Promise.all([liveBundle(augustHost), liveBundle(julyHost)]);
  assertAugust(august, 'live August bundle');
  assertIncludes(july, julyMarkers, 'live July bundle');
  const leaked = augustMarkers.filter((marker) => july.includes(marker));
  if (leaked.length) throw new Error(`live July bundle contains August marker(s): ${leaked.join(' | ')}`);
  console.log('Live August domain: PASS');
  console.log('Live July domain: PASS');
}
