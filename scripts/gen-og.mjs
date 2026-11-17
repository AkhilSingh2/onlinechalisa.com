// One-time OG image generator.
// Rasterizes a branded 1200×630 card per chalisa (plus a default) into
// public/og/<slug>.png using the deity's accent colour. Re-run whenever
// the deity list, titles or colours change:
//   node scripts/gen-og.mjs
import { readFileSync, readdirSync, mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const contentDir = join(root, 'src/content/chalisas');
const paathDir = join(root, 'src/content/paath');
const outDir = join(root, 'public/og');
mkdirSync(outDir, { recursive: true });

// The real diya illustration (glow + flame + terracotta vessel). We strip
// its outer <svg> wrapper so it can be embedded as a nested <svg> inside
// each card, rendered big and warm like the original share icon.
const diyaRaw = readFileSync(join(root, 'public/diya.svg'), 'utf8');
const diyaInner = diyaRaw
  .replace(/^[\s\S]*?<svg[^>]*>/, '')
  .replace(/<\/svg>\s*$/, '')
  .trim();

const CANVAS = '#faf5ea';
const INK = '#2a2018';
const BODY = '#6b5d4f';
const MUTE = '#9a8b78';

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Convert #rrggbb → rgba() with the given alpha.
function rgba(hex, a) {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}

function card({ title, subtitle, tradition, color, wordmark = 'ONLINE CHALISA' }) {
  const W = 1200;
  const H = 630;
  const DIYA = 260; // big, hero-sized lamp like the original share icon
  const diyaX = (W - DIYA) / 2;
  const diyaY = 60;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="halo" cx="50%" cy="26%" r="60%">
      <stop offset="0%" stop-color="${rgba(color, 0.32)}"/>
      <stop offset="55%" stop-color="${rgba(color, 0.09)}"/>
      <stop offset="100%" stop-color="${rgba(color, 0)}"/>
    </radialGradient>
    <linearGradient id="rule" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${rgba(color, 0)}"/>
      <stop offset="50%" stop-color="${rgba(color, 0.9)}"/>
      <stop offset="100%" stop-color="${rgba(color, 0)}"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="${CANVAS}"/>
  <rect width="${W}" height="${H}" fill="url(#halo)"/>
  <rect x="28" y="28" width="${W - 56}" height="${H - 56}" rx="28"
        fill="none" stroke="${rgba(color, 0.35)}" stroke-width="2"/>

  <!-- Hero diya (real illustration) -->
  <svg x="${diyaX}" y="${diyaY}" width="${DIYA}" height="${DIYA}" viewBox="0 0 128 128">${diyaInner}</svg>

  <text x="${W / 2}" y="410" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif" font-size="${title.length > 24 ? 52 : title.length > 18 ? 64 : 80}" font-weight="600"
        fill="${INK}">${esc(title)}</text>

  <line x1="${W / 2 - 160}" y1="450" x2="${W / 2 + 160}" y2="450"
        stroke="url(#rule)" stroke-width="3"/>

  <text x="${W / 2}" y="506" text-anchor="middle"
        font-family="'Helvetica Neue', Arial, sans-serif" font-size="28" font-weight="500"
        fill="${BODY}">${esc(subtitle)}</text>

  <text x="${W / 2}" y="548" text-anchor="middle"
        font-family="'Helvetica Neue', Arial, sans-serif" font-size="21"
        fill="${MUTE}">${esc(tradition)}</text>

  <text x="${W / 2}" y="596" text-anchor="middle"
        font-family="'Helvetica Neue', Arial, sans-serif" font-size="22" font-weight="600"
        letter-spacing="6" fill="${rgba(color, 0.95)}">${esc(wordmark)}</text>
</svg>`;
}

const SUBTITLE = 'Lyrics in Hindi · English · Telugu · Kannada · Tamil';
const PAATH_SUBTITLE = 'Lyrics in Hindi · Telugu · Kannada · Tamil · Bengali';

async function writeCards(dir, subtitle) {
  for (const file of readdirSync(dir).filter((f) => f.endsWith('.json'))) {
    const data = JSON.parse(readFileSync(join(dir, file), 'utf8'));
    const svg = card({
      title: data.title,
      subtitle,
      tradition: data.tradition || 'Devotional hymn',
      color: data.color || '#c96a1a',
    });
    const out = join(outDir, `${data.slug}.png`);
    await sharp(Buffer.from(svg)).png().toFile(out);
    console.log('wrote', out);
  }
}

await writeCards(contentDir, SUBTITLE);
await writeCards(paathDir, PAATH_SUBTITLE);

// Branded default (home / fallback)
const def = card({
  title: 'Online Chalisa',
  subtitle: 'Read every Chalisa — ad-free, offline, in five scripts',
  tradition: 'Hanuman · Shiv · Ganesh · Durga · Shani · Laxmi · Saraswati',
  color: '#c96a1a',
  wordmark: 'ONLINECHALISA.COM',
});
await sharp(Buffer.from(def)).png().toFile(join(outDir, 'default.png'));
console.log('wrote', join(outDir, 'default.png'));
