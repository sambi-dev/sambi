import type { Metadata } from 'next';

import { fetchBlogPosts } from '#/basehub/blog-queries';
import { SITE_URL } from '#/lib/constants';
import { ContactSection } from '#/ui/contact-section';
import { PageLinks } from '#/ui/page-links';
import ComingSoon from '#/ui/shared/coming-soon';

export default async function StackPage() {
  const { items: blogPosts } = await fetchBlogPosts({
    first: 2,
  });

  const pages = blogPosts.map((post) => ({
    href: `/blog/${post._slug}`,
    title: post._title,
    description: post.metaDescription,
    readMoreButtonText: post.readMoreButtonText,
  }));

  return (
    <>
      <ComingSoon
        eyebrow="Tech Stack"
        title="Uh, something is off"
        buttonText="I guess"
      >
        <p>
          You&apos;d think that a page about our tech stack would be the first
          thing we&apos;d do. Visit the blog until then?
        </p>
      </ComingSoon>

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Like tech? We write about cool tools, open source, and our own projects Check out the latest."
        pages={pages}
      />

      <ContactSection />
    </>
  );
}

const title = 'Our Stack';
const description =
  "Wondering what tools we use to build our products and grow our business? No problem, here's the sambi.dev stack with each tool so you can steal like an artist.";
const imageUrl = '/opengraph-image.gif';
const imageAlt =
  'Loading screen animation with pulsing text that spells out "Loading..." with the sambi.dev logo (a silohuette of a French Bulldog and lower case text) in the top left';
const pageUrl = `${SITE_URL}/stack`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    title,
    description,
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: imageAlt,
      },
    ],
    url: pageUrl,
  },
  twitter: {
    title,
    description,
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: imageAlt,
      },
    ],
  },
};
