// Autore: Marco D'Elia
// Assembla i contenuti monografici per gli 8 servizi e le 16 micro-zone e verifica il conteggio parole

import fs from 'node:fs';
import path from 'node:path';
import { SERVICES_PART_1 } from './content-services-part1.mjs';
import { SERVICES_PART_2 } from './content-services-part2.mjs';
import { SERVICES_PART_3 } from './content-services-part3.mjs';
import { ZONES_PART_1 } from './content-zones-part1.mjs';
import { zonesPart2 } from './content-zones-part2.mjs';
import { zonesPart3 } from './content-zones-part3.mjs';
import { zonesPart4 } from './content-zones-part4.mjs';
import { zonesPart5 } from './content-zones-part5.mjs';
import { zonesPart6 } from './content-zones-part6.mjs';
import { zonesPart7 } from './content-zones-part7.mjs';
import { zonesPart8 } from './content-zones-part8.mjs';
import { zonesPart9 } from './content-zones-part9.mjs';

const servicesLong = {};
for (const slug of [...Object.keys(SERVICES_PART_1), ...Object.keys(SERVICES_PART_2)]) {
  const base = SERVICES_PART_1[slug] || SERVICES_PART_2[slug] || '';
  const extra = SERVICES_PART_3[slug] || '';
  servicesLong[slug] = (base.trim() + '\n\n' + extra.trim()).trim();
}

const zonesBase = { ...ZONES_PART_1, ...zonesPart2, ...zonesPart3, ...zonesPart4 };
const zonesExtra1 = { ...zonesPart5, ...zonesPart6 };
const zonesExtra2 = { ...zonesPart7, ...zonesPart8 };
const zonesLong = {};
for (const slug of Object.keys(zonesBase)) {
  const base = zonesBase[slug] || '';
  const extra1 = zonesExtra1[slug] || '';
  const extra2 = zonesExtra2[slug] || '';
  const extra3 = zonesPart9[slug] || '';
  zonesLong[slug] = [base.trim(), extra1.trim(), extra2.trim(), extra3.trim()].filter(Boolean).join('\n\n');
}

function countWords(str) {
  return str
    .replace(/[#*|>`~_-]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 0).length;
}

console.log('--- WORD COUNT SOLO MARKDOWN SERVIZI (a cui si sommano ~550 parole di servicesData.ts) ---');
for (const [slug, text] of Object.entries(servicesLong)) {
  console.log(`Servizio ${slug}: ${countWords(text)} parole markdown (~${countWords(text) + 550} totali)`);
}

console.log('\n--- WORD COUNT SOLO MARKDOWN ZONE (a cui si sommano ~450 parole di zonesData.ts) ---');
for (const [slug, text] of Object.entries(zonesLong)) {
  console.log(`Zona ${slug}: ${countWords(text)} parole markdown (~${countWords(text) + 450} totali)`);
}

fs.writeFileSync(
  path.join(process.cwd(), 'src', 'data', 'servicesLongContent.json'),
  JSON.stringify(servicesLong, null, 2),
  'utf-8'
);

fs.writeFileSync(
  path.join(process.cwd(), 'src', 'data', 'zonesLongContent.json'),
  JSON.stringify(zonesLong, null, 2),
  'utf-8'
);

console.log('\nFile JSON salvati in src/data/servicesLongContent.json e src/data/zonesLongContent.json');
