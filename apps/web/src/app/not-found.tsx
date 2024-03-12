import Link from 'next/link';

import { cn } from '@sambi/ui';
import { buttonVariants } from '@sambi/ui/button';

import { Container } from '#/ui/shared/container';
import { ArrowIcon } from '#/ui/shared/icons';

export default function NotFound() {
  return (
    <div className="relative flex flex-auto items-center">
      <Container className="flex flex-col items-center py-16 text-center sm:py-20 lg:py-32">
        <p className="text-base font-medium tracking-tight text-primary">404</p>
        <h1 className="mt-6 font-mono text-5xl font-semibold text-foreground sm:text-6xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg tracking-tight text-muted-foreground">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Link
          href="/"
          aria-label="Go to sambi.dev home page"
          className={cn(buttonVariants({ variant: 'link' }), 'mt-6 text-base')}
        >
          Go to home page
          <ArrowIcon className=" ml-2 w-3 flex-none fill-current" />
        </Link>
      </Container>
    </div>
  );
}
