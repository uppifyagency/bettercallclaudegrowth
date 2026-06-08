# Capitolo 13: Stato dell'arte 2026 — CWV, E-E-A-T/HCS, AI Overviews, Schema, JS SEO, IndexNow, hreflang

## Core Idea
La sezione di arricchimento: i temi che non sono ancora nella Starter Guide ufficiale ma nel 2026 fanno la differenza fra un sito ben fatto e un sito che vince.

## Frameworks Introdotti

### Core Web Vitals 2026
Tre metriche su dati reali (CrUX), valutate al 75° percentile sugli ultimi 28 giorni. Una pagina passa se il 75% delle visite è "Buono" su tutte e tre. Nel 2026 solo il 47% dei siti supera tutti e tre; il 43% fallisce su INP.
- **LCP** ≤ 2,5s: precarica risorsa LCP (`fetchpriority="high"`+preload, mai lazy), CDN, AVIF/WebP, riduci TTFB, inline CSS critico ≤14KB.
- **INP** ≤ 200ms (ha sostituito FID il 12 mar 2024; più severo — misura TUTTE le interazioni, valore peggiore): rompi task lunghi (≤50ms), code splitting, Web Worker, limita third-party, debounce 150-300ms su search live.
- **CLS** ≤ 0,1: width/height su media; riserva spazio per ad/widget; font con `font-display: swap` + `size-adjust`.

### E-E-A-T evoluzione e Helpful Content System
- HCU ago 2022 (classificatore di utilità **sito-wide**: pagine buone risentono di una parte poco utile) → +Experience dic 2022 → integrazione nel core (mar 2024 e mar 2026, quest'ultimo ha mosso il 79,5% delle prime tre posizioni globali).
- **SOTA 2026 — centralità di Experience**: il Core Update mar 2026 ha reso Experience il segnale dominante. Operativamente: pagine autore con bio/LinkedIn/ORCID, foto originali, sezione "Come abbiamo testato", dichiarazione di metodologia (specie YMYL).

### AI Overviews e AI Mode — 7 pratiche di citazione
Posizione Google: **non esistono best practice separate per AI**. Le costanti operative: (1) heading-as-question; (2) risposta concisa 1-2 righe sotto; (3) schema strutturato; (4) topical authority; (5) originalità verificabile; (6) coerenza terminologica; (7) internal linking ricco. Dato chiave: 93,8% delle fonti citate negli AIO viene da oltre la prima pagina organica.

### Schema.org / dati strutturati
JSON-LD è il formato raccomandato (separato dall'HTML, validabile, server-generabile). Usato per rich results e — dal 2024-25 — per verificare claim/entità in AIO. Valida SEMPRE con Rich Results Test + Schema Markup Validator.

### JavaScript SEO avanzato
Web Components con Shadow DOM aperto sono indicizzabili (esponi contenuti come slot light DOM). RSC/Astro Islands/Qwik/Solid riducono il JS al client → HTML completo nel response (LCP) + meno JS sul main thread (INP): scelta più equilibrata per nuovi progetti SEO.

### IndexNow
Protocollo push (Microsoft/Yandex 2021). Adottato da Bing, Yandex, Seznam, Naver, DuckDuckGo (via Bing) — **NON Google**. 80M+ siti; il 22% dei click Bing 2025 da URL notificati via IndexNow. Chiave 8-128 char pubblicata alla root. Google Indexing API ufficialmente solo per JobPosting/BroadcastEvent.

### Internazionalizzazione (hreflang)
Regole d'oro: bidirezionalità obbligatoria; auto-referenza; codici corretti (ISO 639-1 + 3166-1 alpha-2); `x-default` per fallback; URL assoluti; coerenza con geolocalizzazione.

## Code Examples
```html
<!-- Schema Article (BlogPosting) -->
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"BlogPosting","headline":"Guida CWV 2026",
"datePublished":"2026-04-12","dateModified":"2026-05-10",
"author":{"@type":"Person","name":"Mario Rossi","url":"…/autori/mario-rossi"},
"publisher":{"@type":"Organization","name":"Acme"}}
</script>
```
```html
<link rel="alternate" hreflang="it-it" href="https://www.example.com/it/">
<link rel="alternate" hreflang="x-default" href="https://www.example.com/">
```
```bash
# IndexNow batch
curl -X POST 'https://api.indexnow.org/IndexNow' -H 'Content-Type: application/json' \
 -d '{"host":"www.example.com","key":"KEY-32-CHARS","urlList":["…/url1","…/url2"]}'
```

## Reference Table — soglie CWV
| Metrica | Buono | Da migliorare | Scarso |
|---|---|---|---|
| LCP | ≤2,5s | ≤4,0s | >4,0s |
| INP | ≤200ms | ≤500ms | >500ms |
| CLS | ≤0,1 | ≤0,25 | >0,25 |

## Anti-patterns
- **FAQ rich results rimossi (mag 2026)**: non appaiono più in SERP. Lo schema FAQPage resta utile per AI Mode (verifica entità).
- **Site reputation abuse / Parasite SEO**: domini affidabili che ospitano contenuti third-party scollegati (coupon, casino, traduzioni AI). Dal 2025 algoritmico; nel 2026 colpisce SaaS che si auto-classificano #1 senza prove.
- **IndexNow come sostituto di sitemap/GSC**: per Google usa sempre sitemap XML + GSC + internal linking. IndexNow è complemento per Bing/LLM e contenuti time-sensitive.

## Key Takeaways
1. INP è il collo di bottiglia 2026 (43% dei siti lo fallisce): caccia il JS bloccante post-load.
2. Experience è il segnale E-E-A-T dominante dal mar 2026.
3. Per gli AIO non serve markup speciale: SEO classica resa più severa.
4. Gli AIO citano fonti specialistiche oltre la prima pagina → opportunità per nicchie.

## Connects To
- **Ch 16** (Exec): CWV deep-dive, CrUX, Lighthouse del Chrome team.
- **Ch 2/5** (GEO): heading-as-question e schema per le citazioni LLM.
- **Ch 20** (Exec): "AI Search è ancora SEO" — guida ufficiale mag 2026.
