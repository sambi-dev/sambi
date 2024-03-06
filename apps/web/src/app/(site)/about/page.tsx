import type { Metadata } from 'next';

import Image from 'next/image';

import imageAmbreen from '#/images/team/ambreen.jpg';
import imageRebekah from '#/images/team/rebekah.jpg';
import imageSam from '#/images/team/sam.jpg';
import { loadArticles } from '#/lib/mdx';
import { Border } from '#/ui/border';
import { ContactSection } from '#/ui/contact-section';
import { FadeIn, FadeInStagger } from '#/ui/fade-in';
import { GridList, GridListItem } from '#/ui/grid-list';
import { Container } from '#/ui/page-container';
import { PageIntro } from '#/ui/page-intro';
import { PageLinks } from '#/ui/page-links';
import { SectionIntro } from '#/ui/section-intro';
import { StatList, StatListItem } from '#/ui/stat-list';

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-card py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro eyebrow="Guiding principles" title="How we operate">
        <p>
          We champion a culture where ideas can emerge from anywhere. Teams are
          flatter, roles are blended, and success is collective.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Creators at heart">
            We get it. This new synthetic world is kinda crazy. We do everything
            to fuel the human creative spirit.
          </GridListItem>
          <GridListItem title="Inclusive by design">
            Our culture&apos;s built on accessibility, diversity, and belonging
            where all voices are heard and valued.
          </GridListItem>
          <GridListItem title="Courage to innovate">
            We dare to explore the frontiers of human and AI potential. We
            enable simple yet remarkably effective solutions.
          </GridListItem>
          <GridListItem title="Transparent practices">
            We&apos;re an open book—sharing our processes, decisions, and the
            why behind them.
          </GridListItem>
          <GridListItem title="Collective brilliance">
            The confluence of our diverse talents makes us shine. It pushes us
            all beyond our own wildest expectations.
          </GridListItem>
          <GridListItem title="Humanity amid AI">
            We&apos;re crafting AI that amplifies human creativity and
            connection, not replaces it.
          </GridListItem>
          <GridListItem title="Privacy and trust">
            Your trust is sacred, your privacy paramount. We defend them with
            everything we&apos;ve got.
          </GridListItem>
          <GridListItem title="Shared prosperity">
            Fair equity distribution and cooperative decision-making fuel our
            commitment to collaborative results.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
}

const team = [
  {
    title: 'The crew',
    people: [
      {
        name: 'Sam Rizvi',
        role: 'Strategy & Tech',
        image: { src: imageSam },
      },
      {
        name: 'Ambreen Dar',
        role: 'Creative & Design',
        image: { src: imageAmbreen },
      },
      {
        name: 'Rebekah Radice',
        role: 'Brand & Growth',
        image: { src: imageRebekah },
      },
    ],
  },
];

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  );
}

export const metadata: Metadata = {
  title: 'About',
  description:
    "About sambi.dev? We're the Upwork agency everyone's talking about. A trio of tech 🤓 design 🎨 and demand. Sam + Ambreen + Rebekah = sambi. 🤔",
};

export default async function About() {
  const blogArticles = (await loadArticles()).slice(0, 2);

  return (
    <>
      <PageIntro eyebrow="About us" title="Crafted through candor">
        <p>
          Our tale isn&apos;t spun from fairy dust—instead, it&apos;s built on a
          decade of real-world triumphs, the occasional stumble, and a
          relentless drive for results.
        </p>
      </PageIntro>

      <Container>
        <FadeIn className="my-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-muted-foreground lg:max-w-none lg:grid-cols-2 lg:text-lg">
          <div>
            <p>
              We&apos;re Sam and Ambreen...and Rebekah. Three principals
              who&apos;ve turned our collective experiences into a powerhouse of
              creativity, strategy, and technology.
            </p>
            <p className="mt-8">
              Sam navigated the high seas of enterprise tech and management
              consulting. Rebekah, with a voice that once ruled LA airwaves,
              transitioned into real estate, only to redefine what it means to
              influence in the B2B world. And Ambreen? Her designs didn&apos;t
              just win awards, they captured imaginations.
            </p>
            <p className="mt-8">
              Together, we&apos;ve laughed in the face of that&apos;s impossible
              and danced around it can&apos;t be done.
            </p>
          </div>
          <div>
            <p>
              The pandemic threw us a curveball, as it did to the world. We dove
              into newsletters, tinkered with AI editors, and dreamed big. As
              the cash ran out, we regrouped, refocused, and remembered what we
              do best. Turn your ideas into products then thriving companies.
            </p>
            <p className="mt-8">
              This isn&apos;t about us being jills of all trades—though, our
              clients say we&apos;re pretty good at what we do. It&apos;s about
              doing a few things better than almost anyone else and getting
              results.
            </p>
            <p className="mt-8">
              Our diet is rich with data. Our workflow powered by continuous
              delivery, radical candor, and real-time transparency. We&apos;ve
              seen what works, learned from what doesn&apos;t, and we&apos;re
              always on the lookout for the next challenge.
            </p>
          </div>
        </FadeIn>
        <StatList className="mt-16">
          <StatListItem value="317 Million" label="Users acquired" />
          <StatListItem value="16 Million" label="Customers converted" />
          <StatListItem value="+$10,000,000" label="Lifetime earnings" />
          <StatListItem value="92" label="Net Promoter Score" />
          <StatListItem value="7,330" label="Bottles of Pepto Bismol" />
          <StatListItem value="100,000" label="Hair follicles lost" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Stuck in the maze of business as usual? We share insights on our blog where we decode the latest trends, pass on our winning strategies, and even share our many facepalms."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  );
}
