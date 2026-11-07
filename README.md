# idraulicoromasangiovanni.it

Portale web locale ad altissima conversione per **Idraulico San Giovanni Roma** — Pronto Intervento Termoidraulico H24 nel Quartiere Appio-Latino / San Giovanni (Municipio VII e raccordo Municipio I Centro Storico).

## Caratteristiche Tecniche
- **Framework:** Next.js 15 (App Router, Static Export `out/`)
- **Stile:** Tailwind CSS — Design System "Light Theme" (Bianco ottico `#ffffff`, Slate `#0f172a`/`#334155`, Sky `#0284c7`, Ambra `#d97706`)
- **Infrastruttura Edge:** Cloudflare Workers (`wrangler.static.jsonc` + `worker/index.mjs`)
- **Recapito Telefonico Unico:** `06 8590 2384` (`tel:0685902384`)
- **Regola Aurea SEO 1:1:** `<title>` === `<h1>` su tutte le pagine con singola keyword pura
- **Profondità Editoriale:** Oltre 2.200 parole reali nel tag `<main>` per ciascuna delle 24 pagine pilastro (8 Servizi + 16 Micro-Zone) con overlap n-gram < 20%

## Comandi Principali
- `npm run dev` — Avvia il server di sviluppo
- `npm run build` — Esegue la build statica nella directory `out/`
- `npm run check-originality` — Verifica il conteggio parole (>2.200), la regola `<title>` === `<h1>` e la matrice di overlap n-gram (<20%)
- `npm run audit-seo` — Verifica assenza di riferimenti esclusi, presenza del numero `06 8590 2384`, Schema.org JSON-LD, tag Canonical e coerenza Sitemap
- `npm run generate-llms` — Genera `/public/llms.txt` e `/public/llms-full.txt`

## Autore
Sviluppato e mantenuto da **Marco D'Elia**.

