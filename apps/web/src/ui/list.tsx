import { cn } from '@sambi/ui';

import { Border } from '#/ui/border';
import { FadeIn, FadeInStagger } from '#/ui/fade-in';

export function List({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <FadeInStagger>
      <ul className={cn('text-base text-muted-foreground', className)}>
        {children}
      </ul>
    </FadeInStagger>
  );
}

export function ListItem({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <li className="group mt-10 first:mt-0">
      <FadeIn>
        <Border className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
          {title && (
            <strong className="font-mono font-bold tracking-tighter text-secondary-foreground">{`${title}. `}</strong>
          )}
          {children}
        </Border>
      </FadeIn>
    </li>
  );
}
