import { RichText } from 'basehub/react-rich-text';

import type { BlockRichText } from '.basehub';

import { FadeIn } from '#/ui/fade-in';

interface RichTextWrapperProps {
  content: BlockRichText;
  centered?: boolean;
  small?: boolean;
}

function RichTextWrapper({
  content,
  centered = false,
  small = false,
}: RichTextWrapperProps) {
  const fadeInClass = `${centered ? 'mx-auto max-w-3xl' : ''} prose dark:prose-invert prose-headings:mt-8 prose-headings:scroll-m-20 prose-headings:font-mono prose-headings:font-semibold prose-headings:tracking-tighter prose-headings:text-foreground prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-p:text-muted-foreground prose-a:font-medium prose-a:text-primary/80 prose-a:underline-offset-4 prose-strong:font-semibold prose-li:marker:text-primary [&>*]:max-w-full [&>:first-child]:!mt-0 [&>:last-child]:!mb-0 ${small ? 'prose-p:text-sm' : 'lg:prose-lg'} prose-p:leading-relaxed`;

  return (
    <FadeIn className={fadeInClass}>
      <RichText>{content}</RichText>
    </FadeIn>
  );
}

export default RichTextWrapper;
