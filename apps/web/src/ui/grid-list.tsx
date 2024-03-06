import { cn } from '@sambi/ui';

import { Border } from '#/ui/border';
import { FadeIn, FadeInStagger } from '#/ui/fade-in';

export function GridList({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <FadeInStagger>
      <ul
        className={cn(
          'grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3',
          className,
        )}
      >
        {children}
      </ul>
    </FadeInStagger>
  );
}

export function GridListItem({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <li
      className={cn(
        'text-base text-muted-foreground before:bg-primary after:bg-primary/40',
        className,
      )}
    >
      <FadeIn>
        <Border position="left" className="pl-8">
          <strong className="font-semibold text-secondary-foreground">
            {title}.
          </strong>{' '}
          {children}
        </Border>
      </FadeIn>
    </li>
  );
}
