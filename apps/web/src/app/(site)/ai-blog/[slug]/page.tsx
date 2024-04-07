import type { Metadata } from 'next';

import { draftMode } from 'next/headers';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import type { BlockDocument, BlockRichText } from '.basehub';
import { Pump } from '.basehub/react-pump';

import {
  fetchAiBlogPage,
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
import RichTextComponents from '#/ui/shared/rich-text-components';

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
  return (
    <>
      <Pump
        next={{ tags: ['ai-blog'] }}
        draft={draftMode().isEnabled}
        queries={[getAiPostBySlugQuery(params.slug)]}
      >
        {async ([{ aiBlog }]) => {
          'use server';
          const post = aiBlog.aiPosts.items[0];
          if (!post) notFound();

          const moreAiBlogPosts = await fetchAiBlogPage({ first: 10 });
          const relatedPosts = moreAiBlogPosts.aiPosts.items
            .filter((item) => item._sys.id !== post._sys.id)
            .slice(0, 2);

          return (
            <>
              {post.featuredImage && (
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
              )}

              <Container
                as="article"
                className="relative z-10 mt-24 sm:mt-32 lg:mt-40"
              >
                <FadeIn>
                  <header className="mx-auto flex max-w-3xl flex-col text-center">
                    <h1 className="mt-6 font-mono text-3xl font-semibold tracking-tighter text-foreground [text-wrap:balance]">
                      {post._sys.title}
                    </h1>
                    <time
                      dateTime={post._sys.createdAt}
                      className="order-first block font-mono text-xs font-bold uppercase tracking-widest text-primary"
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
                      <span className="font-mono text-xs font-medium tracking-tighter text-secondary-foreground">
                        {post.company._sys.title}
                      </span>
                      <span className="text-sm text-secondary-foreground">
                        ::
                      </span>
                      <span className="font-mono text-xs font-medium uppercase tracking-tighter text-primary">
                        {post.category.length > 0 && (
                          <div className="-mb-0.5 font-mono text-xs font-medium uppercase text-alternate">
                            #{post.category[0]?._sys.title}
                          </div>
                        )}
                      </span>
                    </div>
                    <Border className="my-16" />
                  </header>
                </FadeIn>

                <RichTextComponents
                  blocks={post.body?.json.blocks as BlockDocument[]}
                  content={post.body?.json.content as BlockRichText}
                  centered
                />
                <div className="my-6">
                  <RichTextComponents
                    content={
                      post.featuredImageAttribution?.json
                        .content as BlockRichText
                    }
                    centered
                  />
                </div>
                <AiAuthorCard />
              </Container>

              {relatedPosts.length > 0 && (
                <PageLinks
                  className="mt-24 sm:mt-32 lg:mt-40"
                  title="More from the AI blog "
                  pages={relatedPosts.map((post) => ({
                    href: `/ai-blog/${post._sys.slug}`,
                    date: post._sys.createdAt,
                    title: post._sys.title,
                    description: post.metaDescription,
                    readMoreButtonText: post.readMoreButtonText,
                  }))}
                />
              )}
            </>
          );
        }}
      </Pump>
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

  const aiPost = aiBlog.aiPosts.items[0];
  if (!aiPost) notFound();

  const metadata: Metadata = {
    title: aiPost.metaTitle,
    description: aiPost.metaDescription,
    openGraph: {
      type: 'website',
      title: aiPost.metaTitle,
      description: aiPost.metaDescription,
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
      title: aiPost.metaTitle,
      description: aiPost.metaDescription,
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
