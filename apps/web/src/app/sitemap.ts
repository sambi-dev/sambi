import type { AiPostFragment } from '#/basehub/ai-blog-queries';
import type { BlogPostFragment } from '#/basehub/blog-queries';
import type { ShowcaseBriefFragment } from '#/basehub/showcase-queries';
import type { MetadataRoute } from 'next';

import { fetchAiBlogPage } from '#/basehub/ai-blog-queries';
import { fetchBlogPage } from '#/basehub/blog-queries';
import { fetchShowcasePage } from '#/basehub/showcase-queries';
import { SITE_URL } from '#/lib/constants';

type BasehubItem = AiPostFragment | BlogPostFragment | ShowcaseBriefFragment;

export interface SitemapData {
  slug: string;
  _updatedAt: string;
}

async function fetchSitemapData<T extends BasehubItem>(
  fetchFn: (args: { skip?: number; first?: number }) => Promise<
    Record<
      string,
      {
        items?: T[];
      } & Record<string, unknown>
    >
  >,
  path: string,
): Promise<SitemapData[]> {
  const data = await fetchFn({ first: 100 });
  const key = Object.keys(data).find(
    (key) => key !== '_sys' && data[key] && 'items' in data[key]!,
  );
  const items = key ? data[key]?.items ?? [] : [];
  return items.map(({ _sys: { slug, lastModifiedAt } }) => ({
    slug: `${SITE_URL}/${path}/${slug}`,
    _updatedAt: lastModifiedAt,
  }));
}

async function getAllSitemapData(): Promise<SitemapData[]> {
  const [aiBlog, blog, showcase] = await Promise.all([
    fetchSitemapData<AiPostFragment>(fetchAiBlogPage, 'ai-blog'),
    fetchSitemapData<BlogPostFragment>(fetchBlogPage, 'blog'),
    fetchSitemapData<ShowcaseBriefFragment>(fetchShowcasePage, 'showcase'),
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
