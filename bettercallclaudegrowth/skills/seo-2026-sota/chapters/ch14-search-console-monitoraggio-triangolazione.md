# Capitolo 14: Search Console, debugging dei cali e triangolazione GSC+GA4+Trends

## Core Idea
Search Console misura cosa fa Google con le tue pagine; GA4 cosa fanno gli utenti dopo il click; Google Trends il contesto di mercato. La triangolazione porta dalle metriche di visibilità a quelle di business.

## Frameworks Introdotti
- **I 5 rapporti GSC settimanali** (vedi tabella).
- **Debugging cali di traffico (procedura sistematica)**: (1) sorgente del calo (Prestazioni: tipo ricerca/paese/dispositivo — generale o concentrato?); (2) coincidenze temporali (Core Update? sitemap? deploy? CDN?) cross-check Search Status Dashboard; (3) tecnico (pagine cadute, 5xx, robots.txt, test live); (4) algoritmico (graduale=Core Update, brusco=tecnico/manuale); (5) manual action; (6) stagionalità (Google Trends); (7) concorrenza.
- **Triangolazione**: collega GSC↔GA4 (Admin → Search Console Links) → imposta eventi/conversioni in GA4 → monitora i topic strategici in Trends (5 anni) per separare crescita da stagionalità.

## Code Examples
```javascript
// GA4 — proxy per click da AI Mode (parametro &udm=14)
if (new URLSearchParams(location.search).get('udm') === '14') {
  gtag('event', 'ai_mode_click', { page_path: location.pathname, page_referrer: document.referrer });
}
```

## Reference Tables
| Rapporto GSC | Cosa mostra | Quando |
|---|---|---|
| Prestazioni → Risultati | Click/impressioni/CTR/posizione | Ogni settimana, periodo su periodo |
| Indicizzazione pagine | Indicizzate vs escluse + motivi | Dopo deploy, ogni mese |
| Esperienza sulla pagina | CWV reali (CrUX), HTTPS, mobile | Ogni 2 settimane |
| Risultati estesi | Errori/validità dati strutturati | Dopo modifiche schema |
| Azioni manuali / Sicurezza | Penalizzazioni | Alert email — non aspettare |

| Strumento ricerca query | A cosa serve |
|---|---|
| GSC Prestazioni | Query reali su cui appari |
| Google Trends | Stagionalità, related queries |
| People Also Ask | Domande correlate (usate dagli AIO) |
| Knowledge Graph API | Entità riconosciute (disambiguazione brand) |

## Key Concepts
- **Verifica proprietà**: DNS TXT è la più robusta (non si rompe nei redesign).
- **Limiti**: max 1.000 righe esportate via UI; 16 mesi di storico; ~10-12 URL/giorno Controllo URL via UI (2.000/giorno via API).
- **BigQuery export** (gratuito, dati grezzi giornalieri): analisi che la UI non consente — CTR anomalo, decay temporale, branded/non-branded, attribution AIO via `&udm=14`.

## Anti-patterns
- **Agire d'impulso su un calo**: procedi per i 7 step, non riscrivere tutto.
- **Valutare la crescita senza contesto**: +10% può essere fallimento se il mercato è cresciuto del 30% (usa Trends).
- **Combinare Disallow + noindex** (vedi ch08) emerge spesso nei cali da deindicizzazione accidentale.

## Key Takeaways
1. Consulta il Search Status Dashboard PRIMA di diagnosticare un calo: spesso è lato Google.
2. Senza eventi di conversione in GA4, non hai metriche di business.
3. Imposta alert email su Azioni manuali.
4. Calo graduale → algoritmico; brusco → tecnico o manuale.

## Connects To
- **Ch 17/18** (Exec): Search Console UI/API, novità 2026, quote.
- **Ch 13** (SEO): rapporto Esperienza sulla pagina (CWV).
- **Ch 20** (Exec): albero decisionale ufficiale "Debug Search Traffic Drops".
