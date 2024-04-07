import type { Metadata } from 'next';

import { fetchBlogPage } from '#/basehub/blog-queries';
import { siteConfig } from '#/config/site';
import PageJson from '#/json-ld/page-jsonld';
import { SITE_URL } from '#/lib/constants';
import { ContactSection } from '#/ui/contact-section';
import { PageLinks } from '#/ui/page-links';
import ComingSoon from '#/ui/shared/coming-soon';

export default async function StackPage() {
  const morePostsData = await fetchBlogPage({
    first: 2,
  });

  const morePosts = morePostsData.posts.items.map((post) => ({
    href: `/blog/${post._sys.slug}`,
    title: post._sys.title,
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
        pages={morePosts}
      />

      <ContactSection />
      <PageJson
        pageSlug="stack"
        pageName={`${title} :: ${siteConfig.name}`}
        keyword="freelancer tool stack"
      />
    </>
  );
}

const title = 'Our Stack';
const description =
  "Wondering what tools we use to build our products and grow our business? No problem, here's the Yo! CXO stack with each tool so you can steal like an artist.";

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
