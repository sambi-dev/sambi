import { cn } from '@sambi/ui';

export function TagList({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <ul className={cn(className, 'flex flex-wrap gap-4')}>{children}</ul>;
}

export function TagListItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <li
      className={cn(
        'rounded-full border border-primary px-4 py-1.5 font-mono text-sm font-medium tracking-tighter text-primary',
        className,
      )}
    >
      {children}
    </li>
  );
}
