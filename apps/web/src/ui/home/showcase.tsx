import type { ShowcaseBriefFragment } from '#/basehub/showcase-queries';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@yocxo/ui';
import { buttonVariants } from '@yocxo/ui/button';
import { ArrowRightIcon } from '@yocxo/ui/icons';

import { FadeIn, FadeInStagger } from '#/ui/fade-in';
import { Container } from '#/ui/page-container';
import { SectionIntro } from '#/ui/section-intro';

export function Showcase({
  projectBriefs,
}: {
  projectBriefs: ShowcaseBriefFragment[];
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
      >
        <p>
          This is the part where we namedrop and say things like successfully
          increased 1-to-many engagement instead of spammed the family group
          chat. It highlights effective copywriting.
        </p>
      </SectionIntro>
      <Container className="my-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projectBriefs.map((projectBrief) => (
            <FadeIn
              key={`/showcase/${projectBrief._sys.slug}`}
              className="flex"
            >
              <article className="relative flex w-full flex-col rounded-3xl border bg-card p-6 shadow-md transition hover:bg-primary/20 sm:p-8">
                <h3>
                  <Link
                    href={`/showcase/${projectBrief._sys.slug}`}
                    aria-label={`Read more about our work with ${projectBrief.client._sys.title} now`}
                  >
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={projectBrief.client.icon.url}
                      alt={
                        projectBrief.client.icon.alt ?? 'An icon of the client'
                      }
                      width={24}
                      height={24}
                      className="h-10 w-10 rounded-xl grayscale hover:grayscale-0"
                      unoptimized
                    />
                  </Link>
                </h3>
                <div className="mt-6 flex gap-x-2 font-mono text-xs font-medium tracking-tighter text-secondary-foreground">
                  <p className=" text-primary">
                    {projectBrief.client._sys.title}
                  </p>
                  <span className="text-foreground" aria-hidden="true">
                    ::
                  </span>
                  <span>{projectBrief.service[0]?._sys.title}</span>
                </div>
                <p className="mt-6 grow text-pretty font-mono font-semibold tracking-tighter text-foreground">
                  {projectBrief._sys.title}
                </p>
                <p className="mt-4 line-clamp-2 text-sm text-muted-foreground">
                  {projectBrief.metaDescription}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
        <FadeIn className="mt-10 flex justify-center">
          <Link
            href="/showcase"
            aria-label="Visit Yo CXO's showcase page in the same window to view more of our case studies"
            className={cn(buttonVariants({ variant: 'secondary' }))}
          >
            See full Showcase
            <ArrowRightIcon className="ml-2 w-3 flex-none fill-current" />
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
