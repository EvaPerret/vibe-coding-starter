import 'server-only';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

export function getDb() {
  const url = process.env.DATABASE_URL?.trim();

  if (!url) {
    throw new Error('Renseignez DATABASE_URL côté serveur avant d’utiliser la base Neon.');
  }

  return drizzle(neon(url), { schema });
}
