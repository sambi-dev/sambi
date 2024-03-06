import { loadCaseStudies } from '#/lib/mdx';
import { BigWarning } from '#/ui/home/big-warning';
import { EmailCta } from '#/ui/home/email-cta';
import { Hero } from '#/ui/home/hero';
import { Introduction } from '#/ui/home/introduction';
import { Process } from '#/ui/home/process';
import { Resources } from '#/ui/home/resources';
import { Showcase } from '#/ui/home/showcase';
import { Tldr } from '#/ui/home/tldr';
import { Warnings } from '#/ui/home/warnings';
import { Footer } from '#/ui/layout/footer';
import { NavBar } from '#/ui/layout/navbar';

export default async function Home() {
  const caseStudies = (await loadCaseStudies()).slice(0, 3);
  return (
    <>
      <Hero />
      <Introduction />
      <NavBar />
      <Showcase caseStudies={caseStudies} />
      <BigWarning
        id="untestimonial-1"
        author={{
          name: 'Henri',
          role: 'Founder ',
          initials: 'HA',
        }}
      >
        <p>
          “Hiring sambi? Bad idea. They&apos;re the kind of problem-solvers you
          think you want until you realize everyone else will want them too.”
        </p>
      </BigWarning>
      <Process />
      <BigWarning
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Aditya',
          role: 'Protector of mediocrity',
          initials: 'AA',
        }}
      >
        <p>
          “I hired Sam at two of my companies. The problem is, he does so much
          that everyone expected the rest of us to step up too.”
        </p>
      </BigWarning>
      <Resources />
      <EmailCta />
      <Warnings />
      <Tldr />
      <Footer />
    </>
  );
}
