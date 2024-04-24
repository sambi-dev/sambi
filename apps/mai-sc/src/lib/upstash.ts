import type { RatelimitConfig } from '@upstash/ratelimit';

import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

import { env } from '#/env';

type LocalDuration =
  | `${number} ms`
  | `${number} s`
  | `${number} m`
  | `${number} h`
  | `${number} d`;

const ratelimitRedis = new Redis({
  url: env.UPSTASH_REDIS_REST_URL ?? '',
  token: env.UPSTASH_REDIS_REST_TOKEN ?? '',
});

export const createRatelimiter = (
  requests: number,
  duration: LocalDuration = '10 s',
) => {
  if (process.env.NODE_ENV !== 'development') {
    const config: RatelimitConfig = {
      redis: ratelimitRedis,
      limiter: Ratelimit.slidingWindow(requests, duration),
      prefix: 'mai',
      ephemeralCache: false,
      timeout: 5000,
      analytics: false,
    };

    return new Ratelimit(config);
  } else {
    return {
      limit: async () => ({ success: true }),
    };
  }
};
