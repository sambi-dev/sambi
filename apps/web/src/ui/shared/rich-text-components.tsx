/* eslint-disable jsx-a11y/heading-has-content */
import { RichText } from 'basehub/react-rich-text';

import { cn } from '@yocxo/ui';

import type {
  BlockDocument,
  BlockquoteComponent as BlockquoteComponentType,
  BlockRichText,
  GotchaComponent,
  ToptipComponent,
  TweetComponent,
} from '.basehub';

import { Blockquote } from '#/ui/blockquote';
import { Border } from '#/ui/border';
import { GrayscaleTransitionImage } from '#/ui/grayscale-transition-image';

import ReactTweetComponent from './tweet-component';

interface RichTextWrapperProps {
  content: BlockRichText;
  blocks?: BlockDocument[];
  centered?: boolean;
  small?: boolean;
}

function RichTextComponents({
  content,
  blocks,
  centered = false,
  small = false,
}: RichTextWrapperProps) {
  const components = {
    BlockquoteComponent: ({
      _id,
      author,
      quote,
      role,
    }: BlockquoteComponentType) => (
      <Blockquote
        key={_id}
        author={{ name: author, role }}
        className="my-8"
        large
      >
        {quote}
      </Blockquote>
    ),

    GotchaComponent({ gotcha }: GotchaComponent) {
      return (
        <Border position="left" className="my-10 pl-8" gotcha>
          <p className="font-mono text-sm font-medium uppercase tracking-widest text-destructive">
            Gotcha
          </p>
          <div className="mt-4">{gotcha}</div>
        </Border>
      );
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

    ToptipComponent({ tip }: ToptipComponent) {
      return (
        <Border position="left" className="my-10 pl-8">
          <p className="font-mono text-sm font-medium uppercase tracking-widest text-primary">
            Top tip
          </p>
          <div className="mt-4">{tip}</div>
        </Border>
      );
    },

    TweetComponent: ({ _id, tweetId }: TweetComponent) => {
      return <ReactTweetComponent key={_id} tweetId={tweetId} />;
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
          `text-muted-foreground ${small ? 'text-sm' : 'lg:text-lg'} [&:not(:first-child)]:mt-6`,
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
        `text-muted-foreground ${small ? 'text-sm' : 'lg:text-lg'}`,
      )}
    >
      <RichText components={components} blocks={blocks}>
        {content}
      </RichText>
    </div>
  );
}

export default RichTextComponents;
