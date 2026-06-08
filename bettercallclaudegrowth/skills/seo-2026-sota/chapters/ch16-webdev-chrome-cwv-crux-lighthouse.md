# Capitolo 16: web.dev e Chrome team — Core Web Vitals, CrUX, Lighthouse

## Core Idea
web.dev and developer.chrome.com are the domain of the Chrome DevRel team: they document how the web works (performance/quality). Core Web Vitals originate here and are then imported as ranking signals by Search Central.

## Frameworks Introduced
- **Search Central vs web.dev distinction**: the former documents how Search works; the latter how the web works. They overlap on CWV. **Data comes out on web.dev first**: the FID→INP transition was announced there months in advance (12 Mar 2024).
- **The 4 LCP sub-phases** (for diagnosis): TTFB → resource load delay → resource load duration → element render delay.
- **CLS — formal definition**: sum of impact fraction × distance fraction in the worst session window (starts with the first shift, 1s gap, max 5s); only shifts NOT caused by user interaction within 500ms are counted.
- **Lighthouse scoring**: log-normal curve calibrated on HTTP Archive (p25 sites = score 50; p8 = score 90). Runs behind DevTools, PageSpeed Insights, and Lighthouse CI.

## Key Concepts
- **CrUX (Chrome User Experience Report)**: real data from opted-in Chrome users; rolling 28 days; p75; aggregated by origin (always) and URL (if sufficient traffic). Released on the 2nd Tuesday of the month.
- **3 CrUX interfaces**: CrUX API (real-time, 150 QPM, free → monitoring); CrUX History API (25–40 weeks → trends); CrUX BigQuery (full SQL dataset, GCP billing → sector benchmarks; always use `materialized.*` tables).
- **Lighthouse SEO audits** (independent from actual ranking signals): meta description, unique title, descriptive link text, valid robots.txt/hreflang/canonical, viewport, font-size, tap targets ≥48×48px.

## Code Examples
```sql
-- CrUX BigQuery: ALWAYS use the materialized table for cost-efficient queries
SELECT * FROM `chrome-ux-report.materialized.metrics_summary`
-- avoid chrome-ux-report.all.YYYYMM non-materialized (can scan >100GB)
```

## Mental Models
- For a non-technical SEO dev, web.dev is the section that tends to get skipped — that's a mistake: it's where data that becomes ranking signals appears first.
- INP captures input delay + processing time + presentation delay (FID measured only input delay) → significantly more stringent.

## Reference Table — CrUX endpoints
| Interface | Data | Cost | Use |
|---|---|---|---|
| CrUX API | real-time, 150 QPM | free | dashboard, monitoring |
| CrUX History API | 25–40 weeks | free | trends |
| CrUX BigQuery | full dataset, SQL | GCP billing (1TB/month free) | mass benchmarking |

## Key Takeaways
1. Monitor the web.dev Blog (RSS) to anticipate future ranking signals.
2. CrUX = the field source; Lighthouse = the lab source. PSI combines both.
3. Use `materialized.*` in BigQuery to avoid burning through the free tier.
4. Lighthouse 13.x: metric weights unchanged since v10 (Feb 2023); TTI removed, 10% → CLS.

## Connects To
- **Ch 13** (SEO): practical optimization of LCP/INP/CLS.
- **Ch 17/18** (Exec): PageSpeed Insights (UI/API) and CrUX API.
- **Ch 19** (Exec): web-vitals.js, lighthouse, lighthouse-ci.
