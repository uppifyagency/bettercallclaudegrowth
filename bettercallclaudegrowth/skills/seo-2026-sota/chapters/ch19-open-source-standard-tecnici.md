# Chapter 19: Google/Chrome Open Source and Co-Sponsored Technical Standards

## Core Idea
The Chrome team maintains on GitHub the canonical toolchain for measuring the technical signals that affect ranking. Four public standards (schema.org, sitemaps.org, RFC 9309, RFC 8288) form the normative foundation. Together, they mark the dividing line between "opinionated SEO" and "measurable SEO".

## Frameworks Introduced — key repositories
- **web-vitals** (~8,500★, active): ~2KB, measures CWV in production on real browsers. **The only implementation with calculation parity** with CrUX/PSI/GSC. The `attribution` build (+1.5KB) adds the DOM element responsible for LCP, resource URL, and sub-parts.
- **lighthouse** (~30,200★, v13.3.0): audit engine, 100+ audits, scoring code.
- **lighthouse-ci** (~6,900★): CI orchestrator; runs the audit multiple times (reduces variance), applies assertions/budgets that fail the PR on regression; `@lhci/server` archives history and diffs.
- **workbox** (~13,000★, Aurora team): Service Worker — CacheFirst/NetworkFirst/StaleWhileRevalidate strategies, expiration, background sync.
- **google/robotstxt** (C++): this is LITERALLY the parser that Googlebot uses in production. Open-sourced in 2019, normative reference for RFC 9309. Resolves every ambiguity — the answer is executable, not debatable. Wrappers: Java (official), Rust (Folyd), Python (use `protego`, the most aligned).

## Reference Table — complementary repositories (2026 status)
| Repo | Status | Replacement |
|---|---|---|
| critters | Archived | `danielroe/beasties` (inline critical CSS) |
| squoosh CLI | Unmaintained (web app still active) | `sharp` (Node) for CI |
| rendertron | **Archived (Oct 2022)** | Native SSR / build-time prerendering |
| wpp-research | Active | WordPress performance toolkit + HTTP Archive queries |

## Frameworks Introduced — technical standards
- **schema.org** (co-sponsored by Google/Microsoft/Yahoo/Yandex since 2011): ~823 Types, 1,529 Properties. Core (stable) vs Pending (experimental, IRI may change). **Rich result deprecation from Jan 2026** for Book Actions, Course Info, Claim Review, Estimated Salary, Learning Video, Special Announcement, Vehicle Listing (types remain valid, no longer produce display).
- **sitemaps.org** (v0.9, unchanged since 2006): 50,000 URLs / 50MB; `changefreq` and `priority` **ignored by Google**.
- **RFC 9309 — Robots Exclusion Protocol** (IETF, Sep 2022; co-authored by Gary Illyes, Lizzi Sassman): crawler parses at least the first 500 KiB; caching max 24h; on 5xx/timeout total disallow is recommended; matching = longest-match, ties resolved by order; wildcards `*` and `$` supported.
- **RFC 8288 — Web Linking** (IETF, 2017): link model via HTTP `Link:` header; IANA registry of rel values (canonical, alternate, preload, ugc, sponsored…). **The only way to specify canonical on PDFs/JSON/non-HTML assets.**
- **HTTP Archive** (co-Google): crawls ~16M sites/month; annual Web Almanac (16 chapters incl. SEO); BigQuery dataset joinable with CrUX.

## Anti-patterns
- **Keeping Rendertron in production**: dynamic rendering is NOT recommended → migrate to SSR.
- **Relying on `urllib.robotparser` (Python)**: implementation diverges from Google → use `protego`.

## Key Takeaways
1. web-vitals.js is the only RUM measurement with official calculation parity.
2. lighthouse-ci turns metrics into PR gates (budgets/assertions).
3. google/robotstxt makes robots.txt disputes resolvable in an executable way.
4. `changefreq`/`priority` are ignored: don't waste time on them.
5. `Link: rel="canonical"` header for non-HTML files.

## Connects To
- **Ch 16** (Exec): Lighthouse and CrUX (engines).
- **Ch 8/15**: robots.txt, sitemap, rendering.
- **Ch 13** (SEO): schema.org in practice, FAQ rich results removed.
