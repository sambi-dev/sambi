import { cn } from '@sambi/ui';

import { Blockquote } from '#/ui/blockquote';
import { Border } from '#/ui/border';
import { GrayscaleTransitionImage } from '#/ui/grayscale-transition-image';
import { StatList, StatListItem } from '#/ui/stat-list';
import { TagList, TagListItem } from '#/ui/tag-list';

export const MDXComponents = {
  Blockquote({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<typeof Blockquote>) {
    return <Blockquote className={cn('my-32', className)} {...props} />;
  },

  img: function Img({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<typeof GrayscaleTransitionImage>) {
    return (
      <div
        className={cn(
          'group isolate my-10 overflow-hidden rounded-4xl bg-neutral-100 max-sm:-mx-6',
          className,
        )}
      >
        <GrayscaleTransitionImage
          {...props}
          sizes="(min-width: 768px) 42rem, 100vw"
          className="aspect-[16/10] w-full object-cover"
        />
      </div>
    );
  },

  StatList({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<typeof StatList>) {
    return (
      <StatList className={cn('my-32 !max-w-none', className)} {...props} />
    );
  },

  StatListItem,
  table: function Table({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<'table'>) {
    return (
      <div
        className={cn(
          'my-10 max-sm:-mx-6 max-sm:flex max-sm:overflow-x-auto',
          className,
        )}
      >
        <div className="max-sm:min-w-full max-sm:flex-none max-sm:px-6">
          <table {...props} />
        </div>
      </div>
    );
  },

  TagList({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<typeof TagList>) {
    return <TagList className={cn('my-6', className)} {...props} />;
  },
  TagListItem,

  TopTip({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) {
    return (
      <Border position="left" className={cn('my-10 pl-8', className)}>
        <p className="text-sm font-bold uppercase tracking-widest text-primary">
          Top tip
        </p>
        <div className="mt-4">{children}</div>
      </Border>
    );
  },

  h1: ({ className, ...props }: React.ComponentPropsWithoutRef<'h1'>) => (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h1
      className={cn(
        'mt-2 scroll-m-20 text-4xl font-bold tracking-tight text-foreground',
        className,
      )}
      {...props}
    />
  ),

  h2: ({ className, ...props }: React.ComponentPropsWithoutRef<'h2'>) => (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h2
      className={cn(
        'mt-10 scroll-m-20 pb-1 text-3xl font-semibold tracking-tight text-foreground first:mt-0',
        className,
      )}
      {...props}
    />
  ),

  h3: ({ className, ...props }: React.ComponentPropsWithoutRef<'h3'>) => (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h3
      className={cn(
        'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight text-foreground',
        className,
      )}
      {...props}
    />
  ),

  h4: ({ className, ...props }: React.ComponentPropsWithoutRef<'h4'>) => (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h4
      className={cn(
        'mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-foreground',
        className,
      )}
      {...props}
    />
  ),

  h5: ({ className, ...props }: React.ComponentPropsWithoutRef<'h5'>) => (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h5
      className={cn(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight text-foreground',
        className,
      )}
      {...props}
    />
  ),

  h6: ({ className, ...props }: React.ComponentPropsWithoutRef<'h6'>) => (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h6
      className={cn(
        'mt-8 scroll-m-20 text-base font-semibold tracking-tight text-foreground',
        className,
      )}
      {...props}
    />
  ),

  a: ({ className, ...props }: React.ComponentPropsWithoutRef<'a'>) => (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a
      className={cn(
        'font-semibold text-primary underline underline-offset-4 hover:text-primary/80 lg:text-lg',
        className,
      )}
      {...props}
    />
  ),

  p: ({ className, ...props }: React.ComponentPropsWithoutRef<'p'>) => (
    <p
      className={cn(
        'leading-7 text-muted-foreground lg:text-lg [&:not(:first-child)]:mt-6',
        className,
      )}
      {...props}
    />
  ),

  strong: ({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<'strong'>) => (
    <strong
      className={cn('font-semibold text-primary', className)}
      {...props}
    />
  ),

  ul: ({ className, ...props }: React.ComponentPropsWithoutRef<'ul'>) => (
    <ul
      className={cn(
        'my-6 ml-6 list-disc text-muted-foreground lg:text-lg',
        className,
      )}
      {...props}
    />
  ),

  ol: ({ className, ...props }: React.ComponentPropsWithoutRef<'ol'>) => (
    <ol
      className={cn(
        'my-6 ml-6 list-decimal text-muted-foreground lg:text-lg',
        className,
      )}
      {...props}
    />
  ),

  li: ({ className, ...props }: React.ComponentPropsWithoutRef<'li'>) => (
    <li
      className={cn('ml-6 mt-2 text-muted-foreground lg:text-lg', className)}
      {...props}
    />
  ),

  wrapper({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
    return (
      <div
        className={cn(
          '[&>*]:mx-auto [&>*]:max-w-3xl [&>:first-child]:!mt-0 [&>:last-child]:!mb-0',
          className,
        )}
        {...props}
      />
    );
  },
};
