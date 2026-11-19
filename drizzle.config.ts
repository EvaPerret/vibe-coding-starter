import { loadEnvConfig } from '@next/env';
import { defineConfig } from 'drizzle-kit';

loadEnvConfig(process.cwd(), true);

const migrationUrl = process.env.DATABASE_URL_UNPOOLED?.trim();

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/db/schema.ts',
  out: './drizzle',
  ...(migrationUrl ? { dbCredentials: { url: migrationUrl } } : {}),
});
