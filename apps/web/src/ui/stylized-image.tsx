import type { ImageProps } from 'next/image';



import { useId } from 'react';
import Image from 'next/image';



import { cn } from '@sambi/ui';





const shapes = [
  {
    width: 655,
    height: 680,
    path: 'M644.68,392.92c-2.94,14.04-8.46,27.2-15.75,39.56c-16.93,28.73-40.88,49.59-71.29,63.08c-17.49,7.76-35.06,15.36-52.6,23.01c-1.19,0.52-2.18,1.22-3.09,2.16c-17.85,18.5-35.73,36.98-53.59,55.46c-7.53,7.8-63.33,71.64-70.86,79.45c-114.3,18.61-213.93-13.24-290.83-64.93C64.43,574.18,39.98,557,7.54,518.08c1.01-0.01,17.73-24.65,18.16-25.26c11.25-15.66,22.63-31.22,33.67-47.03c12.96-18.55,25.62-37.3,39.17-55.43c4.17-5.58,8.4-11.11,12.31-16.87c7.47-11,11.66-23.13,11.67-36.54c0-3.34-0.29-6.69-0.41-10.03c-0.47-12.58-0.9-25.15-1.4-37.73c-0.1-2.53-0.18-5.12-0.8-7.56c-5.07-20.11-10.28-40.18-15.4-60.27c-1.14-4.47-2.29-8.94-3.12-13.47c-0.47-2.54-0.23-5.21-0.41-7.81c-0.98-14.29-2.07-28.57-2.98-42.86c-0.68-10.63-1.89-21.19-3.67-31.69c-2.82-16.67-7.09-32.95-12.76-48.86c-4.75-13.31-10.27-26.3-16.78-38.85c-0.51-0.99-0.88-2.13-1.01-3.23c-0.67-5.64,2.84-14.29,11.3-15.38c2.16-0.28,4.48-0.36,6.57,0.14c5.46,1.3,10.91,2.74,16.23,4.53c11.6,3.92,21.27,10.74,28.51,20.63c8.06,11.02,15.88,22.22,23.65,33.45c11.37,16.44,25.04,30.66,40.79,42.92c8.63,6.71,17.73,12.7,27.17,18.2c13.29,7.76,26.51,15.65,39.78,23.46c7.82,4.61,17.81,3.95,24.47-1.61c8.78-7.32,18.6-12.84,29.21-16.97c9.21-3.59,18.74-5.89,28.58-6.94c8.09-0.86,16.16-0.92,24.25-0.05c5.19,0.56,10.39,1.06,15.6,1.35c11.36,0.62,22.48,2.53,33.25,6.18c28.27,9.59,50.99,26.75,68.68,50.71c5.3,7.18,9.79,14.86,13.59,22.94c0.44,0.93,1.09,1.87,1.89,2.52c8.7,7.13,17.44,14.2,26.2,21.27c0.66,0.53,1.44,0.99,2.23,1.29c7.03,2.59,14.06,5.18,21.13,7.68c15.87,5.62,30.71,13.21,44.41,23.01c9.79,7,18.57,15.12,27.01,23.65c16.56,16.75,26.24,36.72,28.67,60.21C648.17,369.66,647.1,381.38,644.68,392.92z',
  },
];

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & {
  alt?: string;
  flipped?: boolean;
};

export function StylizedImage({
  className,
  flipped = false,
  ...props
}: ImagePropsWithOptionalAlt) {
  const id = useId();
  // @ts-expect-error TODO: use a better type
  const { width, height, path } = shapes[0];

  return (
    <div
      className={cn(
        className,
        'relative flex aspect-[719/680] w-full grayscale',
      )}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        className={`h-full ${flipped ? 'scale-x-[-1]' : ''}`}
      >
        <g clipPath={`url(#${id}-clip)`} className="group">
          <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
            <foreignObject width={width} height={height}>
              <Image
                alt=""
                className="w-full bg-neutral-100 object-cover"
                style={{ aspectRatio: `${width} / ${height}` }}
                {...props}
              />
            </foreignObject>
          </g>
          <use
            href={`#${id}-shape`}
            strokeWidth="2"
            className="stroke-neutral-950/10"
          />
        </g>
        <defs>
          <clipPath id={`${id}-clip`}>
            <path
              id={`${id}-shape`}
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              d={path}
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}