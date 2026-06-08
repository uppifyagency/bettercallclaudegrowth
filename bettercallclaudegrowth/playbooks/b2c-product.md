# Playbook — B2C / prodotto al consumatore (incl. e-commerce/DTC)

**Quando si applica:** prodotto o brand venduto al consumatore finale. Acquisto **emotivo/impulsivo o d'identità**, AOV basso-medio, conta il **volume** e il costo di acquisizione. Include e-commerce/DTC, app consumer, abbonamenti B2C. `ecommerce` (valore di config) instrada qui.

> **Variante SENZA checkout online** (prodotto retail/offline, vendita in negozio o tramite distributori): **salta** le meccaniche e-commerce (carrello abbandonato, RFM transazionale, Pixel di acquisto). Usa l'email come **recall/lista d'attesa/recensioni**, l'IG/Meta geo per il punto vendita, e misura su **lead/visite al negozio/sell-through**, non su ROAS di checkout. Il resto del playbook (Jobs emotivo, offerta, creative) resta valido.

## Job to Be Done tipico (lente Christensen)
Dimensione **emotiva e sociale spesso dominante** (come mi fa sentire, cosa dice di me). La circostanza/trigger conta più del demografico ("quando mi succede X, voglio Y"). Il concorrente reale può essere un'altra spesa per lo stesso "lavoro emotivo", non un prodotto della stessa categoria (il Milk Shake Dilemma è qui al massimo).

## Sequenza GTM consigliata
`gtm-jobs` → `gtm-offerta` → `gtm-posizionamento` → `gtm-instagram` → `gtm-copy` → `gtm-email` → `gtm-contenuti`

- **Offerta presto:** in B2C la conversione si gioca su offerta + creative. Grand Slam adattata: bundle, garanzia ("soddisfatto o rimborsato"), urgenza/scarsità *oneste*, prezzo ancorato.
- **Instagram/Meta performance come motore:** `instagram-performance-marketing` — obiettivo conversioni, Custom→Lookalike, creative video/UGC 2-3 varianti orientate al CTR, learning phase ~50 eventi, retargeting via Pixel. Guardrail **ROAS/CPA**.
- **Email/SMS = recupero margine:** carrello abbandonato, post-acquisto, winback. Per e-commerce la **segmentazione RFM** è centrale (usa `advanced-email-marketing`).
- **Copy = hook + desiderio:** SUCKS calato sul lettore-eroe, prova sociale, slippery slope alla CTA.

## Canale primario
**Instagram/Meta ads + email/SMS.** SEO/content come canale di lungo periodo e difesa del margine (riduce dipendenza dal paid), non come motore iniziale se il ciclo è impulsivo.

## Core Four (priorità)
1. **Paid ads** (Meta/IG) — il motore B2C per eccellenza →
2. **Content** (creator/UGC, organico) →
3. Affiliati/influencer →
4. Warm/cold outreach (marginale in B2C puro).

## KPI nord + guardrail
- Nord: **ROAS**, **CPA vs margine di contribuzione**, **AOV**, **tasso di riacquisto**.
- Guardrail: **CAC recuperato sul primo ordine o entro il ciclo di cassa** (Client-Financed Acquisition, `cfa-calculator`). Senza riacquisto/AOV sufficiente, il paid B2C va in perdita: prima sistema offerta+AOV, poi scala lo spend.

## Trappole comuni
- Scalare il budget ads prima che la creative e l'offerta siano validate (front-loading su un'offerta debole brucia cassa).
- Ignorare l'email/SMS: in e-commerce è dove sta il margine recuperato.
- Posizionamento solo "feature/prezzo" in un acquisto emotivo.
