# Capitolo 10: Creare contenuti utili e affidabili, link interni ed esterni

## Core Idea
Creating interesting and useful content has more impact on SERP presence than any other recommendation. Links are the primary means by which Google discovers pages and through which you demonstrate your expertise.

## Frameworks Introdotti
- **Attributes of quality content**: readable and well-organized text (H2/H3); unique content (own angle/examples/data, not rehashing); updated content (update or deindex/redirect old content); useful and trustworthy (expert sources, verifiable citations, authoritativeness).
- **Keyword research 2026: from queries to entities**. An entity is a unique concept in the Knowledge Graph. Optimizing for an entity = covering its essential properties and relationships. Google's language matching systems understand semantic co-occurrences even without exact terms.
- **The 3 rel annotations** (since 2019: hints, not absolute directives): `ugc` (forums/comments/user reviews), `sponsored` (advertising/affiliate), `nofollow` (non-endorsed links).

## Code Examples
```html
<!-- ✓ Descriptive anchor -->
<a href="/guida/core-web-vitals">guida ai Core Web Vitals</a>
<!-- ✗ Generic anchor -->
<a href="/guida/core-web-vitals">clicca qui</a>
```

## Mental Models
- "Originality does not mean a topic never covered before": it means your own angle, original examples, first-hand data or experiences.
- Expert users and beginners use different words ("salumi" vs "tagliere di formaggi" vs "aperitivo italiano"): write with the reader in mind, but don't chase every variant.

## Anti-patterns
- **Intrusive interstitials/popups**: since 2017 a penalization signal on mobile. Intrusive = popups that cover content, standalone interstitials requiring dismissal, above-the-fold layout filled with popups. Legitimate exceptions: properly implemented cookie consent, age verification, login, small banners.
- **Links to unreliable resources without annotation**: add `nofollow`/`ugc` to avoid associating your site with them.
- **UGC without automatic annotation**: every user-generated link must have `ugc`/`nofollow` added by the CMS.

## Key Takeaways
1. Break up long content: it helps screen readers and AI Overviews extract citable passages.
2. An outdated, unupdated article is technical debt: update it or redirect it.
3. Entity coverage > keyword placement.
4. Correct combination for new sites: editorial links without attribute, UGC with `ugc`, paid with `sponsored`.

## Connects To
- **Ch 11**: how this content appears in SERP.
- **Ch 13** (SEO): E-E-A-T and the centrality of Experience in 2026.
- **Ch 20** (Exec): SQRG and the primacy of non-commodity content.
