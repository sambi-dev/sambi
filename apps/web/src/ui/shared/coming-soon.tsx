import React from 'react';
import Link from 'next/link';

import { cn } from '@sambi/ui';
import { buttonVariants } from '@sambi/ui/button';

import { PageIntro } from '#/ui/page-intro';

interface ComingSoonProps {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  buttonText: string;
}

export default function ComingSoon({
  eyebrow,
  title,
  children,
  buttonText,
}: ComingSoonProps) {
  return (
    <div className="bg-gradient-to-b from-background via-card to-background">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <PageIntro eyebrow={eyebrow} title={title} centered={true}>
          {children}
        </PageIntro>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/showcase"
            aria-label="Visit our showcase page"
            className={cn(buttonVariants())}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}
