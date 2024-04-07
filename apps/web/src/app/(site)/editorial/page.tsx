import type { Metadata } from 'next';

import { RichText } from 'basehub/react-rich-text';

import type { BlockRichText } from '.basehub';

import { fetchBlogPage } from '#/basehub/blog-queries';
import { fetchEditorialPage } from '#/basehub/editorial-queries';
import { siteConfig } from '#/config/site';
import PageJson from '#/json-ld/page-jsonld';
import { formatDate, SITE_URL } from '#/lib/constants';
import { Border } from '#/ui/border';
import { ContactSection } from '#/ui/contact-section';
import { Container } from '#/ui/page-container';
import { PageIntro } from '#/ui/page-intro';
import { PageLinks } from '#/ui/page-links';
import RichTextComponents from '#/ui/shared/rich-text-components';

export default async function EditorialPolicyPage() {
  const editorial = await fetchEditorialPage();

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
        eyebrow={editorial.pageIntro.eyebrow}
        title={editorial.pageIntro.title}
        centered={editorial.pageIntro.centered}
      >
        <RichText>{editorial.pageIntro.description?.json.content}</RichText>
        <p className="flex items-center justify-center pt-6 text-sm text-alternate">
          Updated {formatDate(editorial._sys.lastModifiedAt)}
        </p>
      </PageIntro>

      <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
        <Border className="py-16" />
        <RichTextComponents
          content={editorial.body?.json.content as BlockRichText}
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
        pageSlug={`${editorial._sys.slug}`}
        pageName={`${editorial._sys.title} :: ${siteConfig.name}`}
        keyword={editorial.keyword?._sys.title}
      />
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const editorial = await fetchEditorialPage();

  const metadata = {
    title: editorial.meta.title,
    description: editorial.meta.description,
    openGraph: {
      type: 'website',
      title: editorial.meta.title,
      description: editorial.meta.description,
      images: [
        {
          url: siteConfig.image.url,
          width: siteConfig.image.width,
          height: siteConfig.image.height,
          alt: siteConfig.image.alt,
        },
      ],
      url: `${SITE_URL}/editorial`,
    },
    twitter: {
      title: editorial.meta.title,
      description: editorial.meta.description,
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
