import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  shared: {
    NODE_ENV: z
      .enum(['development', 'production', 'test'])
      .default('development'),
  },
  server: {
    AUTH_SECRET: z.string(),
    EXA_API_KEY: z.string(),
    KV_URL: z.string(),
    KV_REST_API_URL: z.string(),
    KV_REST_API_TOKEN: z.string(),
    KV_REST_API_READ_ONLY_TOKEN: z.string(),
    OPENAI_API_KEY: z.string(),
    OPENAI_API_MODEL: z.string(),
    OPENAI_API_ORG: z.string(),
    SPECIFIC_API_BASE: z.string(),
    SPECIFIC_API_KEY: z.string(),
    SPECIFIC_API_MODEL: z.string(),
    TAVILY_API_KEY: z.string(),
    UPSTASH_REDIS_REST_TOKEN: z.string(),
    UPSTASH_REDIS_REST_URL: z.string(),
    USE_SPECIFIC_API_FOR_WRITER: z.string(),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string(),
  },

  runtimeEnv: {
    AUTH_SECRET: process.env.AUTH_SECRET,
    EXA_API_KEY: process.env.EXA_API_KEY,
    KV_URL: process.env.KV_URL,
    KV_REST_API_URL: process.env.KV_REST_API_URL,
    KV_REST_API_TOKEN: process.env.KV_REST_API_TOKEN,
    KV_REST_API_READ_ONLY_TOKEN: process.env.KV_REST_API_READ_ONLY_TOKEN,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NODE_ENV: process.env.NODE_ENV,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    OPENAI_API_MODEL: process.env.OPENAI_API_MODEL,
    OPENAI_API_ORG: process.env.OPENAI_API_ORG,
    SPECIFIC_API_BASE: process.env.SPECIFIC_API_BASE,
    SPECIFIC_API_KEY: process.env.SPECIFIC_API_KEY,
    SPECIFIC_API_MODEL: process.env.SPECIFIC_API_MODEL,
    TAVILY_API_KEY: process.env.TAVILY_API_KEY,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    USE_SPECIFIC_API_FOR_WRITER: process.env.USE_SPECIFIC_API_FOR_WRITER,
  },
  skipValidation:
    !!process.env.CI ||
    !!process.env.SKIP_ENV_VALIDATION ||
    process.env.npm_lifecycle_event === 'lint',
});
