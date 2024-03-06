import Link from 'next/link';

import { cn } from '@sambi/ui';

type ButtonProps = {
  invert?: boolean;
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
);

export function Button({
  invert = false,
  className,
  children,
  ...props
}: ButtonProps) {
  className = cn(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
    invert
      ? 'bg-white text-zinc-950 hover:bg-zinc-200'
      : 'bg-primary text-white hover:bg-primary/80',
  );

  const inner = <span className="relative top-px">{children}</span>;

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    );
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  );
}
