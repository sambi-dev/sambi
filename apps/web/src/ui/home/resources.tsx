import Link from 'next/link';

import { cn } from '@sambi/ui';
import { buttonVariants } from '@sambi/ui/button';

import { freeResources } from '#/content/free-resources';
import { SectionIntro } from '#/ui/section-intro';
import { Container } from '#/ui/shared/container';
import { ArrowIcon } from '#/ui/shared/icons';

export function Resources() {
  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <SectionIntro
        title="Passing on our Legos"
        eyebrow="Resources"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Why spend time developing new content when you can repurpose old ideas
          that people keep reading. We&apos;re passing on Legos we passed along
          a long time ago, again.
        </p>
      </SectionIntro>
      <Container size="lg" className="mt-16">
        <ol className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 xl:-mx-12 xl:divide-x xl:divide-primary/50">
          {freeResources.map((freeResource) => (
            <li
              key={freeResource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                <freeResource.image />
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {freeResource.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {freeResource.description}
                </p>
              </div>
              <div className="mt-4 flex">
                {freeResource.external ? (
                  <a
                    href={freeResource.href}
                    aria-label={freeResource.linkAriaText}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: 'secondary', size: 'sm' }),
                    )}
                  >
                    {freeResource.linkText}
                    <ArrowIcon className="ml-2 w-4 flex-none fill-current" />
                  </a>
                ) : (
                  <Link
                    href={freeResource.href}
                    aria-label={freeResource.linkAriaText}
                    className={cn(
                      buttonVariants({ variant: 'secondary', size: 'sm' }),
                    )}
                  >
                    {freeResource.linkText}
                    <ArrowIcon className="ml-2 w-4 flex-none fill-current" />
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
