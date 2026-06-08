# Capitolo 8: Far trovare i contenuti — indicizzazione, rendering, blocco

## Core Idea
Before taking action, verify whether you are already in the index. Then make sure Google sees the page the same way the user does (resources + rendering) and use the right tools to exclude what should not appear.

## Frameworks Introdotti
- **Index verification**: `site:yoursite.com` operator. If you see results, you are in the index. If not, check: accessible to Googlebot, 200 OK, no robots.txt block, no meta noindex, valid HTML, declared language.
- **Page discovery**: primarily via links (external + internal) + XML sitemap. Sitemap recommended above 500 pages, frequently changing content, poor internal connectivity. Limits: 50,000 URLs / 50 MB per file → beyond that, use a sitemap index.
- **JavaScript SEO — the three-rendering rule**: SSR, SSG, CSR (see table). Over 95% of sites use JS; Google supports it but with asynchronous, delayed rendering at a budget.
- **The 3 blocking techniques** (and when to use them): robots.txt (controls crawling, not indexing), meta robots noindex (excludes from the index, page remains crawlable), X-Robots-Tag HTTP (for non-HTML files such as PDFs).

## Code Examples
```apache
# robots.txt e-commerce
User-agent: *
Disallow: /carrello/
Disallow: /checkout/
Disallow: /*?sort=
Allow: /search?q=*$
Sitemap: https://www.example.com/sitemap_index.xml
```
```html
<meta name="robots" content="noindex,follow">
<meta name="googlebot-news" content="noindex">
```
```nginx
# X-Robots-Tag to exclude PDFs (Nginx)
location ~* \.(pdf|doc|docx)$ { add_header X-Robots-Tag "noindex, nofollow"; }
```

## Anti-patterns
- **CRITICAL ERROR — do not combine Disallow + noindex**: if the URL is in Disallow, Googlebot never reads it and never sees the noindex → the page may remain in the index "without a description". Correct procedure: noindex first (page must be crawlable), then — after the page has been removed from the index — add Disallow to save crawl budget.
- **Content that only appears after user interaction** ("Load more"): Googlebot does not click.
- **Client-side routing with hash (#/page)**: use the History API (pushState) and real routes.

## Reference Table — Rendering Strategies
| Strategy | How | When |
|---|---|---|
| SSR | Server generates HTML per request | Dynamic content, e-commerce, news |
| SSG | HTML pre-generated at build time, served from CDN | Blog, marketing, docs |
| CSR | Empty HTML, JS mounts in the browser | Not recommended for SEO: private dashboards only |
| ISR | Static cache + on-demand regeneration | Large catalogs, partial updates |
| Islands / partial hydration | Static HTML + interactive islands | Best CRP/SEO trade-off in 2026 |

| Blocking technique | Effect | When |
|---|---|---|
| robots.txt Disallow | Blocks crawling (not indexing) | Save crawl budget |
| Meta noindex | Excludes from the index | Duplicates, filters, user area |
| X-Robots-Tag | noindex for non-HTML files | PDFs, images, JSON |
| Password | Blocks crawl + index | Staging, drafts, restricted |
| 410/404 | Permanent removal | Deleted pages |

## Key Takeaways
1. The URL Inspection tool in GSC shows how Google sees and renders the page (live test).
2. Googlebot typically crawls from the USA: make geo-localised content accessible.
3. Do not block CSS/JS/fonts required for rendering.

## Connects To
- **Ch 9**: canonicalisation of duplicates.
- **Ch 13** (SEO): advanced JavaScript SEO (Web Components, RSC, streaming).
- **Ch 16/19** (Exec): rendering pipeline, google/robotstxt parser, RFC 9309.
