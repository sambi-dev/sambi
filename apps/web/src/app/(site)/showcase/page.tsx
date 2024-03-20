import type { ShowcaseBriefFragment } from '#/basehub/showcase-queries';
import type { Metadata } from 'next';

import { RichText } from 'basehub/react-rich-text';

import {
  fetchShowcaseBriefs,
  fetchShowcasePageIntro,
  fetchShowcasePageMetadata,
} from '#/basehub/showcase-queries';
import { SITE_URL } from '#/lib/constants';
import { Clients } from '#/ui/clients';
import { ContactSection } from '#/ui/contact-section';
import { BigWarning } from '#/ui/home/big-warning';
import { PageIntro } from '#/ui/page-intro';
import { LoadMore, LoadMoreButton, LoadMoreItems } from '#/ui/shared/load-more';
import { ProjectBriefs } from '#/ui/showcase/project-briefs';

export default async function Work() {
  const { items: initialProjectBriefs, totalCount } = await fetchShowcaseBriefs(
    { skip: 0, first: 10 },
  );
  const pageIntro = await fetchShowcasePageIntro();

  return (
    <>
      <PageIntro
        eyebrow={pageIntro.eyebrow}
        title={pageIntro.title}
        centered={pageIntro.centered}
      >
        <RichText>{pageIntro.description?.json.content}</RichText>
      </PageIntro>

      <LoadMore<ShowcaseBriefFragment>
        className="mt-24 space-y-24 sm:mt-32 lg:mt-40"
        totalItems={totalCount}
        initialItems={initialProjectBriefs}
        loadMoreFn={fetchShowcaseBriefs}
      >
        <LoadMoreItems>
          <ProjectBriefs projectBriefs={initialProjectBriefs} />
        </LoadMoreItems>
        <LoadMoreButton>Load more</LoadMoreButton>
      </LoadMore>

      <div className="mt-24 sm:mt-32 lg:mt-40">
        <BigWarning
          id="untestimonial-1"
          author={{
            name: 'Henri L.',
            role: 'Founder ',
            initials: 'HL',
          }}
        >
          <p>
            “Hiring sambi? Bad idea. They&apos;re the kind of problem-solvers
            you think you want until you realize everyone else will want them
            too.”
          </p>
        </BigWarning>
      </div>

      <Clients title="Roasted by the best" limit="sm">
        <p>
          Believe it or not, we&apos;ve gotten grilled by some big names.
          Sometimes the heat was direct{' '}
          <span className="line-through">and hot</span> or thankfully via a
          partner
          <span className="text-primary">*</span>.
        </p>
      </Clients>

      <ContactSection />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const cmsMetadata = await fetchShowcasePageMetadata();
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
      url: `${SITE_URL}/showcase`,
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
