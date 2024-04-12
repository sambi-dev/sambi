'use client';

import { useState } from 'react';
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@yocxo/ui/avatar';
import { Button } from '@yocxo/ui/button';
import { Card, CardContent } from '@yocxo/ui/card';

export interface SearchResultsProps {
  results: { title: string; url: string; content: string }[];
}

export function SearchResults({ results }: SearchResultsProps) {
  // State to manage whether to display the results
  const [showAllResults, setShowAllResults] = useState(false);

  const handleViewMore = () => {
    setShowAllResults(true);
  };

  const displayedResults = showAllResults ? results : results.slice(0, 3);
  const additionalResultsCount = results.length > 3 ? results.length - 3 : 0;

  return (
    <div className="flex flex-wrap">
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {displayedResults.map((result: any, index: any) => (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        <div className="w-1/2 p-1 md:w-1/4" key={index}>
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */}
          <Link href={result.url} passHref target="_blank">
            <Card className="flex-1">
              <CardContent className="p-2">
                <p className="line-clamp-2 text-xs leading-5">
                  {/* eslint-disable-next-line
                  @typescript-eslint/no-unsafe-member-access */}
                  {result.content}
                </p>
                <div className="mt-2 flex items-center space-x-2">
                  <Avatar className="size-3">
                    <AvatarImage
                      src={`https://www.google.com/s2/favicons?domain=${
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
                        new URL(result.url).hostname
                      }`}
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                      alt={result.author}
                    />
                    <AvatarFallback>
                      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access */}
                      {new URL(result.url).hostname[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="truncate text-xs text-muted-foreground/80">
                    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access */}
                    {new URL(result.url).hostname}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      ))}
      {!showAllResults && additionalResultsCount > 0 && (
        <div className="w-1/2 p-1 md:w-1/4">
          <Card className="flex h-full flex-1 items-center justify-center">
            <CardContent className="p-2">
              <Button
                variant="link"
                className="font-sans tracking-normal text-primary underline"
                onClick={handleViewMore}
              >
                View {additionalResultsCount} more
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
