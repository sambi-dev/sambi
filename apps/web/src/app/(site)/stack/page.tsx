import type { Metadata } from 'next';

import { loadBlogPosts } from '#/lib/mdx';
import { ContactSection } from '#/ui/contact-section';
import { PageLinks } from '#/ui/page-links';
import ComingSoon from '#/ui/shared/coming-soon';

export const metadata: Metadata = {
  title: 'Our Stack',
  description:
    "Wondering what tools we use to build our products and grow our business? No problem, here's the sambi.dev stack with each tool so you can steal like an artist.",
};

export default async function StackPage() {
  const blogPosts = (await loadBlogPosts()).slice(0, 2);

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
        pages={blogPosts}
      />

      <ContactSection />
    </>
  );
}
