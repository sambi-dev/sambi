import Link from 'next/link';

import { cn } from '@sambi/ui';
import { buttonVariants } from '@sambi/ui/button';

import { FadeIn } from '#/ui/fade-in';
import { Offices } from '#/ui/offices';
import { Container } from '#/ui/page-container';
import { ArrowIcon } from '#/ui/shared/icons';

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-card px-6 py-20 shadow-md sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-2xl">
            <h2 className="text-pretty font-mono text-2xl font-semibold tracking-tighter text-foreground sm:text-4xl">
              Tell us about your project
            </h2>
            <div className="mt-6 flex">
              <Link
                href="/contact"
                aria-label="Go to contact page to reach out to the sambi.dev crew."
                className={cn(buttonVariants({ size: 'sm' }))}
              >
                Say hello
                <ArrowIcon className=" ml-2 w-3 flex-none fill-current" />
              </Link>
            </div>
            <div className="mt-10 border-t pt-10">
              <h3 className="font-mono text-base font-medium tracking-tighter text-secondary-foreground">
                Working remotely from
              </h3>
              <Offices className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2" />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
}
