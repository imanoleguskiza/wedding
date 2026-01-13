import type { PagesFunction } from '@cloudflare/workers-types';

export interface Env {
  DB?: D1Database;
  RSVP_KV?: KVNamespace;
}

interface RSVPInput {
  names?: string;
  email?: string;
  attendance?: string;
  guests?: string | number;
  diet?: string;
  song?: string;
  message?: string;
}

const ensureTable = async (db: D1Database) => {
  // Lightweight safety to ensure the table exists in dev/preview.
  await db.prepare(`
    CREATE TABLE IF NOT EXISTS rsvps (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      names TEXT NOT NULL,
      email TEXT NOT NULL,
      attendance TEXT NOT NULL,
      guests INTEGER NOT NULL,
      diet TEXT,
      song TEXT,
      message TEXT,
      created_at TEXT NOT NULL
    );
  `).run();
};

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let body: RSVPInput;
  try {
    body = await request.json();
  } catch (err) {
    return new Response('Invalid JSON', { status: 400, headers: corsHeaders });
  }

  const names = body.names?.toString().trim();
  const email = body.email?.toString().trim();
  const attendance = body.attendance?.toString().trim();
  const guests = Number(body.guests ?? 1);
  const diet = body.diet?.toString().trim() ?? '';
  const song = body.song?.toString().trim() ?? '';
  const message = body.message?.toString().trim() ?? '';

  if (!names || !email || !attendance) {
    return new Response('Missing required fields', { status: 422, headers: corsHeaders });
  }

  const payload = {
    names,
    email,
    attendance,
    guests: Number.isFinite(guests) && guests > 0 ? Math.min(guests, 20) : 1,
    diet,
    song,
    message,
    created_at: new Date().toISOString()
  };

  try {
    if (env.DB) {
      await ensureTable(env.DB);
      await env.DB.prepare(
        `INSERT INTO rsvps (names, email, attendance, guests, diet, song, message, created_at)
         VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)`
      )
        .bind(
          payload.names,
          payload.email,
          payload.attendance,
          payload.guests,
          payload.diet,
          payload.song,
          payload.message,
          payload.created_at
        )
        .run();
    } else if (env.RSVP_KV) {
      const key = `rsvp:${Date.now()}:${Math.random().toString(36).slice(2, 8)}`;
      await env.RSVP_KV.put(key, JSON.stringify(payload));
    } else {
      console.warn('No storage binding configured; RSVP not persisted');
      return new Response('Storage is not configured', { status: 500 });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders }
    });
  } catch (err) {
    console.error('RSVP error', err);
    return new Response('Could not save RSVP', { status: 500, headers: corsHeaders });
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: corsHeaders
  });
};
