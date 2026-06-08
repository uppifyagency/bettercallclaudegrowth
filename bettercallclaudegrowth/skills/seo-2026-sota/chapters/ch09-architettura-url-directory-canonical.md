# Capitolo 9: Architettura del sito — URL, directory tematiche, canonicalizzazione

## Core Idea
Organizzare il sito in modo logico (URL parlanti, directory per tema, un solo URL canonico per contenuto) aiuta crawler e utenti. Diventa cruciale su siti grandi o in redesign.

## Frameworks Introdotti
- **URL descrittivi — regole 2026**: <75 caratteri; separatore trattino `-` (mai `_`); solo lowercase ASCII/numeri/trattino/slash; URL stabili (se cambi, 301); minimizza parametri (3+ → duplicazione); niente date in URL evergreen.
- **Hub & spoke (topical clusters)**: pillar → spoke → sub-spoke. Google riconosce l'"autorità di un sito su un argomento" come segnale. Le directory aiutano Google a capire la frequenza di cambiamento per sezione.
- **Strategie di canonicalizzazione** (in ordine di forza del segnale):
  1. **Redirect 301** — il più forte; quando non serve mantenere le varianti.
  2. **rel="canonical"** — standard quando devi mantenere varianti (es. UTM).
  3. **Hreflang** — versioni localizzate (chiarisce relazioni, non canonicalizza).
  4. **Sitemap XML** — solo URL canonici (segnale debole).
  5. **Consistenza internal link** — linka sempre la canonica.

## Code Examples
```html
<!-- Canonical auto-referenziale (consigliato su ogni pagina) -->
<link rel="canonical" href="https://www.example.com/prodotti/scarpe-running">
```
```http
# Canonical via header HTTP (per PDF, JSON)
Link: <https://www.example.com/manuale.pdf>; rel="canonical"
```
```
/seo/                                  ← hub (pillar)
├─ /seo/keyword-research/             ← spoke
├─ /seo/technical-seo/                ← spoke
│   ├─ /seo/technical-seo/core-web-vitals/   ← sub-spoke
│   └─ /seo/technical-seo/structured-data/   ← sub-spoke
└─ /seo/ai-overviews/                 ← spoke
```

## Key Concepts
- **Cause tipiche di duplicazione**: HTTP/HTTPS o www/non-www, parametri tracking (utm, gclid), ordinamento/filtro/paginazione, versioni stampabili, trailing slash, maiuscole/minuscole.
- **rel="canonical" è un suggerimento, non una direttiva**: Google può ignorarlo se incoerente con redirect/hreflang/sitemap/internal linking. Verifica la canonica scelta in GSC → Controllo URL.

## Anti-patterns
- **"Penalità" per duplicati**: non esiste azione manuale per duplicati interni — è inefficiente (spreco crawl budget, diluizione segnali) ma non penalizzato. Diverso il furto di contenuti altrui (può scattare antispam).
- Canonical incoerente con gli altri segnali → Google sceglie un'altra canonica.

## SOTA 2026 — Topical authority > domain authority
Studi sul Core Update marzo 2026: siti che "possiedono" un cluster (copertura completa, profondità, internal linking denso) superano siti più grandi e generalisti su query nicchia. Conta la coerenza semantica + qualità dei link interni verso il pillar, non il numero di backlink.

## Key Takeaways
1. Canonical auto-referenziale su tutte le pagine come baseline.
2. Sottodirectory consolidano autorità; sottodomini per oggetti semanticamente distinti.
3. Le directory tematiche segnalano a Google la frequenza di update per sezione.

## Connects To
- **Ch 6** (GEO): cluster GEO-friendly (più stretti).
- **Ch 13/14**: canonical scelto da Google in Search Console.
- **Ch 19** (Exec): RFC 8288 Web Linking (header Link: per canonical).
