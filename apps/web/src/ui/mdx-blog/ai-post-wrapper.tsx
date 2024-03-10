import type { AiPost, MDXEntry } from '#/lib/mdx';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@sambi/ui';
import { buttonVariants } from '@sambi/ui/button';

import { formatDate } from '#/lib/constants';
import { loadAiPosts } from '#/lib/mdx';
import { Border } from '#/ui/border';
import { ContactSection } from '#/ui/contact-section';
import { FadeIn } from '#/ui/fade-in';
import { MDXComponents } from '#/ui/mdx-components';
import { Container } from '#/ui/page-container';
import { PageLinks } from '#/ui/page-links';
import { SectionIntro } from '#/ui/section-intro';
import { ArrowIcon } from '#/ui/shared/icons';

export default async function AiPostWrapper({
  aiPost,
  children,
}: {
  aiPost: MDXEntry<AiPost>;
  children: React.ReactNode;
}) {
  const allAiPosts = await loadAiPosts();
  const moreAiPosts = allAiPosts
    .filter(({ metadata }) => metadata !== aiPost)
    .slice(0, 2);

  return (
    <>
      <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <header className="mx-auto flex max-w-5xl flex-col text-center">
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-foreground [text-wrap:balance] sm:text-6xl">
              {aiPost.title}
            </h1>
            <time
              dateTime={aiPost.date}
              className="order-first block text-sm font-semibold uppercase tracking-widest text-primary"
            >
              {formatDate(aiPost.date)}
            </time>
            <div className="mx-auto mt-6 flex max-w-xs flex-col items-center justify-center space-y-2 rounded-xl border bg-card p-4">
              <span className="text-sm font-medium text-secondary-foreground">
                This post was substantially assisted by
              </span>
              <div className="flex items-center space-x-2">
                <Image
                  src={aiPost.llm.image.src}
                  alt={`Image of ${aiPost.llm.company}`}
                  className="h-6 w-6 flex-none rounded-full bg-background grayscale transition duration-500 hover:grayscale-0 motion-safe:hover:scale-105"
                />
                <span className="text-sm font-medium text-secondary-foreground">
                  {aiPost.llm.company} {aiPost.llm.model}
                </span>
                <span className="text-sm text-secondary-foreground">::</span>
                <span className="text-sm font-medium uppercase text-primary">
                  #{aiPost.category}
                </span>
              </div>
            </div>
            <Border className="my-16" />
          </header>
        </FadeIn>

        <FadeIn>
          <MDXComponents.wrapper className="mt-8 sm:mt-16">
            {children}
          </MDXComponents.wrapper>
        </FadeIn>
        <FadeIn className="mx-auto my-10 max-w-3xl items-center rounded-4xl border bg-card p-6 sm:my-16">
          <SectionIntro
            eyebrow="The AI Blog"
            title="AI content that hits different"
            centered
          >
            <p className="text-lg">
              ChatGPT wrappers and Twitter bros tell you to game your SEO.
              Don&apos;t fall for that{' '}
              <span className="line-through">shit</span>. Quality matters, and
              you&apos;ll get crushed by Google like they did. Our AI Blog
              transparently explores what humans and AI can achieve together to
              craft high-quality, meaningful content.{' '}
            </p>
            <Link
              href="/blog/how-to-use-ai-to-improve-your-blog-content"
              aria-label="Read how sambi.dev uses AI to craft high-quality, meaningful content"
              className={cn(
                buttonVariants({
                  variant: 'outline',
                  size: 'sm',
                }),
                'mt-8',
              )}
            >
              Join the experiment
              <ArrowIcon className=" ml-2 w-3 flex-none fill-current" />
            </Link>
          </SectionIntro>
        </FadeIn>
      </Container>

      {moreAiPosts.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="More articles"
          pages={moreAiPosts}
        />
      )}

      <ContactSection />
    </>
  );
}
