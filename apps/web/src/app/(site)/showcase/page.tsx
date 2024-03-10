import type { Metadata } from 'next';

import { loadProjectBriefs } from '#/lib/mdx';
import { Clients } from '#/ui/clients';
import { ContactSection } from '#/ui/contact-section';
import { BigWarning } from '#/ui/home/big-warning';
import { PageIntro } from '#/ui/page-intro';
import { ProjectBriefs } from '#/ui/showcase/project-briefs';

export const metadata: Metadata = {
  title: 'Showcase',
  description:
    "Witness the marvel of sambi.dev's Showcase! We've perfected the art of eco-friendly project recycling 🌿 Same 5 templates, infinite possibilities 😉",
};

export default async function Work() {
  const projectBriefs = await loadProjectBriefs();

  return (
    <>
      <PageIntro eyebrow="Showcase" title="Making us seem bigger than we are">
        <p>
          Unlike most humble creatives, we embrace reverse imposter syndrome,
          boasting louder and prouder than we probably should. It&apos;s our
          tribute to the brilliant minds whose ideas we{' '}
          <span className="line-through">steal</span> build upon.
        </p>
      </PageIntro>

      <ProjectBriefs
        projectBriefs={projectBriefs}
        totalItems={projectBriefs.length}
      />

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
          <span className="text-alternate">*</span>.
        </p>
      </Clients>

      <ContactSection />
    </>
  );
}
