'use client';

import type { AI } from '#/app/action';
import type { PartialRelated } from '#/lib/schema/related';

import React from 'react';

import { useActions, useStreamableValue, useUIState } from 'ai/rsc';

import { Button } from '@yocxo/ui/button';
import { ArrowRightIcon } from '@yocxo/ui/icons';

import { UserMessage } from '#/ui/user-message';

export interface SearchRelatedProps {
  relatedQueries: PartialRelated;
}

export const SearchRelated: React.FC<SearchRelatedProps> = ({
  relatedQueries,
}) => {
  const { submit } = useActions<typeof AI>();
  const [, setMessages] = useUIState<typeof AI>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, error, pending] =
    useStreamableValue<PartialRelated>(relatedQueries);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);

    // // Get the submitter of the form
    const submitter = (event.nativeEvent as SubmitEvent)
      .submitter as HTMLInputElement;
    let query = '';
    if (submitter) {
      formData.append(submitter.name, submitter.value);
      query = submitter.value;
    }

    const userMessage = {
      id: Date.now(),
      isGenerating: false,
      component: <UserMessage message={query} isFirstMessage={false} />,
    };

    const responseMessage = await submit(formData);
    setMessages((currentMessages) => [
      ...currentMessages,
      userMessage,
      responseMessage,
    ]);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap">
      {data?.items
        ?.filter((item) => item?.query !== '')
        .map((item, index) => (
          <div className="flex w-full items-center" key={index}>
            <ArrowRightIcon className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-foreground" />
            <Button
              aria-label="View related content"
              variant="link"
              className="h-fit flex-1 justify-start whitespace-normal px-0 py-1 text-left font-sans font-medium tracking-normal text-primary underline underline-offset-4 hover:text-primary"
              type="submit"
              name={'related_query'}
              value={item?.query}
            >
              {item?.query}
            </Button>
          </div>
        ))}
    </form>
  );
};

export default SearchRelated;
