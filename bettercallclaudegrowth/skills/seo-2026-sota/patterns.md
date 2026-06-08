# Patterns & Tecniche — SEO / GEO 2026

## Pivot editoriale ToFu → BoFu
**Quando**: il CTR organico crolla con gli AIO e le query informative vanno zero-click.
**Come**: ridistribuisci il budget sui 4 formati BoFu (listicoli verticali, X vs Y, guide alla scelta con matrice, "alternative a [competitor]"). Mantieni hub informativi per la topical authority.
**Trade-off**: meno traffico ToFu, più conversioni; conviene a B2B/SaaS, non a ecommerce di volume.

## Heading-as-question + risposta atomica
**Quando**: vuoi essere citato da AIO/LLM e ottenere snippet dinamici.
**Come**: H2/H3 = domanda reale; prima frase sotto = risposta autonoma 1-2 righe (≤100 char per Gemini); dettaglio sotto.
**Trade-off**: nessuno — funziona sia per SEO classica che per GEO.

## Crawlability AI check (primo response)
**Quando**: prima di qualsiasi lavoro GEO.
**Come**: AI Eyes (toggle JS off; <70% contenuto = problema) o `curl -s URL | grep -c '</p>'`. Se client-side → prerendering (SSR/SSG/Islands) prima del contenuto.
**Trade-off**: gli AI crawler non eseguono JS; Googlebot sì ma con ritardo.

## Indicizzazione push parallela
**Quando**: dopo ogni pubblicazione.
**Come**: Google = Search Console (Controllo URL → Richiedi indicizzazione) + sitemap; Bing/Perplexity/LLM = IndexNow.
**Trade-off**: IndexNow non tocca Google ma accelera Bing/Copilot.

## Canonicalizzazione a forza decrescente
**Quando**: contenuti raggiungibili da più URL.
**Come**: 301 (più forte) > rel=canonical > hreflang > sitemap > internal link consistenti. Canonical auto-referenziale su ogni pagina.
**Trade-off**: rel=canonical è solo un suggerimento; verifica la canonica scelta in GSC.

## Ottimizzazione CWV mirata (LCP/INP/CLS)
**Quando**: <75% delle visite "Buono" su CrUX (28gg).
**Come**: LCP → preload + fetchpriority=high + AVIF/WebP + TTFB; INP → spezza task ≤50ms, code splitting, Web Worker, debounce; CLS → width/height su media, spazio riservato, font size-adjust.
**Trade-off**: INP è il collo di bottiglia 2026 (43% fallisce) — caccia il JS bloccante post-load.

## Hub & spoke per topical authority
**Quando**: vuoi "possedere" un verticale.
**Come**: pillar → spoke → sub-spoke con internal linking denso e anchor descrittivi. Per GEO: più stretto (profondità > ampiezza).
**Trade-off**: la coerenza semantica supera il numero di backlink (Core Update mar 2026).

## Internal linking assistito da Claude
**Quando**: hai molti articoli da connettere.
**Come**: esporta URL+titoli → Claude propone matrice (sorgente, destinazione, anchor, frase di contesto, 50-200 link) → implementa con Link Whisper/Yoast.
**Trade-off**: rivedi gli anchor per evitare over-optimization.

## E-E-A-T machine-readable (per Google e LLM)
**Quando**: contenuti che danno consigli (specie YMYL) o pagine BoFu.
**Come**: Schema Person+sameAs (LinkedIn/ORCID); Organization completo; bio autore con foto/credenziali; loghi clienti come **testo**; numeri di risultato nel body; citazioni di fonti primarie; sezione "Come abbiamo testato".
**Trade-off**: gli LLM non fanno OCR delle immagini — il testo è il segnale.

## Republish con canonical (Medium/LinkedIn)
**Quando**: vuoi long-tail rapido sfruttando il DR delle piattaforme.
**Come**: canonical sul tuo blog → attendi 1-2 settimane → republish con rel=canonical al blog.
**Trade-off**: adatta titolo/incipit alla piattaforma; citati da Perplexity/Copilot.

## Effetto 3× B2B (profili recensioni)
**Quando**: software B2B mirato a citazioni ChatGPT.
**Come**: G2 + Capterra + Trustpilot completi, 20-30 recensioni, rating 4,3+, update trimestrale.
**Trade-off**: 12-16 ore una tantum + campagna recensioni.

## Debugging cali di traffico (7 step)
**Quando**: calo di traffico organico.
**Come**: sorgente → coincidenze temporali (Search Status Dashboard) → tecnico → algoritmico (graduale=Core Update) → manual action → stagionalità (Trends) → concorrenza.
**Trade-off**: non agire d'impulso; un solo cambio per volta.

## CI/CD per structured data
**Quando**: pipeline su siti con schema.
**Come**: validazione locale schema-dts+AJV → Schema Markup Validator → Rich Results Test come gate su staging.
**Trade-off**: il Rich Results Test copre solo i tipi supportati da Google.

## Lighthouse CI come gate di PR
**Quando**: vuoi prevenire regressioni di performance.
**Come**: lighthouserc.json con assertion/budget; la PR fallisce se una metrica regredisce; @lhci/server per storici.
**Trade-off**: lancia l'audit più volte per ridurre la varianza.

## Triangolazione GSC + GA4 + Trends
**Quando**: report periodico orientato al business.
**Come**: collega GSC↔GA4, imposta eventi/conversioni, contestualizza con Trends (5 anni). BigQuery export per analisi avanzate (CTR anomalo, branded/non-branded, &udm=14).
**Trade-off**: senza eventi di conversione GA4 non misura valore.

## Allocazione GEO per modello
**Quando**: risorse limitate (5-10h/sett).
**Come**: mappa clienti→modelli→canali. ChatGPT=Wikipedia/G2; Claude=docs tecniche/GitHub; Gemini/AIO=YouTube/schema/recency; Perplexity=Reddit.
**Trade-off**: solo Gemini/AIO dà feedback misurabile in GSC.
