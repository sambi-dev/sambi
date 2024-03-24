import { RichText } from 'basehub/react-rich-text';

import { FadeIn } from '#/ui/fade-in';

interface RichTextWrapperProps<T> {
  content: T;
  centered?: boolean;
  small?: boolean;
}

function RichTextWrapper<T>({
  content,
  centered = false,
  small = false,
}: RichTextWrapperProps<T>) {
  const fadeInClass = `prose ${centered ? 'mx-auto' : ''} dark:prose-invert prose-headings:font-mono prose-headings:tracking-tighter prose-headings:text-foreground prose-h2:font-semibold prose-h3:font-semibold prose-h4:font-semibold prose-h5:font-semibold prose-h6:font-semibold prose-p:text-muted-foreground prose-a:font-bold prose-a:text-primary prose-a:underline-offset-4 prose-a:hover:text-primary/80 prose-a:hover:decoration-2 prose-strong:font-bold prose-li:marker:text-primary prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl ${small ? 'prose-p:text-sm xl:prose-p:text-base' : 'lg:prose-lg'}`;

  return (
    <FadeIn className={fadeInClass}>
      <RichText>{content}</RichText>
    </FadeIn>
  );
}

export default RichTextWrapper;
