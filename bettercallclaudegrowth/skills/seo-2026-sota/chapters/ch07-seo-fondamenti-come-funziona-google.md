# Capitolo 7: Fondamenti SEO e come funziona la Ricerca Google

## Core Idea
La SEO 2026 = far comprendere i contenuti ai motori + aiutare gli utenti a trovarti e scegliere di cliccare. I fondamentali del 2008 reggono ("scrivi per le persone, struttura per il crawler, sii onesto"); cambiano gli strati sopra.

## Frameworks Introdotti
- **Le 5 aree di un programma SEO professionale 2026**:
  1. Crawling e indicizzazione (Googlebot + varianti raggiungono e indicizzano le pagine importanti, no spreco crawl budget).
  2. Architettura informativa (URL, directory, navigazione, sitemap, redirect).
  3. Contenuti e topical authority (originali, esperienziali, per cluster — l'autorità su un tema pesa più del ranking isolato).
  4. Aspetto nella SERP (title, snippet, dati strutturati, immagini/video; diventare fonte AIO/AI Mode).
  5. Misura e iterazione (Search Console, GA4, CrUX, Rich Results Test, PSI).
- **Le 3 fasi della Ricerca**:
  - **Crawling**: Googlebot scopre URL via link, sitemap XML, Controllo URL; rispetta robots.txt; legge HTML grezzo, poi rende con Chromium headless (ritardato).
  - **Indexing**: analisi del renderizzato (testo, immagini, dati strutturati, canonical); clustering dei duplicati, scelta del canonico.
  - **Serving**: selezione candidati + ordinamento con centinaia di sistemi di ranking (rilevanza, qualità, Core Web Vitals, localizzazione, dati strutturati, e dal 2024-25 i modelli generativi per AIO).

## Key Concepts
- **Googlebot e varianti**: Googlebot-Image, -Video, -News, AdsBot-Google, Storebot-Google.
- **Verifica autenticità bot**: reverse DNS (inverso + diretto), MAI bloccare per User-Agent senza verifica (spoofabile). Google pubblica gli IP range in JSON.
- **Topical authority**: segnale di ranking dichiarato da Google.

## Code Examples
```bash
# Verifica che un IP appartenga a Googlebot
host 66.249.66.1            # → crawl-66-249-66-1.googlebot.com
host crawl-66-249-66-1.googlebot.com   # → 66.249.66.1 ✓
# JSON ufficiale degli intervalli IP
curl -s https://developers.google.com/search/apis/ipranges/googlebot.json
```

## Mental Models
- "Anche un motore di ricerca è un utente." Ottimizza per entrambi insieme.
- **Cambia una cosa per volta, lascia tempo, misura.** Chi riscrive l'architettura ogni trimestre raramente migliora: il rumore supera il segnale.

## Reference Table — Tempistiche tipiche
| Intervento | Tempi | Cosa monitorare |
|---|---|---|
| Correzione title/snippet | Ore-giorni | Test live GSC |
| Nuova pagina | Ore-giorni | Indicizzazione pagine |
| Cambio canonicalizzazione | Giorni-settimane | URL canonico GSC |
| Migration con 301 | 1-3 mesi | Traffico, 404, GSC |
| Miglioramento CWV | 4-8 settimane | Esperienza pagina (CrUX 28gg) |
| Espansione cluster | 3-6 mesi | Impressioni per query |
| Recovery da Core Update | Mesi (next update) | Confronto core update |

## Key Takeaways
1. Nessuna garanzia di indicizzazione: seguire le Search Essentials aumenta la probabilità.
2. Attendi almeno alcune settimane prima di valutare un intervento.
3. La topical authority supera il posizionamento di singola pagina.

## Connects To
- **Ch 8**: come verificare l'indicizzazione e gestire crawling/rendering.
- **Ch 15** (Exec): Search Essentials e policy antispam normative.
