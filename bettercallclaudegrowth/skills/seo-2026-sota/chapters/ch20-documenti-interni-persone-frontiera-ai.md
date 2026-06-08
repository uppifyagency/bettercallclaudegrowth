# Capitolo 20: Documenti interni, persone Google e la frontiera GEO/AI

## Core Idea
La "terra di mezzo" (SQRG, atti antitrust, leak 2024) è l'unica finestra ufficiale su come la macchina di ranking funziona davvero. Nel 2026 Google riconosce ufficialmente che "AI Search è ancora SEO". La voce ufficiale si è deplatformizzata su tutto il team Search Relations.

## Frameworks Introdotti — documenti interni resi pubblici
- **Search Quality Rater Guidelines (SQRG)** — il documento più importante prodotto da Google per chi fa SEO seria. PDF 182 pagine (11 set 2025). Manuale per i quality rater umani: non determinano il ranking ma alimentano il training. 3 parti: Page Quality (scala Lowest→Highest), Understanding Search User Needs (intent Know/Do/Website/Visit-in-Person, Needs Met), Needs Met Rating. Novità set 2025: criteri per AI Overview, raffinamento YMYL (esteso a Government/Civics), esempi per pagine AI-generated.
- **USA v. Google (antitrust)** — sistemi confermati sotto giuramento per la prima volta:
  - **NavBoost**: re-ranking su dati di click, rolling window 13 mesi. "Not a machine learning system. It's just a big spreadsheet" (Lehman) — log di click su coppie query-URL.
  - **Glue**: controparte di NavBoost per le universal features (carousel, knowledge panel).
  - **Tangram (ex Tetris)**: assemblatore finale della SERP (composizione + prominence).
  - **RankBrain, DeepRank, RankEmbed BERT**: refinement layer deep learning finali.
  - Pipeline reale: Retrieval → NavBoost cull → RankBrain/DeepRank scoring → Tangram assembly.
- **API Content Warehouse Leak (5 mag 2024)**: 2.596 moduli, 14.014 attributi (Google ha confermato l'autenticità). Feature emerse: **SiteAuthority** (Google ha sempre negato una "domain authority"), **NSR** (Normalized Site Rank), NavBoost confermato come **Twiddler** (re-ranking post-retrieval), HostAge (sandbox nuovi domini), Chrome data integration. Valore vero: **vocabolario** per nominare ciò che si osserva nelle SERP.

## Frameworks Introdotti — frontiera GEO/AI (Google ufficiale)
- **AI Features and Your Website**: requisiti = pagina indicizzata, eleggibile a snippet, conforme. **Nessun file nuovo, nessun markup, nessun llms.txt.** Traffico AIO/AI Mode incluso nel report Performance (tipo "Web", nessuna segmentazione).
- **AI Optimization Guide (15 mag 2026)**: prima guida ufficiale consolidata. Contenuto non-commodity (esempio Google: "7 Tips for First-Time Homebuyers" commodity vs "Why We Waived the Inspection & Saved Money" non-commodity). **Smentite esplicite**: llms.txt nessun trattamento speciale; chunking artificiale inutile; markup speciale AI inesistente.
- **4 pilastri (post mag 2025)**: contenuto unico non-commodity; esperienza di pagina solida; supporto multimediale; comprensione del valore del traffico AI (click di qualità superiore).
- **Crawler AI**: **Google-Extended** (opt-out training generativo — bloccarlo NON influisce su ranking/traffico Search); GoogleOther (catch-all); Googlebot (non bloccare). 
- **Gemini API**: il motore degli AIO. `groundingMetadata` rivela "da dove" è costruita una risposta → permette di reverse-engineerare come gli AIO scelgono le fonti.

## Persone Google da seguire (mappa 2026)
| Persona | Piattaforma 2026 | Focus |
|---|---|---|
| John Mueller | **Bluesky** @johnmu.com | Crawl/index, debunking miti |
| Martin Splitt | LinkedIn, YouTube | JavaScript SEO, rendering |
| Gary Illyes | LinkedIn, Mastodon | Crawling, robots.txt, IndexNow |
| Lizzi Sassman | LinkedIn, Mastodon | Technical writing docs |
| Danny Sullivan | (Liaison terminato ago 2025) | Direzione interna Search |
| Daniel Waisberg | LinkedIn, YouTube | Search Console |
| Barry Pollard | web.dev, Bluesky | Core Web Vitals |
| Addy Osmani | addyosmani.com | Performance + AI (Google Cloud AI) |

## Mental Models — i 5 cambi strutturali 2026
1. **Fine della negazione sui click**: NavBoost/Glue esistono (antitrust+leak). "I click non contano" è dimostrabilmente falso → misurare CTR e dwell ha valore strategico.
2. **Deplatformizzazione della voce ufficiale**: niente più voce singola → monitora 5+ canali.
3. **"AI Search è ancora SEO"**: niente markup speciale/llms.txt/chunking → SEO classica resa più severa, non discipline separate.
4. **Primato del contenuto non-commodity**: Google chiede contenuto che nessun altro avrebbe potuto produrre (la E di Experience) → content puro-volume obsoleto.
5. **Integrazione performance↔AI**: i CWV sono la condizione minima per essere selezionati come fonte da un AIO.

## Key Takeaways
1. SQRG = lettura una tantum imprescindibile; sezioni E-E-A-T per i content team.
2. Il leak dà il vocabolario (SiteAuthority, NavBoost): nominare ciò che osservi.
3. Per gli AIO non costruire "AI-specific layers": Google li ha dichiarati inesistenti.
4. La voce di Google è un feed distribuito da monitorare, non una libreria da chiudere.

## Connects To
- **Ch 4** (GEO): apparente tensione "AI Search è ancora SEO" (AIO Google) vs overlap basso (LLM esterni).
- **Ch 12** (SEO): miti smontati vs leak (SiteAuthority esiste, "Domain Authority" di terze parti no).
- **Ch 1** (GEO): contenuto non-commodity = originalità con dati propri.
