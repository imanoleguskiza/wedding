-- D1 migration: RSVP table
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
