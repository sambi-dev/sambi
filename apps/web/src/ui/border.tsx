import { cn } from '@yocxo/ui';

interface BorderProps<T extends React.ElementType> {
  as?: T;
  className?: string;
  position?: 'top' | 'left';
  gotcha?: boolean;
}

export function Border<T extends React.ElementType = 'div'>({
  as,
  className,
  position = 'top',
  gotcha = false,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, keyof BorderProps<T>> &
  BorderProps<T>) {
  const Component = as ?? 'div';

  return (
    <Component
      className={cn(
        className,
        'relative before:absolute after:absolute',
        gotcha
          ? 'before:bg-destructive after:bg-destructive/40'
          : 'before:bg-primary after:bg-primary/40',
        position === 'top' &&
          'before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px',
        position === 'left' &&
          'before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px',
      )}
      {...props}
    />
  );
}
