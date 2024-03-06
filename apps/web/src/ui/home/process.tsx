import type { StaticImageData } from 'next/image';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@sambi/ui';
import { buttonVariants } from '@sambi/ui/button';

import duotoneImage from '#/images/screencasts/duotone.svg';
import gridsImage from '#/images/screencasts/grids.svg';
import setupImage from '#/images/screencasts/setup.svg';
import strokesImage from '#/images/screencasts/strokes.svg';
import { SectionIntro } from '#/ui/section-intro';
import { Container } from '#/ui/shared/container';

import { FadeIn } from '../fade-in';
import { ArrowIcon } from '../shared/icons';

const steps = [
  {
    title: 'Discovery & assimilation',
    description:
      "We get to know you, your plans, where you're at, where you want to go, and everything about your market.",
    image: setupImage as StaticImageData,
    ctaText: 'Learn how',
  },
  {
    title: 'Planning & definition',
    description:
      'Using methodical frameworks we help to develop lean business plans and define the critical path with clear KPIs.',
    image: gridsImage as StaticImageData,
    ctaText: 'Understand why',
  },
  {
    title: 'Build & execute',
    description:
      'We design and build what needs to be then continue to iterate, test, and validate. We always release too early to minimize waste.',
    image: strokesImage as StaticImageData,
    ctaText: 'Go deeper',
  },
  {
    title: 'Analyze, improve, & scale',
    description:
      'We keep an open mind and let the data drive us. We continue to validate, lay foundations, add resources, and scale experiments.',
    image: duotoneImage as StaticImageData,
    ctaText: 'Read more',
  },
];

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
          We&apos;ve broken what was supposed to be indesctructible and put it
          back together again. Over the years, our workflow has gotten pretty
          good enabling us to deliver quality results, on-time, and on-budget.
        </p>
      </SectionIntro>
      <Container size="lg" className="mt-16">
        <FadeIn>
          <ol className="grid grid-cols-1 gap-x-8 gap-y-10 [counter-reset:step] sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.title} className="[counter-increment:step]">
                <div className="relative flex h-44 items-center justify-center rounded-2xl bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-foreground via-muted to-foreground px-6 shadow-lg dark:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] dark:from-background dark:via-primary dark:to-background">
                  <div className="flex overflow-hidden rounded shadow-sm">
                    <Image src={step.image} alt="" unoptimized />
                  </div>
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-tight text-primary before:mb-2 before:block before:text-base before:font-bold before:text-secondary-foreground before:content-[counter(step,decimal-leading-zero)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-pretty text-muted-foreground">
                  {step.description}
                </p>
                <div className="mt-6 flex">
                  <Link
                    href="/process"
                    aria-label="Visit sambi's process page in the same window to learn more about how we work"
                    className={cn(
                      buttonVariants({ variant: 'outline', size: 'sm' }),
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
