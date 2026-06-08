# Cheatsheet — SEO / GEO 2026

## Core Web Vitals Thresholds (p75, 28 days)
| Metric | Good | Needs Improvement | Poor |
|---|---|---|---|
| LCP | ≤2.5s | ≤4.0s | >4.0s |
| INP | ≤200ms | ≤500ms | >500ms |
| CLS | ≤0.1 | ≤0.25 | >0.25 |
*Only 47% of sites pass all three; 43% fail on INP.*

## SEO vs GEO — which lever carries more weight
| Lever | SEO | GEO |
|---|---|---|
| Unique content | High | High |
| Backlinks | High | Low–medium |
| Schema.org | Medium | High |
| Heading-as-question | Medium | High |
| Reddit/Wikipedia | Low | High |
| YouTube | Low | Very high |
| Core Web Vitals | Medium | Low |
| G2/Capterra | Low | High |
| Proprietary data | High | Very high |

## Source #1 per LLM model
| Model | Source #1 | Key lever |
|---|---|---|
| ChatGPT | Wikipedia (~8%) | G2/Capterra (3×) |
| Perplexity | Reddit (~47%) | Authentic Reddit |
| Gemini/AIO | YouTube (~30%) | YouTube + schema + recency |
| Claude | Technical docs | GitHub, papers, Markdown |

## Verified numbers (NOT the myths)
- AI vs organic conversion: **4.4× average** (not 17×); 9–11× ChatGPT B2B; +31% ecommerce.
- ChatGPT/top-10 Google overlap: **8–12%** (the "63%" figure is inverted).
- Zero-click: 58.5% US / 77% mobile / 83% with AIO.
- CTR pos.#1 with AIO: −58/−61%; +35% if cited INSIDE the AIO.
- 93.8% of AIO sources come from beyond the first organic page.

## 80/20 GEO Rule (the 20% that drives 80%)
1. 3–5 substantial BoFu listicles. 2. G2+Capterra, 20–30 reviews (4.3+). 3. 3–5 long-form YouTube videos. 4. 2–3 authentic subreddits. 5. Schema Article+Author+Organization.

## URLs — 2026 rules
<75 chars · hyphen `-` (never `_`) · lowercase ASCII · stable (301 if you change) · ≤2 parameters · no dates in evergreen.

## Title / Meta
Title 50–60 chars, keyword on the left, key info in the first 50 chars (rewritten 60–80% of the time). Meta 150–160 chars, unique, fallback (snippet is often dynamic).

## Blocking content — NEVER Disallow + noindex together
1. noindex (page remains crawlable) → 2. wait for removal from the index → 3. then Disallow for crawl budget.
| Technique | Effect |
|---|---|
| robots.txt Disallow | blocks crawl (not indexing) |
| meta noindex | excludes from the index |
| X-Robots-Tag | noindex for non-HTML |
| 410/404 | permanent removal |

## Technical limits
Sitemap: 50,000 URLs / 50 MB. SQRG: 182 pages. Schema.org: ~823 Types. GSC: 16 months history, 1,000 rows/UI, ~10–12 URL Inspections/day (2,000 via API). `changefreq`/`priority` ignored by Google.

## Source stack by role (what to monitor)
- **Senior Dev SEO**: Search Central Blog + web.dev + Chrome Dev Blog (RSS); Search Off the Record; Mueller(Bluesky)/Illyes/Splitt/Pollard; web-vitals/lighthouse-ci/robotstxt; GSC/CrUX/PSI APIs.
- **Content/Marketing**: Search Central Blog, SQRG (E-E-A-T), AI Optimization Guide (May 2026), Web Almanac SEO.
- **Founder/CEO**: Search Central Blog, SQRG (once), Web Almanac, Search Status Dashboard.

## The 5 structural shifts of 2026
1. Clicks matter (NavBoost/Glue confirmed). 2. Google's voice deplatformed (5+ channels). 3. "AI Search is still SEO" (no llms.txt/chunking/AI markup). 4. Non-commodity content (the E of Experience). 5. CWV = minimum requirement to be an AIO source.

## Essential APIs/tools
PageSpeed Insights · Rich Results Test · Schema Markup Validator · Search Console (+API) · CrUX API/BigQuery (use `materialized.*`) · IndexNow (non-Google) · Indexing API (JobPosting/BroadcastEvent only).
