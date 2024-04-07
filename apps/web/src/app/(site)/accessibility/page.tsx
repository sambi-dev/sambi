import type { Metadata } from 'next';

import { RichText } from 'basehub/react-rich-text';

import type { BlockRichText } from '.basehub';

import { fetchAccessibilityPage } from '#/basehub/accessibility-queries';
import { fetchBlogPage } from '#/basehub/blog-queries';
import { siteConfig } from '#/config/site';
import PageJson from '#/json-ld/page-jsonld';
import { formatDate, SITE_URL } from '#/lib/constants';
import { Border } from '#/ui/border';
import { ContactSection } from '#/ui/contact-section';
import { Container } from '#/ui/page-container';
import { PageIntro } from '#/ui/page-intro';
import { PageLinks } from '#/ui/page-links';
import RichTextComponents from '#/ui/shared/rich-text-components';

export default async function AccessibilityPage() {
  const accessibility = await fetchAccessibilityPage();

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
    <div>
      <PageIntro
        eyebrow={accessibility.pageIntro.eyebrow}
        title={accessibility.pageIntro.title}
        centered={accessibility.pageIntro.centered}
      >
        <RichText>{accessibility.pageIntro.description?.json.content}</RichText>
        <p className="flex items-center justify-center pt-6 text-sm text-alternate">
          Updated {formatDate(accessibility._sys.lastModifiedAt)}
        </p>
      </PageIntro>

      <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
        <Border className="py-16" />
        <RichTextComponents
          content={accessibility.body?.json.content as BlockRichText}
          centered
        />
      </Container>
      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="In an era of synthetic noise, we're proudly analog. Crafting content with our bare hands. Call us old fashioned."
        pages={morePosts}
      />
      <ContactSection />
      <PageJson
        pageSlug={`${accessibility._sys.slug}`}
        pageName={`${accessibility._sys.title} :: ${siteConfig.name}`}
        keyword={accessibility.keyword?._sys.title}
      />
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const accessibility = await fetchAccessibilityPage();

  const metadata = {
    title: accessibility.meta.title,
    description: accessibility.meta.description,
    openGraph: {
      type: 'website',
      title: accessibility.meta.title,
      description: accessibility.meta.description,
      images: [
        {
          url: siteConfig.image.url,
          width: siteConfig.image.width,
          height: siteConfig.image.height,
          alt: siteConfig.image.alt,
        },
      ],
      url: `${SITE_URL}/accessibility`,
    },
    twitter: {
      title: accessibility.meta.title,
      description: accessibility.meta.description,
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
