import type { ImageProps } from 'next/image';

import Image from 'next/image';

import { cn } from '@sambi/ui';

import { Border } from '#/ui/border';

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string };

function BlockquoteWithImage({
  author,
  children,
  className,
  image,
}: {
  author: { name: string; role: string };
  children: React.ReactNode;
  className?: string;
  image: ImagePropsWithOptionalAlt;
}) {
  return (
    <figure
      className={cn(
        'grid grid-cols-[auto,1fr] items-center gap-x-4 gap-y-8 sm:grid-cols-12 sm:grid-rows-[1fr,auto,auto,1fr] sm:gap-x-10 lg:gap-x-16',
        className,
      )}
    >
      <blockquote className="col-span-2 text-xl/7 text-muted-foreground sm:col-span-7 sm:col-start-6 sm:row-start-2">
        {typeof children === 'string' ? <p>{children}</p> : children}
      </blockquote>
      <div className="col-start-1 row-start-2 overflow-hidden rounded-xl bg-background sm:col-span-5 sm:row-span-full sm:rounded-3xl">
        <Image
          alt=""
          {...image}
          sizes="(min-width: 1024px) 17.625rem, (min-width: 768px) 16rem, (min-width: 640px) 40vw, 3rem"
          className="h-12 w-12 object-cover grayscale sm:aspect-[7/9] sm:h-auto sm:w-full"
        />
      </div>
      <figcaption className="text-sm text-secondary-foreground sm:col-span-7 sm:row-start-3 sm:text-base">
        <span className="font-mono font-medium tracking-tighter">
          {author.name}
        </span>
        <span className="hidden font-semibold sm:inline"> • </span>
        <br className="sm:hidden" />
        <span className="font-mono tracking-tighter text-primary sm:font-semibold">
          {author.role}
        </span>
      </figcaption>
    </figure>
  );
}

function BlockquoteWithoutImage({
  author,
  children,
  className,
}: {
  author: { name: string; role: string };
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Border position="left" className={cn('pl-8', className)}>
      <figure className="text-sm">
        <blockquote className="text-secondary-foreground [&>*]:relative [&>:first-child]:before:absolute [&>:first-child]:before:right-full [&>:first-child]:before:content-['“'] [&>:last-child]:after:content-['”']">
          {typeof children === 'string' ? <p>{children}</p> : children}
        </blockquote>
        <figcaption className="mt-6 font-mono font-bold tracking-tighter text-secondary-foreground">
          {author.name} • <span className="text-primary">{author.role}</span>
        </figcaption>
      </figure>
    </Border>
  );
}

export function Blockquote(
  props:
    | React.ComponentPropsWithoutRef<typeof BlockquoteWithImage>
    | (React.ComponentPropsWithoutRef<typeof BlockquoteWithoutImage> & {
        image?: undefined;
      }),
) {
  if (props.image) {
    return <BlockquoteWithImage {...props} />;
  }

  return <BlockquoteWithoutImage {...props} />;
}
