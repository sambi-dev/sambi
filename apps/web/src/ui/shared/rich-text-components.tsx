/* eslint-disable jsx-a11y/heading-has-content */
import { RichText } from 'basehub/react-rich-text';

import { cn } from '@yocxo/ui';

import type { BlockDocument, BlockRichText, TweetComponent } from '.basehub';

import { Blockquote } from '#/ui/blockquote';
import { Border } from '#/ui/border';
import { GrayscaleTransitionImage } from '#/ui/grayscale-transition-image';
import { StatList, StatListItem } from '#/ui/stat-list';
import { TagList, TagListItem } from '#/ui/tag-list';

import ReactTweetComponent from './tweet-component';

interface RichTextWrapperProps {
  content: BlockRichText;
  blocks?: BlockDocument[];
  centered?: boolean;
  small?: boolean;
}

function RichTextWrapper({
  content,
  blocks,
  centered = false,
  small = false,
}: RichTextWrapperProps) {
  const components = {
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
            'group isolate my-10 overflow-hidden rounded-4xl bg-secondary max-sm:-mx-6',
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
          <p className="font-mono text-sm font-medium uppercase tracking-widest text-primary">
            Top tip
          </p>
          <div className="mt-4">{children}</div>
        </Border>
      );
    },

    Tweet: ({ tweetId }: TweetComponent) => {
      return <ReactTweetComponent tweetId={tweetId} />;
    },

    h2: ({ className, ...props }: React.ComponentPropsWithoutRef<'h2'>) => (
      <h2
        className={cn(
          'mt-10 scroll-m-20 text-pretty pb-1 font-mono text-3xl font-semibold tracking-tighter text-foreground first:mt-0',
          className,
        )}
        {...props}
      />
    ),

    h3: ({ className, ...props }: React.ComponentPropsWithoutRef<'h3'>) => (
      <h3
        className={cn(
          'mt-8 scroll-m-20 text-pretty font-mono text-2xl font-semibold tracking-tighter text-foreground',
          className,
        )}
        {...props}
      />
    ),

    h4: ({ className, ...props }: React.ComponentPropsWithoutRef<'h4'>) => (
      <h4
        className={cn(
          'mt-8 scroll-m-20 text-pretty font-mono text-xl font-semibold tracking-tighter text-foreground',
          className,
        )}
        {...props}
      />
    ),

    a: ({ className, ...props }: React.ComponentPropsWithoutRef<'a'>) => (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a
        className={cn(
          'font-medium text-primary underline decoration-2 underline-offset-4 hover:text-primary/80 lg:text-lg',
          className,
        )}
        {...props}
      />
    ),

    p: ({ className, ...props }: React.ComponentPropsWithoutRef<'p'>) => (
      <p
        className={cn(
          `leading-relaxed text-muted-foreground ${small ? 'text-sm' : 'lg:text-lg'} [&:not(:first-child)]:mt-6`,
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
        className={cn('font-semibold text-secondary-foreground', className)}
        {...props}
      />
    ),

    ul: ({ className, ...props }: React.ComponentPropsWithoutRef<'ul'>) => (
      <ul
        className={cn(
          `my-6 ml-6 list-disc text-muted-foreground ${small ? 'text-sm' : 'lg:text-lg'}`,
          className,
        )}
        {...props}
      />
    ),

    ol: ({ className, ...props }: React.ComponentPropsWithoutRef<'ol'>) => (
      <ol
        className={cn(
          `my-6 ml-6 list-decimal text-muted-foreground ${small ? 'text-sm' : 'lg:text-lg'}`,
          className,
        )}
        {...props}
      />
    ),

    li: ({ className, ...props }: React.ComponentPropsWithoutRef<'li'>) => (
      <li
        className={cn(
          `ml-6 mt-3 text-muted-foreground ${small ? 'text-sm' : 'lg:text-lg'} [&::marker]:text-primary`,
          className,
        )}
        {...props}
      />
    ),
  };

  return (
    <div
      className={cn(
        `${centered ? 'mx-auto max-w-3xl' : ''} [&>*]:max-w-full [&>:first-child]:!mt-0 [&>:last-child]:!mb-0`,
        `leading-relaxed text-muted-foreground ${small ? 'text-sm' : 'lg:text-lg'}`,
      )}
    >
      <RichText components={components} blocks={blocks}>
        {content}
      </RichText>
    </div>
  );
}

export default RichTextWrapper;
