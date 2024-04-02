import type { Metadata } from 'next';

import Image from 'next/image';
import { notFound } from 'next/navigation';

import type { BlockRichText } from '.basehub';

import {
  fetchAiBlogPosts,
  getAiPostBySlugQuery,
} from '#/basehub/ai-blog-queries';
import { basehubClient } from '#/basehub/client';
import { siteConfig } from '#/config/site';
import { formatDate, SITE_URL } from '#/lib/constants';
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
      aiPosts: {
        __args: {
          first: 10,
        },
        items: {
          _slug: true,
        },
      },
    },
  });

  return aiBlog.aiPosts.items.map((post) => ({
    params: { slug: post._slug },
  }));
}

const AiBlogPost = async ({ params }: { params: { slug: string } }) => {
  const { aiBlog } = await basehubClient.query(
    getAiPostBySlugQuery(params.slug),
  );
  const post = aiBlog.aiPosts.items[0];
  if (!post) notFound();
  const { items: moreAiBlogPosts } = await fetchAiBlogPosts({
    first: 10,
  });

  const filteredAiBlogPosts = moreAiBlogPosts.filter(
    (morePost) => morePost._sys.id !== post._sys.id,
  );

  const limitedAiBlogPosts = filteredAiBlogPosts.slice(0, 2);

  return (
    <>
      <div className="absolute inset-0 box-content h-128 pt-128">
        <Image
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          src={post.featuredImage.url}
          width={1920}
          height={1080}
          alt={
            post.featuredImage.alt ??
            `A featured image for the post ${post._sys.title}`
          }
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background"
          aria-hidden="true"
        />
      </div>
      <Container as="article" className="relative z-10 mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <header className="mx-auto flex max-w-5xl flex-col text-center">
            <h1 className="mt-6 font-mono text-4xl font-semibold tracking-tighter text-foreground [text-wrap:balance] sm:text-6xl">
              {post._sys.title}
            </h1>
            <time
              dateTime={post._sys.createdAt}
              className="order-first block font-mono text-sm font-bold uppercase tracking-widest text-primary"
            >
              {formatDate(post._sys.createdAt)}
            </time>
            <div className="mt-6 flex items-center justify-center space-x-2">
              <Image
                src={post.company.image.url}
                width={48}
                height={48}
                alt={
                  post.company.image.alt ??
                  "A simple colored square representing the AI model's company"
                }
                className="h-6 w-6 flex-none rounded-full bg-background grayscale transition duration-500 hover:grayscale-0 motion-safe:hover:scale-105"
              />
              <span className="font-mono text-sm font-medium tracking-tighter text-secondary-foreground">
                {post.company._sys.title}
              </span>
              <span className="text-sm text-secondary-foreground">::</span>
              <span className="font-mono text-sm font-medium uppercase tracking-tighter text-primary">
                {post.category.length > 0 && (
                  <div className="-mb-0.5 font-mono text-sm font-medium uppercase text-alternate">
                    #{post.category[0]?._sys.title}
                  </div>
                )}
              </span>
            </div>
            <Border className="my-16" />
          </header>
        </FadeIn>

        <RichTextWrapper
          content={post.body?.json.content as BlockRichText}
          centered
        />
        <div className="my-6">
          <RichTextWrapper
            content={
              post.featuredImageAttribution?.json.content as BlockRichText
            }
            centered
          />
        </div>
        <AiAuthorCard />
      </Container>

      {limitedAiBlogPosts.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="More from the AI blog "
          pages={limitedAiBlogPosts.map((post) => ({
            href: `/ai-blog/${post._sys.slug}`,
            date: post._sys.createdAt,
            title: post._sys.title,
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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { aiBlog } = await basehubClient.query(
    getAiPostBySlugQuery(params.slug),
  );

  const post = aiBlog.aiPosts.items[0];
  if (!post) notFound();

  const metadata: Metadata = {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      type: 'website',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [
        {
          url: siteConfig.image.url,
          width: siteConfig.image.width,
          height: siteConfig.image.height,
          alt: siteConfig.image.alt,
        },
      ],
      url: `${SITE_URL}/ai-blog/${params.slug}`,
    },
    twitter: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: [
        {
          url: siteConfig.image.url,
          width: siteConfig.image.width,
          height: siteConfig.image.height,
          alt: siteConfig.image.alt,
        },
      ],
    },
  };

  return metadata;
}
