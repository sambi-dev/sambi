import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';

import { RichText } from 'basehub/react-rich-text';

import { cn } from '@sambi/ui';
import { buttonVariants } from '@sambi/ui/button';

import {
  fetchAiBlogPageIntro,
  fetchAiBlogPageMetadata,
  fetchAiBlogPosts,
} from '#/basehub/ai-blog-queries';
import { formatDate, SITE_URL } from '#/lib/constants';
import { Border } from '#/ui/border';
import { ContactSection } from '#/ui/contact-section';
import { FadeIn } from '#/ui/fade-in';
import { Container } from '#/ui/page-container';
import { PageIntro } from '#/ui/page-intro';
import { ArrowRightIcon } from '#/ui/shared/icons';
import { LoadMore, LoadMoreButton, LoadMoreItems } from '#/ui/shared/load-more';

export default async function AiBlog() {
  const { items: aiBlogPosts, totalCount } = await fetchAiBlogPosts();
  const pageIntro = await fetchAiBlogPageIntro();

  return (
    <>
      <PageIntro
        eyebrow={pageIntro.eyebrow}
        title={pageIntro.title}
        centered={pageIntro.centered}
      >
        <RichText>{pageIntro.description?.json.content}</RichText>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <LoadMore className="space-y-24" totalItems={totalCount}>
          <LoadMoreItems>
            {aiBlogPosts.map((aiPost) => (
              <FadeIn key={aiPost._id}>
                <article>
                  <Border className="pt-16">
                    <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                      <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                        <h2 className="max-w-2xl text-pretty font-mono text-3xl font-semibold leading-normal tracking-tighter text-foreground hover:text-primary">
                          <Link href={`/ai-blog/${aiPost._slug}`}>
                            {aiPost._title}
                          </Link>
                        </h2>
                        <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                          <dt className="sr-only">Published</dt>
                          <dd className="absolute left-0 top-0 font-mono text-sm uppercase lg:static">
                            <time dateTime={aiPost.publishedDate}>
                              {formatDate(aiPost.publishedDate)}
                            </time>
                          </dd>
                          <dt className="sr-only">LLM Model</dt>
                          <dd className="mt-6 flex gap-x-4">
                            <div className="flex-none overflow-hidden rounded-xl border bg-background">
                              <Image
                                alt={
                                  aiPost.aiCompany.items[0]!.image.alt ??
                                  "A simple colored square representing the AI model's company"
                                }
                                src={aiPost.aiCompany.items[0]!.image.url}
                                width={48}
                                height={48}
                                className="h-12 w-12 object-cover grayscale transition duration-500 hover:grayscale-0 motion-safe:hover:scale-105"
                              />
                            </div>
                            <div className="text-sm text-secondary-foreground">
                              <div className="font-mono font-medium tracking-tighter">
                                {aiPost.aiCompany.items[0]!._title}
                              </div>
                              <div className="font-mono text-muted-foreground">
                                {aiPost.aiCompany.items[0]!.model}
                              </div>
                            </div>
                          </dd>
                        </dl>
                        <p className="mt-6 line-clamp-2 max-w-2xl text-muted-foreground">
                          {aiPost.metaDescription}
                        </p>
                        <Link
                          href={`/ai-blog/${aiPost._slug}`}
                          aria-label={`Read more: ${aiPost._title}`}
                          className={cn(
                            buttonVariants({
                              variant: 'secondary',
                              size: 'sm',
                            }),
                            'mt-8',
                          )}
                        >
                          {aiPost.readMoreButtonText}
                          <ArrowRightIcon className="ml-2 w-3 flex-none fill-current" />
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

export async function generateMetadata(): Promise<Metadata> {
  const cmsMetadata = await fetchAiBlogPageMetadata();
  const imageUrl = '/opengraph-image.gif';
  const imageAlt =
    'Loading screen animation with pulsing text that spells out "Loading..." with the sambi.dev logo (a silohuette of a French Bulldog and lower case text) in the top left';

  const metadata = {
    title: cmsMetadata.title,
    description: cmsMetadata.description,
    openGraph: {
      type: 'website',
      title: cmsMetadata.title,
      description: cmsMetadata.description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
      url: `${SITE_URL}/ai-blog`,
    },
    twitter: {
      title: cmsMetadata.title,
      description: cmsMetadata.description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
  };

  return metadata;
}
