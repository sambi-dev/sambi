import { useId } from 'react';

import { cn } from '.';

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean;
  filled?: boolean;
}) {
  const id = useId();

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <rect
        clipPath={`url(#${id}-clip)`}
        className={cn(
          'h-8 fill-primary transition-all duration-300',
          filled ? 'w-8' : 'w-0 group-hover/logo:w-8',
        )}
      />
      <use
        href={`#${id}-path`}
        className={invert ? 'stroke-[#09090B]' : 'stroke-foreground'}
        fill="none"
        strokeWidth="1.5"
      />
      <defs>
        <path
          id={`${id}-path`}
          d="M1.3,4.7h19.3l-9,13.4v9.3h-1.2V18L1.3,4.7z"
        />
        <clipPath id={`${id}-clip`}>
          <use href={`#${id}-path`} />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean;
  filled?: boolean;
  fillOnHover?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 130 32"
      aria-hidden="true"
      className={cn(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      <path
        className={invert ? 'fill-[#09090B]' : 'fill-foreground'}
        d="M35.4,21.8c0,1.2-0.3,2.4-0.9,3.4c-0.6,1.1-1.4,1.9-2.4,2.5c-1,0.6-2.1,0.9-3.3,0.9c-1.2,0-2.3-0.3-3.3-0.9
	s-1.8-1.4-2.4-2.5c-0.6-1.1-0.9-2.2-0.9-3.4v-7.4c0-1.2,0.3-2.4,0.9-3.4c0.6-1.1,1.4-1.9,2.4-2.5c1-0.6,2.1-0.9,3.3-0.9
	c1.2,0,2.3,0.3,3.3,0.9c1,0.6,1.8,1.4,2.4,2.5c0.6,1.1,0.9,2.2,0.9,3.4V21.8z M23.4,21.8c0,0.7,0.1,1.3,0.4,2l9.8-12.6
	c-0.5-0.8-1.2-1.5-2-2c-0.8-0.5-1.7-0.7-2.7-0.7c-1,0-1.9,0.3-2.8,0.8c-0.8,0.5-1.5,1.2-2,2.1c-0.5,0.9-0.7,1.9-0.7,2.9V21.8z
	 M34.4,14.4c0-0.7-0.1-1.3-0.4-2l-9.8,12.6c0.5,0.8,1.2,1.5,2,2c0.8,0.5,1.7,0.7,2.7,0.7c1,0,1.9-0.3,2.8-0.8c0.8-0.5,1.5-1.2,2-2.1
	c0.5-0.9,0.7-1.9,0.7-2.9V14.4z M60.2,20.5c0,2.5-0.7,4.5-2.1,6c-1.4,1.4-3.3,2.1-5.8,2.1c-1.5,0-2.8-0.3-4-1.1
	c-1.2-0.7-2.2-1.7-2.9-3c-0.7-1.3-1.1-2.8-1.1-4.4v-4.3c0-1.7,0.3-3.1,1-4.4s1.6-2.3,2.8-3s2.6-1.1,4.1-1.1c2.5,0,4.4,0.7,5.8,2.1
	c1.4,1.4,2.1,3.4,2.1,6h-5c0-1-0.3-1.8-0.8-2.3c-0.5-0.5-1.2-0.8-2.1-0.8c-0.8,0-1.5,0.3-2.1,0.8s-0.8,1.4-0.8,2.4v4.8
	c0,1,0.3,1.8,0.9,2.4c0.6,0.6,1.3,0.9,2.1,0.9c1.9,0,2.9-1.1,2.9-3.2H60.2z M63.2,28.2L70.8,18L63.2,7.9h16.3L72,18l7.6,10.2H63.2z
	 M71.4,17.1l6.1-8.2H65.3L71.4,17.1z M77.5,27.1l-6.1-8.2l-6.1,8.2H77.5z M83.5,11.5c0.7-1.3,1.7-2.3,2.9-3.1s2.6-1.1,4-1.1
	s2.8,0.4,4,1.1s2.2,1.8,2.9,3.1c0.7,1.3,1.1,2.7,1.1,4.2v4.5c0,1.5-0.4,2.9-1.1,4.2c-0.7,1.3-1.7,2.3-2.9,3.1s-2.6,1.1-4,1.1
	s-2.8-0.4-4-1.1s-2.2-1.8-2.9-3.1c-0.7-1.3-1.1-2.7-1.1-4.2v-4.5C82.5,14.2,82.8,12.8,83.5,11.5z M88.3,22.7c0.6,0.7,1.3,1,2.2,1
	c0.9,0,1.6-0.3,2.1-1c0.6-0.7,0.8-1.5,0.8-2.4v-4.5c0-1-0.3-1.8-0.8-2.4c-0.6-0.6-1.3-1-2.1-1c-0.9,0-1.6,0.3-2.2,1
	c-0.6,0.6-0.8,1.4-0.8,2.4v4.5C87.5,21.2,87.8,22,88.3,22.7z"
      />
    </svg>
  );
}
