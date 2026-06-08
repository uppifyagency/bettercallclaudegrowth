# Glossario SEO / GEO / SOTA 2026

**AI Mode** — Modalità di ricerca conversazionale Google (Gemini, 2025), multi-turn con citazioni (Ch13, Ch15, Ch20).
**AI Overview (AIO)** — Sintesi generativa inline in SERP con link alle fonti, alimentata da Gemini, dal 2024 (Ch13, Ch20).
**AI Visibility Prompt / Prompt-target** — La domanda conversazionale sotto cui vuoi essere citato da un LLM; più verbosa della keyword Google (Ch1, Ch2).
**Anchor text** — Testo cliccabile di un link; segnala il contenuto della pagina linkata (Ch10).
**Back button hijacking** — Policy antispam aggiunta apr 2026: interferire con la navigazione back (Ch15).
**BoFu (Bottom-of-Funnel)** — Contenuto per utenti pronti all'acquisto: listicoli, comparative, alternative, guide alla scelta (Ch1).
**Canonical URL** — URL rappresentativo di un gruppo di duplicati; via rel=canonical, 301, sitemap, internal linking. È un suggerimento, non una direttiva (Ch9).
**CLS — Cumulative Layout Shift** — CWV di instabilità visiva. Buono ≤0,1 (Ch13, Ch16).
**Crawl budget** — Numero di pagine che Googlebot scansiona in un periodo; limitato per siti grandi/lenti (Ch8).
**CrUX — Chrome User Experience Report** — Dataset pubblico di CWV reali (Chrome opted-in), rolling 28gg, p75. API/History/BigQuery (Ch16, Ch18).
**E-E-A-T** — Experience, Expertise, Authoritativeness, Trustworthiness. Framework SQRG; Experience dominante dal mar 2026 (Ch12, Ch13, Ch20).
**Entità** — Concetto univoco nel Knowledge Graph; ottimizzare per entità = coprire proprietà e relazioni (Ch10).
**FAQPage** — Schema FAQ; rich result rimosso da SERP da mag 2026, ancora utile per AI Mode (Ch13).
**Featured snippet** — "Position zero": risposta estratta mostrata in evidenza (Ch13).
**GEO** — Generative Engine Optimization: visibilità nei motori generativi e interfacce AI (Ch1).
**Glue** — Sistema interno Google (antitrust): controparte di NavBoost per le universal features (Ch20).
**Googlebot** — Crawler principale; varianti Image/Video/News/AdsBot/Storebot (Ch7).
**Google-Extended** — User-agent per opt-out training generativo; bloccarlo NON influisce su Search (Ch20).
**Heading-as-question** — H2/H3 formulati come domande reali con risposta concisa 1-2 righe sotto; pattern estratto dagli LLM (Ch2, Ch13).
**Helpful Content System (HCU)** — Classificatore di utilità sito-wide (ago 2022), integrato nel core (mar 2024/2026) (Ch13).
**hreflang** — Attributo che dichiara lingua/regione di una pagina; richiede bidirezionalità e auto-referenza (Ch13).
**Hub & spoke** — Architettura pillar→spoke→sub-spoke per topical authority (Ch9, Ch6).
**IndexNow** — Protocollo push (Bing/Yandex/Naver/Seznam — non Google) per notificare URL (Ch13).
**INP — Interaction to Next Paint** — CWV di reattività; ha sostituito FID (12 mar 2024); più severo. Buono ≤200ms (Ch13, Ch16).
**JSON-LD** — Formato raccomandato per dati strutturati, in `<script type="application/ld+json">` (Ch13, Ch19).
**LCP — Largest Contentful Paint** — CWV di rendering dell'elemento above-the-fold più grande. Buono ≤2,5s (Ch13, Ch16).
**Lighthouse** — Motore di audit open source dietro DevTools/PSI/Lighthouse CI (Ch16, Ch19).
**LLM referral traffic** — Click da chatgpt.com, claude.ai, perplexity.ai, gemini.google.com (Ch2).
**Mobile-first indexing** — Google indicizza la versione mobile (dal 2019) (Ch14).
**NavBoost** — Re-ranking su dati di click, rolling 13 mesi; un Twiddler. Confermato sotto giuramento (Ch20).
**Needs Met** — Meccanismo SQRG di valutazione del soddisfacimento dell'intent (Ch20).
**Noindex** — Direttiva (meta/X-Robots-Tag) che esclude dall'indice ma permette la scansione (Ch8).
**NSR (Normalized Site Rank)** — Punteggio normalizzato per sito (leak 2024), complementare al PageRank (Ch20).
**PageRank** — Algoritmo originale sui link (1998); uno tra centinaia di segnali (Ch12).
**Parasite SEO / Site reputation abuse** — Abusare della reputazione di un dominio host con contenuti third-party non correlati (Ch13, Ch15).
**Rich result / Rich snippet** — Risultato arricchito (stelle, prezzo, immagini) da dati strutturati (Ch13).
**Robots.txt** — File alla root che controlla il crawling (non l'indicizzazione); standard RFC 9309 (Ch8, Ch19).
**RFC 9309** — Robots Exclusion Protocol (IETF set 2022; co-author Illyes/Sassman) (Ch19).
**RFC 8288** — Web Linking; header HTTP Link: per canonical su asset non-HTML (Ch19).
**Schema.org** — Vocabolario standard per entità; co-sponsor Google/Microsoft/Yahoo/Yandex (Ch13, Ch19).
**SERP** — Search Engine Results Page (Ch7).
**Sitemap XML** — Elenco di URL importanti; 50.000 URL / 50MB per file (Ch8, Ch19).
**SiteAuthority** — Metrica di autorità a livello sito (leak 2024); Google ha sempre negato una "domain authority" (Ch20).
**SQRG — Search Quality Rater Guidelines** — Manuale per i rater umani (~182 pagine); alimenta il training (Ch20).
**SSR / SSG / CSR / ISR / Islands** — Strategie di rendering; CSR sconsigliata per SEO (Ch8).
**Tangram (ex Tetris)** — Assemblatore finale della SERP dopo NavBoost+Glue (Ch20).
**Topical authority** — Autorevolezza su un argomento (ampiezza+profondità+coerenza); segnale di ranking (Ch6, Ch9).
**Transfer di fiducia** — Una raccomandazione LLM è processata come consiglio, non pubblicità (Ch1).
**Twiddler** — Architettura di re-ranking post-retrieval; NavBoost è un Twiddler (Ch20).
**YMYL — Your Money or Your Life** — Pagine che impattano salute/finanze/sicurezza; standard E-E-A-T più rigidi (Ch20, Ch13).
**Zero-click search** — Ricerca risolta nell'interfaccia senza click (AIO, Knowledge Panel, snippet) (Ch1).
