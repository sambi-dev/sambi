import type { Metadata } from 'next';

import { fetchBlogPosts } from '#/basehub/blog-queries';
import { ContactSection } from '#/ui/contact-section';
import { PageLinks } from '#/ui/page-links';
import ComingSoon from '#/ui/shared/coming-soon';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    "Got hard questions? We got ChatGPT and Claude 3 subscriptions. First, check our our frequently asked questions. When they're ready that is.",
};

export default async function FAQ() {
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
        eyebrow="Frequently Asked Questions"
        title="We hit our ChatGPT limit"
        buttonText="Take me there"
      >
        <p>
          We have ChatGPT and Claude 3 subscriptions too. You&apos;d think
          we&apos;d be able to finish this page already. Take a look at our
          recent project showcase in the meantime?
        </p>
      </ComingSoon>

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="We've taken a page from the Hollywood book. Find every old and overused idea and freshen it up. The Mummy was underrated."
        pages={pages}
      />

      <ContactSection />
    </>
  );
}
