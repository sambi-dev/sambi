import { fetchShowcaseBriefs } from '#/basehub/showcase-queries';
import { BigWarning } from '#/ui/home/big-warning';
import { Hero } from '#/ui/home/hero';
import { Introduction } from '#/ui/home/introduction';
import { Mettle } from '#/ui/home/mettle';
import { Process } from '#/ui/home/process';
import { Resources } from '#/ui/home/resources';
import { Showcase } from '#/ui/home/showcase';
import { Tldr } from '#/ui/home/tldr';
import { Warnings } from '#/ui/home/warnings';
import { Footer } from '#/ui/layout/footer';
import { NavBar } from '#/ui/layout/navbar';
import { Cta } from '#/ui/shared/cta';

export default async function Home() {
  const { items: projectBriefs } = await fetchShowcaseBriefs({ first: 3 });
  return (
    <>
      <Hero />
      <Introduction />
      <NavBar />
      <Mettle />
      <Showcase projectBriefs={projectBriefs} />
      <BigWarning
        id="untestimonial-1"
        author={{
          name: 'Peter J.',
          role: 'Founder ',
          initials: 'PJT',
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
          name: 'Aditya A.',
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
      <Cta />
      <Warnings />
      <Tldr />
      <Footer />
    </>
  );
}
