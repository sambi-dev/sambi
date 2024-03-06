import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  shared: {
    NODE_ENV: z
      .enum(['development', 'production', 'test'])
      .default('development'),
    VERCEL_ENV: z.enum(['development', 'preview', 'production']).optional(),
  },
  server: {
    AUTH_DISCORD_ID: z.string(),
    AUTH_DISCORD_SECRET: z.string(),
    AUTH_GITHUB_ID: z.string(),
    AUTH_GITHUB_SECRET: z.string(),
    AUTH_SECRET: z.string(),
    BETA_DB_HOST: z.string(),
    BETA_DB_NAME: z.string(),
    BETA_DB_PASSWORD: z.string(),
    BETA_DB_USERNAME: z.string(),
    DB_HOST: z.string(),
    DB_NAME: z.string(),
    DB_PASSWORD: z.string(),
    DB_USERNAME: z.string(),
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),
    TURBO_TEAM: z.string(),
    TURBO_TOKEN: z.string(),
  },
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },
  /**
   * Destructure all variables from `process.env` to make sure they aren't tree-shaken away.
   */

  runtimeEnv: {
    AUTH_DISCORD_ID: process.env.AUTH_DISCORD_ID,
    AUTH_DISCORD_SECRET: process.env.AUTH_DISCORD_SECRET,
    AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID,
    AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,
    AUTH_SECRET: process.env.AUTH_SECRET,
    BETA_DB_HOST: process.env.BETA_DB_HOST,
    BETA_DB_NAME: process.env.BETA_DB_NAME,
    BETA_DB_PASSWORD: process.env.BETA_DB_PASSWORD,
    BETA_DB_USERNAME: process.env.BETA_DB_USERNAME,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_USERNAME: process.env.DB_USERNAME,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    NODE_ENV: process.env.NODE_ENV,
    TURBO_TEAM: process.env.TURBO_TEAM,
    TURBO_TOKEN: process.env.TURBO_TOKEN,
    VERCEL_ENV: process.env.VERCEL_ENV,
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  },
  skipValidation:
    !!process.env.CI ||
    !!process.env.SKIP_ENV_VALIDATION ||
    process.env.npm_lifecycle_event === 'lint',
});
