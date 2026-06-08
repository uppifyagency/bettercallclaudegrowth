---
name: seo-2026-sota
description: "Knowledge base sulla SEO/GEO 2026 (trilogia 'SEO 2026 — Lo Stato dell'Arte', 'GEO 2026 — Generative Engine Optimization', 'SOTA 2026 Executive'). Usala per applicare i framework su SEO tecnica Google, Core Web Vitals, E-E-A-T, schema.org, AI Overviews, ottimizzazione per LLM (ChatGPT/Claude/Gemini/Perplexity), distribuzione GEO, fonti/API/standard ufficiali Google — studiando i documenti o referenziandone i concetti."
allowed-tools:
  - Read
  - Grep
argument-hint: [topic, framework, o numero capitolo es. ch13]
---

# SEO / GEO 2026 — Lo Stato dell'Arte
**Fonti**: trilogia "SEO 2026 — Lo Stato dell'Arte" + "GEO 2026 — Generative Engine Optimization" + "SOTA 2026 Executive" (ed. fact-checked, mag 2026) | **Capitoli**: 20 (sintesi di 121 sotto-capitoli) | **Generato**: 2026-06-07

## Come usare questa skill

- **Senza argomenti** — carica i framework core qui sotto come riferimento.
- **Con un topic** — chiedi di `core web vitals`, `schema`, `AI Overviews`, `IndexNow`, `Reddit GEO`, `NavBoost`: trovo e leggo il capitolo giusto.
- **Con un capitolo** — chiedi `ch13`: carico quel file.
- **Browse** — chiedi "che capitoli hai?" per l'indice completo.

Quando chiedi un topic non coperto nei Framework Core qui sotto, leggo il capitolo rilevante prima di rispondere.

---

## Core Frameworks & Mental Models

### La tesi centrale: "La SEO non muore, si sdoppia"
Due programmi paralleli con leve in parte distinte:
- **SEO classica** (Google) — sito leggibile, autorità, contenuti per persone e crawler.
- **GEO** (motori generativi) — sito leggibile e **citabile** dagli LLM, che hanno regole e pesi propri.

L'overlap reale tra le due è **basso (8-12%)**, non il "63%" della narrativa popolare. Trattale come discipline distinte che si rinforzano solo in alcuni segmenti (contenuto unico, schema, E-E-A-T, dati propri). Vedi **ch04**.

### Il pivot ToFu → BoFu (GEO)
Con lo zero-click (58,5% US, 83% con AIO) e il crollo del CTR organico (−58/−61%), sposta il budget sui **4 formati BoFu** che gli LLM leggono per raccomandare: listicoli verticali, confronti "X vs Y", guide alla scelta con matrice, pagine "alternative a [competitor]". Vedi **ch01**.

### Heading-as-question + risposta atomica
H2/H3 = domanda reale; prima frase sotto = risposta autonoma 1-2 righe (≤100 char per Gemini); dettaglio sotto. È il pattern che AIO e LLM estraggono come citazione. Funziona sia per SEO che per GEO. Vedi **ch02, ch13**.

### Transfer di fiducia
Una raccomandazione di un LLM è processata come **consiglio editoriale**, non come pubblicità. Comparire come prima scelta in una risposta AI è più simile a essere citati dal NYT che a comprare un Google Ad: non lo paghi al motore, lo paghi in lavoro editoriale. Vedi **ch01**.

### Allocazione GEO per modello
Non trattare "gli LLM" come entità unica. Mappa **clienti → modelli → canali**: ChatGPT=Wikipedia+G2/Capterra(3×); Claude=docs tecniche+GitHub+paper; Gemini/AIO=YouTube+schema+recency (Reddit 0,1%); Perplexity=Reddit. Solo Gemini/AIO dà feedback misurabile in GSC. Vedi **ch05**.

### Core Web Vitals 2026
LCP ≤2,5s · INP ≤200ms · CLS ≤0,1 (p75, 28gg su CrUX). INP ha sostituito FID (mar 2024) ed è il collo di bottiglia: il 43% dei siti lo fallisce per JS bloccante post-load. I CWV sono ormai la **condizione minima per essere selezionati come fonte da un AIO**. Vedi **ch13, ch16**.

