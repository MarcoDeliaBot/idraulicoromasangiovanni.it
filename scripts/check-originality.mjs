/**
 * Script di Verifica Originalità, Regola 1:1 (<title> === <h1>), Word Count (> 2.200) e Overlap N-Gram (< 20%)
 * Scansiona le pagine statiche compilate in /out
 * Autore: Marco D'Elia
 */
import fs from 'node:fs';
import path from 'node:path';

const OUT_DIR = path.join(process.cwd(), 'out');

const SERVICE_SLUGS = [
  'ricerca-perdite-acqua-san-giovanni',
  'disotturazione-wc-scarichi-san-giovanni',
  'riparazione-cassette-pucci-geberit-san-giovanni',
  'assistenza-caldaie-san-giovanni',
  'sostituzione-scaldabagni-san-giovanni',
  'riparazione-rubinetteria-sanitari-san-giovanni',
  'pronto-intervento-allagamenti-san-giovanni',
  'riduttori-pressione-autoclavi-san-giovanni',
];

const ZONE_SLUGS = [
  'idraulico-piazza-dei-re-di-roma',
  'idraulico-san-giovanni-in-laterano',
  'idraulico-via-appia-nuova',
  'idraulico-piazza-tuscolo',
  'idraulico-via-magna-grecia',
  'idraulico-porta-metronia',
  'idraulico-porta-san-giovanni',
  'idraulico-villa-fiorelli',
  'idraulico-via-taranto',
  'idraulico-via-la-spezia',
  'idraulico-piazza-asti',
  'idraulico-via-sannio-largo-brindisi',
  'idraulico-piazza-zama-via-latina',
  'idraulico-porta-maggiore-raccordo-san-giovanni',
  'idraulico-piazza-epiro-porta-latina',
  'idraulico-manzoni-viale-carlo-felice',
];

function decodeHtmlEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

function stripTags(html) {
  return decodeHtmlEntities(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  );
}

function extractTitle(html) {
  const match = html.match(/<title>([\s\S]*?)<\/title>/i);
  return match ? stripTags(match[1]) : '';
}

function extractH1(html) {
  const match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  return match ? stripTags(match[1]) : '';
}

function extractMainText(html) {
  const match = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  return match ? stripTags(match[1]) : '';
}

function tokenizeWords(text) {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0);
}

function buildNGrams(words, n) {
  const set = new Set();
  for (let i = 0; i <= words.length - n; i++) {
    set.add(words.slice(i, i + n).join(' '));
  }
  return set;
}

function jaccardSimilarity(setA, setB) {
  if (setA.size === 0 || setB.size === 0) return 0;
  let intersection = 0;
  for (const item of setA) {
    if (setB.has(item)) intersection++;
  }
  const union = setA.size + setB.size - intersection;
  return (intersection / union) * 100;
}

if (!fs.existsSync(OUT_DIR)) {
  console.error('❌ Cartella /out non trovata. Esegui prima npm run build.');
  process.exit(1);
}

const pillarPages = [
  ...SERVICE_SLUGS.map((s) => ({
    id: `/servizi/${s}/`,
    file: path.join(OUT_DIR, 'servizi', s, 'index.html'),
  })),
  ...ZONE_SLUGS.map((z) => ({
    id: `/zone/${z}/`,
    file: path.join(OUT_DIR, 'zone', z, 'index.html'),
  })),
];

const additionalPages = [
  { id: '/', file: path.join(OUT_DIR, 'index.html') },
  { id: '/servizi/', file: path.join(OUT_DIR, 'servizi', 'index.html') },
  { id: '/zone/', file: path.join(OUT_DIR, 'zone', 'index.html') },
  { id: '/chi-siamo/', file: path.join(OUT_DIR, 'chi-siamo', 'index.html') },
  { id: '/contatti/', file: path.join(OUT_DIR, 'contatti', 'index.html') },
  { id: '/preventivo-gratuito/', file: path.join(OUT_DIR, 'preventivo-gratuito', 'index.html') },
  { id: '/privacy-policy/', file: path.join(OUT_DIR, 'privacy-policy', 'index.html') },
  { id: '/cookie-policy/', file: path.join(OUT_DIR, 'cookie-policy', 'index.html') },
];

