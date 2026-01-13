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
1. Run `npm run build`; Pages output dir is `dist` (see `astro.config.mjs`).
2. Create a Pages project, select this repo, set **Build command** `npm run build` and **Build output** `dist`.
3. Enable **Functions**; Pages will pick up `src/pages/api/rsvp.ts`.
4. Provision storage (choose one):
   - **D1**: create database, then set binding `DB` in `wrangler.toml` and in Pages project settings. Apply schema with `wrangler d1 migrations apply <db>` using `migrations/001_init.sql`.
   - **KV**: create namespace, set binding `RSVP_KV` in `wrangler.toml`/Pages settings. KV is used if D1 is absent.

## Dev testing
- Submit the form at `/rsvp`; check Pages Function logs in Cloudflare dashboard or `wrangler pages dev` if you prefer.

## Structure
- `src/pages/[lang]/index.astro` – homepage + timeline (en/es/bg)
- `src/pages/[lang]/info.astro` – travel, stay, dress code, tips (en/es/bg)
- `src/pages/[lang]/rsvp.astro` – RSVP form UI (en/es/bg)
- `src/pages/api/rsvp.ts` – Pages Function storing RSVPs
- `migrations/001_init.sql` – D1 schema
- `public/leaf.svg`, `public/hero.svg` – decorative assets
