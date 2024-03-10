import type { ImageProps } from 'next/image';

import glob from 'fast-glob';

async function loadEntries<T extends { date: string }>(
  directory: string,
  metaName: string,
): Promise<MDXEntry<T>[]> {
  return (
    await Promise.all(
      (await glob('**/page.mdx', { cwd: `src/app/(site)/${directory}` })).map(
        async (filename) => {
          const importedModule = (await import(
            `src/app/(site)/${directory}/${filename}`
          )) as ModuleWithMetaData<T>;
          const metadata = importedModule[metaName];
          if (!metadata) {
            throw new Error(`Metadata '${metaName}' not found in ${filename}`);
          }
          return {
            ...metadata,
            metadata,
            href: `/${directory}/${filename.replace(/\/page\.mdx$/, '')}`,
          };
        },
      ),
    )
  ).sort((a, b) => b.date.localeCompare(a.date));
}

type ModuleWithMetaData<T> = Record<string, T | undefined>;

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string };

export type MDXEntry<T> = T & { href: string; metadata: T };

type Category =
  | 'plan'
  | 'design'
  | 'get'
  | 'keep'
  | 'grow'
  | 'ai'
  | 'stack'
  | 'flow';

export interface BlogPost {
  date: string;
  title: string;
  description: string;
  category: Category;
  author: {
    name: string;
    role: string;
    image: ImagePropsWithOptionalAlt;
  };
  readMoreButtonText: string;
}

export interface AiPost {
  date: string;
  title: string;
  description: string;
  category: Category;
  llm: {
    company: string;
    model: string;
    image: ImagePropsWithOptionalAlt;
  };
  readMoreButtonText: string;
}

type ServiceType =
  | 'Plan'
  | 'Design'
  | 'Get'
  | 'Keep'
  | 'Grow'
  | 'Full Enchilada';

export type ProjectStatus =
  | 'Pitched'
  | 'Ghosted'
  | 'Ongoing'
  | 'Fixing'
  | 'Done';

export interface ProjectBrief {
  partner?: boolean;
  status?: ProjectStatus;
  client: string;
  title: string;
  description: string;
  summary: string[];
  logo: ImageProps['src'];
  image: ImagePropsWithOptionalAlt;
  date: string;
  service: ServiceType[];
  testimonial: {
    author: {
      name: string;
      role: string;
    };
    content: string;
  };
  readMoreButtonText: string;
}

export function loadBlogPosts() {
  return loadEntries<BlogPost>('blog', 'post');
}

export function loadAiPosts() {
  return loadEntries<AiPost>('mdx', 'aiPost');
}

export function loadProjectBriefs() {
  return loadEntries<ProjectBrief>('showcase', 'projectBrief');
}
