# Capitolo 15: Google Search Central — la documentazione normativa

## Core Idea
Search Central (developers.google.com/search) is the primary hub for official Google SEO documentation. Distinguish between what is normative (Search Essentials, anti-spam) and what is merely recommended.

## Frameworks Introdotti
- **Source authority hierarchy**: Official Google (normative weight) > Semi-official (SQRG, personal Advocate accounts: policy/culture, not ranking signals) > Exposed internal documentation (antitrust, leaks: real mechanics, requires cross-checking).
- **SEO Starter Guide**: the official baseline (since 2008; last revised Feb 2024, which added the myths page). Annual re-reading for senior practitioners — it is the calibration point for what Google declares best practice vs. irrelevant.
- **Search Essentials** (formerly Webmaster Guidelines): three blocks — technical requirements (normative: without these, the page won't appear), anti-spam policies (legal: violation → manual action), best practices (recommended).
- **Debug Search Traffic Drops — official decision tree**: sudden + entire site → technical; sudden + sections → indexing; gradual → algorithmic (Search Status Dashboard); linear with competitor/trends → seasonality; with Manual Action → anti-spam.

## Reference Table — Active anti-spam policies (May 2026)
| Policy | Notes |
|---|---|
| Cloaking, Doorways, Hidden text, Keyword stuffing | Legacy |
| Link spam, Machine-generated traffic, Malware, Sneaky redirects | Legacy |
| Scraped content, Thin affiliate, User-generated spam, Misleading functionality | Legacy |
| **Expired domain abuse** | Added Mar 2024 |
| **Scaled content abuse** | Added Mar 2024 |
| **Site reputation abuse** (parasite SEO) | Updated Nov 2024 |
| **Back button hijacking** | Added Apr 2026 |

## Key Concepts
- **robots.txt**: controls crawling NOT indexing; a blocked URL can still appear in SERPs without a snippet if it is linked; to exclude from index, use noindex or password protection.
- **Sitemap**: 50,000 URLs / 50 MB per file; UTF-8; XML/RSS/Atom/TXT formats; Image/Video/News/hreflang extensions.
- **JavaScript SEO Basics — 3 rules**: links via `<a href>` (never pure onclick); noindex cannot be overridden via JS; JSON-LD server-side.
- **AI Features page** (active since May 2026): no separate best practices; control directives = nosnippet, max-snippet, noindex, Google-Extended (opt-out training).

## Key Takeaways
1. The Starter Guide is the official calibration point: re-read it every year.
2. The anti-spam policy pages are the reference document for legal/compliance teams.
3. Crawling and Indexing is the most-consulted hub by SEO developers.
4. Search Central Blog (RSS) is the normative feed: every core update comes through here first.
5. Consult the Search Status Dashboard before diagnosing any traffic drop.

## Connects To
- **Ch 7/8** (SEO): fundamentals and crawling/indexing in practice.
- **Ch 20** (Exec): SQRG, antitrust, leaks — the "middle ground".
- **Ch 14** (SEO): debugging drops (operational version of the official decision tree).
