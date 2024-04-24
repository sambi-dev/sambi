import type { Session } from '#/lib/types';

import { redirect } from 'next/navigation';

import { auth } from 'auth';

import { GeminiHero } from '#/ui/mai/hero/gemini-hero';

export default async function HomePage() {
  const session = (await auth()) as Session;

  if (session) {
    redirect('/research');
  }
  return (
    <div className="mx-auto w-full bg-background">
      <GeminiHero />
    </div>
  );
}
