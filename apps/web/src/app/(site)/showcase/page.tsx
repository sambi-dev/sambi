import type { Metadata } from 'next';

import { RichText } from 'basehub/react-rich-text';

import {
  fetchShowcaseBriefs,
  fetchShowcasePageIntro,
  fetchShowcasePageMetadata,
} from '#/basehub/showcase-queries';
import { Clients } from '#/ui/clients';
import { ContactSection } from '#/ui/contact-section';
import { BigWarning } from '#/ui/home/big-warning';
import { PageIntro } from '#/ui/page-intro';
import { ProjectBriefs } from '#/ui/showcase/project-briefs';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await fetchShowcasePageMetadata();

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default async function Work() {
  const pageIntro = await fetchShowcasePageIntro();
  const { items: projectBriefs, totalCount } = await fetchShowcaseBriefs();

  return (
    <>
      <PageIntro
        eyebrow={pageIntro.eyebrow}
        title={pageIntro.title}
        centered={pageIntro.centered}
      >
        <RichText>{pageIntro.description?.json.content}</RichText>
      </PageIntro>

      <ProjectBriefs projectBriefs={projectBriefs} totalItems={totalCount} />

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
