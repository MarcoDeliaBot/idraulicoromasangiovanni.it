# Changelog

Tutte le modifiche rilevanti a questo progetto saranno documentate in questo file.
Il formato è basato su [Keep a Changelog](https://keepachangelog.com/it/1.0.0/),
e questo progetto aderisce al [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-11-07
### Added
- Inizializzazione del portale **idraulicoromasangiovanni.it** con architettura Next.js 15 (App Router, `output: 'export'`), TypeScript e Tailwind CSS.
- Configurazione del Design System "Light Theme" (`#ffffff`, `#f8fafc`, Slate `#0f172a`/`#334155`, Ciano/Sky `#0284c7`/`#0369a1`, Ambra `#d97706`/`#f59e0b`).
- Implementazione del Cloudflare Worker (`worker/index.mjs` e `wrangler.static.jsonc`) con redirect 301 da `www` ad apex domain, enforcement trailing slash e header di sicurezza (HSTS, X-Content-Type-Options, Referrer-Policy, X-Frame-Options).
- Creazione della Home Page (`/` — Title & H1: `Idraulico San Giovanni`) con inquadramento idrogeologico dell'antico alveo dell'Acqua Mariana (Marrana), dinamica delle pressioni Acea ATO2 (25-48 m s.l.m.), stratificazione edilizia umbertina e anni '30-'50, durezza calcarea 33-36°F, tariffario trasparente e FAQ tecniche.
- Realizzazione delle 8 pagine pilastro dei Servizi (`/servizi/[slug]/`) con oltre 2.200 parole ciascuna nel tag `<main>`, identità 1:1 `<title>` === `<h1>` e protocolli ingegneristici completi:
  1. `Ricerca Perdite Acqua San Giovanni`
  2. `Disotturazione WC Scarichi San Giovanni`
  3. `Riparazione Cassette Pucci Geberit San Giovanni`
  4. `Assistenza Caldaie San Giovanni`
  5. `Sostituzione Scaldabagni San Giovanni`
  6. `Riparazione Rubinetteria Sanitari San Giovanni`
  7. `Pronto Intervento Allagamenti San Giovanni`
  8. `Riduttori Pressione Autoclavi San Giovanni`
- Realizzazione delle 16 pagine pilastro delle Micro-Zone (`/zone/[slug]/`) con oltre 2.200 parole ciascuna nel tag `<main>`, identità 1:1 `<title>` === `<h1>`, toponomastica reale, quote altimetriche, pressioni statiche/dinamiche e casi studio:
  1. `Idraulico Piazza dei Re di Roma`
  2. `Idraulico San Giovanni in Laterano`
  3. `Idraulico Via Appia Nuova`
  4. `Idraulico Piazza Tuscolo`
  5. `Idraulico Via Magna Grecia`
  6. `Idraulico Porta Metronia`
  7. `Idraulico Porta San Giovanni`
  8. `Idraulico Villa Fiorelli`
  9. `Idraulico Via Taranto`
  10. `Idraulico Via La Spezia`
  11. `Idraulico Piazza Asti`
  12. `Idraulico Via Sannio Largo Brindisi`
  13. `Idraulico Piazza Zama Via Latina`
  14. `Idraulico Porta Maggiore Raccordo San Giovanni`
  15. `Idraulico Piazza Epiro Porta Latina`
  16. `Idraulico Manzoni Viale Carlo Felice`
- Creazione delle pagine indice ed accessorie: `/servizi/`, `/zone/`, `/chi-siamo/`, `/contatti/`, `/preventivo-gratuito/`, `/privacy-policy/`, `/cookie-policy/`, `/grazie/`.
- Integrazione dati strutturati Schema.org JSON-LD (`Plumber`, `EmergencyService`, `FAQPage`, `BreadcrumbList`) con coordinate geografiche di Roma San Giovanni (`41.886`, `12.508`) e telefono `06 8590 2384`.
- Creazione della suite di verifica e generazione automatica in `scripts/`: `check-originality.mjs`, `audit-seo.mjs`, `generate-llms.mjs`, `generate-sitemap.mjs`.

---
*Autore: Marco D'Elia*

