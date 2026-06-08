# Capitolo 7: Fondamenti SEO e come funziona la Ricerca Google

## Core Idea
SEO 2026 = helping search engines understand your content + helping users find you and choose to click. The fundamentals from 2008 still hold ("write for people, structure for the crawler, be honest"); what changes are the layers on top.

## Frameworks Introdotti
- **The 5 areas of a professional SEO program 2026**:
  1. Crawling and indexing (Googlebot + variants reach and index important pages, no crawl budget waste).
  2. Information architecture (URLs, directories, navigation, sitemaps, redirects).
  3. Content and topical authority (original, experiential, cluster-based — authority on a topic outweighs isolated ranking).
  4. SERP appearance (title, snippet, structured data, images/video; becoming an AIO/AI Mode source).
  5. Measurement and iteration (Search Console, GA4, CrUX, Rich Results Test, PSI).
- **The 3 phases of Search**:
  - **Crawling**: Googlebot discovers URLs via links, XML sitemaps, URL Inspection; respects robots.txt; reads raw HTML, then renders with headless Chromium (delayed).
  - **Indexing**: analysis of the rendered output (text, images, structured data, canonical); duplicate clustering, canonical selection.
  - **Serving**: candidate selection + ranking with hundreds of ranking systems (relevance, quality, Core Web Vitals, localization, structured data, and since 2024-25 generative models for AIO).

## Key Concepts
- **Googlebot and variants**: Googlebot-Image, -Video, -News, AdsBot-Google, Storebot-Google.
- **Bot authenticity verification**: reverse DNS (reverse + forward), NEVER block by User-Agent without verification (spoofable). Google publishes IP ranges in JSON.
- **Topical authority**: a ranking signal explicitly declared by Google.

## Code Examples
```bash
# Verify that an IP belongs to Googlebot
host 66.249.66.1            # → crawl-66-249-66-1.googlebot.com
host crawl-66-249-66-1.googlebot.com   # → 66.249.66.1 ✓
# Official JSON of IP ranges
curl -s https://developers.google.com/search/apis/ipranges/googlebot.json
```

## Mental Models
- "A search engine is also a user." Optimize for both at the same time.
- **Change one thing at a time, allow time, measure.** Those who rewrite their architecture every quarter rarely improve: noise outweighs the signal.

## Reference Table — Typical Timelines
| Action | Timeline | What to monitor |
|---|---|---|
| Title/snippet fix | Hours–days | GSC live test |
| New page | Hours–days | Page indexing |
| Canonicalization change | Days–weeks | GSC canonical URL |
| Migration with 301 | 1–3 months | Traffic, 404s, GSC |
| CWV improvement | 4–8 weeks | Page experience (CrUX 28d) |
| Cluster expansion | 3–6 months | Impressions by query |
| Recovery from Core Update | Months (next update) | Core update comparison |

## Key Takeaways
1. No guarantee of indexing: following Search Essentials increases the probability.
2. Wait at least a few weeks before evaluating the impact of a change.
3. Topical authority outperforms single-page ranking.

## Connects To
- **Ch 8**: how to verify indexing and manage crawling/rendering.
- **Ch 15** (Exec): Search Essentials and anti-spam policy regulations.
