import type { BlogPost, MDXEntry } from '#/lib/mdx';

import Image from 'next/image';

import { formatDate } from '#/lib/constants';
import { loadBlogPosts } from '#/lib/mdx';
import { Border } from '#/ui/border';
import { ContactSection } from '#/ui/contact-section';
import { FadeIn } from '#/ui/fade-in';
import { MDXComponents } from '#/ui/mdx-components';
import { Container } from '#/ui/page-container';
import { PageLinks } from '#/ui/page-links';

export default async function BlogPostWrapper({
  post,
  children,
}: {
  post: MDXEntry<BlogPost>;
  children: React.ReactNode;
}) {
  const allBlogPosts = await loadBlogPosts();
  const moreBlogPosts = allBlogPosts
    .filter(({ metadata }) => metadata !== post)
    .slice(0, 2);

  return (
    <>
      <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <header className="mx-auto flex max-w-5xl flex-col text-center">
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-foreground [text-wrap:balance] sm:text-6xl">
              {post.title}
            </h1>
            <time
              dateTime={post.date}
              className="order-first block text-sm font-semibold uppercase tracking-widest text-primary"
            >
              {formatDate(post.date)}
            </time>
            <div className="mt-6 flex items-center justify-center space-x-2">
              <Image
                src={post.author.image.src}
                alt={`Image of ${post.author.name}`}
                className="h-6 w-6 flex-none rounded-full bg-background grayscale transition duration-500 hover:grayscale-0 motion-safe:hover:scale-105"
              />
              <span className="text-sm font-medium text-secondary-foreground">
                {post.author.name}
              </span>
              <span className="text-sm text-secondary-foreground">::</span>
              <span className="text-sm font-medium uppercase text-primary">
                #{post.category}
              </span>
            </div>
            <Border className="my-16" />
          </header>
        </FadeIn>

        <FadeIn>
          <MDXComponents.wrapper className="mt-8 sm:mt-16">
            {children}
          </MDXComponents.wrapper>
        </FadeIn>
      </Container>

      {moreBlogPosts.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="More articles"
          pages={moreBlogPosts}
        />
      )}

      <ContactSection />
    </>
  );
}
