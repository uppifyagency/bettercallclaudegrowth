# Cheatsheet — SEO / GEO 2026

## Soglie Core Web Vitals (p75, 28gg)
| Metrica | Buono | Migliorare | Scarso |
|---|---|---|---|
| LCP | ≤2,5s | ≤4,0s | >4,0s |
| INP | ≤200ms | ≤500ms | >500ms |
| CLS | ≤0,1 | ≤0,25 | >0,25 |
*Solo 47% dei siti passa tutti e tre; 43% fallisce su INP.*

## SEO vs GEO — quale leva pesa
| Leva | SEO | GEO |
|---|---|---|
| Contenuto unico | Alto | Alto |
| Backlink | Alto | Basso-medio |
| Schema.org | Medio | Alto |
| Heading-as-question | Medio | Alto |
| Reddit/Wikipedia | Bassa | Alta |
| YouTube | Bassa | Molto alta |
| Core Web Vitals | Medio | Basso |
| G2/Capterra | Bassa | Alta |
| Dati propri | Alta | Molto alta |

## Fonte #1 per modello LLM
| Modello | Fonte #1 | Leva chiave |
|---|---|---|
| ChatGPT | Wikipedia (~8%) | G2/Capterra (3×) |
| Perplexity | Reddit (~47%) | Reddit autentico |
| Gemini/AIO | YouTube (~30%) | YouTube + schema + recency |
| Claude | Docs tecniche | GitHub, paper, Markdown |

## Numeri verificati (NON i miti)
- Conversione AI vs organico: **4,4× medio** (non 17×); 9-11× ChatGPT B2B; +31% ecommerce.
- Overlap ChatGPT/top-10 Google: **8-12%** (il "63%" è invertito).
- Zero-click: 58,5% US / 77% mobile / 83% con AIO.
- CTR pos.#1 con AIO: −58/−61%; +35% se citato DENTRO l'AIO.
- 93,8% delle fonti AIO viene da oltre la prima pagina organica.

## Regola 80/20 GEO (il 20% che rende l'80%)
1. 3-5 listicoli BoFu sostanziali. 2. G2+Capterra, 20-30 recensioni (4,3+). 3. 3-5 video YouTube long-form. 4. 2-3 subreddit autentici. 5. Schema Article+Author+Organization.

## URL — regole 2026
<75 char · trattino `-` (mai `_`) · lowercase ASCII · stabili (301 se cambi) · ≤2 parametri · no date in evergreen.

## Title / Meta
Title 50-60 char, keyword a sinistra, info nei primi 50 char (riscritto 60-80% dei casi). Meta 150-160 char, unica, fallback (snippet spesso dinamico).

## Bloccare contenuti — MAI Disallow + noindex insieme
1. noindex (pagina scansionabile) → 2. attendi uscita dall'indice → 3. poi Disallow per crawl budget.
| Tecnica | Effetto |
|---|---|
| robots.txt Disallow | blocca crawl (non index) |
| meta noindex | esclude dall'indice |
| X-Robots-Tag | noindex per non-HTML |
| 410/404 | rimozione duratura |

## Limiti tecnici
Sitemap: 50.000 URL / 50MB. SQRG: 182 pagine. Schema.org: ~823 Types. GSC: 16 mesi storico, 1.000 righe/UI, ~10-12 URL Inspection/giorno (2.000 via API). `changefreq`/`priority` ignorati da Google.

## Stack fonti per ruolo (cosa monitorare)
- **Dev SEO senior**: Search Central Blog + web.dev + Chrome Dev Blog (RSS); Search Off the Record; Mueller(Bluesky)/Illyes/Splitt/Pollard; web-vitals/lighthouse-ci/robotstxt; API GSC/CrUX/PSI.
- **Content/Marketing**: Search Central Blog, SQRG (E-E-A-T), AI Optimization Guide (mag 2026), Web Almanac SEO.
- **Founder/CEO**: Search Central Blog, SQRG (una tantum), Web Almanac, Search Status Dashboard.

## I 5 cambi strutturali 2026
1. I click contano (NavBoost/Glue confermati). 2. Voce Google deplatformizzata (5+ canali). 3. "AI Search è ancora SEO" (no llms.txt/chunking/markup AI). 4. Contenuto non-commodity (la E di Experience). 5. CWV = condizione minima per essere fonte AIO.

## API/tool essenziali
PageSpeed Insights · Rich Results Test · Schema Markup Validator · Search Console (+API) · CrUX API/BigQuery (usa `materialized.*`) · IndexNow (non-Google) · Indexing API (solo JobPosting/BroadcastEvent).
