# Capitolo 8: Far trovare i contenuti — indicizzazione, rendering, blocco

## Core Idea
Prima di agire, verifica se sei già nell'indice. Poi assicurati che Google veda la pagina come l'utente (risorse + rendering) e usa gli strumenti giusti per escludere ciò che non deve comparire.

## Frameworks Introdotti
- **Verifica indicizzazione**: operatore `site:tuosito.it`. Se vedi risultati, sei nell'indice. Se no, controlla: accessibile da Googlebot, 200 OK, no robots.txt block, no meta noindex, HTML valido, lingua dichiarata.
- **Scoperta delle pagine**: principalmente via link (esterni + interni) + sitemap XML. Sitemap raccomandata sopra 500 pagine, contenuti che cambiano spesso, scarsa connettività interna. Limiti: 50.000 URL / 50 MB per file → oltre, usa sitemap index.
- **JavaScript SEO — la regola dei tre rendering**: SSR, SSG, CSR (vedi tabella). Oltre il 95% dei siti usa JS; Google lo supporta ma con rendering asincrono, ritardato e a budget.
- **Le 3 tecniche per bloccare** (e quando): robots.txt (controlla crawling, non indicizzazione), meta robots noindex (esclude dall'indice, pagina scansionabile), X-Robots-Tag HTTP (per file non-HTML come PDF).

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
# X-Robots-Tag per escludere PDF (Nginx)
location ~* \.(pdf|doc|docx)$ { add_header X-Robots-Tag "noindex, nofollow"; }
```

## Anti-patterns
- **ERRORE CRITICO — non combinare Disallow + noindex**: se la URL è in Disallow, Googlebot non la legge e non vede mai il noindex → può restare nell'indice "senza descrizione". Procedura corretta: prima noindex (pagina scansionabile), poi — dopo l'uscita dall'indice — Disallow per risparmiare crawl budget.
- **Contenuto che appare solo dopo interazione** ("Carica altro"): Googlebot non clicca.
- **Routing client-side con hash (#/pagina)**: usa History API (pushState) e route reali.

## Reference Table — Strategie di rendering
| Strategia | Come | Quando |
|---|---|---|
| SSR | Server genera HTML per richiesta | Contenuti dinamici, e-commerce, news |
| SSG | HTML pre-generato al build, da CDN | Blog, marketing, docs |
| CSR | HTML vuoto, JS monta nel browser | Sconsigliata SEO: solo dashboard private |
| ISR | Cache statica + rigenerazione on-demand | Cataloghi grandi, update parziali |
| Islands / hydration parziale | HTML statico + isole interattive | Miglior compromesso CRP/SEO 2026 |

| Tecnica blocco | Effetto | Quando |
|---|---|---|
| robots.txt Disallow | Blocca crawling (non index) | Risparmiare crawl budget |
| Meta noindex | Esclude dall'indice | Duplicati, filtri, area utente |
| X-Robots-Tag | noindex per file non-HTML | PDF, immagini, JSON |
| Password | Blocca crawl + index | Staging, draft, riservato |
| 410/404 | Rimozione duratura | Pagine eliminate |

## Key Takeaways
1. Lo strumento Controllo URL in GSC mostra come Google vede e rende la pagina (test live).
2. Googlebot scansiona tipicamente dagli USA: rendi accessibili i contenuti geo-localizzati.
3. Non bloccare CSS/JS/font necessari al rendering.

## Connects To
- **Ch 9**: canonicalizzazione dei duplicati.
- **Ch 13** (SEO): JavaScript SEO avanzato (Web Components, RSC, streaming).
- **Ch 16/19** (Exec): pipeline rendering, google/robotstxt parser, RFC 9309.
