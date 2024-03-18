import Image from 'next/image';
import { notFound } from 'next/navigation';

import {
  fetchAiBlogPosts,
  getAiPostBySlugQuery,
} from '#/basehub/ai-blog-queries';
import { basehubClient } from '#/basehub/client';
import { formatISODate } from '#/lib/constants';
import AiAuthorCard from '#/ui/ai-blog/ai-author-card';
import { Border } from '#/ui/border';
import { ContactSection } from '#/ui/contact-section';
import { FadeIn } from '#/ui/fade-in';
import { Container } from '#/ui/page-container';
import { PageLinks } from '#/ui/page-links';
import RichTextWrapper from '#/ui/shared/rich-text-wrapper';

export async function generateStaticParams() {
  const { aiBlog } = await basehubClient.query({
    aiBlog: {
      aiBlogPosts: {
        __args: {
          first: 10,
        },
        items: {
          _slug: true,
        },
      },
    },
  });

  return aiBlog.aiBlogPosts.items.map((post) => ({
    params: { slug: post._slug },
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<{ title: string; description: string }> {
  const { aiBlog } = await basehubClient.query(
    getAiPostBySlugQuery(params.slug),
  );

  const post = aiBlog.aiBlogPosts.items[0];
  if (!post) notFound();

  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

const AiBlogPost = async ({ params }: { params: { slug: string } }) => {
  const { aiBlog } = await basehubClient.query(
    getAiPostBySlugQuery(params.slug),
  );
  const post = aiBlog.aiBlogPosts.items[0];
  if (!post) notFound();
  const { items: moreAiBlogPosts } = await fetchAiBlogPosts({
    first: 2,
  });

  return (
    <>
      <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <header className="mx-auto flex max-w-5xl flex-col text-center">
            <h1 className="mt-6 font-mono text-4xl font-semibold tracking-tighter text-foreground [text-wrap:balance] sm:text-5xl">
              {post._title}
            </h1>
            <time
              dateTime={post.publishedDate}
              className="order-first block font-mono text-sm font-bold uppercase tracking-widest text-primary"
            >
              {formatISODate(post.publishedDate)}
            </time>
            <div className="mt-6 flex items-center justify-center space-x-2">
              <Image
                src={post.aiCompany.items[0]!.image.url}
                width={48}
                height={48}
                alt={
                  post.aiCompany.items[0]!.image.alt ??
                  "A simple colored square representing the AI model's company"
                }
                className="h-6 w-6 flex-none rounded-full bg-background grayscale transition duration-500 hover:grayscale-0 motion-safe:hover:scale-105"
              />
              <span className="font-mono text-sm font-medium tracking-tighter text-secondary-foreground">
                {post.aiCompany.items[0]!._title}
              </span>
              <span className="text-sm text-secondary-foreground">::</span>
              <span className="font-mono text-xs font-medium uppercase tracking-tighter text-primary">
                {post.category.length > 0 && (
                  <div className="font-mono text-xs font-medium uppercase text-primary">
                    #{post.category[0]?._title}
                  </div>
                )}
              </span>
            </div>
            <Border className="my-16" />
          </header>
        </FadeIn>

        <RichTextWrapper content={post.content?.json.content as string} />
        <AiAuthorCard />
      </Container>

      {moreAiBlogPosts.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="More articles"
          pages={moreAiBlogPosts.map((post) => ({
            href: `/ai-blog/${post._slug}`,
            date: post.publishedDate,
            title: post._title,
            description: post.metaDescription,
            readMoreButtonText: post.readMoreButtonText,
          }))}
        />
      )}

      <ContactSection />
    </>
  );
};

export default AiBlogPost;
