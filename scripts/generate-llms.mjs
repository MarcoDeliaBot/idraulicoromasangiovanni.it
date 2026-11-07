/**
 * Generatore /public/llms.txt e /public/llms-full.txt — idraulicoromasangiovanni.it
 * Espone l'albero del sito, i dati tecnici e il telefono 06 8590 2384 per motori AI e LLM.
 * Autore: Marco D'Elia
 */
import fs from 'node:fs';
import path from 'node:path';

const BASE_URL = 'https://idraulicoromasangiovanni.it';
const PHONE = '06 8590 2384';

const SERVICES = [
  { slug: 'ricerca-perdite-acqua-san-giovanni', title: 'Ricerca Perdite Acqua San Giovanni' },
  { slug: 'disotturazione-wc-scarichi-san-giovanni', title: 'Disotturazione WC Scarichi San Giovanni' },
  { slug: 'riparazione-cassette-pucci-geberit-san-giovanni', title: 'Riparazione Cassette Pucci Geberit San Giovanni' },
  { slug: 'assistenza-caldaie-san-giovanni', title: 'Assistenza Caldaie San Giovanni' },
  { slug: 'sostituzione-scaldabagni-san-giovanni', title: 'Sostituzione Scaldabagni San Giovanni' },
  { slug: 'riparazione-rubinetteria-sanitari-san-giovanni', title: 'Riparazione Rubinetteria Sanitari San Giovanni' },
  { slug: 'pronto-intervento-allagamenti-san-giovanni', title: 'Pronto Intervento Allagamenti San Giovanni' },
  { slug: 'riduttori-pressione-autoclavi-san-giovanni', title: 'Riduttori Pressione Autoclavi San Giovanni' },
];

const ZONES = [
  { slug: 'idraulico-piazza-dei-re-di-roma', title: 'Idraulico Piazza dei Re di Roma' },
  { slug: 'idraulico-san-giovanni-in-laterano', title: 'Idraulico San Giovanni in Laterano' },
  { slug: 'idraulico-via-appia-nuova', title: 'Idraulico Via Appia Nuova' },
  { slug: 'idraulico-piazza-tuscolo', title: 'Idraulico Piazza Tuscolo' },
  { slug: 'idraulico-via-magna-grecia', title: 'Idraulico Via Magna Grecia' },
  { slug: 'idraulico-porta-metronia', title: 'Idraulico Porta Metronia' },
  { slug: 'idraulico-porta-san-giovanni', title: 'Idraulico Porta San Giovanni' },
  { slug: 'idraulico-villa-fiorelli', title: 'Idraulico Villa Fiorelli' },
  { slug: 'idraulico-via-taranto', title: 'Idraulico Via Taranto' },
  { slug: 'idraulico-via-la-spezia', title: 'Idraulico Via La Spezia' },
  { slug: 'idraulico-piazza-asti', title: 'Idraulico Piazza Asti' },
  { slug: 'idraulico-via-sannio-largo-brindisi', title: 'Idraulico Via Sannio Largo Brindisi' },
  { slug: 'idraulico-piazza-zama-via-latina', title: 'Idraulico Piazza Zama Via Latina' },
  { slug: 'idraulico-porta-maggiore-raccordo-san-giovanni', title: 'Idraulico Porta Maggiore Raccordo San Giovanni' },
  { slug: 'idraulico-piazza-epiro-porta-latina', title: 'Idraulico Piazza Epiro Porta Latina' },
  { slug: 'idraulico-manzoni-viale-carlo-felice', title: 'Idraulico Manzoni Viale Carlo Felice' },
];

