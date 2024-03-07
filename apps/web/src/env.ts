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
    CLOUDFLARE_TURNSTILE_SECRET_KEY: z.string(),
    DB_HOST: z.string(),
    DB_NAME: z.string(),
    DB_PASSWORD: z.string(),
    DB_USERNAME: z.string(),
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),
    RESEND_API_KEY: z.string(),
    RESEND_AUDIENCE_ID: z.string(),
    RESEND_BCC_ADDRESS: z.string(),
    RESEND_FROM_ADDRESS: z.string(),
    SAMBI_SUPPORT_EMAIL: z.string(),
    TURBO_TEAM: z.string(),
    TURBO_TOKEN: z.string(),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string(),
  },

  runtimeEnv: {
    AUTH_DISCORD_ID: process.env.AUTH_DISCORD_ID,
    AUTH_DISCORD_SECRET: process.env.AUTH_DISCORD_SECRET,
    AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID,
    AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,
    AUTH_SECRET: process.env.AUTH_SECRET,
    CLOUDFLARE_TURNSTILE_SECRET_KEY:
      process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_USERNAME: process.env.DB_USERNAME,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NODE_ENV: process.env.NODE_ENV,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_AUDIENCE_ID: process.env.RESEND_AUDIENCE_ID,
    RESEND_BCC_ADDRESS: process.env.RESEND_BCC_ADDRESS,
    RESEND_FROM_ADDRESS: process.env.RESEND_FROM_ADDRESS,
    SAMBI_SUPPORT_EMAIL: process.env.SAMBI_SUPPORT_EMAIL,
    TURBO_TEAM: process.env.TURBO_TEAM,
    TURBO_TOKEN: process.env.TURBO_TOKEN,
    VERCEL_ENV: process.env.VERCEL_ENV,
  },
  skipValidation:
    !!process.env.CI ||
    !!process.env.SKIP_ENV_VALIDATION ||
    process.env.npm_lifecycle_event === 'lint',
});
