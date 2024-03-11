import type { MDXEntry, ProjectBrief } from '#/lib/mdx';

import { loadProjectBriefs } from '#/lib/mdx';
import { ContactSection } from '#/ui/contact-section';
import { FadeIn } from '#/ui/fade-in';
import { GrayscaleTransitionImage } from '#/ui/grayscale-transition-image';
import { MDXComponents } from '#/ui/mdx-components';
import { Container } from '#/ui/page-container';
import { PageIntro } from '#/ui/page-intro';
import { PageLinks } from '#/ui/page-links';

export default async function ProjectBriefWrapper({
  projectBrief,
  children,
}: {
  projectBrief: MDXEntry<ProjectBrief>;
  children: React.ReactNode;
}) {
  const allProjectBriefs = await loadProjectBriefs();
  const moreProjectBriefs = allProjectBriefs
    .filter(({ metadata }) => metadata !== projectBrief)
    .slice(0, 2);

  const eyebrowText = `${projectBrief.client} Project Brief${projectBrief.partner ? ' :: Via partner' : ''}`;

  return (
    <>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro eyebrow={eyebrowText} title={projectBrief.title} centered>
            <p>{projectBrief.description}</p>
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
                        {projectBrief.client}
                      </dd>
                    </div>
                    <div className="border-t px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-mono font-bold tracking-tighter">
                        Year
                      </dt>
                      <dd className="text-muted-foreground">
                        <time dateTime={projectBrief.date.split('-')[0]}>
                          {projectBrief.date.split('-')[0]}
                        </time>
                      </dd>
                    </div>
                    <div className="border-t px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-mono font-bold tracking-tighter">
                        Status
                      </dt>
                      <dd className="text-muted-foreground">
                        {projectBrief.status}
                      </dd>
                    </div>
                    <div className="border-t px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-mono font-bold tracking-tighter">
                        Service
                      </dt>
                      <dd className="text-muted-foreground">
                        {projectBrief.service}
                      </dd>
                    </div>
                  </dl>
                </div>
              </Container>
            </div>

            <div className="border-y">
              <div className="-my-px mx-auto max-w-[76rem] bg-background">
                <GrayscaleTransitionImage
                  {...projectBrief.image}
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
          <FadeIn>
            <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
          </FadeIn>
        </Container>
      </article>

      {moreProjectBriefs.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="More case studies"
          pages={moreProjectBriefs}
        />
      )}

      <ContactSection />
    </>
  );
}
