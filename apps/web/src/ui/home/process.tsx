import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@sambi/ui';
import { buttonVariants } from '@sambi/ui/button';

import { processSteps } from '#/content/process-steps';
import { FadeIn } from '#/ui/fade-in';
import { SectionIntro } from '#/ui/section-intro';
import { Container } from '#/ui/shared/container';
import { ArrowIcon } from '#/ui/shared/icons';

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <SectionIntro
        title="How we roll"
        eyebrow="Process"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We&apos;ve broken things that were supposed to be{' '}
          <span className="line-through">simple</span> indestructible. Over the
          years, we&apos;ve{' '}
          <span className="line-through">
            learned to over pad our estimates
          </span>{' '}
          refined our workflow and slapped on labels like world-class. It just
          sounds better.
        </p>
      </SectionIntro>
      <Container size="lg" className="mt-16">
        <FadeIn>
          <ol className="grid grid-cols-1 gap-x-8 gap-y-10 [counter-reset:step] sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <li key={step.title} className="[counter-increment:step]">
                <div className="relative flex h-44 items-center justify-center rounded-2xl bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-background via-primary/80 to-card px-6 shadow-md dark:via-primary">
                  <div className="flex overflow-hidden rounded-lg shadow-sm">
                    <Image src={step.image} alt="" unoptimized />
                  </div>
                </div>
                <h3 className="mt-8 font-mono font-semibold tracking-tighter text-foreground before:mb-2 before:block before:font-mono before:text-sm before:font-medium before:text-alternate before:content-[counter(step,decimal-leading-zero)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-pretty text-sm text-muted-foreground">
                  {step.description}
                </p>
                <div className="mt-6 flex">
                  <Link
                    href="/process"
                    aria-label="Visit sambi's process page in the same window to learn more about how we work"
                    className={cn(
                      buttonVariants({ variant: 'secondary', size: 'sm' }),
                    )}
                  >
                    {step.ctaText}
                    <ArrowIcon className=" ml-2 w-4 flex-none fill-current" />
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </FadeIn>
      </Container>
    </section>
  );
}
