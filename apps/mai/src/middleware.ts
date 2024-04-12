import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';

import { createRatelimiter } from './lib/upstash';

export const config = {
  matcher: '/',
};

export default async function middleware(request: NextRequest) {
  const ratelimit = createRatelimiter(5, '60 s');

  const ip = request.ip ?? '127.0.0.1';
  const success = await ratelimit.limit(ip);
  return success
    ? NextResponse.next()
    : NextResponse.redirect(new URL('/oops', request.url));
}