let errors = 0;
const pillarData = [];

console.log('======================================================================');
console.log(' VERIFICA REGOLA AUREA 1:1 (<title> === <h1>) E WORD COUNT (> 2.200)');
console.log('======================================================================\n');

for (const page of [...additionalPages, ...pillarPages]) {
  if (!fs.existsSync(page.file)) {
    console.error(`❌ File mancante: ${page.id}`);
    errors++;
    continue;
  }

  const html = fs.readFileSync(page.file, 'utf-8');
  const title = extractTitle(html);
  const h1 = extractH1(html);
  const mainText = extractMainText(html);
  const words = tokenizeWords(mainText);
  const isPillar = pillarPages.some((p) => p.id === page.id);

  const match1to1 = title === h1 && title.length > 0;
  if (!match1to1) {
    console.error(`❌ [REGOLA 1:1 FALLITA] ${page.id} -> Title: "${title}" | H1: "${h1}"`);
    errors++;
  }

  if (isPillar) {
    if (words.length < 2200) {
      console.error(
        `❌ [WORD COUNT INSUFFICIENTE] ${page.id} -> ${words.length} parole (minimo richiesto: 2200)`
      );
      errors++;
    } else {
      console.log(
        `✅ ${page.id.padEnd(55)} | 1:1 OK ("${title}") | Parole <main>: ${words.length}`
      );
    }

    pillarData.push({
      id: page.id,
      words,
      trigrams: buildNGrams(words, 3),
      fourgrams: buildNGrams(words, 4),
    });
  } else {
    console.log(
      `✅ ${page.id.padEnd(55)} | 1:1 OK ("${title}") | Parole <main>: ${words.length} (Hub/Pagina)`
    );
  }
}

console.log('\n======================================================================');
console.log(' VERIFICA OVERLAP N-GRAM (3-GRAM E 4-GRAM < 20%) TRA LE 24 PAGINE PILASTRO');
console.log('======================================================================\n');

let max3Gram = 0;
let max3Pair = '';
let max4Gram = 0;
let max4Pair = '';

for (let i = 0; i < pillarData.length; i++) {
  for (let j = i + 1; j < pillarData.length; j++) {
    const pA = pillarData[i];
    const pB = pillarData[j];

    const sim3 = jaccardSimilarity(pA.trigrams, pB.trigrams);
    const sim4 = jaccardSimilarity(pA.fourgrams, pB.fourgrams);

    if (sim3 > max3Gram) {
      max3Gram = sim3;
      max3Pair = `${pA.id} <-> ${pB.id}`;
    }
    if (sim4 > max4Gram) {
      max4Gram = sim4;
      max4Pair = `${pA.id} <-> ${pB.id}`;
    }

    if (sim3 >= 20 || sim4 >= 20) {
      console.error(
        `❌ [OVERLAP >= 20%] ${pA.id} <-> ${pB.id} | 3-gram: ${sim3.toFixed(2)}% | 4-gram: ${sim4.toFixed(2)}%`
      );
      errors++;
    }
  }
}

console.log(`📊 Coppie analizzate: ${(pillarData.length * (pillarData.length - 1)) / 2}`);
console.log(`✅ Max Overlap 3-gram registrato: ${max3Gram.toFixed(2)}% (${max3Pair}) [Soglia < 20%]`);
console.log(`✅ Max Overlap 4-gram registrato: ${max4Gram.toFixed(2)}% (${max4Pair}) [Soglia < 20%]`);

if (errors > 0) {
  console.error(`\n❌ Verifica fallita con ${errors} errori.`);
  process.exit(1);
} else {
  console.log('\n🎉 TUTTI I CONTROLLI DI ORIGINALITÀ, WORD COUNT E REGOLA 1:1 SUPERATI AL 100%!');
}

