---
description: Scrive copy pronto all'uso (email, landing o post) applicando il framework SUCKS al tuo input e settore.
argument-hint: formato (email|landing|post) + brief, offerta o bozza da trasformare. Es. "landing: software gestionale officine"
---

# /gtm-copy - Copy che SUCKS (nel senso buono): Specific, Useful, Clear, Kept simple, Structured

Questo comando applica la skill **drew-sucks-framework**. Rispetta `userConfig.output_language` (IT default), `userConfig.settore`, `userConfig.brand_voice` e, se il formato non e' esplicitato, `userConfig.default_channel`.

## Passi

1. **Carica la skill.** Richiama per nome la skill `drew-sucks-framework` (si attiva dalla sua description; non usare path di file): usa la cheatsheet per il run-through pre-pubblicazione e approfondisci patterns e capitoli (proof, curiosita', struttura) quando servono. NON riassumere la teoria all'utente: applicala.

2. **Inquadra l'input.** Da `$ARGUMENTS` ricava il formato richiesto (email / landing / post) e il brief. Se il formato manca, deducilo dal brief; in mancanza, mappa `userConfig.default_channel` (email→email, instagram→post, seo→landing; `auto`→deduci dal contesto). Identifica One True Fan, un problema, una soluzione (Rule of One) calati nel `settore`.

3. **Applica SUCKS a `$ARGUMENTS`:**
   - **S — Specific**: Rule of One + numeri non tondi e dettagli concreti del settore.
   - **U — Useful / Unique / Undeniable**: payoff chiaro per il lettore-eroe, angolo "How-I" + meccanismo con nome, e Persuasion Proof Stack (associazione → tuoi risultati → risultati cliente).
   - **C — Clear / Curious / Conversational**: frasi pulite, i 4 trigger di curiosita' negli hook, tono nel `brand_voice` ("lo direi di persona?").
   - **K — Kept simple**: parole piccole, regola di 1/3, leggibilita' bassa.
   - **S — Structured**: formattazione skimmabile e slippery slope verso la CTA.

4. **Produci il copy finale** gia' nel formato richiesto:
   - **email**: oggetto + 2-3 varianti di hook, corpo, CTA.
   - **landing**: hero (headline + sub), sezioni con sottotitoli, proof, CTA.
   - **post**: hook, sviluppo skimmabile, chiusura/CTA per il canale.

5. **Chiudi con la checklist SUCKS** (S/U/C/K/S spuntati) e 1-2 note su cosa rafforzare se l'utente fornira' piu' proof o dati.

> **Red-team (opzionale).** Oltre alla self-checklist, invoca l'agent `gtm-critic` per un audit SUCKS avversariale del copy (Specific/Undeniable/Clear/Structured: dove manca la Rule of One, il Persuasion Proof Stack, l'hook?), poi integra i fix.
