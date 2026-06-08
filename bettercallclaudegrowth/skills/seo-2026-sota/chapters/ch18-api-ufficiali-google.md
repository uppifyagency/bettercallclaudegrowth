# Capitolo 18: API ufficiali Google

## Core Idea
APIs are where SEO stops being art and becomes engineering: automation, batch processing, integration into dashboards. Five APIs make up the core stack of a senior SEO developer.

## Frameworks Introdotti — lo stack core
- **Search Console API** (searchconsole.googleapis.com, v1 since 2015): resources sites, sitemaps, searchanalytics.query, urlInspection. OAuth 2.0 required (Service Account if added as owner). Quotas: per-user 20 QPS / 1,200 queries/min; per-project 100M queries/day; URL Inspection 2,000/day/project. Queries combining `page + query` are the most expensive.
- **Indexing API** (developers.google.com/search/apis/indexing-api): notifies create/update/delete; priority recrawl. **Officially only JobPosting/BroadcastEvent** (other types violate the ToS).
- **PageSpeed Insights API v5**: same data as pagespeed.web.dev → JSON with `lighthouseResult` (lab) + `loadingExperience` (CrUX field). Quota: 25,000/day, 240/min.
- **CrUX API + CrUX History API**: real-time field data and time series (see ch16).
- **CrUX BigQuery** (`chrome-ux-report.*`): per-origin, one table per month YYYYMM, GCP billing (free tier 1TB/month). Structure: `.all.YYYYMM` (global), `.country_XX.YYYYMM` (per country, e.g. `country_it`), `.materialized.metrics_summary` (pre-aggregated p75), `.materialized.country_summary`.
- **Knowledge Graph Search API**: searches entities (people/places/organizations/works), JSON-LD response. Status 2026: maintenance mode (Google recommends Enterprise Knowledge Graph for production, but the free API remains functional).

## Code Examples
```sql
-- CrUX BigQuery: CWV pass rate, cost controlled with materialized
SELECT origin, p75_lcp, p75_inp, p75_cls
FROM `chrome-ux-report.materialized.metrics_summary`
WHERE yyyymm = 202605  -- update to the current monthly table
```

## Reference Table — quote principali
| API | Quota |
|---|---|
| Search Console | 20 QPS/user, 1,200/min, 100M/day project |
| URL Inspection | 2,000/day/project, 600/min |
| PSI API v5 | 25,000/day, 240/min |
| CrUX API | 150 QPM |
| BigQuery free tier | 1 TB scanned/month |

## Anti-patterns
- **Using the Indexing API for generic pages**: it works but is unstable and risks penalties (ToS limited to JobPosting/BroadcastEvent).
- **Non-materialized BigQuery queries** on `.all.YYYYMM`: can scan >100GB. Always use `materialized.*`.
- **Extended date ranges** in Search Analytics: they consume a large share of the load quota.

## Key Takeaways
1. Everything you do in the UI is automatable via API — with quotas to respect.
2. CrUX BigQuery is the only way to benchmark industry segments at scale.
3. Search Console API provides up to 16 months of programmatic historical data.
4. Minimum stack for a senior SEO developer: Search Console + CrUX + PageSpeed Insights.

## Connects To
- **Ch 16** (Exec): CrUX and Lighthouse (the engines behind the APIs).
- **Ch 14** (SEO): GSC+GA4 triangulation and BigQuery export.
- **Ch 13** (SEO): IndexNow as a complementary push channel (non-Google).
