---
description: Strategia contenuti (niche, canali, pilastri) e calendario editoriale basati sui framework di "Doing Content Right".
argument-hint: tema/prodotto + audience target (es. "tool gestione officine per meccanici indipendenti")
---

# /gtm-contenuti - Strategia contenuti e calendario editoriale

Applica la skill **doing-content-right** all'input dell'utente.

Rispetta `userConfig`: scrivi in `output_language` (IT di default), calibra tono e lessico su `brand_voice`, contestualizza tutto sul `settore`, e privilegia `default_channel` quando scegli i canali di distribuzione.

## Passi

1. **Carica la skill.** Richiama per nome la skill `doing-content-right` (si attiva dalla sua description; non usare path di file) e applicane i framework, approfondendo con cheatsheet, patterns e il capitolo pertinente (niche, distribuzione, SEO, monetizzazione) quando servono.

2. **Applica i framework a `$ARGUMENTS` e al settore.** Non copiare il contenuto del libro: usa per nome questi framework e adattali al caso concreto:
   - **Personal Monopoly** + **niche & positioning** → definisci la nicchia difendibile e il posizionamento (incluso il "what for who" in una frase).
   - **canali di distribuzione** → seleziona e priorizza i canali coerenti con `default_channel` e il settore.
   - **SEO** → individua i temi a intento informazionale e le opportunità long-tail.
   - **crescita audience** e **monetizzazione** → indica la leva di crescita e l'orizzonte di monetizzazione coerenti col posizionamento.

3. **Produci l'output strutturato:**
   - **Strategia contenuti** — (a) Niche & positioning; (b) Canali di distribuzione prioritizzati con razionale; (c) 3-5 pilastri editoriali ancorati al Personal Monopoly e al settore.
   - **Calendario editoriale** — tabella su 4 settimane: per ogni uscita indica data/settimana, pilastro, formato, canale, angolo/titolo e intento (informazionale/awareness/conversione).

Mantieni l'output azionabile e fedele alla `brand_voice`; segnala dove tattiche o metriche del libro (2020) vanno verificate prima di agire.

> **Red-team (opzionale).** Invoca l'agent `gtm-critic` per stressare strategia e calendario (nicchia davvero difendibile? pilastri ancorati al Personal Monopoly o generici? canali coerenti con l'archetipo?), poi integra i fix.
