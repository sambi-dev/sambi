import type { CaseStudy, MDXEntry } from '#/lib/mdx';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@sambi/ui';
import { buttonVariants } from '@sambi/ui/button';

import { FadeIn, FadeInStagger } from '#/ui/fade-in';
import { Container } from '#/ui/page-container';
import { SectionIntro } from '#/ui/section-intro';

import { ArrowIcon } from '../shared/icons';

export function Showcase({
  caseStudies,
}: {
  caseStudies: MDXEntry<CaseStudy>[];
}) {
  return (
    <section
      id="showcase"
      aria-labelledby="showcase-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <SectionIntro
        title="Rockstars, slam dunks, and a couple mulligans"
        eyebrow="Showcase"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          This is the part where we namedrop and say things like successfully
          increased 1-to-many engagement instead of spammed the family group
          chat. It highlights effective copywriting.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl border bg-card p-6 shadow-sm transition hover:bg-primary/20 sm:p-8">
                <h3>
                  <Link
                    href={caseStudy.href}
                    aria-label={`Read more about our work with ${caseStudy.client} now`}
                  >
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-12 w-12 rounded-xl grayscale hover:grayscale-0"
                      unoptimized
                    />
                  </Link>
                </h3>
                <div className="mt-6 flex gap-x-2 text-sm text-primary">
                  <p className="text-alternate">{caseStudy.client}</p>
                  <span className="text-foreground" aria-hidden="true">
                    ::
                  </span>
                  <time dateTime={caseStudy.date.split('-')[0]}>
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-foreground" aria-hidden="true">
                    ::
                  </span>
                  <span>{caseStudy.service}</span>
                </div>
                <p className="mt-6 grow text-lg font-semibold leading-tight tracking-tight text-foreground lg:text-xl">
                  {caseStudy.title}
                </p>
                <p className="mt-4 line-clamp-2 text-base text-muted-foreground">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
        <FadeIn className="mt-8 flex justify-center">
          <Link
            href="/showcase"
            aria-label="Visit sambi's showcase page in the same window to view more of our case studies"
            className={cn(buttonVariants({ variant: 'secondary' }))}
          >
            See full Showcase
            <ArrowIcon className=" ml-2 w-6 flex-none fill-current" />
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
