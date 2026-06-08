# BetterCallClaudeGrowth — Design Document

**Stato**: proposta di design — da approvare prima dello scaffolding del codice
**Data**: 2026-06-08
**Modello di riferimento**: `bettercallclaude_italia` (architettura plugin Claude Code a 5 livelli)
**Profilo**: *lean* — pipeline di orchestrazione + 2 agent, niente MCP, niente hook

> Nome di lavoro: **bettercallclaudegrowth**. È un parametro: si può rinominare in `bettercallgrowth`, `antygravity-gtm`, `growth-stack`… senza impatto strutturale. In questo documento uso `bettercallclaudegrowth` ovunque.

---

## 1. Obiettivo

Trasformare le 9 skill di marketing già prodotte (knowledge base estratte dai libri) in un **plugin Claude Code installabile e distribuibile**, che funzioni come `bettercallclaude_italia` ma per il **Go-To-Market**: un consulente GTM che incatena jobs → posizionamento → offerta → lead → contenuti → canali → email → misura.

Principio guida (la disciplina del senior engineer):
1. **Separation of concerns** — le skill restano conoscenza pura; i command sono orchestrazione sottile; nessuna conoscenza duplicata nei command.
2. **Start lean** — 2 agent, non 20. L'orchestratore e il critic. Gli altri si guadagnano sul campo.
3. **Packaging discipline** — versione unica allineata su 3 file, validata in CI, semver.

### Cosa NON costruiamo (e perché)
| Componente di bettercallclaude | Lo replichiamo? | Motivo |
|---|---|---|
| 7 server MCP (Cassazione, Normattiva…) | ❌ No | Il GTM gira interamente sulla conoscenza dei libri, in locale. Nessun dato esterno autorevole da interrogare. Zero infrastruttura. |
| Hook privacy (`privacy-check.js`) | ❌ No | Nessun segreto professionale da proteggere. Nessun guardrail necessario. |
| MCP server TypeScript proprio (ollama) | ❌ No | Non serve inferenza locale. |
| 20 agent | ❌ No | Solo 2 (orchestrator + critic). |

Risultato: un plugin **più semplice e più robusto** del modello — nessun server da mantenere, nessuna dipendenza di rete.

---

## 2. Mappatura skill → funnel GTM

| Skill (esistente) | Fase GTM | Command dedicato |
|---|---|---|
| `butcher-productize` | Posizionamento / Personal Monopoly | `/gtm-posizionamento` |
| `hormozi-offers` | Offerta (Grand Slam, Value Equation) | `/gtm-offerta` |
| `hormozi-leads` | Lead generation (Core Four) | `/gtm-leads` |
| `doing-content-right` | Contenuti / audience / niche | `/gtm-contenuti` |
| `drew-sucks-framework` | Copy & persuasione (SUCKS) | `/gtm-copy` |
| `advanced-email-marketing` | Email automation & nurturing | `/gtm-email` |
| `seo-2026-sota` | Canale: SEO / GEO 2026 | `/gtm-seo` |
| `instagram-performance-marketing` | Canale: Meta / IG ads | `/gtm-instagram` |

> Escluse dal plugin (non-GTM): `secure-source-code`, `book-to-skill`.

Mapping 1:1 skill → command, **più** un command orchestratore `/gtm` che le incatena tutte.

---

## 3. Struttura del repository (standalone, pushabile su GitHub)

```
bettercallclaudegrowth/                              ← root del repo GitHub
├─ .claude-plugin/
│  └─ marketplace.json                  ← vetrina: 1 plugin installabile
├─ package.json                         ← versione + metadati
├─ README.md                            ← cosa fa + come si installa
├─ LICENSE
├─ CHANGELOG.md
├─ scripts/
│  └─ validate-plugin.js                ← CI: schema + allineamento versioni
├─ .github/
│  └─ workflows/
│     └─ ci.yml                         ← esegue validate-plugin su ogni push
└─ bettercallclaudegrowth/                           ← IL PLUGIN (source: ./bettercallclaudegrowth)
   ├─ .claude-plugin/
   │  └─ plugin.json                    ← manifesto + userConfig
   ├─ README.md
   ├─ agents/
   │  ├─ gtm-orchestrator.md
   │  └─ gtm-critic.md
   ├─ commands/
   │  ├─ gtm.md                         ← PIPELINE completa
   │  ├─ gtm-jobs.md
   │  ├─ gtm-posizionamento.md
   │  ├─ gtm-offerta.md
   │  ├─ gtm-leads.md
   │  ├─ gtm-contenuti.md
   │  ├─ gtm-copy.md
   │  ├─ gtm-email.md
   │  ├─ gtm-seo.md
   │  └─ gtm-instagram.md
   └─ skills/                           ← le 9 skill COPIATE qui (plugin autocontenuto)
      ├─ christensen-jobs/
      ├─ butcher-productize/
      ├─ hormozi-offers/
      ├─ hormozi-leads/
      ├─ doing-content-right/
      ├─ drew-sucks-framework/
      ├─ advanced-email-marketing/
      ├─ seo-2026-sota/
      └─ instagram-performance-marketing/
```

