# Wedding site (Astro + Cloudflare Pages)

A simple wedding website with homepage, practical information, and RSVP form backed by Cloudflare Pages Functions using D1 (or KV as fallback).

## Quickstart

```bash
npm install
npm run dev
```

Open http://localhost:4321.

## Customize
- Replace `public/hero.svg` with your couple photo (same filename or adjust `src/pages/index.astro`).
- Tweak colors/fonts in `src/styles/global.css`.
- Update copy in `src/pages/index.astro`, `src/pages/info.astro`, `src/pages/rsvp.astro`.

## Deploy to Cloudflare Pages
1. Run `npm run build`; Pages build output directory is `dist` (see `astro.config.mjs`).
2. Create a Pages project from this repo and set **Build command** to `npm run build`, **Deploy command** to `npm run build`, and **Build output** to `dist`.
3. Cloudflare Pages automatically publishes any Page Functions rooted in a `functions/` directory. The repository ships `functions/api/rsvp.ts`, so `/api/rsvp` will be routed to that handler once the project is deployed and Functions are enabled in the Pages settings.
4. Provision storage (choose one):
   - **D1**: create a database, copy the database name/ID into the `[[d1_databases]]` block in `wrangler.toml`, add the binding `DB` in the Pages project settings, and run `wrangler d1 migrations apply <database-name>` from this repo to execute `migrations/001_init.sql`.
   - **KV**: create a namespace, add a `RSVP_KV` binding in both `wrangler.toml` and the Pages settings. KV serves as a fallback when D1 is unavailable.

Once the first deployment completes, open the deployment details and check the **Functions** tab to confirm `/api/rsvp` is listed, then POST a small payload to that endpoint (via `curl` or the form) to verify RSVP submissions hit D1/KV.

## Dev testing
- Submit the form at `/rsvp`; check Pages Function logs in Cloudflare dashboard or `wrangler pages dev` if you prefer.

## Structure
- `src/pages/[lang]/index.astro` – homepage + timeline (en/es/bg)
- `src/pages/[lang]/info.astro` – travel, stay, dress code, tips (en/es/bg)
- `src/pages/[lang]/rsvp.astro` – RSVP form UI (en/es/bg)
- `functions/api/rsvp.ts` – Pages Function storing RSVPs
- `migrations/001_init.sql` – D1 schema
- `public/leaf.svg`, `public/hero.svg` – decorative assets
