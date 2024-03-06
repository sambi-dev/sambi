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
        'rounded-full border border-primary px-4 py-1.5 text-base text-primary',
        className,
      )}
    >
      {children}
    </li>
  );
}
