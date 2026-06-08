# Capitolo 16: web.dev e Chrome team — Core Web Vitals, CrUX, Lighthouse

## Core Idea
web.dev e developer.chrome.com sono il dominio del team Chrome DevRel: documentano come funziona il web (performance/qualità). I Core Web Vitals nascono qui e vengono poi importati come segnali di ranking da Search Central.

## Frameworks Introdotti
- **Distinzione Search Central vs web.dev**: il primo documenta come funziona Search; il secondo come funziona il web. Si sovrappongono sui CWV. **I dati escono prima su web.dev**: la transizione FID→INP fu annunciata lì mesi prima (12 mar 2024).
- **Le 4 sotto-fasi di LCP** (per diagnosticare): TTFB → resource load delay → resource load duration → element render delay.
- **CLS — definizione formale**: somma di impact fraction × distance fraction nella session window peggiore (inizia col primo shift, gap 1s, max 5s); contano solo gli shift NON da interazione utente entro 500ms.
- **Lighthouse scoring**: log-normal curve calibrata su HTTP Archive (p25 siti = score 50; p8 = score 90). Gira dietro DevTools, PageSpeed Insights e Lighthouse CI.

## Key Concepts
- **CrUX (Chrome User Experience Report)**: dati reali da utenti Chrome opted-in; rolling 28 giorni; p75; aggregazione per origin (sempre) e URL (se traffico sufficiente). Release il 2° martedì del mese.
- **3 interfacce CrUX**: CrUX API (real-time, 150 QPM, gratis → monitoring); CrUX History API (25-40 settimane → trend); CrUX BigQuery (dataset completo SQL, billing GCP → benchmark settoriali; usa sempre tabelle `materialized.*`).
- **Lighthouse SEO audits** (indipendenti dai ranking signal reali): meta description, title univoco, link text descrittivo, robots.txt/hreflang/canonical validi, viewport, font-size, tap target ≥48×48px.

## Code Examples
```sql
-- CrUX BigQuery: usa SEMPRE la tabella materialized per query economiche
SELECT * FROM `chrome-ux-report.materialized.metrics_summary`
-- evita chrome-ux-report.all.YYYYMM non materializzata (può scansionare >100GB)
```

## Mental Models
- Per un dev SEO non-tech, web.dev è la sezione che si tende a saltare — errore: è dove escono per primi i dati che diventano segnali di ranking.
- INP cattura input delay + processing time + presentation delay (FID misurava solo l'input delay) → significativamente più severo.

## Reference Table — CrUX endpoints
| Interfaccia | Dati | Costo | Uso |
|---|---|---|---|
| CrUX API | real-time, 150 QPM | gratis | dashboard, monitoring |
| CrUX History API | 25-40 settimane | gratis | trend |
| CrUX BigQuery | dataset completo, SQL | billing GCP (1TB/mese free) | benchmark di massa |

## Key Takeaways
1. Monitora web.dev Blog (RSS) per anticipare i futuri segnali di ranking.
2. CrUX = la fonte field; Lighthouse = la fonte lab. PSI combina entrambe.
3. Usa `materialized.*` in BigQuery per non bruciare il free tier.
4. Lighthouse 13.x: pesi metriche invariati da v10 (feb 2023); TTI rimosso, 10% → CLS.

## Connects To
- **Ch 13** (SEO): ottimizzazione pratica di LCP/INP/CLS.
- **Ch 17/18** (Exec): PageSpeed Insights (UI/API) e CrUX API.
- **Ch 19** (Exec): web-vitals.js, lighthouse, lighthouse-ci.
