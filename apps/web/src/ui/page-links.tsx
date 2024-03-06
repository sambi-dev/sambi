import Link from 'next/link';

import { cn } from '@sambi/ui';

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
}

function PageLink({ page }: { page: Page }) {
  return (
    <article key={page.href}>
      <Border
        position="left"
        className="relative flex flex-col items-start pl-8"
      >
        <h3 className="mt-6 text-pretty text-xl font-semibold text-foreground">
          {page.title}
        </h3>
        <time
          dateTime={page.date}
          className="order-first text-sm text-muted-foreground"
        >
          {formatDate(page.date)}
        </time>
        <p className="mt-2.5 text-base text-muted-foreground">
          {page.description}
        </p>
        <Link
          href={page.href}
          className="mt-6 flex gap-x-3 text-base font-semibold text-primary transition hover:text-primary/80"
          aria-label={`Read more: ${page.title}`}
        >
          Read more
          <ArrowIcon className="w-6 flex-none fill-current" />
          <span className="absolute inset-0" />
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
    <div className={cn('relative pt-24 sm:pt-32 lg:pt-40', className)}>
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-background via-primary/30 to-background" />

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
