import type { Metadata } from 'next';

import { RichText } from 'basehub/react-rich-text';

import { fetchBlogPosts } from '#/basehub/blog-queries';
import {
  fetchFaqs,
  fetchFaqsPageIntro,
  fetchFaqsPageMetadata,
} from '#/basehub/faq-queries';
import { siteConfig } from '#/config/site';
import PageJson from '#/json-ld/page-jsonld';
import { SITE_URL } from '#/lib/constants';
import { Border } from '#/ui/border';
import { ContactSection } from '#/ui/contact-section';
import { Container } from '#/ui/page-container';
import { PageIntro } from '#/ui/page-intro';
import { PageLinks } from '#/ui/page-links';
import Faqs from '#/ui/shared/faq';

export default async function FaqPage() {
  const pageIntro = await fetchFaqsPageIntro();
  const orderedCategories = [
    'general',
    'clients',
    'partners',
    'vendors',
    'trolls',
  ];
  const faq = await fetchFaqs();
  const { items: blogPosts } = await fetchBlogPosts({
    first: 2,
  });

  if (faq.items) {
    faq.items.sort((a, b) =>
      a.isPriority === b.isPriority ? 0 : a.isPriority ? -1 : 1,
    );
  }

  const pages = blogPosts.map((post) => ({
    href: `/blog/${post._sys.slug}`,
    title: post._sys.title,
    description: post.metaDescription,
    readMoreButtonText: post.readMoreButtonText,
  }));

  return (
    <>
      <PageIntro
        eyebrow={pageIntro.eyebrow}
        title={pageIntro.title}
        centered={pageIntro.centered}
      >
        <RichText>{pageIntro.description?.json.content}</RichText>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <Border position="top" className="pb-1" />
        {orderedCategories.map((category) => {
          const filteredItems = faq.items.filter(
            (item) => item.category === category,
          );
          const faqForCategory = {
            ...faq,
            items: filteredItems,
          };
          return (
            <Faqs key={category} faq={faqForCategory} category={category} />
          );
        })}
        <div className="mx-auto mt-6 max-w-2xl text-pretty py-10 text-base leading-7 text-muted-foreground">
          Have a different question?{' '}
          <a
            href={siteConfig.links.support}
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
        pages={pages}
      />

      <ContactSection />
      <PageJson
        pageSlug={`${pageIntro.jsonSlug}`}
        pageName={`${pageIntro.jsonTitle} :: ${siteConfig.name}`}
        keyword={pageIntro.keyword?._sys.title}
      />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const cmsMetadata = await fetchFaqsPageMetadata();

  const metadata = {
    title: cmsMetadata.title,
    description: cmsMetadata.description,
    openGraph: {
      type: 'website',
      title: cmsMetadata.title,
      description: cmsMetadata.description,
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
      title: cmsMetadata.title,
      description: cmsMetadata.description,
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
