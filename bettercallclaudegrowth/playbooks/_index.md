# GTM Routing Matrix — il cervello di gtm-buddy e gtm-orchestrator

Questo file è la **single source of truth per l'instradamento**. Sia il router `gtm-buddy` sia la pipeline `gtm-orchestrator` lo leggono per: (1) classificare la situazione dell'utente in **archetipo × stadio**, (2) scegliere la **sequenza di skill/command** giusta, (3) decidere **canale primario, enfasi e cosa saltare**.

Non duplicare qui i framework: vivono nelle `skills/` (richiamate **per nome**, auto-attivazione). Qui vive solo la **logica di scelta**.

> **Come leggere i file di questa cartella:** sono file bundled del plugin → si aprono con Bash via `cat "${CLAUDE_PLUGIN_ROOT}/playbooks/<file>.md"`, **non** con path relativi (che si risolverebbero contro la cwd dell'utente e fallirebbero). I link `(coaching-services.md)` qui sotto sono solo riferimenti al nome file.

---

## 1. Come classificare la situazione (archetipo)

Deduci l'archetipo dai segnali nell'input utente. Se ambiguo, fai **1 sola domanda** di disambiguazione, poi procedi.

| Archetipo | Segnali di riconoscimento | Playbook |
|---|---|---|
| **coaching** | servizio ad alto tocco, personal brand, consulenza, corsi/info-product, "vendo la mia competenza", 1-pochi erogatori | [coaching-services.md](coaching-services.md) |
| **b2b-saas** | software in abbonamento, trial/demo, MRR/ARR, buyer ≠ user, ciclo di vendita, "trial/onboarding/churn" | [b2b-saas.md](b2b-saas.md) |
| **b2c** | prodotto/brand al consumatore, acquisto d'impulso o emotivo, AOV basso-medio, volume; include **e-commerce/DTC** | [b2c-product.md](b2c-product.md) |
| **local-service** | raggio geografico, "officine/studio/ristorante/negozio", clienti in zona, Google Maps/recensioni contano | [local-service.md](local-service.md) |
| **established-no-marketing** | azienda con fatturato e clienti ma **senza reparto/processo marketing**; cresciuta per passaparola; vuole struttura | [established-no-marketing.md](established-no-marketing.md) |

> `established-no-marketing` è uno **scenario trasversale**: si combina con l'archetipo merceologico sottostante (spesso b2b-saas, local-service o b2c). Quando lo riconosci, leggi *entrambi* i playbook (lo scenario + l'archetipo merceologico).
>
> **Alias:** `ecommerce` (valore selezionabile in `userConfig.archetipo`) è un **alias di `b2c`** → usa `b2c-product.md`. Un **B2C senza checkout online** (prodotto retail/offline) è comunque `b2c`, ma vedi la nota "senza carrello" nel suo playbook. Un **coaching/servizio B2B** resta `coaching` per offerta/posizionamento, ma il canale è **outbound** (warm/cold via `gtm-leads`), non una skill dedicata.

## 2. Come classificare lo stadio (modificatore)

| Stadio | Segnali | Effetto sulla sequenza |
|---|---|---|
| **micro-launch** | idea/MVP, budget ~0, 1 persona, "voglio testare/validare", nessun cliente o pochissimi | percorso **corto e a costo zero**: jobs → offerta → 1 canale organico → misura. Vedi [micro-launch.md](micro-launch.md) |
| **scaling** | ha traction/primi clienti, vuole crescere in modo ripetibile | percorso **completo** con enfasi su lead engine + canali a pagamento + email |
| **established** | azienda avviata, risorse, ma GTM non strutturato | percorso completo con enfasi su **posizionamento/sistematizzazione** e misura; spesso parte da audit del esistente |

Default se non deducibile: **scaling** (il percorso completo bilanciato).

## 3. Matrice archetipo × sequenza consigliata

La colonna "Sequenza" è l'ordine di `/gtm-*` che gtm-buddy propone (e può eseguire in automatico). "Canale" è il `default_channel` consigliato quando l'utente non lo forza.

