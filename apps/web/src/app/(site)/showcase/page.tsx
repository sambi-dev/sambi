import type { Metadata } from 'next';

import { RichText } from 'basehub/react-rich-text';

import { fetchShowcasePage } from '#/basehub/showcase-queries';
import { siteConfig } from '#/config/site';
import PageJson from '#/json-ld/page-jsonld';
import { SITE_URL } from '#/lib/constants';
import { Clients } from '#/ui/clients';
import { ContactSection } from '#/ui/contact-section';
import { PageIntro } from '#/ui/page-intro';
import { ProjectBriefs } from '#/ui/showcase/project-briefs';
import { BigWarning } from '#/ui/warnings/big-warning';

export default async function ShowcasePage() {
  const showcase = await fetchShowcasePage({ skip: 0, first: 10 });

  return (
    <>
      <PageIntro
        eyebrow={showcase.pageIntro.eyebrow}
        title={showcase.pageIntro.title}
        centered={showcase.pageIntro.centered}
      >
        <RichText>{showcase.pageIntro.description?.json.content}</RichText>
      </PageIntro>

      <div className="mt-24 space-y-24 sm:mt-32 lg:mt-40">
        <ProjectBriefs projectBriefs={showcase.brief.items} />
      </div>

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
            “Hiring Yo! CXO? Bad idea. They&apos;re the kind of problem-solvers
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
      <PageJson
        pageSlug={`${showcase._sys.slug}`}
        pageName={`${showcase._sys.title} :: ${siteConfig.name}`}
        keyword={showcase.keyword._sys.title}
      />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const showcase = await fetchShowcasePage();

  const metadata = {
    title: showcase.meta.title,
    description: showcase.meta.description,
    openGraph: {
      type: 'website',
      title: showcase.meta.title,
      description: showcase.meta.description,
      images: [
        {
          url: siteConfig.image.url,
          width: siteConfig.image.width,
          height: siteConfig.image.height,
          alt: siteConfig.image.alt,
        },
      ],
      url: `${SITE_URL}/showcase`,
    },
    twitter: {
      title: showcase.meta.title,
      description: showcase.meta.description,
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
