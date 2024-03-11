import Link from 'next/link';

import { cn } from '@sambi/ui';
import { buttonVariants } from '@sambi/ui/button';

import { formatDate } from '#/lib/constants';
import { Border } from '#/ui/border';
import { FadeIn, FadeInStagger } from '#/ui/fade-in';
import { Container } from '#/ui/page-container';
import { SectionIntro } from '#/ui/section-intro';
import { ArrowIcon } from '#/ui/shared/icons';

interface Page {
  href: string;
  date: string;
  title: string;
  description: string;
  readMoreButtonText: string;
}

function PageLink({ page }: { page: Page }) {
  return (
    <article key={page.href}>
      <Border
        position="left"
        className="relative flex flex-col items-start pl-8"
      >
        <h3 className="mt-6 line-clamp-2 h-20 text-pretty font-mono text-2xl font-medium tracking-tighter text-foreground">
          {page.title}
        </h3>
        <time
          dateTime={page.date}
          className="order-first text-sm text-muted-foreground"
        >
          {formatDate(page.date)}
        </time>
        <p className="mt-2.5 line-clamp-2 text-base text-muted-foreground">
          {page.description}
        </p>
        <Link
          href={page.href}
          aria-label={`Read more: ${page.title}`}
          className={cn(
            buttonVariants({
              size: 'sm',
            }),
            'mt-8',
          )}
        >
          {page.readMoreButtonText}
          <ArrowIcon className="ml-2 w-3 flex-none fill-current" />
        </Link>
      </Border>
    </article>
  );
}

export function PageLinks({
  title,
  pages,
  intro,
  className,
}: {
  title: string;
  pages: Page[];
  intro?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'relative rounded-t-4xl bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-background via-primary/20 to-background py-24 sm:py-32 lg:py-40',
        className,
      )}
    >
      <SectionIntro title={title} smaller>
        {intro && <p>{intro}</p>}
      </SectionIntro>

      <Container className={intro ? 'mt-24' : 'mt-16'}>
        <FadeInStagger className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          {pages.map((page) => (
            <FadeIn key={page.href}>
              <PageLink page={page} />
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  );
}
