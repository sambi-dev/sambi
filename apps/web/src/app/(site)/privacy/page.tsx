import type { Metadata } from 'next';

import { fetchBlogPosts } from '#/basehub/blog-queries';
import { ContactSection } from '#/ui/contact-section';
import { PageLinks } from '#/ui/page-links';
import ComingSoon from '#/ui/shared/coming-soon';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    "Our Privacy Policy, crafted by lawyers who never met a word they didn't like. It's thorough, it's dense, and it's easy to read if that's your thing.",
};

export default async function PrivacyPolicy() {
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
        eyebrow="Privacy Policy"
        title="Don't tell our lawyers"
        buttonText="Wait, really?"
      >
        <p>
          You were looking for our privacy policy? It&apos;s not here yet. This
          is actually a page designed to demonstrate ineffective bait and switch
          tactics. So visit our showcase instead?
        </p>
      </ComingSoon>

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Amidst the digital echo chamber, we're the ones still using typewriters. Check out our blog to read recently upcycled content"
        pages={pages}
      />

      <ContactSection />
    </>
  );
}
