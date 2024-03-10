import type { MDXEntry, ProjectBrief } from '#/lib/mdx';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@sambi/ui';
import { buttonVariants } from '@sambi/ui/button';

import { formatDate } from '#/lib/constants';
import { Blockquote } from '#/ui/blockquote';
import { Border } from '#/ui/border';
import { FadeIn } from '#/ui/fade-in';
import { Container } from '#/ui/page-container';
import { ArrowIcon } from '#/ui/shared/icons';
import { LoadMore, LoadMoreButton, LoadMoreItems } from '#/ui/shared/load-more';

export function ProjectBriefs({
  projectBriefs,
}: {
  projectBriefs: MDXEntry<ProjectBrief>[];
}) {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Recent projects
        </h2>
      </FadeIn>
      <LoadMore className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        <LoadMoreItems>
          {projectBriefs.map((projectBrief) => (
            <FadeIn key={projectBrief.client}>
              <article>
                <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                  <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                    <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                      <Image
                        src={projectBrief.logo}
                        alt=""
                        className="h-16 w-16 flex-none rounded-xl grayscale hover:grayscale-0"
                        unoptimized
                      />
                      <h3 className="text-lg font-semibold text-foreground sm:mt-0 lg:mt-4">
                        {projectBrief.client}
                      </h3>
                    </div>
                    <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                      <p className="text-sm tracking-tight text-secondary-foreground after:ml-4 after:font-semibold after:text-muted-foreground after:content-['::'] lg:mt-2 lg:after:hidden">
                        {projectBrief.service}
                      </p>
                      <p className="text-sm text-muted-foreground lg:mt-2">
                        <time dateTime={projectBrief.date}>
                          {formatDate(projectBrief.date)}
                        </time>
                      </p>
                    </div>
                  </div>
                  <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                    {projectBrief.partner && (
                      <div className="block text-sm font-semibold uppercase tracking-widest text-primary">
                        Via partner
                      </div>
                    )}
                    <p className="mt-4 text-pretty text-4xl font-bold tracking-tight text-foreground hover:text-primary">
                      <Link href={projectBrief.href}>{projectBrief.title}</Link>
                    </p>
                    <div className="mt-6 space-y-6 text-base text-muted-foreground">
                      {projectBrief.summary.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <div className="mt-8 flex">
                      <Link
                        href={projectBrief.href}
                        aria-label={`Read project brief: ${projectBrief.client}`}
                        className={cn(
                          buttonVariants({ variant: 'secondary', size: 'sm' }),
                        )}
                      >
                        {projectBrief.readMoreButtonText}
                        <ArrowIcon className=" ml-2 w-3 flex-none fill-current" />
                      </Link>
                    </div>
                    {projectBrief.testimonial && (
                      <Blockquote
                        author={projectBrief.testimonial.author}
                        className="mt-12"
                      >
                        {projectBrief.testimonial.content}
                      </Blockquote>
                    )}
                  </div>
                </Border>
              </article>
            </FadeIn>
          ))}
        </LoadMoreItems>
        <LoadMoreButton>Load more</LoadMoreButton>
      </LoadMore>
    </Container>
  );
}
