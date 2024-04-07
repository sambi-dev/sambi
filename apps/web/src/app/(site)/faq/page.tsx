import type { Metadata } from 'next';

import { RichText } from 'basehub/react-rich-text';

import { fetchBlogPage } from '#/basehub/blog-queries';
import { fetchFaqsPage } from '#/basehub/faq-queries';
import { siteConfig } from '#/config/site';
import { socialConfig } from '#/config/social';
import PageJson from '#/json-ld/page-jsonld';
import { SITE_URL } from '#/lib/constants';
import { Border } from '#/ui/border';
import { ContactSection } from '#/ui/contact-section';
import { Container } from '#/ui/page-container';
import { PageIntro } from '#/ui/page-intro';
import { PageLinks } from '#/ui/page-links';
import Faqs from '#/ui/shared/faq';

export default async function FaqPage() {
  const faqsPageData = await fetchFaqsPage();
  const orderedCategories = [
    'general',
    'clients',
    'partners',
    'vendors',
    'trolls',
  ];
  const blogPageData = await fetchBlogPage({
    first: 2,
  });

  const blogPosts = blogPageData.posts.items;

  const morePosts = blogPosts.map((post) => ({
    href: `/blog/${post._sys.slug}`,
    title: post._sys.title,
    description: post.metaDescription,
    readMoreButtonText: post.readMoreButtonText,
  }));

  return (
    <>
      <PageIntro
        eyebrow={faqsPageData.pageIntro.eyebrow}
        title={faqsPageData.pageIntro.title}
        centered={faqsPageData.pageIntro.centered}
      >
        <RichText>{faqsPageData.pageIntro.description?.json.content}</RichText>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <Border position="top" className="pb-1" />
        {orderedCategories.map((category) => {
          const filteredItems = faqsPageData.faq.items.filter(
            (item) => item.category === category,
          );
          const faqForCategory = {
            ...faqsPageData.faq,
            items: filteredItems,
          };
          return (
            <Faqs key={category} faq={faqForCategory} category={category} />
          );
        })}
        <div className="mx-auto mt-6 max-w-2xl text-pretty py-10 text-base leading-7 text-muted-foreground">
          Have a different question?{' '}
          <a
            href={socialConfig.links.support}
            className="font-semibold text-primary underline decoration-2 underline-offset-4 hover:text-primary/80"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open an issue on our GitHub project in a new window"
          >
            Reach out to us on GitHub
          </a>
          . We&apos;ll be happy to help.
        </div>
      </Container>

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="We've taken a page from the Hollywood book. Find every old and overused idea and freshen it up. The Mummy was underrated."
        pages={morePosts}
      />

      <ContactSection />
      <PageJson
        pageSlug={`${faqsPageData._sys.slug}`}
        pageName={`${faqsPageData._sys.title} :: ${siteConfig.name}`}
        keyword={faqsPageData.keyword._sys.title}
      />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const faqsPageData = await fetchFaqsPage();

  const metadata = {
    title: faqsPageData.meta.title,
    description: faqsPageData.meta.description,
    openGraph: {
      type: 'website',
      title: faqsPageData.meta.title,
      description: faqsPageData.meta.description,
      images: [
        {
          url: siteConfig.image.url,
          width: siteConfig.image.width,
          height: siteConfig.image.height,
          alt: siteConfig.image.alt,
        },
      ],
      url: `${SITE_URL}/faq`,
    },
    twitter: {
      title: faqsPageData.meta.title,
      description: faqsPageData.meta.description,
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

  return metadata;
}
