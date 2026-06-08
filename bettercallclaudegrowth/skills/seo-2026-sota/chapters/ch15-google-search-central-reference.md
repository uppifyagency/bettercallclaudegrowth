# Capitolo 15: Google Search Central — la documentazione normativa

## Core Idea
Search Central (developers.google.com/search) è l'hub primario della documentazione SEO ufficiale Google. Distingui ciò che è normativo (Search Essentials, antispam) da ciò che è raccomandato.

## Frameworks Introdotti
- **Gerarchia di autorevolezza delle fonti**: Ufficiale Google (peso normativo) > Semi-ufficiale (SQRG, account personali Advocate: politica/cultura, non ranking signal) > Documentazione interna esposta (antitrust, leak: meccaniche reali, richiede cross-check).
- **SEO Starter Guide**: la baseline ufficiale (dal 2008; ultima revisione feb 2024 ha aggiunto la pagina sui miti). Rilettura annuale per i senior — è il punto di calibrazione su cosa Google dichiara best practice vs irrilevante.
- **Search Essentials** (ex Webmaster Guidelines): tre blocchi — requisiti tecnici (normativi: senza, la pagina non compare), policy antispam (giuridici: violazione → azione manuale), best practice (raccomandati).
- **Debug Search Traffic Drops — albero decisionale ufficiale**: improvviso+tutto il sito→tecnico; improvviso+sezioni→indexing; graduale→algoritmico (Search Status Dashboard); lineare con competitor/trend→stagionalità; con Manual Action→antispam.

## Reference Table — Policy antispam attive (mag 2026)
| Policy | Note |
|---|---|
| Cloaking, Doorways, Hidden text, Keyword stuffing | Storiche |
| Link spam, Machine-generated traffic, Malware, Sneaky redirects | Storiche |
| Scraped content, Thin affiliate, User-generated spam, Misleading functionality | Storiche |
| **Expired domain abuse** | Aggiunta mar 2024 |
| **Scaled content abuse** | Aggiunta mar 2024 |
| **Site reputation abuse** (parasite SEO) | Aggiornata nov 2024 |
| **Back button hijacking** | Aggiunta apr 2026 |

## Key Concepts
- **robots.txt**: controlla crawling NON indicizzazione; URL bloccato può apparire in SERP senza snippet se linkato; per escludere serve noindex/password.
- **Sitemap**: 50.000 URL / 50MB per file; UTF-8; formati XML/RSS/Atom/TXT; estensioni Image/Video/News/hreflang.
- **JavaScript SEO Basics — 3 regole**: link via `<a href>` (mai onclick puro); noindex non sovrascrivibile via JS; JSON-LD lato server.
- **AI Features page** (attiva da mag 2026): nessuna best practice separata; direttive di controllo = nosnippet, max-snippet, noindex, Google-Extended (opt-out training).

## Key Takeaways
1. La Starter Guide è il punto di calibrazione ufficiale: rileggila ogni anno.
2. Le pagine delle policy antispam sono il documento di riferimento per legal/compliance.
3. Crawling and Indexing è l'hub più consultato dai dev SEO.
4. Search Central Blog (RSS) è il feed normativo: ogni core update passa di qui per primo.
5. Consulta Search Status Dashboard prima di ogni diagnosi di drop.

## Connects To
- **Ch 7/8** (SEO): fondamenti e crawling/indexing in pratica.
- **Ch 20** (Exec): SQRG, antitrust, leak — la "terra di mezzo".
- **Ch 14** (SEO): debugging cali (versione operativa dell'albero ufficiale).
