import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

import { env as authEnv } from '@yocxo/auth/env';

export const env = createEnv({
  extends: [authEnv],
  shared: {
    NODE_ENV: z
      .enum(['development', 'production', 'test'])
      .default('development'),
  },
  server: {
    BASEHUB_TOKEN: z.string(),
    DB_HOST: z.string(),
    DB_NAME: z.string(),
    DB_PASSWORD: z.string(),
    DB_USERNAME: z.string(),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string(),
    NEXT_PUBLIC_YOCXO_SUPPORT_EMAIL: z.string(),
  },

  runtimeEnv: {
    BASEHUB_TOKEN: process.env.BASEHUB_TOKEN,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_USERNAME: process.env.DB_USERNAME,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_YOCXO_SUPPORT_EMAIL:
      process.env.NEXT_PUBLIC_YOCXO_SUPPORT_EMAIL,
    NODE_ENV: process.env.NODE_ENV,
  },
  skipValidation:
    !!process.env.CI ||
    !!process.env.SKIP_ENV_VALIDATION ||
    process.env.npm_lifecycle_event === 'lint',
});
