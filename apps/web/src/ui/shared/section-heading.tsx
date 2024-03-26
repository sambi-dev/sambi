import { cn } from '@yocxo/ui';

export function SectionHeading({
  number,
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'h2'> & { number: string }) {
  return (
    <h2
      className={cn(
        className,
        'inline-flex items-center rounded-full px-4 py-1 text-primary ring-1 ring-inset ring-primary',
      )}
      {...props}
    >
      <span
        className="font-mono text-sm font-medium tracking-tighter"
        aria-hidden="true"
      >
        {number.padStart(2, '0')}
      </span>
      <span className="ml-3 h-3.5 w-px bg-primary/80" />
      <span className="ml-3 text-base font-semibold tracking-tight">
        {children}
      </span>
    </h2>
  );
}
