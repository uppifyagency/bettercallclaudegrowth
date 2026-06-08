# Capitolo 18: API ufficiali Google

## Core Idea
Le API sono dove la SEO smette di essere arte e diventa ingegneria: automation, batch processing, integrazione in dashboard. Cinque API costituiscono lo stack core del dev SEO senior.

## Frameworks Introdotti — lo stack core
- **Search Console API** (searchconsole.googleapis.com, v1 dal 2015): risorse sites, sitemaps, searchanalytics.query, urlInspection. OAuth 2.0 obbligatorio (Service Account se aggiunto come owner). Quote: per-user 20 QPS / 1.200 query/min; per-project 100M query/giorno; URL Inspection 2.000/giorno/progetto. Query `page + query` insieme sono le più costose.
- **Indexing API** (developers.google.com/search/apis/indexing-api): notifica create/update/delete; recrawl prioritario. **Ufficialmente solo JobPosting/BroadcastEvent** (altri tipi violano i ToS).
- **PageSpeed Insights API v5**: stessi dati di pagespeed.web.dev → JSON con `lighthouseResult` (lab) + `loadingExperience` (CrUX field). Quote: 25.000/giorno, 240/min.
- **CrUX API + CrUX History API**: field data real-time e serie temporali (vedi ch16).
- **CrUX BigQuery** (`chrome-ux-report.*`): per-origin, una tabella per mese YYYYMM, billing GCP (free tier 1TB/mese). Struttura: `.all.YYYYMM` (globale), `.country_XX.YYYYMM` (per paese, es. `country_it`), `.materialized.metrics_summary` (p75 pre-aggregato), `.materialized.country_summary`.
- **Knowledge Graph Search API**: cerca entità (persone/luoghi/org/opere), risposta JSON-LD. Stato 2026: maintenance mode (Google raccomanda Enterprise Knowledge Graph per produzione, ma l'API gratuita resta funzionante).

## Code Examples
```sql
-- CrUX BigQuery: pass rate CWV, costo controllato con materialized
SELECT origin, p75_lcp, p75_inp, p75_cls
FROM `chrome-ux-report.materialized.metrics_summary`
WHERE yyyymm = 202605  -- aggiorna alla tabella mensile corrente
```

## Reference Table — quote principali
| API | Quota |
|---|---|
| Search Console | 20 QPS/user, 1.200/min, 100M/giorno project |
| URL Inspection | 2.000/giorno/project, 600/min |
| PSI API v5 | 25.000/giorno, 240/min |
| CrUX API | 150 QPM |
| BigQuery free tier | 1 TB scansionato/mese |

## Anti-patterns
- **Usare l'Indexing API per pagine generiche**: funziona ma instabile e a rischio sanzioni (ToS limitati a JobPosting/BroadcastEvent).
- **Query BigQuery non materializzata** su `.all.YYYYMM`: può scansionare >100GB. Usa sempre `materialized.*`.
- **Date range estesi** in Search Analytics: consumano molta load quota.

## Key Takeaways
1. Tutto ciò che fai in UI è automatizzabile via API — con quote da rispettare.
2. CrUX BigQuery è il solo modo per benchmark settoriali su scala.
3. Search Console API offre fino a 16 mesi di storico programmatico.
4. Stack minimo dev SEO senior: Search Console + CrUX + PageSpeed Insights.

## Connects To
- **Ch 16** (Exec): CrUX e Lighthouse (motori dietro le API).
- **Ch 14** (SEO): triangolazione GSC+GA4 e BigQuery export.
- **Ch 13** (SEO): IndexNow come canale push complementare (non-Google).
