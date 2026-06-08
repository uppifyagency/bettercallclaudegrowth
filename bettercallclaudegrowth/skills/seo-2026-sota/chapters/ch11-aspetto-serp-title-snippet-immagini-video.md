# Capitolo 11: Aspetto nella Ricerca — title, snippet, immagini, video

## Core Idea
Title link, snippet, immagini e video sono gli elementi visivi che puoi influenzare per aiutare l'utente a decidere se cliccare. Title e snippet sono spesso riscritti da Google in funzione della query.

## Frameworks Introdotti
- **Title efficace**: unico, chiaro, conciso; informazione importante nei primi 50 caratteri. Google lo genera da `<title>`, H1/heading, anchor text in entrata, contenuto. Troncamento ~580px desktop (≈55-60 char) / 920px mobile (basato su pixel, non caratteri).
- **Meta description**: 150-160 char; unica per pagina; aggiunge informazione (non duplica il title); CTA naturale; per i prodotti prezzo/disponibilità/USP. È un fallback — Google estrae spesso lo snippet dinamicamente dal corpo.
- **Alt text descrittivo**: spiega la relazione immagine-contenuto; immagini nitide vicino al testo pertinente; alt vuoto per immagini decorative.
- **Video**: pagine autonome, titolo/descrizione descrittivi, trascrizione/sottotitoli .vtt indicizzati, VideoObject schema, video sitemap.

## Code Examples
```html
<title>Core Web Vitals 2026: guida tecnica a LCP, INP, CLS | DevBlog</title>
<meta name="description" content="Catalogo scarpe running uomo: Asics, Nike, Hoka. Spedizione gratis sopra 50€, reso 30 giorni.">
```
```html
<!-- Immagini responsive moderne -->
<picture>
  <source srcset="foto.avif" type="image/avif">
  <source srcset="foto.webp" type="image/webp">
  <img src="foto.jpg" srcset="foto-400.jpg 400w, foto-800.jpg 800w"
       sizes="(max-width:600px) 400px, 800px"
       width="1600" height="900" loading="lazy" decoding="async"
       alt="Descrizione dettagliata in contesto">
</picture>
```
```html
<!-- Controllo snippet -->
<span data-nosnippet>spoiler!</span>
<meta name="robots" content="max-snippet:160">
```

## Anti-patterns
- **Title generico ("Home")**, keyword stuffing, title identico su molte pagine, mismatch title/H1 → Google riscrive il title nel 60-80% dei casi (da ago 2021).
- **Alt keyword-stuffed** o generico ("crostata").
- **Immagine LCP con `loading="lazy"`**: l'immagine above-the-fold più grande va caricata con priorità (`fetchpriority="high"` + preload), MAI lazy.

## SOTA 2026 — Snippet dinamici
Google ignora spesso la meta description quando trova nel corpo passaggi più pertinenti alla query. Strategia: scrivi una meta solida come fallback ma struttura ogni sezione (H2/H3 + breve sommario) perché funzioni come snippet autonomo.

## Reference Table — Formati immagine 2026
| Formato | Supporto | Note |
|---|---|---|
| WebP | 98%+ | Default web |
| AVIF | 90%+ | Qualità superiore a parità di peso |
| JPEG/PNG | universale | Fallback validi |

## Key Takeaways
1. Title: parola chiave principale a sinistra, info nei primi 50 caratteri.
2. Ogni sezione = potenziale snippet → buona per SERP e per AI Overviews.
3. width/height espliciti su media risolvono gran parte del CLS.
4. Trascrizione video pubblicata = doppia possibilità di indicizzazione/citazione.

## Connects To
- **Ch 13** (SEO): Core Web Vitals (LCP, CLS) e schema VideoObject.
- **Ch 3** (GEO): YouTube come quick win per le citazioni AIO.
