# Capitolo 14: Search Console, debugging dei cali e triangolazione GSC+GA4+Trends

## Core Idea
Search Console measures what Google does with your pages; GA4 measures what users do after the click; Google Trends provides market context. Triangulation bridges visibility metrics to business metrics.

## Frameworks Introdotti
- **The 5 weekly GSC reports** (see table).
- **Traffic drop debugging (systematic procedure)**: (1) source of the drop (Performance: search type/country/device — general or concentrated?); (2) timing coincidences (Core Update? sitemap? deploy? CDN?) cross-check Search Status Dashboard; (3) technical (dropped pages, 5xx, robots.txt, live test); (4) algorithmic (gradual = Core Update, sudden = technical/manual); (5) manual action; (6) seasonality (Google Trends); (7) competition.
- **Triangulation**: link GSC↔GA4 (Admin → Search Console Links) → configure events/conversions in GA4 → monitor strategic topics in Trends (5 years) to separate growth from seasonality.

## Code Examples
```javascript
// GA4 — proxy for clicks from AI Mode (parameter &udm=14)
if (new URLSearchParams(location.search).get('udm') === '14') {
  gtag('event', 'ai_mode_click', { page_path: location.pathname, page_referrer: document.referrer });
}
```

## Reference Tables
| GSC Report | What it shows | When |
|---|---|---|
| Performance → Search results | Clicks/impressions/CTR/position | Every week, period over period |
| Page indexing | Indexed vs excluded + reasons | After deploys, every month |
| Page experience | Real CWV (CrUX), HTTPS, mobile | Every 2 weeks |
| Rich results | Errors/validity of structured data | After schema changes |
| Manual actions / Security | Penalties | Email alert — do not wait |

| Query research tool | What it's for |
|---|---|
| GSC Performance | Real queries you appear for |
| Google Trends | Seasonality, related queries |
| People Also Ask | Related questions (used by AI Overviews) |
| Knowledge Graph API | Recognized entities (brand disambiguation) |

## Key Concepts
- **Property verification**: DNS TXT is the most robust (does not break during redesigns).
- **Limits**: max 1,000 rows exported via UI; 16 months of history; ~10–12 URLs/day via URL Inspection in UI (2,000/day via API).
- **BigQuery export** (free, daily raw data): analyses the UI does not allow — anomalous CTR, temporal decay, branded/non-branded, AIO attribution via `&udm=14`.

## Anti-patterns
- **Acting on impulse at a drop**: follow the 7 steps, do not rewrite everything.
- **Evaluating growth without context**: +10% can be a failure if the market grew 30% (use Trends).
- **Combining Disallow + noindex** (see ch08) often surfaces in drops caused by accidental de-indexation.

## Key Takeaways
1. Check the Search Status Dashboard BEFORE diagnosing a drop: it is often on Google's side.
2. Without conversion events in GA4, you have no business metrics.
3. Set up email alerts for Manual Actions.
4. Gradual drop → algorithmic; sudden drop → technical or manual.

## Connects To
- **Ch 17/18** (Exec): Search Console UI/API, 2026 updates, quotas.
- **Ch 13** (SEO): Page experience report (CWV).
- **Ch 20** (Exec): official decision tree "Debug Search Traffic Drops".
