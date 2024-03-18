import { RichText } from 'basehub/react-rich-text';

import { FadeIn } from '#/ui/fade-in';

interface RichTextWrapperProps<T> {
  content: T;
}

function RichTextWrapper<T>({ content }: RichTextWrapperProps<T>) {
  return (
    <FadeIn className="prose mx-auto mt-8 dark:prose-invert lg:prose-lg prose-headings:font-mono prose-headings:tracking-tighter prose-headings:text-foreground prose-h2:font-semibold prose-h3:font-semibold prose-h4:font-semibold prose-h5:font-semibold prose-h6:font-semibold prose-p:text-muted-foreground prose-a:font-bold prose-a:text-primary prose-a:underline-offset-4 prose-a:hover:text-primary/80 prose-a:hover:decoration-2 prose-strong:font-bold prose-li:marker:text-primary ">
      <RichText>{content}</RichText>
    </FadeIn>
  );
}

export default RichTextWrapper;
