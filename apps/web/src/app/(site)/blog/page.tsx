import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@sambi/ui';
import { buttonVariants } from '@sambi/ui/button';

import { formatDate } from '#/lib/constants';
import { loadBlogPosts } from '#/lib/mdx';
import { Border } from '#/ui/border';
import { ContactSection } from '#/ui/contact-section';
import { FadeIn } from '#/ui/fade-in';
import { Container } from '#/ui/page-container';
import { PageIntro } from '#/ui/page-intro';
import { ArrowIcon } from '#/ui/shared/icons';
import { LoadMore, LoadMoreButton, LoadMoreItems } from '#/ui/shared/load-more';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Stay "up-to-date" with sambi.dev\'s Blog. 📰 Where we find innovative ways to recycle old news and pass it off as cutting-edge insights, again. 🤫',
};

export default async function Blog() {
  const blogPosts = await loadBlogPosts();

  return (
    <>
      <PageIntro eyebrow="Blog" title="Like open source for expertise">
        <p>
          Dive into our blog for a no-fluff zone of insights and experiences.
          Includes epic facepalms and tons of wins too. We&apos;re sharing it
          all.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <LoadMore className="space-y-24 lg:space-y-32">
          <LoadMoreItems>
            {blogPosts.map((post) => (
              <FadeIn key={post.href}>
                <article>
                  <Border className="pt-16">
                    <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                      <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                        <div className="mb-2 text-sm font-semibold uppercase text-primary">
                          #{post.category}
                        </div>
                        <h2 className="max-w-2xl text-pretty text-2xl font-semibold tracking-tight text-foreground hover:text-primary">
                          <Link href={post.href}>{post.title}</Link>
                        </h2>
                        <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                          <dt className="sr-only">Published</dt>
                          <dd className="absolute left-0 top-0 text-sm text-primary lg:static">
                            <time dateTime={post.date}>
                              {formatDate(post.date)}
                            </time>
                          </dd>
                          <dt className="sr-only">Author</dt>
                          <dd className="mt-6 flex gap-x-4">
                            <div className="flex-none overflow-hidden rounded-xl bg-neutral-100">
                              <Image
                                alt=""
                                {...post.author.image}
                                className="h-12 w-12 object-cover grayscale"
                              />
                            </div>
                            <div className="text-sm text-muted-foreground">
                              <div className="font-semibold">
                                {post.author.name}
                              </div>
                              <div className="text-primary">
                                {post.author.role}
                              </div>
                            </div>
                          </dd>
                        </dl>
                        <p className="mt-6 max-w-2xl text-base text-muted-foreground">
                          {post.description}
                        </p>
                        <Link
                          href={post.href}
                          aria-label={`Read more: ${post.title}`}
                          className={cn(
                            buttonVariants({
                              variant: 'secondary',
                              size: 'sm',
                            }),
                            'mt-8',
                          )}
                        >
                          {post.readMoreButtonText}
                          <ArrowIcon className=" ml-2 w-3 flex-none fill-current" />
                        </Link>
                      </div>
                    </div>
                  </Border>
                </article>
              </FadeIn>
            ))}
          </LoadMoreItems>
          <LoadMoreButton>Load more</LoadMoreButton>
        </LoadMore>
      </Container>

      <ContactSection />
    </>
  );
}
