import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@sambi/ui';
import { buttonVariants } from '@sambi/ui/button';

import { formatDate } from '#/lib/constants';
import { loadAiPosts } from '#/lib/mdx';
import { Border } from '#/ui/border';
import { ContactSection } from '#/ui/contact-section';
import { FadeIn } from '#/ui/fade-in';
import { Container } from '#/ui/page-container';
import { PageIntro } from '#/ui/page-intro';
import { ArrowIcon } from '#/ui/shared/icons';
import { LoadMore, LoadMoreButton, LoadMoreItems } from '#/ui/shared/load-more';

export const metadata: Metadata = {
  title: 'Generative Blog',
  description:
    "The Generative Blog by sambi.dev is where AI SEO experiments go to party. 🎉 We're bringing the SEO results using only AI that'll make Twitter bros drool 🤤",
};

export default async function AiBlog() {
  const aiPosts = await loadAiPosts();

  return (
    <>
      <PageIntro
        eyebrow="Generated blog"
        title="A better way to use AI for SEO"
      >
        <p>
          Each post on sambi&apos;s generated blog is just that, generated.
          Created by AI in close collaboration with humans. Not your usual crap,
          that&apos;s for sure.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <LoadMore className="space-y-24 lg:space-y-32">
          <LoadMoreItems>
            {aiPosts.map((aiPost) => (
              <FadeIn key={aiPost.href}>
                <article>
                  <Border className="pt-16">
                    <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                      <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                        <h2 className="max-w-2xl text-pretty text-2xl font-semibold tracking-tight text-foreground hover:text-primary">
                          <Link href={aiPost.href}>{aiPost.title}</Link>
                        </h2>
                        <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                          <dt className="sr-only">Published</dt>
                          <dd className="absolute left-0 top-0 text-sm text-primary lg:static">
                            <time dateTime={aiPost.date}>
                              {formatDate(aiPost.date)}
                            </time>
                          </dd>
                          <dt className="sr-only">LLM Model</dt>
                          <dd className="mt-6 flex gap-x-4">
                            <div className="flex-none overflow-hidden rounded-xl bg-background">
                              <Image
                                alt=""
                                {...aiPost.llm.image}
                                className="h-12 w-12 object-cover grayscale transition duration-500 hover:grayscale-0 motion-safe:hover:scale-150"
                              />
                            </div>
                            <div className="text-sm text-muted-foreground">
                              <div className="font-semibold">
                                {aiPost.llm.company}
                              </div>
                              <div className="text-primary">
                                {aiPost.llm.model}
                              </div>
                            </div>
                          </dd>
                        </dl>
                        <p className="mt-6 max-w-2xl text-base text-muted-foreground">
                          {aiPost.description}
                        </p>
                        <Link
                          href={aiPost.href}
                          aria-label={`Read more: ${aiPost.title}`}
                          className={cn(
                            buttonVariants({
                              variant: 'secondary',
                              size: 'sm',
                            }),
                            'mt-8',
                          )}
                        >
                          {aiPost.readMoreButtonText}
                          <ArrowIcon className=" ml-2 w-3 flex-none fill-current" />
                        </Link>
                      </div>
                    </div>
                  </Border>
                </article>
              </FadeIn>
            ))}
          </LoadMoreItems>
          <LoadMoreButton>Load more</LoadMoreButton>
        </LoadMore>
      </Container>

      <ContactSection />
    </>
  );
}
