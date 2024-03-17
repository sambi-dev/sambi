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
  onGradientBg = false,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  onGradientBg?: boolean;
}) {
  return (
    <li
      className={cn(
        onGradientBg ? 'text-secondary-foreground' : 'text-muted-foreground',
        'text-pretty text-sm before:bg-primary after:bg-primary/40 md:text-base',
        className,
      )}
    >
      <FadeIn>
        <Border position="left" className="pl-8">
          <strong className="font-mono text-xs font-semibold tracking-tighter text-primary md:text-sm">
            {title}.
          </strong>{' '}
          {children}
        </Border>
      </FadeIn>
    </li>
  );
}
