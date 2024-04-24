'use client';

import type { SearchResults as TypeSearchResults } from '#/lib/types';
import type { StreamableValue } from 'ai/rsc';

import { useStreamableValue } from 'ai/rsc';

import { SearchResults } from './search-results';
import { SearchResultsImageSection } from './search-results-image';
import { SearchSkeleton } from './search-skeleton';
import { Section } from './section';
import { ToolBadge } from './tool-badge';

export interface SearchSectionProps {
  result?: StreamableValue<string>;
}

export function SearchSection({ result }: SearchSectionProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, error, pending] = useStreamableValue(result);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const results: TypeSearchResults = data ? JSON.parse(data) : undefined;
  return (
    <div>
      {!pending && data ? (
        <>
          <Section size="sm" className="pb-0 pt-2">
            <ToolBadge tool="search">{`${results.query}`}</ToolBadge>
          </Section>
          {results.images && results.images.length > 0 && (
            <Section title="Images">
              <SearchResultsImageSection
                images={results.images}
                query={results.query}
              />
            </Section>
          )}
          <Section title="Results">
            <SearchResults results={results.results} />
          </Section>
        </>
      ) : (
        <Section className="pb-0 pt-2">
          <SearchSkeleton />
        </Section>
      )}
    </div>
  );
}
