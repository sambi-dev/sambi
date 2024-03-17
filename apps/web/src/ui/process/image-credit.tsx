import React from 'react';

interface ImageCreditProps {
  photographerName: string;
  photographerUrl: string;
  photoUrl: string;
}

export function ImageCredit({
  photographerName,
  photographerUrl,
  photoUrl,
}: ImageCreditProps) {
  return (
    <div className="mt-8 max-w-sm text-xs text-muted-foreground/80">
      Photo by{' '}
      <a
        href={photographerUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${photographerName}'s profile on Unsplash in a new window`}
        className="hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4"
      >
        <span className="text-muted-foreground">{photographerName}</span>
      </a>{' '}
      on{' '}
      <a
        href={photoUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`See original photo by ${photographerName} on Unsplash in a new window`}
        className="hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4"
      >
        Unsplash
      </a>
    </div>
  );
}
