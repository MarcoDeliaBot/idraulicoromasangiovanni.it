/**
 * Generatore Sitemap XML — idraulicoromasangiovanni.it
 * Autore: Marco D'Elia
 */
import fs from 'node:fs';
import path from 'node:path';

const BASE_URL = 'https://idraulicoromasangiovanni.it';
const TODAY = new Date().toISOString().split('T')[0];

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

const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/servizi/', priority: '0.9', changefreq: 'weekly' },
  { path: '/zone/', priority: '0.9', changefreq: 'weekly' },
  ...SERVICE_SLUGS.map((slug) => ({
    path: `/servizi/${slug}/`,
    priority: '0.9',
    changefreq: 'weekly',
  })),
  ...ZONE_SLUGS.map((slug) => ({
    path: `/zone/${slug}/`,
    priority: '0.85',
    changefreq: 'weekly',
  })),
  { path: '/chi-siamo/', priority: '0.7', changefreq: 'monthly' },
  { path: '/contatti/', priority: '0.8', changefreq: 'monthly' },
  { path: '/preventivo-gratuito/', priority: '0.8', changefreq: 'monthly' },
  { path: '/privacy-policy/', priority: '0.3', changefreq: 'yearly' },
  { path: '/cookie-policy/', priority: '0.3', changefreq: 'yearly' },
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${BASE_URL}${r.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const publicPath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(publicPath, xml, 'utf-8');
console.log(`✅ Generato public/sitemap.xml con ${routes.length} URL.`);

const outDir = path.join(process.cwd(), 'out');
if (fs.existsSync(outDir)) {
  fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml, 'utf-8');
  console.log(`✅ Copiato sitemap.xml in out/sitemap.xml.`);
}

