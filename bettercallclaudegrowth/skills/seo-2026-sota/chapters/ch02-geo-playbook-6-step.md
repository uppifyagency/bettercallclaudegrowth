# Capitolo 2: Il playbook GEO in 6 step per founder bootstrap

## Core Idea
Un flusso operativo settimanale e ripetibile per costruire visibilità nei motori generativi con 5-10 ore/settimana: infrastruttura → keyword/brief → scrittura → autorità → tracking → iterazione.

## Frameworks Introdotti
- **Step 1 — Infrastruttura CMS (regola del primo response)**: il contenuto critico deve essere nell'HTML servito al primo response, NON costruito dopo via JavaScript. Gli AI crawler raramente eseguono JS (a differenza di Googlebot). Se il contenuto compare solo dopo l'idratazione client-side, per ChatGPT/Claude/Perplexity sei invisibile.
- **Step 2 — Keyword/brief con LLM**: non ti interessa il volume Google ma quale domanda l'utente farà a un LLM dopo aver maturato intent. Flusso: estrai landing → chiedi a Claude listicoli/confronti/alternative + 3 prompt-target ciascuno → filtra per ICP (5-10 idee) → genera brief.
- **Step 3 — Scrittura (3 amplificatori)**: (1) Heading-as-question con prima frase autonoma 1-2 righe; (2) Schema strutturato (Article+Author+Organization+FAQPage, ItemList per listicoli); (3) Originalità dichiarata ("abbiamo testato 12 strumenti per 6 settimane").
- **Step 4 — Autorità E-E-A-T per LLM**: bio autore con foto/credenziali/sameAs; loghi clienti come **testo** (gli LLM non fanno OCR); numeri di risultato nel body text; citazioni di fonti primarie verificabili.
- **Step 5 — Tracking GEO (4 fonti)**: GA4 source/medium, Search Console, AI Visibility tracker (Profound/Otterly/Semrush AI), test manuali settimanali.
- **Step 6 — Iterazione settimanale**: ciclo Lun-Ven (sotto).

## Mental Models
- Il ciclo GEO è **settimanale, non trimestrale** — i modelli si ri-trainano, le interfacce cambiano, le fonti citate ruotano.
- "Vantarsi quantificando" funziona: gli LLM (GPT in particolare) sono training-tuned a estrarre claim numerici come fatti.

## Reference Tables — CMS raccomandati 2026
| CMS | Rendering | Pro GEO | Limite |
|---|---|---|---|
| Ghost | Server-rendered | Sitemap/schema/CWV out-of-box | Limitato per app complesse |
| Astro | Static + Islands | TTFB ottimo, JS zero default | Curva tecnica alta |
| Next.js (App Router, RSC) | SSR + RSC | Streaming, scala | Attenzione a non passare a CSR |
| WordPress + Yoast/RankMath | Server-rendered | Maturità SEO, plugin GEO | Performance dipende da hosting |

Da evitare: stack vibe-coded full client-side senza fallback statico → prima della GEO viene la prerenderizzazione.

## Test rapido di crawlability AI
- Estensione Chrome **AI Eyes**: toggla JS off; se resta <70% del contenuto, problema di crawlability → priorità prerendering.
- `curl -s https://sito.com/pagina | grep -c '</p>'` — se molto basso (<5), contenuto renderizzato client-side.

## Ciclo di iterazione (Step 6)
- **Lun**: cerca i prompt-target su ChatGPT/Claude/Perplexity/Gemini. Sei citato? Dove? Da dove?
- **Mar-Mer**: per i prompt dove non sei citato, analizza chi è citato e perché (più dati, più esempi, schema migliore, presenza Reddit/G2/YouTube).
- **Gio**: aggiorna 1-2 pagine (spesso basta aggiungere dati/FAQ/tabella).
- **Ven**: pubblica/repubblica, notifica via Search Console + IndexNow, aggiorna dashboard.

## Key Takeaways
1. Prima la crawlability AI, poi il contenuto: prerendering è prerequisito.
2. Indicizzazione post-publish: Search Console (Google) + IndexNow (Bing/Perplexity) in parallelo.
3. Misurare la GEO è il vero ostacolo: si lavora per approssimazione combinando 4 fonti.
4. SEO Gets unifica GSC+GA4 in dashboard leggibili (utile per 3-10 siti).

## Connects To
- **Ch 13** (SEO): IndexNow (Cap. 25), VideoObject schema, Core Web Vitals.
- **Ch 3**: distribuzione off-site che alimenta l'autorità.
- **Ch 6**: regola 80/20 — quali step danno più ROI.
