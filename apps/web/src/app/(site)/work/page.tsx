import type { CaseStudy, MDXEntry } from '#/lib/mdx';
import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@sambi/ui';
import { buttonVariants } from '@sambi/ui/button';

import logoBrightPath from '#/images/clients/bright-path/logo-dark.svg';
import logoFamilyFund from '#/images/clients/family-fund/logo-dark.svg';
import logoGreenLife from '#/images/clients/green-life/logo-dark.svg';
import logoHomeWork from '#/images/clients/home-work/logo-dark.svg';
import logoMailSmirk from '#/images/clients/mail-smirk/logo-dark.svg';
import logoNorthAdventures from '#/images/clients/north-adventures/logo-dark.svg';
import logoPhobia from '#/images/clients/phobia/logo-dark.svg';
import logoUnseal from '#/images/clients/unseal/logo-dark.svg';
import { formatDate } from '#/lib/constants';
import { loadCaseStudies } from '#/lib/mdx';
import { Blockquote } from '#/ui/blockquote';
import { Border } from '#/ui/border';
import { ContactSection } from '#/ui/contact-section';
import { FadeIn, FadeInStagger } from '#/ui/fade-in';
import { Container } from '#/ui/page-container';
import { PageIntro } from '#/ui/page-intro';
import { ArrowIcon } from '#/ui/shared/icons';
import { LoadMore, LoadMoreButton, LoadMoreItems } from '#/ui/shared/load-more';
import { Testimonial } from '#/ui/testimonial';

function CaseStudies({ caseStudies }: { caseStudies: MDXEntry<CaseStudy>[] }) {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="text-2xl font-semibold text-foreground">Case studies</h2>
      </FadeIn>
      <LoadMore className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        <LoadMoreItems>
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.client}>
              <article>
                <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                  <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                    <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                      <Image
                        src={caseStudy.logo}
                        alt=""
                        className="h-16 w-16 flex-none rounded-xl grayscale hover:grayscale-0"
                        unoptimized
                      />
                      <h3 className="text-lg font-semibold text-foreground sm:mt-0 lg:mt-4">
                        {caseStudy.client}
                      </h3>
                    </div>
                    <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                      <p className="text-sm tracking-tight text-secondary-foreground after:ml-4 after:font-semibold after:text-muted-foreground after:content-['::'] lg:mt-2 lg:after:hidden">
                        {caseStudy.service}
                      </p>
                      <p className="text-sm text-muted-foreground lg:mt-2">
                        <time dateTime={caseStudy.date}>
                          {formatDate(caseStudy.date)}
                        </time>
                      </p>
                    </div>
                  </div>
                  <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                    {caseStudy.partner && (
                      <div className="block text-sm font-semibold uppercase tracking-widest text-primary">
                        Via partner
                      </div>
                    )}
                    <p className="mt-4 text-pretty text-4xl font-bold tracking-tight text-foreground hover:text-primary">
                      <Link href={caseStudy.href}>{caseStudy.title}</Link>
                    </p>
                    <div className="mt-6 space-y-6 text-base text-muted-foreground">
                      {caseStudy.summary.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <div className="mt-8 flex">
                      <Link
                        href={caseStudy.href}
                        aria-label={`Read case study: ${caseStudy.client}`}
                        className={cn(
                          buttonVariants({ variant: 'secondary', size: 'sm' }),
                        )}
                      >
                        Read case study
                        <ArrowIcon className=" ml-2 w-3 flex-none fill-current" />
                      </Link>
                    </div>
                    {caseStudy.testimonial && (
                      <Blockquote
                        author={caseStudy.testimonial.author}
                        className="mt-12"
                      >
                        {caseStudy.testimonial.content}
                      </Blockquote>
                    )}
                  </div>
                </Border>
              </article>
            </FadeIn>
          ))}
        </LoadMoreItems>
        <LoadMoreButton>Load more</LoadMoreButton>
      </LoadMore>
    </Container>
  );
}

type ClientLogoPair = [string, string];

const clients: ClientLogoPair[] = [
  ['Phobia', logoPhobia],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
];

function Clients() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="text-2xl font-semibold text-foreground">
          You’re in good company
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map(([client, logo]) => (
            <li key={client} className="group">
              <FadeIn className="overflow-hidden">
                <Border className="pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px">
                  <Image src={logo} alt={client} unoptimized />
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  );
}

export const metadata: Metadata = {
  title: 'Showcase',
  description:
    "Witness the marvel of sambi.dev's Showcase! We've perfected the art of eco-friendly project recycling 🌿 Same 5 templates, infinite possibilities 😉",
};

export default async function Work() {
  const caseStudies = await loadCaseStudies();

  return (
    <>
      <PageIntro eyebrow="Our work" title="Making us seem bigger than we are">
        <p>
          Unlike most humble creatives, we embrace reverse imposter syndrome,
          boasting louder and prouder than we probably should. It&apos;s our
          tribute to the brilliant minds whose ideas we{' '}
          <span className="line-through">steal</span> build upon.
        </p>
      </PageIntro>

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Mail Smirk', logo: logoMailSmirk }}
      >
        We approached <em>Studio</em> because we loved their past work. They
        delivered something remarkably similar in record time.
      </Testimonial>

      <Clients />

      <ContactSection />
    </>
  );
}