**Doppio livello `bettercallclaudegrowth/bettercallclaudegrowth/`** = identico al modello: il livello esterno è la *vetrina* (marketplace), quello interno è il *plugin* vero (`source: ./bettercallclaudegrowth`). Permette `/plugin marketplace add <repo>` → `/plugin install bettercallclaudegrowth`.

> Le skill vengono **copiate** dentro `bettercallclaudegrowth/skills/`. Le originali in `Book to Skill/.claude/skills/` restano come backup/sorgente. Una nota futura: per evitare drift, l'unica copia "viva" sarà quella nel plugin.

---

## 4. Specifica dei file di configurazione

### 4.1 `.claude-plugin/marketplace.json`
```json
{
  "name": "bettercallclaudegrowth-marketplace",
  "owner": { "name": "Uppify Agency", "email": "email.vlad.vrinceanu@gmail.com" },
  "plugins": [
    {
      "name": "bettercallclaudegrowth",
      "description": "GTM Intelligence — posizionamento, offerte irresistibili (Hormozi), lead generation, copy (SUCKS), contenuti, SEO/GEO 2026, email automation e Instagram performance, orchestrati in una pipeline go-to-market completa.",
      "version": "0.1.0",
      "source": "./bettercallclaudegrowth",
      "author": { "name": "<NOME>" },
      "homepage": "https://github.com/<USER>/bettercallclaudegrowth",
      "repository": "https://github.com/<USER>/bettercallclaudegrowth",
      "license": "MIT",
      "category": "marketing"
    }
  ]
}
```

### 4.2 `bettercallclaudegrowth/.claude-plugin/plugin.json`
```json
{
  "name": "bettercallclaudegrowth",
  "version": "0.1.0",
  "description": "Consulente Go-To-Market: pipeline jobs→posizionamento→offerta→lead→contenuti→canali→email→misura, basata su 9 framework di marketing (Christensen Jobs to Be Done, Hormozi, Drew, Butcher, Frangioni, SEO/GEO 2026, Instagram performance).",
  "author": { "name": "<NOME>" },
  "userConfig": {
    "output_language": {
      "type": "string", "title": "Lingua output",
      "description": "Lingua preferita per gli output. IT o EN.",
      "default": "IT", "sensitive": false
    },
    "settore": {
      "type": "string", "title": "Settore / mercato",
      "description": "Settore di default del business (es. B2B SaaS, e-commerce moda, servizi locali). Ancora le risposte al contesto.",
      "default": "", "sensitive": false
    },
    "default_channel": {
      "type": "string", "title": "Canale primario",
      "description": "Canale di distribuzione preferito: seo | instagram | email | tutti.",
      "default": "tutti", "sensitive": false
    },
    "brand_voice": {
      "type": "string", "title": "Tono di voce",
      "description": "Tono del brand per copy e contenuti (es. diretto, autorevole, ironico).",
      "default": "", "sensitive": false
    }
  }
}
```
> Nota: `plugin.json` NON elenca esplicitamente commands/agents/skills — vengono **auto-scoperti** dalle cartelle convenzionali (`commands/`, `agents/`, `skills/`), esattamente come nel modello.

### 4.3 `package.json` (root)
```json
{
  "name": "bettercallclaudegrowth",
  "version": "0.1.0",
  "description": "GTM Intelligence plugin for Claude Code",
  "license": "MIT",
  "scripts": { "validate": "node scripts/validate-plugin.js" }
}
```

### 4.4 `scripts/validate-plugin.js` — checklist (porting dal modello)
Esegue in CI e in locale. Verifica:
- Esistono: `.claude-plugin/marketplace.json`, `bettercallclaudegrowth/.claude-plugin/plugin.json`, `package.json`, cartelle `bettercallclaudegrowth/agents`, `bettercallclaudegrowth/commands`, `bettercallclaudegrowth/skills`.
- `marketplace.json`: `name` presente; `plugins[]` non vuoto; ogni plugin ha `name/version/source/repository/license`; `source` inizia con `./`.
- `plugin.json`: `name/version/description` presenti.
- **Allineamento versioni**: `marketplace.json` ↔ `plugin.json` ↔ `package.json` identiche (fallisce se divergono).
- Ogni cartella in `skills/` contiene un `SKILL.md`.
- Ogni file in `commands/` e `agents/` ha frontmatter YAML valido con `description`.

