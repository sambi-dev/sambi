import React from 'react';
import Link from 'next/link';

import { cn } from '@yocxo/ui';
import { buttonVariants } from '@yocxo/ui/button';
import { ArrowRightIcon } from '@yocxo/ui/icons';

import { FadeIn } from '#/ui/fade-in';
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
        <FadeIn className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/showcase"
            aria-label="Visit our showcase page"
            className={cn(buttonVariants())}
          >
            {buttonText}
            <ArrowRightIcon className="ml-2 w-3 flex-none fill-current" />
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
