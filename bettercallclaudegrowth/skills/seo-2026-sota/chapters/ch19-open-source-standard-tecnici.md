# Capitolo 19: Open source Google/Chrome e standard tecnici co-sponsorizzati

## Core Idea
Il Chrome team mantiene su GitHub la toolchain canonica per misurare i segnali tecnici che incidono sul ranking. Quattro standard pubblici (schema.org, sitemaps.org, RFC 9309, RFC 8288) sono il fondamento normativo. Insieme, sono il punto di rottura tra "SEO opinata" e "SEO misurabile".

## Frameworks Introdotti — repository chiave
- **web-vitals** (~8.500★, attivo): ~2KB, misura CWV in produzione sul browser reale. **Unica implementazione con parità di calcolo** con CrUX/PSI/GSC. Build `attribution` (+1,5KB) aggiunge l'elemento DOM responsabile dell'LCP, URL risorsa, sub-parts.
- **lighthouse** (~30.200★, v13.3.0): motore di audit, 100+ audit, codice di scoring.
- **lighthouse-ci** (~6.900★): orchestratore CI; lancia l'audit più volte (riduce varianza), applica assertion/budget che fanno fallire la PR su regressione; `@lhci/server` archivia storici e diff.
- **workbox** (~13.000★, Aurora team): Service Worker — strategie CacheFirst/NetworkFirst/StaleWhileRevalidate, expiration, background sync.
- **google/robotstxt** (C++): è LETTERALMENTE il parser che Googlebot usa in produzione. Open-sourciato 2019, riferimento normativo per RFC 9309. Risolve ogni ambiguità — la risposta è eseguibile, non opinabile. Wrapper: Java (ufficiale), Rust (Folyd), Python (usa `protego`, il più allineato).

## Reference Table — repository complementari (stato 2026)
| Repo | Stato | Sostituto |
|---|---|---|
| critters | Archiviato | `danielroe/beasties` (inline CSS critico) |
| squoosh CLI | Non mantenuta (app web sì) | `sharp` (Node) per CI |
| rendertron | **Archiviato (ott 2022)** | SSR nativo / prerendering build-time |
| wpp-research | Attivo | toolkit performance WordPress + query HTTP Archive |

## Frameworks Introdotti — standard tecnici
- **schema.org** (co-sponsor Google/Microsoft/Yahoo/Yandex dal 2011): ~823 Types, 1.529 Properties. Core (stabile) vs Pending (sperimentale, IRI può cambiare). **Deprecazione rich result da gen 2026** per Book Actions, Course Info, Claim Review, Estimated Salary, Learning Video, Special Announcement, Vehicle Listing (i tipi restano validi, non producono display).
- **sitemaps.org** (v0.9, invariato dal 2006): 50.000 URL / 50MB; `changefreq` e `priority` **ignorati da Google**.
- **RFC 9309 — Robots Exclusion Protocol** (IETF, set 2022; co-author Gary Illyes, Lizzi Sassman): crawler parsa almeno i primi 500 KiB; caching max 24h; su 5xx/timeout raccomandato disallow totale; matching = longest-match, tie risolto dall'ordine; wildcard `*` e `$` supportati.
- **RFC 8288 — Web Linking** (IETF, 2017): modello dei link via header HTTP `Link:`; registry IANA dei rel (canonical, alternate, preload, ugc, sponsored…). **Unica via per canonical su PDF/JSON/asset non-HTML.**
- **HTTP Archive** (co-Google): crawla ~16M siti/mese; Web Almanac annuale (16 capitoli incl. SEO); dataset BigQuery joinabile con CrUX.

## Anti-patterns
- **Tenere Rendertron in produzione**: dynamic rendering NON è raccomandato → migra a SSR.
- **Affidarsi a `urllib.robotparser` (Python)**: implementazione divergente da Google → usa `protego`.

## Key Takeaways
1. web-vitals.js è l'unica misura RUM con parità di calcolo ufficiale.
2. lighthouse-ci trasforma le metriche in gate di PR (budget/assertion).
3. google/robotstxt rende le dispute robots.txt risolvibili in modo eseguibile.
4. `changefreq`/`priority` sono ignorati: non perderci tempo.
5. Header `Link: rel="canonical"` per i file non-HTML.

## Connects To
- **Ch 16** (Exec): Lighthouse e CrUX (motori).
- **Ch 8/15**: robots.txt, sitemap, rendering.
- **Ch 13** (SEO): schema.org in pratica, FAQ rich result rimossi.
