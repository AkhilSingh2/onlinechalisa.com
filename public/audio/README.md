# Recitation audio

Drop-in audio for the reader's bottom player (`src/components/AudioPlayer.astro`).

## How to add audio for a chalisa

1. Place a file here named `<slug>.mp3` — the slug matches the JSON filename
   in `src/content/chalisas/` (e.g. `hanuman.mp3`, `shiv.mp3`, `durga.mp3`,
   `ganesh.mp3`, `shani.mp3`, `laxmi.mp3`, `saraswati.mp3`).
2. In that chalisa's JSON, set:

   ```json
   "audioUrl": "/audio/hanuman.mp3",
   "audioAttribution": "Recitation: <artist/source> · <license>"
   ```

3. That's it — the player button enables automatically. If `audioUrl` is set
   but the file is missing, the player degrades gracefully to a disabled
   "coming soon" state (no dead button).

## Licensing bar (important)

Only add audio you are legally allowed to host:

- Original recordings you own / commissioned, **or**
- Genuinely public-domain / CC0 recordings whose provenance you have verified.

Do **not** self-host commercial devotional recordings (T-Series, Tips, etc.),
even if a re-uploader has tagged them "CC" on the Internet Archive — those tags
are frequently invalid (the uploader does not own the recording) and hosting
them exposes the site to copyright takedowns.

Always record the source + license in `audioAttribution` so it shows under the
player and stays auditable.

## Recommended format

- MP3, 96–128 kbps mono is plenty for spoken recitation (small + clear).
- Trim to a single clean paath (~6–10 min), no long silences or loops.
