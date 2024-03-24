import type { ShowcaseBriefFragment } from '#/basehub/showcase-queries';

import Image from 'next/image';
import Link from 'next/link';

import { RichText } from 'basehub/react-rich-text';

import { cn } from '@sambi/ui';
import { buttonVariants } from '@sambi/ui/button';
import { ArrowRightIcon } from '@sambi/ui/icons';

import { Blockquote } from '#/ui/blockquote';
import { Border } from '#/ui/border';
import { FadeIn } from '#/ui/fade-in';
import { Container } from '#/ui/page-container';

export function ProjectBriefs({
  projectBriefs,
}: {
  projectBriefs: ShowcaseBriefFragment[];
}) {
  const sortedProjectBriefs = projectBriefs.sort(
    (a, b) =>
      new Date(b._sys.createdAt).getTime() -
      new Date(a._sys.createdAt).getTime(),
  );

  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-mono text-lg font-semibold tracking-tighter text-foreground">
          Recently shipped
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-24">
        {sortedProjectBriefs.map((projectBrief) => (
          <FadeIn key={projectBrief._sys.id}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={
                        projectBrief.client.icon.url ??
                        '/icons/android-chrome-512x512.png'
                      }
                      alt={
                        projectBrief.client.logo.alt ??
                        "An icon for sambi.dev's client"
                      }
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-xl border object-cover grayscale transition duration-500 hover:grayscale-0 motion-safe:hover:scale-105"
                      unoptimized
                    />
                    <h3 className="mt-6 font-mono text-sm font-medium text-primary sm:mt-0 lg:mt-8">
                      {projectBrief.client._sys.title}
                    </h3>
                  </div>
                  <div className="mt-1 flex flex-row items-center gap-x-4 sm:mt-0">
                    <p className="font-mono text-xs text-muted-foreground after:ml-4 after:font-medium after:text-secondary-foreground after:content-['::'] lg:mt-2">
                      {projectBrief.status}
                    </p>
                    <p className="font-mono text-xs text-muted-foreground lg:mt-2">
                      <time
                        dateTime={projectBrief._sys.createdAt.split('-')[0]}
                      >
                        {projectBrief._sys.createdAt.split('-')[0]}
                      </time>
                    </p>
                  </div>
                  <p className="font-mono text-xs text-alternate lg:mt-2">
                    {projectBrief.service[0]?._sys.title}
                  </p>
                </div>

                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  {projectBrief.isPartner && (
                    <div className="block pt-3 font-mono text-sm font-medium uppercase tracking-widest text-alternate">
                      Via partner
                    </div>
                  )}
                  <p className="text-pretty font-mono text-2xl font-semibold leading-normal tracking-tighter text-foreground hover:text-primary">
                    <Link href={`/showcase/${projectBrief._sys.slug}`}>
                      {projectBrief._sys.title}
                    </Link>
                  </p>
                  <div className="my-6 space-y-6 text-sm text-muted-foreground lg:text-base">
                    <RichText>{projectBrief.summary?.json.content}</RichText>
                  </div>
                  <div className="my-8 flex">
                    <Link
                      href={`/showcase/${projectBrief._sys.slug}`}
                      aria-label={`Read project brief: ${projectBrief.client._sys.title}`}
                      className={cn(
                        buttonVariants({ variant: 'secondary', size: 'sm' }),
                      )}
                    >
                      {projectBrief.readMoreButtonText}
                      <ArrowRightIcon className="ml-2 w-3 flex-none fill-current" />
                    </Link>
                  </div>
                  {projectBrief.client.contacts.items.map(
                    (contact) =>
                      contact.testimonial && (
                        <Blockquote
                          key={contact._sys.id}
                          author={{
                            name: `${contact._sys.title} ${contact.lastInitial}`,
                            role: contact.role,
                          }}
                          className="mt-12"
                        >
                          <RichText>
                            {contact.testimonial.json.content}
                          </RichText>
                        </Blockquote>
                      ),
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
}
