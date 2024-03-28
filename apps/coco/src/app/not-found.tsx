import Link from 'next/link';

import { cn } from '@yocxo/ui';
import { buttonVariants } from '@yocxo/ui/button';
import { Container } from '@yocxo/ui/container';
import { ArrowRightIcon } from '@yocxo/ui/icons';

import { siteConfig } from '#/config/site';

export default function NotFound() {
  return (
    <div className="relative flex flex-auto items-center bg-primary">
      <Container className="flex flex-col items-center py-16 text-center sm:py-20 lg:py-32">
        <h1 className="block font-mono text-base font-semibold uppercase tracking-widest text-secondary/80">
          404 :: Not found
        </h1>
        <h2 className="mt-6 block max-w-4xl font-mono text-4xl font-semibold tracking-tighter text-primary-foreground [text-wrap:balance] sm:text-5xl">
          Well that sucks
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-pretty text-muted">
          Rebekah was probably fiddling around with hotfixes. She&apos;s a
          menace. We couldn&apos;t find the chat or page you need.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            aria-label="Go to chat.yocxo.com home page"
            className={cn(buttonVariants({ variant: 'secondary' }))}
          >
            Take me home
            <ArrowRightIcon className="ml-2 w-3 flex-none fill-current" />
          </Link>
          <Link
            href={siteConfig.links.support}
            aria-label="Contact Yo! CXO support on Github in a new window"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: 'link' }),
              'text-secondary',
            )}
          >
            Yell at Sam instead
            <ArrowRightIcon className="ml-2 w-3 flex-none fill-current" />
          </Link>
        </div>
      </Container>
    </div>
  );
}
