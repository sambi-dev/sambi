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
          d="M2.3,4.5H22l-9.2,13.6v9.4h-1.2v-9.4L2.3,4.5z"
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
        d="M42.4,20.4c0,1.4-0.3,2.7-1,3.9c-0.7,1.2-1.6,2.2-2.7,2.9c-1.1,0.7-2.4,1.1-3.8,1.1c-1.4,0-2.6-0.3-3.8-1.1
	c-1.1-0.7-2.1-1.7-2.7-2.9c-0.7-1.2-1-2.5-1-3.9v-8.5c0-1.4,0.3-2.7,1-3.9c0.7-1.2,1.6-2.2,2.7-2.9c1.1-0.7,2.4-1.1,3.8-1.1
	c1.4,0,2.6,0.4,3.8,1.1c1.1,0.7,2.1,1.7,2.7,2.9c0.7,1.2,1,2.5,1,3.9V20.4z M28.5,20.4c0,0.8,0.1,1.5,0.4,2.3L40.2,8.4
	c-0.6-0.9-1.3-1.7-2.3-2.2c-0.9-0.6-2-0.8-3.1-0.8c-1.1,0-2.2,0.3-3.2,0.9c-1,0.6-1.7,1.4-2.3,2.4c-0.6,1-0.9,2.1-0.9,3.3V20.4z
	 M41.2,11.9c0-0.8-0.1-1.5-0.4-2.3L29.6,23.9c0.6,1,1.3,1.7,2.3,2.3c0.9,0.6,2,0.8,3.1,0.8c1.1,0,2.2-0.3,3.2-0.9
	c1-0.6,1.7-1.4,2.3-2.4c0.6-1,0.9-2.1,0.9-3.3V11.9z M71,18.9c0,2.9-0.8,5.2-2.4,6.8c-1.6,1.6-3.8,2.5-6.7,2.5
	c-1.7,0-3.2-0.4-4.6-1.2c-1.4-0.8-2.5-1.9-3.4-3.4c-0.8-1.5-1.2-3.2-1.2-5.1v-4.9c0-1.9,0.4-3.6,1.2-5s1.9-2.6,3.3-3.4
	s2.9-1.2,4.7-1.2c2.8,0,5,0.8,6.6,2.4c1.6,1.6,2.4,3.9,2.4,6.8h-5.7c0-1.1-0.3-2-0.9-2.6c-0.6-0.6-1.4-0.9-2.5-0.9
	c-1,0-1.8,0.3-2.4,1c-0.6,0.6-1,1.6-1,2.7v5.4c0,1.2,0.3,2.1,1,2.8c0.7,0.7,1.5,1,2.5,1c2.2,0,3.3-1.2,3.3-3.6H71z M74.4,27.6
	L83.1,16L74.4,4.4h18.8L84.5,16l8.7,11.6H74.4z M83.8,15l7-9.4h-14L83.8,15z M90.8,26.4l-7-9.4l-7,9.4H90.8z M97.8,8.6
	c0.8-1.5,1.9-2.7,3.4-3.5s3-1.3,4.6-1.3s3.2,0.4,4.6,1.3s2.5,2,3.4,3.5c0.8,1.5,1.2,3.1,1.2,4.8v5.1c0,1.7-0.4,3.4-1.2,4.8
	c-0.8,1.5-1.9,2.7-3.4,3.5c-1.4,0.9-3,1.3-4.6,1.3s-3.2-0.4-4.6-1.3c-1.4-0.9-2.5-2-3.4-3.5c-0.8-1.5-1.2-3.1-1.2-4.8v-5.1
	C96.5,11.7,96.9,10.1,97.8,8.6z M103.3,21.3c0.6,0.8,1.5,1.1,2.5,1.1c1,0,1.8-0.4,2.5-1.1c0.6-0.8,1-1.7,1-2.7v-5.2
	c0-1.1-0.3-2-1-2.7c-0.6-0.7-1.5-1.1-2.5-1.1c-1,0-1.8,0.4-2.5,1.1c-0.6,0.7-1,1.6-1,2.7v5.2C102.3,19.7,102.6,20.6,103.3,21.3z"
      />
    </svg>
  );
}
