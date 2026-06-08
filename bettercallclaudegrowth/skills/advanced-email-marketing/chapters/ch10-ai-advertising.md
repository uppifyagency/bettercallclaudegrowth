# Capitolo 10: AI, cookieless & advertising integrato

## Idea centrale
L'AI è già nella marketing automation (Send Time Optimization, Smart Sending, content AI), ma il vero salto è usarla per scalare i test e per anticipare il comportamento — mentre l'ecosystem si muove verso il cookieless e la prima parte dei dati diventa l'asset più prezioso.

## Framework introdotti
- **AI test vs A/B test classico**: l'AI esplora molte varianti in parallelo su piccoli gruppi e converge sulla vincente, senza attendere la significatività statistica. Integra il classico A/B (lineare: A vs B, poi vincente vs C) con test multivariate e ottimizzazione continua. In piattaforme come Klaviyo o ActiveCampaign il "Send Time Optimization" è già un AI test implicito sull'orario.
- **Cookieless world (scenario)**:
  - **Third-party cookie**: in dismissione progressiva (Google ha più volte rimandato, ma la direzione è definita — Cookiegeddon).
  - **ATT (App Tracking Transparency — Apple iOS 14/15+)**: consenso esplicito per il tracking cross-app → calo drastico della tracciabilità su dispositivi Apple. Impatto diretto su Meta Ads e sull'attribuzione.
  - **Risposta tecnica**: tracciamento server-side (→ ch08), Conversions API (Meta CAPI), Enhanced Conversions (Google), Privacy Sandbox.
- **First-party & zero-party data come moat competitivo**:
  - **First-party**: dati raccolti direttamente (visite sito, acquisti, email, CRM).
  - **Zero-party**: dati forniti *intenzionalmente* dall'utente (preferenze dichiarate in form, quiz, pop-up profilati → cfr. ch02/ch04).
  - Chi ha una lista email profilata è indipendente dai cambiamenti di piattaforma. L'email marketing diventa strategicamente difensivo oltre che offensivo.
- **Advertising integrato con email marketing**:
  - **Remarketing**: esporta i segmenti email (chi non ha aperto, chi ha cliccato ma non comprato, cluster RFM specifici) come Custom Audience su Meta/Google → mostra ads solo a chi è già in un flusso; aumenta la coerenza del messaggio e abbassa il CPM (audience calde).
  - **Lookalike**: usa i tuoi Champions (RFM) o i clienti con LTV alto come seed → la piattaforma trova persone simili per acquisizione. Qualità del seed = qualità del lookalike.
  - **Customer Match (Google)**: carica la lista email per fare remarketing su Search, Shopping, YouTube, Gmail Ads.
  - **Exclusion audience**: escludi chi è già cliente da campagne di acquisizione → evita sprechi e messaggi incongruenti.
  - **Full-funnel sync**: coordina le campagne adv con i flussi email — es. un utente nel Winback flow vede anche un ad "Bentornato/a" su Meta.

## Concetti chiave
- **Conversions API (CAPI)**: invio server-side degli eventi di conversione a Meta, indipendentemente dai cookie del browser.
- **Enhanced Conversions**: analogo Google — invia dati hashati dell'utente per migliorare l'attribuzione.
- **Audience overlap**: se non escludi, chi è già cliente (e in nurturing via email) viene incluso nelle campagne fredde → costi e messaggi sbagliati.
- **LTV come criterio di seed**: i lookalike basati su clienti ad alto LTV (non su tutti i clienti) hanno un CPM più alto ma un ROAS migliore.
- **AI generativa nelle email**: oggetti, testi e immagini generate da AI (GPT, Claude, Midjourney, Canva AI) accelerano la produzione — ma vanno testati; l'umano firma la strategia.

## Modelli mentali
- **"L'email list come primo party data fortress"**: nella crisi del cookie, chi possiede dati propri profilati può fare targeting preciso senza dipendere da terze parti. Investire nell'email list è investire in un asset sovrano.
- **"Segmenti email → targeting adv"**: i segmenti già validati in email (chi ha comprato 3+ volte, chi è At Risk RFM) diventano audience su Meta/Google senza sforzo aggiuntivo — stesso dato, doppio canale.
- **"AI accelera, il marketer decide"**: le AI attuali nelle ESP ottimizzano tempi/contenuti, ma non sostituiscono la strategia, la voce del brand, né la comprensione del cliente. Il risultato è marketer + AI, non uno vs l'altro.

## Anti-pattern
- **Dipendere solo da retargeting cookie-based** → volatilità crescente; costruisci la lista email come piano B (e piano A).
- **Usare tutta la lista come lookalike seed** → segnale diluito; usa solo i migliori cluster.
- **Dimenticare le exclusion audience** → paghi per mostrare ads di acquisizione a clienti fedeli già in flussi di retention.
- **Affidarsi solo all'AI per i contenuti** senza test → l'output AI è spesso generico; va testato come qualsiasi variante.

## Takeaway
1. Adotta il tracciamento server-side (ch08) + CAPI/Enhanced Conversions per sopravvivere al cookieless.
2. Tratta la lista email profilata come il tuo primo moat: è l'asset più stabile nel futuro privacy-first.
3. Esporta i segmenti RFM come Custom Audience (remarketing) e usa i Champions come seed per lookalike.
4. Usa AI test (STO, Smart Sending, contenuti) come acceleratore — non come sostituto della strategia.
5. Sincronizza sempre i messaggi email e adv per chi è in entrambi i flussi (full-funnel coerente).

## Collegamenti
- **Ch 3**: autenticazione dominio e deliverability (base tecnica).
- **Ch 7**: segmenti RFM e avanzati da esportare in advertising.
- **Ch 8**: server-side tracking, GA4, UTM (infrastruttura dati).
- **Ch 5**: LTV ed Expected Date Of Next Order come segnali per il seed dei lookalike.