---

## 5. I 2 agent

Formato (dal modello): file `.md` con frontmatter `name`, `description`, `model`, `tools`. Sono subagent invocati dai command.

### 5.1 `agents/gtm-orchestrator.md`
```yaml
---
name: gtm-orchestrator
description: "Orchestratore Go-To-Market. Guida la pipeline GTM completa, sequenzia le fasi, mantiene il contesto tra una fase e l'altra e applica la skill giusta per ogni fase."
model: sonnet
tools: [Read, Grep, Glob, Write]
---
```
**Responsabilità**
- Riceve il contesto business (prodotto, ICP, obiettivo) come input.
- Esegue le 7 fasi in sequenza (vedi §7), applicando per ognuna la/e skill rilevante/i (le legge da `skills/`).
- Mantiene uno stato condiviso: ciò che la fase N produce alimenta la fase N+1.
- Invoca `gtm-critic` ai checkpoint (offerta, funnel finale).
- Produce un deliverable unico: `gtm-plan.md` nella working dir dell'utente.

### 5.2 `agents/gtm-critic.md`
```yaml
---
name: gtm-critic
description: "Revisore avversariale del GTM. Red-teama l'offerta (punti deboli della Value Equation), il funnel (punti di fuga), il posizionamento e il copy. Restituisce critiche concrete e azionabili, non lodi."
model: sonnet
tools: [Read, Grep, Glob]
---
```
**Responsabilità** (l'equivalente del `contraddittorio` legale — il differenziatore)
- Sull'**offerta**: applica la Value Equation di Hormozi al contrario — dove il sogno è debole, la probabilità percepita bassa, il tempo/sforzo alti? Prezzi, garanzie, scarsità reggono?
- Sul **funnel**: dove perde lead? Coerenza messaggio offerta↔canale↔email? Frizioni?
- Sul **posizionamento**: è davvero differenziato (Personal Monopoly) o generico?
- Output: lista di debolezze classificate (Critica / Media / Minore) + fix proposto per ognuna.

---

## 6. I command

Formato (dal modello): file `.md` in `commands/` con frontmatter (`description`, `argument-hint`, opz. `allowed-tools`, `model`). Nome comando = nome file. Invocati come `/bettercallclaudegrowth:<nome>`.

### 6.1 Command specialista — template (esempio worked: `gtm-offerta.md`)
```yaml
---
description: "Costruisce un'offerta irresistibile (Grand Slam Offer) applicando i framework di $100M Offers."
argument-hint: "[prodotto/servizio + contesto, es. 'corso online di fotografia per principianti']"
---

# /gtm-offerta — Grand Slam Offer

Applica la skill **hormozi-offers** per costruire l'offerta.

1. Leggi la skill `hormozi-offers` (SKILL.md + cheatsheet/patterns se servono).
2. Dato l'input utente ($ARGUMENTS) e il `settore` da userConfig:
   - Identifica il mercato (Starving Crowd).
   - Costruisci la Value Equation: massimizza Dream Outcome + Perceived Likelihood; minimizza Time Delay + Effort/Sacrifice.
   - Aggiungi scarsità, urgenza, bonus, garanzia.
   - Nomina l'offerta.
3. (Opzionale) invoca l'agent `gtm-critic` per red-teamare l'offerta.
4. Output: scheda offerta strutturata + i fix del critic.
```
Gli altri 6 command specialista seguono lo stesso template, cambiando skill e logica:

| Command | Skill applicata | Output |
|---|---|---|
| `/gtm-posizionamento` | `butcher-productize` | ICP, posizionamento, Personal Monopoly |
| `/gtm-leads` | `hormozi-leads` | Piano Core Four (warm/cold/content/ads) + lead magnet |
| `/gtm-contenuti` | `doing-content-right` | Strategia contenuti/niche + calendario |
| `/gtm-copy` | `drew-sucks-framework` | Copy (email, landing, post) secondo SUCKS |
| `/gtm-email` | `advanced-email-marketing` | Workflow automation (welcome/drip/winback) |
| `/gtm-seo` | `seo-2026-sota` | Piano SEO/GEO 2026 |
| `/gtm-instagram` | `instagram-performance-marketing` | Setup campagne Meta/IG |

### 6.2 Command pipeline — `gtm.md` (il prodotto)
```yaml
---
description: "Pipeline GTM completa: posizionamento → offerta → lead → contenuti/copy → canali → email → misura. Produce un piano go-to-market completo."
argument-hint: "[descrizione business: prodotto, target, obiettivo]"
---
```
Il corpo delega all'agent `gtm-orchestrator`, passandogli `$ARGUMENTS` + userConfig, che esegue le 7 fasi del §7.

---

## 7. La pipeline `/gtm` (orchestrazione — il cuore)

Equivalente diretto del `legale-5step` del modello. 7 fasi sequenziali; ogni fase applica una skill e alimenta la successiva; 2 checkpoint del critic.

```
1. POSIZIONAMENTO & ICP      (butcher-productize)
        ↓  chi siamo, per chi, perché noi (Personal Monopoly)
2. OFFERTA                   (hormozi-offers)        ──► [CRITIC: red-team offerta]
        ↓  Grand Slam Offer ancorata all'ICP
3. LEAD GENERATION           (hormozi-leads)
        ↓  Core Four + lead magnet coerenti con l'offerta
4. CONTENUTI & COPY          (doing-content-right + drew-sucks-framework)
        ↓  motore di contenuti + copy persuasivo
5. CANALI                    (seo-2026-sota | instagram-performance-marketing)
        ↓  distribuzione sul canale scelto (default_channel)
6. EMAIL & NURTURING         (advanced-email-marketing)
        ↓  automation per convertire i lead
7. MISURA & ITERA            (KPI, loop)             ──► [CRITIC: red-team funnel]
        ↓
   DELIVERABLE: gtm-plan.md
```

**Regole di flusso**
- Ogni fase riceve il contesto cumulato dalle fasi precedenti (l'offerta vincola i lead magnet; il posizionamento vincola il copy; ecc.).
- Fase 5 sceglie il canale da `default_channel` (o tutti).
- I checkpoint del critic sono bloccanti "soft": espongono le debolezze, l'utente decide se iterare.
- Output finale: un singolo `gtm-plan.md` strutturato per fase, scritto nella working dir.

---

## 8. Installazione e distribuzione

**Per l'autore (push):**
```
git init && git add . && git commit -m "feat: bettercallclaudegrowth v0.1.0"
git remote add origin https://github.com/<USER>/bettercallclaudegrowth.git
git push -u origin main
```

**Per l'utente finale (install):**
```
/plugin marketplace add <USER>/bettercallclaudegrowth
/plugin install bettercallclaudegrowth
```
Poi: `/gtm <descrizione business>` per la pipeline, o i singoli `/gtm-offerta`, `/gtm-seo`, ecc.

**CI** (`.github/workflows/ci.yml`): su ogni push esegue `npm run validate` → blocca il merge se versioni disallineate o schema rotto.

---

## 9. Versioning

Semver. Versione **unica** in 3 file (`marketplace.json`, `plugin.json`, `package.json`), tenuta allineata da `validate-plugin.js`. Start a `0.1.0`. Bump:
- patch: fix di un command/skill;
- minor: nuovo command o canale;
- major: cambio struttura pipeline.

---

## 10. Decisioni aperte (da confermare in fase di build)

1. **Nome del plugin/repo**: `bettercallclaudegrowth` (default) vs `bettercallgrowth` / `antygravity-gtm` / altro.
2. **Licenza**: MIT (proposta) vs altro. Le skill derivano da libri di terzi → valutare se il repo va pubblico o privato (vedi nota copyright sotto).
3. **`<USER>` GitHub e `<NOME>` autore** da inserire nei manifest.
4. **Granularità canali fase 5**: un solo canale per run (da `default_channel`) o tutti e tre in parallelo nel piano.

> **Nota copyright/distribuzione**: le 9 skill sono knowledge base estratte da libri protetti (Christensen, Hormozi, Drew, Butcher, Frangioni, ecc.). Se il repo sarà **pubblico**, conviene che le skill contengano *framework e principi riformulati*, non testo verbatim dei libri, per evitare problemi di copyright. Se **privato/personale**, nessun problema. Da decidere prima del push.

---

## 11. Piano di build (dopo approvazione)

1. Creare struttura cartelle del repo.
2. Copiare le 9 skill in `bettercallclaudegrowth/skills/`.
3. Scrivere `marketplace.json`, `plugin.json`, `package.json`.
4. Scrivere `validate-plugin.js` + `ci.yml`.
5. Scrivere i 2 agent (`gtm-orchestrator`, `gtm-critic`).
6. Scrivere i 10 command (1 pipeline + 9 specialisti).
7. README + LICENSE + CHANGELOG.
8. `npm run validate` → verde.
9. Test locale: `/plugin install` da path locale, poi `/gtm`.
