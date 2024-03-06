import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@sambi/ui';
import { buttonVariants } from '@sambi/ui/button';

import { formatDate } from '#/lib/constants';
import { loadAiPosts } from '#/lib/mdx';
import { Border } from '#/ui/border';
import { ContactSection } from '#/ui/contact-section';
import { FadeIn } from '#/ui/fade-in';
import { Container } from '#/ui/page-container';
import { PageIntro } from '#/ui/page-intro';
import { LoadMore, LoadMoreButton, LoadMoreItems } from '#/ui/shared/load-more';

export const metadata: Metadata = {
  title: 'Generative Blog',
  description:
    'Stay up-to-date with the latest industry news as our marketing teams finds new ways to re-purpose old CSS tricks articles.',
};

export default async function GeneratedBlog() {
  const articles = await loadAiPosts();

  return (
    <>
      <PageIntro
        eyebrow="Generated blog"
        title="Demonstrating possibilities with AI"
      >
        <p>
          Each article on sambi&apos;s generated blog is just that, generated.
          Created by AI in close collaboration with humans. Not your usual crap,
          that&apos;s for sure.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <LoadMore className="space-y-24 lg:space-y-32">
          <LoadMoreItems>
            {articles.map((article) => (
              <FadeIn key={article.href}>
                <article>
                  <Border className="pt-16">
                    <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                      <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                        <h2 className="text-2xl font-semibold text-foreground">
                          <Link href={article.href}>{article.title}</Link>
                        </h2>
                        <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                          <dt className="sr-only">Published</dt>
                          <dd className="absolute left-0 top-0 text-sm text-primary lg:static">
                            <time dateTime={article.date}>
                              {formatDate(article.date)}
                            </time>
                          </dd>
                          <dt className="sr-only">Author</dt>
                          <dd className="mt-6 flex gap-x-4">
                            <div className="flex-none overflow-hidden rounded-xl bg-neutral-100">
                              <Image
                                alt=""
                                {...article.llm.image}
                                className="h-12 w-12 object-cover"
                              />
                            </div>
                            <div className="text-sm text-muted-foreground">
                              <div className="font-semibold">
                                {article.llm.company}
                              </div>
                              <div className="text-primary">
                                {article.llm.model}
                              </div>
                            </div>
                          </dd>
                        </dl>
                        <p className="mt-6 max-w-2xl text-base text-muted-foreground">
                          {article.description}
                        </p>
                        <Link
                          href={article.href}
                          aria-label={`Read more: ${article.title}`}
                          className={cn(buttonVariants(), 'mt-8')}
                        >
                          Read more
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