### E-E-A-T con Experience dominante (Core Update mar 2026)
Esperienza di prima mano (dettagli specifici, dati originali, foto proprie, "Come abbiamo testato", credenziali autore con Schema Person+sameAs) supera le pagine "perfette" ma generaliste. E-E-A-T non è un dial diretto: è la lente dei rater (SQRG) che gli algoritmi approssimano. Vedi **ch12, ch13, ch20**.

### "AI Search è ancora SEO" (Google ufficiale, mag 2026)
Per gli AI Overview di Google NON serve markup speciale, NON serve llms.txt, NON serve chunking artificiale: serve SEO classica resa più severa + contenuto **non-commodity**. Attenzione: questo vale per gli AIO di Google; gli LLM esterni (ChatGPT/Claude/Perplexity) hanno meccaniche diverse (vedi tensione in ch04 vs ch20). Vedi **ch20**.

### La regola 80/20 GEO
Il 20% che rende l'80%: 3-5 listicoli BoFu · G2+Capterra (20-30 recensioni, 4,3+) · 3-5 video YouTube long-form · 2-3 subreddit autentici · schema Article+Author+Organization. Le tattiche black hat (review farm, astroturfing) danno risultati brevi con rischio reputazionale alto. Vedi **ch06**.

### I segnali di click sono reali (antitrust + leak 2024)
NavBoost (re-ranking su click, 13 mesi), Glue, Tangram, SiteAuthority, NSR sono confermati. "I click non contano" è dimostrabilmente falso → misurare CTR e dwell ha valore strategico. Il leak dà il **vocabolario** per nominare ciò che osservi nelle SERP. Vedi **ch20**.

### Verifica i numeri prima di decidere
La direzione degli insight di settore GEO è giusta, le proporzioni no: "17× conversion" → 4,4× medio; "63% overlap" → invertito (8-12%); "70% ChatGPT" → 65-87% in erosione. Rivalida con Semrush/Ahrefs/Profound/Similarweb prima di impegnare budget. Vedi **ch01, ch04**.

---

## Chapter Index

| # | Titolo | Framework chiave |
|---|--------|------------------|
| [ch01](chapters/ch01-geo-fondamenti-fiducia-bofu.md) | GEO: fiducia trasferita, zero-click, pivot BoFu | Transfer di fiducia, 4 formati BoFu |
| [ch02](chapters/ch02-geo-playbook-6-step.md) | Playbook GEO in 6 step | Regola primo response, ciclo settimanale |
| [ch03](chapters/ch03-geo-distribuzione-off-site.md) | Distribuzione GEO off-site | Mappa fonti LLM, YouTube quick win, 3× B2B |
| [ch04](chapters/ch04-seo-vs-geo-overlap.md) | SEO vs GEO: overlap basso | Token-based ranking, 2 programmi paralleli |
| [ch05](chapters/ch05-ottimizzare-per-modello.md) | Ottimizzare per ciascun modello | Leve per ChatGPT/Claude/Gemini/Perplexity |
| [ch06](chapters/ch06-geo-topical-authority-blackhat-8020.md) | Topical authority GEO, black hat, 80/20 | Regola 80/20, internal linking con Claude |
| [ch07](chapters/ch07-seo-fondamenti-come-funziona-google.md) | Fondamenti SEO, come funziona Google | 5 aree SEO, crawling/indexing/serving |
| [ch08](chapters/ch08-far-trovare-indicizzazione-rendering-blocco.md) | Indicizzazione, rendering, blocco | 3 rendering, 3 tecniche di blocco |
| [ch09](chapters/ch09-architettura-url-directory-canonical.md) | URL, directory, canonicalizzazione | Hub & spoke, forza dei segnali canonical |
| [ch10](chapters/ch10-contenuti-utili-link.md) | Contenuti utili e link | Query→entità, 3 annotazioni rel |
| [ch11](chapters/ch11-aspetto-serp-title-snippet-immagini-video.md) | Title, snippet, immagini, video | Snippet dinamici, LCP image, VideoObject |
| [ch12](chapters/ch12-promozione-miti-seo.md) | Promozione e miti SEO | Digital PR, E-E-A-T come lente |
| [ch13](chapters/ch13-sota-2026-cwv-eeat-aio-schema-js-indexnow-hreflang.md) | Stato dell'arte 2026 | CWV, E-E-A-T/HCS, AIO, schema, JS, IndexNow, hreflang |
| [ch14](chapters/ch14-search-console-monitoraggio-triangolazione.md) | Search Console e monitoraggio | Debug cali 7 step, triangolazione GSC+GA4+Trends |
| [ch15](chapters/ch15-google-search-central-reference.md) | Google Search Central | Gerarchia fonti, policy antispam, Starter Guide |
| [ch16](chapters/ch16-webdev-chrome-cwv-crux-lighthouse.md) | web.dev/Chrome: CWV, CrUX, Lighthouse | 4 fasi LCP, scoring Lighthouse, CrUX |
| [ch17](chapters/ch17-tool-ufficiali-google.md) | Tool ufficiali Google | PSI, Rich Results Test, Schema Validator, GSC |
| [ch18](chapters/ch18-api-ufficiali-google.md) | API ufficiali Google | Search Console/Indexing/PSI/CrUX/BigQuery API |
| [ch19](chapters/ch19-open-source-standard-tecnici.md) | Open source e standard tecnici | web-vitals, lighthouse-ci, robotstxt, RFC 9309/8288 |
| [ch20](chapters/ch20-documenti-interni-persone-frontiera-ai.md) | Documenti interni, persone, frontiera AI | SQRG, NavBoost/leak, AI Optimization Guide, 5 cambi 2026 |

