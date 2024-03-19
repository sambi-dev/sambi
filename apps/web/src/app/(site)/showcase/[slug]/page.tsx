import { notFound } from 'next/navigation';

import { basehubClient } from '#/basehub/client';
import {
  fetchShowcaseBriefs,
  getShowcaseBriefBySlugQuery,
} from '#/basehub/showcase-queries';
import { ContactSection } from '#/ui/contact-section';
import { FadeIn } from '#/ui/fade-in';
import { GrayscaleTransitionImage } from '#/ui/grayscale-transition-image';
import { Container } from '#/ui/page-container';
import { PageIntro } from '#/ui/page-intro';
import { PageLinks } from '#/ui/page-links';
import RichTextWrapper from '#/ui/shared/rich-text-wrapper';

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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<{ title: string; description: string }> {
  const query = getShowcaseBriefBySlugQuery(params.slug);
  const { showcase } = await basehubClient.query(query);

  const brief = showcase.brief.items[0];
  if (!brief) throw new Error('Not found');

  return {
    title: brief.metaTitle,
    description: brief.metaDescription,
  };
}

export default async function ProjectBriefPage({
  params,
}: {
  params: { slug: string };
}) {
  const { showcase } = await basehubClient.query(
    getShowcaseBriefBySlugQuery(params.slug),
  );
  const brief = showcase.brief.items[0];
  if (!brief) notFound();

  const { items: moreShowcaseBriefs } = await fetchShowcaseBriefs({
    first: 2,
  });

  const eyebrowText = `${brief.client._title} Project Brief${brief.isPartner ? ' :: Via partner' : ''}`;

  const formattedPages = moreShowcaseBriefs.map((brief) => ({
    href: `/showcase/${brief._slug}`,
    title: brief._title,
    description: brief.metaDescription,
    readMoreButtonText: brief.readMoreButtonText,
  }));

  return (
    <>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro eyebrow={eyebrowText} title={brief._title} centered>
            <p>{brief.metaDescription}</p>
          </PageIntro>

          <FadeIn>
            <div className="mt-24 border border-t sm:mt-32 lg:mt-40">
              <Container>
                <div className="mx-auto max-w-5xl">
                  <dl className="-mx-6 grid grid-cols-1 text-sm text-secondary-foreground sm:mx-0 sm:grid-cols-4">
                    <div className="border-t px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-mono font-bold tracking-tighter">
                        Client
                      </dt>
                      <dd className="text-muted-foreground">
                        {brief.client._title}
                      </dd>
                    </div>
                    <div className="border-t px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-mono font-bold tracking-tighter">
                        Year
                      </dt>
                      <dd className="text-muted-foreground">
                        <time dateTime={brief.publishedDate.split('-')[0]}>
                          {brief.publishedDate.split('-')[0]}
                        </time>
                      </dd>
                    </div>
                    <div className="border-t px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-mono font-bold tracking-tighter">
                        Status
                      </dt>
                      <dd className="text-muted-foreground">{brief.status}</dd>
                    </div>
                    <div className="border-t px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-mono font-bold tracking-tighter">
                        Service
                      </dt>
                      <dd className="text-muted-foreground">
                        {brief.service[0]?._title}
                      </dd>
                    </div>
                  </dl>
                </div>
              </Container>
            </div>

            <div className="border-y">
              <div className="-my-px mx-auto max-w-[76rem] bg-background">
                <GrayscaleTransitionImage
                  src={brief.image.url}
                  alt={brief.image.alt ?? 'An image for the project brief'}
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
          <RichTextWrapper content={brief.content?.json.content as string} />
        </Container>
      </article>

      {formattedPages.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="More case studies"
          pages={formattedPages}
        />
      )}

      <ContactSection />
    </>
  );
}