const llmsSummary = `# Idraulico San Giovanni — Termoidraulica San Giovanni Roma

> Presidio tecnico di pronto intervento idraulico H24 e manutenzione impianti idrotermosanitari civili e condominiali a Roma nel quartiere Appio-Latino / San Giovanni (Municipio VII e raccordo Municipio I Centro Storico).
> Telefono Diretto Emergenze e Preventivi: ${PHONE} (tel:0685902384)
> Coordinate Geografiche: 41.886, 12.508 — CAP serviti: 00182, 00183, 00184, 00185, 00179.

## Dati Tecnici e Idrogeologici del Territorio di San Giovanni (Roma)
- **Orografia e Falda dell'Acqua Mariana:** Altimetria degradante dai 46-50 m s.l.m. di Porta San Giovanni / Viale Carlo Felice / Via Merulana fino ai 25-30 m s.l.m. della conca della Marrana dell'Acqua Mariana (Via Sannio, Piazza Tuscolo, Piazza Epiro, Piazza Zama, Via Latina).
- **Rete Idrica Acea ATO2:** Pressione statica fino a 4.8 - 5.5 bar nelle quote depresse (Piazza Zama, Via Imera, Via Britannia) con installazione riduttori di pressione compensati Caleffi; cali dinamici ai piani alti delle quote elevate (Porta San Giovanni, Piazza dei Re di Roma, Via Merulana) risolti con gruppi autoclave a inverter DAB Esybox.
- **Durezza Calcare Acqua:** 33°F - 36°F (gradi francesi), con protocolli di lavaggio chimico scambiatori caldaie a condensazione, filtri defangatori magnetici e dosatori polifosfati UNI 8065.
- **Stratificazione Edilizia:** Palazzi umbertini (1885-1920) con scarichi storici in piombo/ghisa e solai a voltine; condominii intensivi anni '30-'50 con colonne montanti in ferro zincato Mannesmann; riparazione conservativa cassette incassate Pucci, Geberit e batterie Catis senza rompere piastrelle d'epoca.

## Albero Principale dei Contenuti

### Home e Pagine Istituzionali
- [Idraulico San Giovanni](${BASE_URL}/)
- [Servizi Idraulici San Giovanni Roma](${BASE_URL}/servizi/)
- [Zone Servite Idraulico San Giovanni](${BASE_URL}/zone/)
- [Chi Siamo — Termoidraulica San Giovanni Roma](${BASE_URL}/chi-siamo/)
- [Contatti Idraulico San Giovanni — ${PHONE}](${BASE_URL}/contatti/)
- [Preventivo Idraulico San Giovanni Roma](${BASE_URL}/preventivo-gratuito/)

### Gli 8 Servizi Pilastro
${SERVICES.map((s) => `- [${s.title}](${BASE_URL}/servizi/${s.slug}/)`).join('\n')}

### Le 16 Micro-Zone Territoriali e Assi Viari
${ZONES.map((z) => `- [${z.title}](${BASE_URL}/zone/${z.slug}/)`).join('\n')}
`;

const servicesLongPath = path.join(process.cwd(), 'src', 'data', 'servicesLongContent.json');
const zonesLongPath = path.join(process.cwd(), 'src', 'data', 'zonesLongContent.json');

const servicesLong = fs.existsSync(servicesLongPath)
  ? JSON.parse(fs.readFileSync(servicesLongPath, 'utf-8'))
  : {};
const zonesLong = fs.existsSync(zonesLongPath)
  ? JSON.parse(fs.readFileSync(zonesLongPath, 'utf-8'))
  : {};

let llmsFull = llmsSummary + '\n\n---\n\n# DOCUMENTAZIONE TECNICA INTEGRALE (SERVIZI E MICRO-ZONE)\n\n';

for (const s of SERVICES) {
  llmsFull += `\n# ${s.title}\nURL: ${BASE_URL}/servizi/${s.slug}/\nTelefono: ${PHONE}\n\n${servicesLong[s.slug] || ''}\n\n---\n`;
}

for (const z of ZONES) {
  llmsFull += `\n# ${z.title}\nURL: ${BASE_URL}/zone/${z.slug}/\nTelefono: ${PHONE}\n\n${zonesLong[z.slug] || ''}\n\n---\n`;
}

const publicDir = path.join(process.cwd(), 'public');
fs.writeFileSync(path.join(publicDir, 'llms.txt'), llmsSummary, 'utf-8');
fs.writeFileSync(path.join(publicDir, 'llms-full.txt'), llmsFull, 'utf-8');
console.log('✅ Generati public/llms.txt e public/llms-full.txt.');

const outDir = path.join(process.cwd(), 'out');
if (fs.existsSync(outDir)) {
  fs.writeFileSync(path.join(outDir, 'llms.txt'), llmsSummary, 'utf-8');
  fs.writeFileSync(path.join(outDir, 'llms-full.txt'), llmsFull, 'utf-8');
  console.log('✅ Copiati llms.txt e llms-full.txt in out/.');
}

