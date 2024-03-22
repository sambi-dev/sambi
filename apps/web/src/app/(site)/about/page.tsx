import type { Metadata } from 'next';

import { fetchBlogPosts } from '#/basehub/blog-queries';
import { fetchCrew } from '#/basehub/crew-queries';
import { siteConfig } from '#/config/site';
import { SITE_URL } from '#/lib/constants';
import Crew from '#/ui/about/crew';
import { Culture } from '#/ui/about/culture';
import { ContactSection } from '#/ui/contact-section';
import { FadeIn } from '#/ui/fade-in';
import { Container } from '#/ui/page-container';
import { PageIntro } from '#/ui/page-intro';
import { PageLinks } from '#/ui/page-links';
import { StatList, StatListItem } from '#/ui/stat-list';

export default async function About() {
  const { items: blogPosts } = await fetchBlogPosts({
    first: 2,
  });

  const pages = blogPosts.map((post) => ({
    href: `/blog/${post._sys.slug}`,
    title: post._sys.title,
    description: post.metaDescription,
    readMoreButtonText: post.readMoreButtonText,
  }));

  const crew = await fetchCrew();

  return (
    <>
      <PageIntro eyebrow="About us" title="Crafted through candor">
        <p>
          Our tale isn&apos;t spun from fairy dust. It&apos;s built on over a
          decade of{' '}
          <span className="line-through">
            Ambreen and Rebekah driving Sam crazy
          </span>{' '}
          real-world triumphs, an occasional stumble, and a relentless drive for
          results.
        </p>
      </PageIntro>

      <Container>
        <FadeIn className="my-10 grid max-w-xl grid-cols-1 gap-8 leading-7 text-muted-foreground lg:max-w-none lg:grid-cols-2 lg:text-lg">
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

      <Crew crew={crew} />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Stuck in the maze of business as usual? We share insights on our blog where we decode the latest trends, pass on our winning strategies, and even share our many facepalms."
        pages={pages}
      />

      <ContactSection />
    </>
  );
}

const title = 'About';
const description =
  "About sambi.dev? We're the Upwork agency everyone's talking about. A trio of tech 🤓 design 🎨 and demand. Sam + Ambreen + Rebekah = sambi. 🤔";
const pageUrl = `${SITE_URL}/about`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    title,
    description,
    images: [
      {
        url: siteConfig.image.url,
        width: siteConfig.image.width,
        height: siteConfig.image.height,
        alt: siteConfig.image.alt,
      },
    ],
    url: pageUrl,
  },
  twitter: {
    title,
    description,
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
