# Capitolo 3: Setup iniziale, Deliverability & GDPR

## Idea centrale
Prima di inviare qualsiasi email, metti a punto la piattaforma: autenticazione del dominio (deliverability), template, organizzazione delle liste, link di sistema e conformità GDPR. Sono fondamenta che evitano lo spam e abilitano la segmentazione.

## Framework introdotti
- **Setup mittente & dominio**: verifica l'email di invio + autentica via **parametri DNS** (reputation/deliverability). Usa **mittenti diversi** per separare comunicazioni personali e aziendali — il mittente, insieme a oggetto e preview text, è complice del tasso di apertura.
  - Aziendale: "Nome Azienda", o per reparto (Staff, Billing, Ordini, Abbonamenti).
  - Personale (per newsletter): "Jacopo di Studio Samo", "Jacopo from Studio Samo" → tassi di apertura più alti e flussi separabili per sender.
- **Template a taglie (S/M/L)**: prepara il template più completo e togli sezioni per crearne varianti.
  - **S**: titolo + creatività + box testo + CTA finale. **M**: + sezione cross-content. **L**: + sezione info aggiuntive.
  - **Skin stagionali**: Natale, Halloween, **Black Friday (BFCM)** — riadatta font/colori del modello principale (es. versione total dark per il BF).
  - **Plain-text**: email di puro testo come scritte di pugno → riduce il rischio spam; ottima combinata con email HTML.
- **GDPR (avv. Vercelloni)** — due criteri essenziali: rispetto dei principi sul trattamento + **consenso** dell'interessato.
  - Principi (art. 5): **minimizzazione** (solo dati necessari: per la newsletter bastano nome + email), **integrità e riservatezza**, **limitazione delle finalità**.
  - Pilastri: **privacy by design** e **privacy by default**.
  - Il consenso marketing dev'essere libero, esplicito (non tacito), separato per finalità, informato, preventivo, revocabile facilmente — e **va salvato/registrato** (onere del titolare).

## Concetti chiave
- **Soft spam**: eccezione al consenso → invio promozionale a chi ha **già acquistato** prodotti/servizi **analoghi**, purché a monte fosse offerta chiaramente l'opzione marketing.
- **Form contatti vs form newsletter**: nei form contatti serve un **secondo checkbox separato e facoltativo** per il marketing (mai obbligatorio).
- **Double opt-in**: link/email di conferma iscrizione.
- **Organizzazione liste**: poche liste + **attributi/tag** per segmenti dinamici "as you go" (vs liste separate per mercato/lingua o b2b/b2c/fornitori/partner).
- **Link di sistema**: personalizza pagine di modifica dati, disiscrizione, conferma; in unsubscribe offri un **piano B** (ridurre frequenza, scegliere argomenti) per frenare le cancellazioni.

## Modelli mentali
- "Il GDPR è un'opportunità, non solo un vincolo" (Mazzanti): spinge sulla Customer Retention e sul valore dei dati di prima parte.
- Pensa la lista come infrastruttura per i **segmenti dinamici** (interazioni, automazioni completate, sito/app, attributi/tag, date, CRM/CDP, consensi, geo, comportamenti d'acquisto).

## Anti-pattern
- Inviare senza autenticare il dominio → finire in spam.
- Checkbox marketing obbligatorio o consenso non salvato → violazione.
- Liste disordinate → segmentazioni impossibili.

## Takeaway
1. Autentica dominio (DNS) e diversifica i mittenti prima del primo invio.
2. Costruisci template S/M/L + skin stagionali + una variante plain-text.
3. Consenso marketing separato, esplicito, salvato; minimizza i dati raccolti.
4. Organizza le liste su attributi/tag per abilitare segmenti dinamici.

## Collegamenti
- **Ch 4**: oggetto/preview/mittente per il tasso di apertura.
- **Ch 7**: gli attributi/tag diventano segmenti.
