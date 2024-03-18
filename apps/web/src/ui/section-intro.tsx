import { cn } from '@sambi/ui';

import { FadeIn } from '#/ui/fade-in';
import { Container } from '#/ui/page-container';

export function SectionIntro({
  title,
  eyebrow,
  children,
  smaller = false,
  ...props
}: Omit<
  React.ComponentPropsWithoutRef<typeof Container>,
  'title' | 'children'
> & {
  title: string;
  eyebrow?: string;
  children?: React.ReactNode;
  smaller?: boolean;
}) {
  return (
    <Container {...props}>
      <FadeIn className="max-w-2xl">
        <h2>
          {eyebrow && (
            <>
              <span className="mb-6 block font-mono text-base font-medium uppercase tracking-widest text-primary">
                {eyebrow}
              </span>
              <span className="sr-only"> - </span>
            </>
          )}
          <span
            className={cn(
              'block text-pretty font-mono font-semibold tracking-tighter text-foreground',
              smaller ? 'text-2xl' : 'text-3xl sm:text-4xl',
            )}
          >
            {title}
          </span>
        </h2>
        {children && (
          <div className="mt-6 text-muted-foreground md:text-lg lg:text-xl">
            {children}
          </div>
        )}
      </FadeIn>
    </Container>
  );
}
