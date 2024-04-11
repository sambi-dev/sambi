'use client';

import type { StreamableValue } from 'ai/rsc';

import { useStreamableValue } from 'ai/rsc';

import { MemoizedReactMarkdown } from '#/ui/markdown';

export function BotMessage({
  content,
}: {
  content: string | StreamableValue<string>;
}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, error, pending] = useStreamableValue(content);

  // Currently, sometimes error occurs after finishing the stream.
  if (error) return <div>Error</div>;

  return (
    <div className="mt-1 rounded-2xl border bg-card p-8">
      <MemoizedReactMarkdown className="prose-sm prose-zinc dark:prose-invert md:prose prose-headings:font-medium prose-headings:text-secondary-foreground prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-p:text-muted-foreground prose-a:text-sm prose-a:text-primary/80 prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-primary prose-ol:text-muted-foreground prose-ul:text-muted-foreground prose-li:marker:text-primary">
        {data!}
      </MemoizedReactMarkdown>
    </div>
  );
}
