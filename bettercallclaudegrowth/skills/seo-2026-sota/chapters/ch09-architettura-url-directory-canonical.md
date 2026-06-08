# Capitolo 9: Architettura del sito — URL, directory tematiche, canonicalizzazione

## Core Idea
Organizing the site logically (descriptive URLs, topic-based directories, a single canonical URL per piece of content) helps crawlers and users alike. This becomes critical on large sites or during redesigns.

## Frameworks Introdotti
- **Descriptive URLs — 2026 rules**: <75 characters; hyphen `-` as separator (never `_`); lowercase ASCII/numbers/hyphens/slashes only; stable URLs (if you change them, use 301); minimize parameters (3+ → duplication risk); no dates in evergreen URLs.
- **Hub & spoke (topical clusters)**: pillar → spoke → sub-spoke. Google recognizes "a site's authority on a topic" as a ranking signal. Directories help Google understand the update frequency per section.
- **Canonicalization strategies** (ranked by signal strength):
  1. **301 redirect** — the strongest; use when variants don't need to be kept.
  2. **rel="canonical"** — standard when you must keep variants (e.g., UTM parameters).
  3. **Hreflang** — localized versions (clarifies relationships, does not canonicalize).
  4. **XML Sitemap** — canonical URLs only (weak signal).
  5. **Internal link consistency** — always link to the canonical version.

## Code Examples
```html
<!-- Self-referential canonical (recommended on every page) -->
<link rel="canonical" href="https://www.example.com/prodotti/scarpe-running">
```
```http
# Canonical via HTTP header (for PDF, JSON)
Link: <https://www.example.com/manuale.pdf>; rel="canonical"
```
```
/seo/                                  ← hub (pillar)
├─ /seo/keyword-research/             ← spoke
├─ /seo/technical-seo/                ← spoke
│   ├─ /seo/technical-seo/core-web-vitals/   ← sub-spoke
│   └─ /seo/technical-seo/structured-data/   ← sub-spoke
└─ /seo/ai-overviews/                 ← spoke
```

## Key Concepts
- **Typical causes of duplication**: HTTP/HTTPS or www/non-www, tracking parameters (utm, gclid), sorting/filtering/pagination, print-friendly versions, trailing slash, uppercase/lowercase variations.
- **rel="canonical" is a hint, not a directive**: Google can ignore it if it conflicts with redirects/hreflang/sitemap/internal linking. Verify which canonical Google has chosen in GSC → URL Inspection.

## Anti-patterns
- **"Penalty" for duplicates**: there is no manual action for internal duplicates — it is inefficient (wasted crawl budget, signal dilution) but not penalized. Stealing third-party content is different (may trigger anti-spam action).
- Canonical inconsistent with other signals → Google selects a different canonical.

## SOTA 2026 — Topical authority > domain authority
Studies on the Core Update March 2026: sites that "own" a cluster (full coverage, depth, dense internal linking) outrank larger, more generalist sites on niche queries. What matters is semantic coherence + quality of internal links pointing to the pillar, not the number of backlinks.

## Key Takeaways
1. Self-referential canonical on every page as a baseline.
2. Subdirectories consolidate authority; subdomains for semantically distinct entities.
3. Thematic directories signal to Google the update frequency for each section.

## Connects To
- **Ch 6** (GEO): GEO-friendly clusters (narrower scope).
- **Ch 13/14**: canonical chosen by Google in Search Console.
- **Ch 19** (Exec): RFC 8288 Web Linking (Link: header for canonical).
