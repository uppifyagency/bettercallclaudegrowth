# Capitolo 11: Aspetto nella Ricerca — title, snippet, immagini, video

## Core Idea
Title link, snippet, images, and video are the visual elements you can influence to help users decide whether to click. Title and snippet are often rewritten by Google based on the query.

## Frameworks Introdotti
- **Effective title**: unique, clear, concise; important information in the first 50 characters. Google generates it from `<title>`, H1/heading, inbound anchor text, and content. Truncation ~580px desktop (≈55-60 chars) / 920px mobile (pixel-based, not character-based).
- **Meta description**: 150-160 chars; unique per page; adds information (does not duplicate the title); natural CTA; for products include price/availability/USP. It is a fallback — Google often extracts the snippet dynamically from the body.
- **Descriptive alt text**: explains the image-content relationship; sharp images near relevant text; empty alt for decorative images.
- **Video**: standalone pages, descriptive title/description, indexed transcription/subtitles .vtt, VideoObject schema, video sitemap.

## Code Examples
```html
<title>Core Web Vitals 2026: guida tecnica a LCP, INP, CLS | DevBlog</title>
<meta name="description" content="Catalogo scarpe running uomo: Asics, Nike, Hoka. Spedizione gratis sopra 50€, reso 30 giorni.">
```
```html
<!-- Modern responsive images -->
<picture>
  <source srcset="foto.avif" type="image/avif">
  <source srcset="foto.webp" type="image/webp">
  <img src="foto.jpg" srcset="foto-400.jpg 400w, foto-800.jpg 800w"
       sizes="(max-width:600px) 400px, 800px"
       width="1600" height="900" loading="lazy" decoding="async"
       alt="Detailed description in context">
</picture>
```
```html
<!-- Snippet control -->
<span data-nosnippet>spoiler!</span>
<meta name="robots" content="max-snippet:160">
```

## Anti-patterns
- **Generic title ("Home")**, keyword stuffing, identical title across many pages, title/H1 mismatch → Google rewrites the title in 60-80% of cases (since Aug 2021).
- **Keyword-stuffed** or generic alt text ("crostata").
- **LCP image with `loading="lazy"`**: the largest above-the-fold image must be loaded with priority (`fetchpriority="high"` + preload), NEVER lazy.

## SOTA 2026 — Dynamic Snippets
Google often ignores the meta description when it finds more query-relevant passages in the body. Strategy: write a solid meta as a fallback, but structure every section (H2/H3 + brief summary) so it works as a standalone snippet.

## Reference Table — Image Formats 2026
| Format | Support | Notes |
|---|---|---|
| WebP | 98%+ | Web default |
| AVIF | 90%+ | Superior quality at the same file size |
| JPEG/PNG | universal | Valid fallbacks |

## Key Takeaways
1. Title: main keyword on the left, key info within the first 50 characters.
2. Each section = potential snippet → good for SERP and for AI Overviews.
3. Explicit width/height on media elements resolves most CLS issues.
4. Published video transcription = double opportunity for indexing/citation.

## Connects To
- **Ch 13** (SEO): Core Web Vitals (LCP, CLS) and VideoObject schema.
- **Ch 3** (GEO): YouTube as a quick win for AIO citations.
