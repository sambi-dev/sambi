import type { Metadata } from 'next';

import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import type { BlockDocument, BlockRichText } from '.basehub';
import { Pump } from '.basehub/react-pump';

import { basehubClient } from '#/basehub/client';
import {
  fetchShowcasePage,
  getShowcaseBriefBySlugQuery,
} from '#/basehub/showcase-queries';
import { siteConfig } from '#/config/site';
import ShowcaseBriefJson from '#/json-ld/showcase-jsonld';
import { SITE_URL } from '#/lib/constants';
import { ContactSection } from '#/ui/contact-section';
import { FadeIn } from '#/ui/fade-in';
import { GrayscaleTransitionImage } from '#/ui/grayscale-transition-image';
import { Container } from '#/ui/page-container';
import { PageIntro } from '#/ui/page-intro';
import { PageLinks } from '#/ui/page-links';
import RichTextComponents from '#/ui/shared/rich-text-components';

export async function generateStaticParams() {
  const { showcase } = await basehubClient.query({
    showcase: {
      brief: {
        __args: {
          first: 10,
        },
        items: {
          _slug: true,
        },
      },
    },
  });

  return showcase.brief.items.map((item) => ({ params: { slug: item._slug } }));
}

export default async function ProjectBriefPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <Pump
      next={{ tags: ['showcase'] }}
      draft={draftMode().isEnabled}
      queries={[getShowcaseBriefBySlugQuery(params.slug)]}
    >
      {async ([{ showcase }]) => {
        'use server';
        const brief = showcase.brief.items[0];
        if (!brief) notFound();

        const eyebrowText = `${brief.client._sys.title} Project Brief${brief.client.isPartner ? ' :: Via partner' : ''}`;

        const moreBriefs = await fetchShowcasePage({ first: 10 });
        const relatedBriefs = moreBriefs.brief.items
          .filter((item) => item._sys.id !== brief._sys.id)
          .slice(0, 2);

        return (
          <>
            <article className="mt-24 sm:mt-32 lg:mt-40">
              <header>
                <PageIntro
                  eyebrow={eyebrowText}
                  title={brief._sys.title}
                  centered
                >
                  <p>{brief.metaDescription}</p>
                </PageIntro>
                <FadeIn>
                  <div className="mt-24 border border-t sm:mt-32 lg:mt-40">
                    <Container>
                      <div className="mx-auto max-w-5xl">
                        <dl className="-mx-6 grid grid-cols-1 text-sm text-secondary-foreground sm:mx-0 sm:grid-cols-4">
                          <div className="border-t px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                            <dt className="font-mono text-xs font-bold tracking-tighter lg:text-sm">
                              Client
                            </dt>
                            <dd className="text-muted-foreground">
                              {brief.client._sys.title}
                            </dd>
                          </div>
                          <div className="border-t px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                            <dt className="font-mono text-xs font-bold tracking-tighter lg:text-sm">
                              Year
                            </dt>
                            <dd className="text-muted-foreground">
                              <time
                                dateTime={brief._sys.createdAt.split('-')[0]}
                              >
                                {brief._sys.createdAt.split('-')[0]}
                              </time>
                            </dd>
                          </div>
                          <div className="border-t px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                            <dt className="font-mono text-xs font-bold tracking-tighter lg:text-sm">
                              Status
                            </dt>
                            <dd className="text-muted-foreground">
                              {brief.status}
                            </dd>
                          </div>
                          <div className="border-t px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                            <dt className="font-mono text-xs font-bold tracking-tighter lg:text-sm">
                              Service
                            </dt>
                            <dd className="text-muted-foreground">
                              {brief.service[0]?._sys.title}
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </Container>
                  </div>

                  <div className="border-y">
                    <div className="-my-px mx-auto max-w-[76rem] bg-background">
                      <GrayscaleTransitionImage
                        src={brief.featuredImage.url}
                        alt={
                          brief.featuredImage.alt ??
                          'An image for the project brief'
                        }
                        width={1216}
                        height={1216}
                        quality={90}
                        className="w-full"
                        sizes="(min-width: 1216px) 76rem, 100vw"
                        priority
                      />
                    </div>
                  </div>
                </FadeIn>
              </header>
              <Container className="mt-24 sm:mt-32 lg:mt-40">
                <RichTextComponents
                  blocks={brief.body?.json.blocks as BlockDocument[]}
                  content={brief.body?.json.content as BlockRichText}
                  centered
                />
              </Container>
              <ShowcaseBriefJson
                slug={brief._sys.slug}
                title={brief._sys.title}
                description={brief.metaDescription}
                datePublished={brief._sys.createdAt}
                dateModified={brief._sys.lastModifiedAt}
                imageUrl={brief.featuredImage.url}
                keyword={brief.keyword?._sys.title}
              />
            </article>

            {relatedBriefs.length > 0 && (
              <PageLinks
                className="mt-24 sm:mt-32 lg:mt-40"
                title="More case studies"
                pages={relatedBriefs.map((brief) => ({
                  href: `/showcase/${brief._sys.slug}`,
                  date: brief._sys.createdAt,
                  title: brief._sys.title,
                  description: brief.metaDescription,
                  readMoreButtonText: brief.readMoreButtonText,
                }))}
              />
            )}

            <ContactSection />
          </>
        );
      }}
    </Pump>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const query = getShowcaseBriefBySlugQuery(params.slug);
  const { showcase } = await basehubClient.query(query);

  const brief = showcase.brief.items[0];
  if (!brief) throw new Error('Not found');

  const metadata: Metadata = {
    title: brief.metaTitle,
    description: brief.metaDescription,
    openGraph: {
      type: 'website',
      title: brief.metaTitle,
      description: brief.metaDescription,
      images: [
        {
          url: siteConfig.image.url,
          width: siteConfig.image.width,
          height: siteConfig.image.height,
          alt: siteConfig.image.alt,
        },
      ],
      url: `${SITE_URL}/showcase/${params.slug}`,
    },
    twitter: {
      title: brief.metaTitle,
      description: brief.metaDescription,
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