## Topic Index

- **AI Overviews / AI Mode** → ch13, ch20 (Google), ch04, ch05 (GEO)
- **API Google** → ch18, ch17
- **Antispam / policy** → ch15, ch12, ch13 (parasite SEO)
- **Black hat / review farm** → ch06, ch13
- **BoFu / formati contenuto** → ch01, ch02
- **Canonicalizzazione** → ch09, ch19 (RFC 8288)
- **ChatGPT / Claude / Gemini / Perplexity** → ch05, ch03
- **Core Web Vitals (LCP/INP/CLS)** → ch13, ch16, ch18 (CrUX)
- **CrUX** → ch16, ch18
- **Crawling / Googlebot / crawler AI** → ch07, ch08, ch20 (Google-Extended)
- **E-E-A-T** → ch13, ch12, ch20 (SQRG)
- **GEO playbook / tracking** → ch02, ch03, ch05, ch06
- **hreflang / internazionalizzazione** → ch13
- **IndexNow / Indexing API** → ch13, ch18
- **JavaScript SEO / rendering** → ch08, ch13, ch19 (robotstxt)
- **Keyword research / entità** → ch10, ch02 (GEO)
- **Leak 2024 / NavBoost / antitrust** → ch20
- **Lighthouse** → ch16, ch19, ch17
- **Miti SEO** → ch12, ch20 (Starter Guide)
- **Persone Google da seguire** → ch20
- **Reddit / YouTube / G2 / Medium** → ch03, ch05
- **robots.txt** → ch08, ch15, ch19 (RFC 9309)
- **Schema.org / dati strutturati** → ch13, ch19, ch17
- **Search Console** → ch14, ch17, ch18
- **SEO vs GEO (overlap)** → ch04
- **Sitemap** → ch08, ch19
- **Title / meta / snippet** → ch11
- **Topical authority / hub & spoke** → ch09, ch06
- **Zero-click / CTR / conversione AI** → ch01, ch04

## Supporting Files

- [glossary.md](glossary.md) — tutti i termini chiave con definizioni e capitolo
- [patterns.md](patterns.md) — tutte le tecniche operative (quando/come/trade-off)
- [cheatsheet.md](cheatsheet.md) — tabelle soglie, numeri verificati, limiti, stack per ruolo

---

## Scope & Limits

Questa skill copre il contenuto della trilogia SEO/GEO/SOTA 2026 (fotografia di maggio 2026). L'ecosistema SEO/GEO evolve in settimane: rivalida cifre, URL e best practice contro le fonti primarie (Google Search Central, web.dev, Semrush/Ahrefs/Profound) prima di decisioni di budget o presentazioni formali. Per l'implementazione nel tuo codebase, combina con tool specifici del progetto e con le altre skill SEO disponibili (keyword research, schema markup, seo-audit, search-console).
