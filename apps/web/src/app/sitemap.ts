import type { AiBlogPostFragment } from '#/basehub/ai-blog-queries';
import type { BlogPostFragment } from '#/basehub/blog-queries';
import type { ShowcaseBriefFragment } from '#/basehub/showcase-queries';
import type { MetadataRoute } from 'next';

import { fetchAiBlogPosts } from '#/basehub/ai-blog-queries';
import { fetchBlogPosts } from '#/basehub/blog-queries';
import { fetchShowcaseBriefs } from '#/basehub/showcase-queries';
import { SITE_URL } from '#/lib/constants';

type BasehubItem =
  | AiBlogPostFragment
  | BlogPostFragment
  | ShowcaseBriefFragment;

export interface SitemapData {
  slug: string;
  _updatedAt: string;
}

async function fetchSitemapData<T extends BasehubItem>(
  fetchFn: (args: { first: number }) => Promise<{ items: T[] }>,
  path: string,
): Promise<SitemapData[]> {
  const { items } = await fetchFn({ first: 100 });
  return items.map(({ _sys: { slug, lastModifiedAt } }) => ({
    slug: `${SITE_URL}/${path}/${slug}`,
    _updatedAt: lastModifiedAt,
  }));
}

async function getAllSitemapData(): Promise<SitemapData[]> {
  const [aiBlog, blog, showcase] = await Promise.all([
    fetchSitemapData<AiBlogPostFragment>(fetchAiBlogPosts, 'ai-blog'),
    fetchSitemapData<BlogPostFragment>(fetchBlogPosts, 'blog'),
    fetchSitemapData<ShowcaseBriefFragment>(fetchShowcaseBriefs, 'showcase'),
  ]);

  return [...aiBlog, ...blog, ...showcase];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allSitemap = await getAllSitemapData();

  const staticRoutes = [
    '/',
    '/about',
    '/accessibility',
    '/ai-blog',
    '/blog',
    '/clients',
    '/contact',
    '/editorial',
    '/faq',
    '/privacy',
    '/process',
    '/showcase',
    '/stack',
    '/terms',
  ].map((path) => ({ url: `${SITE_URL}${path}`, lastModified: new Date() }));

  const dynamicRoutes = allSitemap.map(({ slug, _updatedAt }) => ({
    url: slug,
    lastModified: _updatedAt,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
