import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';

import NextAuth from 'next-auth';

import { createRatelimiter } from '#/lib/upstash';

import { authConfig } from '../auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)', '/'],
};

// Upstash rate limiter
export async function middleware(request: NextRequest) {
  const ratelimit = createRatelimiter(5, '60 s');

  const ip = request.ip ?? '127.0.0.1';
  const success = await ratelimit.limit(ip);
  if (!success) {
    return NextResponse.redirect(new URL('/oops', request.url));
  }

  return NextResponse.next();
}
