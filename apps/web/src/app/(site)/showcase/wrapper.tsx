import type { CaseStudy, MDXEntry } from '#/lib/mdx';

import { loadCaseStudies } from '#/lib/mdx';
import { ContactSection } from '#/ui/contact-section';
import { FadeIn } from '#/ui/fade-in';
import { GrayscaleTransitionImage } from '#/ui/grayscale-transition-image';
import { MDXComponents } from '#/ui/mdx-components';
import { Container } from '#/ui/page-container';
import { PageIntro } from '#/ui/page-intro';
import { PageLinks } from '#/ui/page-links';

export default async function CaseStudyLayout({
  caseStudy,
  children,
}: {
  caseStudy: MDXEntry<CaseStudy>;
  children: React.ReactNode;
}) {
  const allCaseStudies = await loadCaseStudies();
  const moreCaseStudies = allCaseStudies
    .filter(({ metadata }) => metadata !== caseStudy)
    .slice(0, 2);

  const eyebrowText = `Brief${caseStudy.partner ? ' :: Via partner' : ''}`;

  return (
    <>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro eyebrow={eyebrowText} title={caseStudy.title} centered>
            <p>{caseStudy.description}</p>
          </PageIntro>

          <FadeIn>
            <div className="mt-24 border border-t sm:mt-32 lg:mt-40">
              <Container>
                <div className="mx-auto max-w-5xl">
                  <dl className="-mx-6 grid grid-cols-1 text-sm text-secondary-foreground sm:mx-0 sm:grid-cols-4">
                    <div className="border-t px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Client</dt>
                      <dd className="text-muted-foreground">
                        {caseStudy.client}
                      </dd>
                    </div>
                    <div className="border-t px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Year</dt>
                      <dd className="text-muted-foreground">
                        <time dateTime={caseStudy.date.split('-')[0]}>
                          {caseStudy.date.split('-')[0]}
                        </time>
                      </dd>
                    </div>
                    <div className="border-t px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Status</dt>
                      <dd className="text-muted-foreground">
                        {caseStudy.status}
                      </dd>
                    </div>
                    <div className="border-t px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Service</dt>
                      <dd className="text-muted-foreground">
                        {caseStudy.service}
                      </dd>
                    </div>
                  </dl>
                </div>
              </Container>
            </div>

            <div className="border-y">
              <div className="-my-px mx-auto max-w-[76rem] bg-background">
                <GrayscaleTransitionImage
                  {...caseStudy.image}
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

      {moreCaseStudies.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="More case studies"
          pages={moreCaseStudies}
        />
      )}

      <ContactSection />
    </>
  );
}
