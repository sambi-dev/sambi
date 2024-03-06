import type { Article, MDXEntry } from '#/lib/mdx';

import { formatDate } from '#/lib/constants';
import { loadArticles } from '#/lib/mdx';
import { Border } from '#/ui/border';
import { ContactSection } from '#/ui/contact-section';
import { FadeIn } from '#/ui/fade-in';
import { MDXComponents } from '#/ui/mdx-components';
import { Container } from '#/ui/page-container';
import { PageLinks } from '#/ui/page-links';

export default async function BlogArticleWrapper({
  article,
  children,
}: {
  article: MDXEntry<Article>;
  children: React.ReactNode;
}) {
  const allArticles = await loadArticles();
  const moreArticles = allArticles
    .filter(({ metadata }) => metadata !== article)
    .slice(0, 2);

  return (
    <>
      <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <header className="mx-auto flex max-w-5xl flex-col text-center">
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-foreground [text-wrap:balance] sm:text-6xl">
              {article.title}
            </h1>
            <time
              dateTime={article.date}
              className="order-first block text-sm font-semibold uppercase tracking-widest text-primary"
            >
              {formatDate(article.date)}
            </time>
            <p className="mt-6 text-sm font-semibold text-secondary-foreground">
              by {article.author.name} ::{' '}
              <span className="text-sm font-semibold uppercase text-primary">
                #{article.category}
              </span>
            </p>
            <Border className="my-16" />
          </header>
        </FadeIn>

        <FadeIn>
          <MDXComponents.wrapper className="mt-10 sm:mt-20">
            {children}
          </MDXComponents.wrapper>
        </FadeIn>
      </Container>

      {moreArticles.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="More articles"
          pages={moreArticles}
        />
      )}

      <ContactSection />
    </>
  );
}