| Archetipo | Canale primario | Sequenza consigliata | Enfasi | Tende a saltare |
|---|---|---|---|---|
| **coaching** | content organico + email | `gtm-jobs` → `gtm-posizionamento` → `gtm-offerta` → `gtm-leads`* → `gtm-contenuti` → `gtm-copy` → `gtm-email` | Personal Monopoly, offerta high-ticket, prova/autorità. *(\*il warm outreach alla rete parte subito/in parallelo: è la prima fonte di ricavo; `gtm-leads` lo sistematizza)* | IG ads pagati nei primi step |
| **b2b-saas** | seo + email (+ outbound) | `gtm-jobs` → `gtm-posizionamento` → `gtm-offerta` → `gtm-leads` → `gtm-seo` → `gtm-email` → `gtm-contenuti` → `gtm-copy` | nonconsumption, attivazione/Little Hire, lead engine, payback CAC | IG ads (raro per B2B) |
| **b2c** | instagram + email | `gtm-jobs` → `gtm-offerta` → `gtm-posizionamento` → `gtm-instagram` → `gtm-copy` → `gtm-email` → `gtm-contenuti` | dimensione emotiva/sociale, creative, retargeting, AOV/ROAS | SEO lunga se il ciclo è impulsivo |
| **local-service** | seo (local) + instagram | `gtm-jobs` → `gtm-posizionamento` → `gtm-offerta` → `gtm-seo` → `gtm-leads` → `gtm-instagram` → `gtm-email` | trigger di circostanza, prossimità, recensioni, GBP | content engine ampio, programmatic |
| **established-no-marketing** | auto (dipende dal merceologico) | `gtm-buddy` audit → `gtm-posizionamento` → `gtm-offerta` → `gtm-leads` → canale dell'archetipo → `gtm-email` → misura | sistematizzare ciò che già funziona, non reinventare; quick win | nulla: prima si mette ordine |

## 4. Matrice stadio × profondità

| Stadio | /gtm completo? | Checkpoint critic | Note |
|---|---|---|---|
| **micro-launch** | No — percorso corto (jobs → offerta → 1 canale organico → misura) | 1 (sull'offerta) | costo zero, 1 canale, time-to-first-win < 14 giorni |
| **scaling** | Sì — pipeline completa | 2 (offerta + funnel) | bilanciato |
| **established** | Sì, ma apri con **audit** del materiale esistente | 2 + audit iniziale | rispetta ciò che già genera ricavi |

## 5. Quando proporre cosa (decisione di gtm-buddy)

- **L'utente ha UNA domanda precisa** ("come prezzo?", "scrivimi una email") → indica **una singola skill/command** (es. `/gtm-offerta`, `/gtm-email`). Non imporre la pipeline.
- **L'utente è a 0 / vuole un piano** → proponi la **sequenza** dell'archetipo (sezione 3) e offri di eseguirla, oppure `/gtm` per la pipeline orchestrata end-to-end.
- **L'utente è established e disordinato** → parti da **audit** (gtm-buddy interroga lo stato attuale) prima di generare.
- **Situazione ambigua** → 1 domanda di disambiguazione (archetipo o stadio), mai più di una prima di dare valore.

## 6. Mappa command → skill (integrità referenziale)

Usata anche dal validatore `validate-content.js`. Ogni command carica le skill indicate (leggendo `skills/<nome>/SKILL.md`).

| Command | Skill |
|---|---|
| `/gtm-buddy` | (router: legge questo indice; non carica skill di dominio) |
| `/gtm` | tutte, via `gtm-orchestrator` |
| `/gtm-jobs` | `christensen-jobs` |
| `/gtm-posizionamento` | `butcher-productize`, `doing-content-right` |
| `/gtm-offerta` | `hormozi-offers` |
| `/gtm-leads` | `hormozi-leads` |
| `/gtm-contenuti` | `doing-content-right` |
| `/gtm-copy` | `drew-sucks-framework` |
| `/gtm-email` | `advanced-email-marketing` |
| `/gtm-seo` | `seo-2026-sota` |
| `/gtm-instagram` | `instagram-performance-marketing` |
