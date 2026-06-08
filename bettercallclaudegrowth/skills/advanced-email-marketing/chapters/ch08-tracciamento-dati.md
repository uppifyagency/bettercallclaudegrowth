# Capitolo 8: Tracciamento & analisi dei dati

## Idea centrale
L'email marketing automation è un flusso basato su una strategia: va misurata. Servono KPI corretti **e** il presidio dei touchpoint dell'intero customer journey (Sbarzaglia). Il tracciamento (Zambon / Tag Manager Italia) è la spina dorsale dei dati.

## Framework introdotti
- **Tre configurazioni di tracciamento**:
  - **#1 Codice di tracciamento del tool di email marketing**: installa lo script della piattaforma DEM sul sito per legare le visite ai contatti.
  - **#2 Parametri UTM + API per creare segmenti in GA4**: tagga i link e usa le API per costruire audience in Google Analytics 4.
  - **Bonus: GA4 + tracciamento Server-Side** — sposta il tracciamento dal browser al server.
- **Vantaggi del Server-Side**:
  - aumenta la **precisione** dei dati (aggira ostacoli sul device: es. una telefonata mentre si aggiunge al carrello);
  - aumenta la **sicurezza** di Google Tag Manager;
  - più **flessibilità** sul trattamento dati → conformità Privacy UE;
  - ottimizza GTM → pagine più veloci.

## Concetti chiave
- **Touchpoint**: punti fondamentali del customer journey da monitorare oltre ai KPI finali della campagna.
- **KPI**: indicatori chiave; ricorda (ch01) la distinzione tra KPI *anticipatori* e risultati-chiave *ritardatari*. L'open rate è un KPI molto impattato dall'oggetto.
- **Contesto cookieless**: cookie di terza parte in dismissione (Cookiegeddon), provvedimenti Garante, iOS 14/15 → il server-side è una risposta tecnica (dettagli adv in ch10).

## Modelli mentali
- "Il tracciamento al servizio dell'email marketing automation (e viceversa)": i dati alimentano i flussi e i flussi generano dati da tracciare.
- Tratta la MA come un sistema misurabile end-to-end, non "una semplice sequenza di email".

## Anti-pattern
- Considerare la MA come una sequenza di email senza analisi → si perde il controllo delle performance.
- Affidarsi solo al tracciamento client-side nell'era della privacy → dati incompleti/imprecisi.

## Takeaway
1. Installa il codice di tracciamento DEM e collega le visite ai contatti.
2. Usa UTM + API per costruire segmenti/audience in GA4.
3. Valuta il tracciamento Server-Side per precisione, sicurezza, privacy e velocità.
4. Definisci pochi KPI rilevanti e presidia i touchpoint del journey, non solo la conversione finale.

## Collegamenti
- **Ch 1**: KPI nel piano (anticipatori vs ritardatari).
- **Ch 5**: i comportamenti sito come trigger.
- **Ch 10**: cookieless, ATT e first-party data nell'advertising.
