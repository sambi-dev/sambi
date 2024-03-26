import Link from 'next/link';

import { cn } from '@yocxo/ui';
import { buttonVariants } from '@yocxo/ui/button';
import { Container } from '@yocxo/ui/container';
import { ArrowRightIcon } from '@yocxo/ui/icons';
import { Logo } from '@yocxo/ui/logo';

export default function NotFound() {
  return (
    <div className="relative flex flex-auto items-center bg-gradient-to-b from-primary/20 from-10% via-card via-40% to-background to-90%">
      <Link href="/" className="absolute left-4 top-4 md:left-8 md:top-8">
        <Logo fillOnHover className="absolute left-8 top-8 h-8" />
      </Link>
      <Container className="flex flex-col items-center py-16 text-center sm:py-20 lg:py-32">
        <h1 className="block font-mono text-sm font-semibold uppercase tracking-widest text-primary">
          404{' '}
          <span className="font-sans text-lg text-secondary-foreground">
            ::
          </span>{' '}
          Not found
        </h1>
        <h2 className="mt-6 block max-w-4xl font-mono text-4xl font-semibold tracking-tighter text-foreground [text-wrap:balance] sm:text-5xl">
          Hmmm... this is embarassing
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          Sam broke something, again. Sorry, but the page that is supposed to be
          here isn&apos;t.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            aria-label="Go to yocxo.com home page"
            className={cn(buttonVariants())}
          >
            Take me home
            <ArrowRightIcon className="ml-2 w-3 flex-none fill-current" />
          </Link>
          <Link
            href="https://github.com/yocxo/studio/issues/new/choose"
            aria-label="Contact Yo CXO support on Github in a new window"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: 'link' }),
              'text-secondary-foreground',
            )}
          >
            Yell at Sam
            <ArrowRightIcon className="ml-2 w-3 flex-none fill-current" />
          </Link>
        </div>
      </Container>
    </div>
  );
}
