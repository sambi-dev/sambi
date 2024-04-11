'use client';

import type { AI } from '#/app/action';
import type { PartialInquiry } from '#/lib/schema/inquiry';

import React, { useEffect, useState } from 'react';

import { useActions, useStreamableValue, useUIState } from 'ai/rsc';

import { Button } from '@yocxo/ui/button';
import { Card } from '@yocxo/ui/card';
import { Checkbox } from '@yocxo/ui/checkbox';
import {
  ArrowRightIcon,
  CheckIcon,
  SparklesIcon,
  SpinnerIcon,
} from '@yocxo/ui/icons';
import { Input } from '@yocxo/ui/input';

import { MaiLogoIcon } from '#/ui/logo';

export interface CopilotProps {
  inquiry?: PartialInquiry;
}

export const Copilot: React.FC<CopilotProps> = ({ inquiry }: CopilotProps) => {
  const [completed, setCompleted] = useState(false);
  const [query, setQuery] = useState('');
  const [skipped, setSkipped] = useState(false);
  const [data, error, pending] = useStreamableValue<PartialInquiry>(inquiry);
  const [checkedOptions, setCheckedOptions] = useState<Record<string, boolean>>(
    {},
  );
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [messages, setMessages] = useUIState<typeof AI>();
  const { submit } = useActions<typeof AI>();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    checkIfButtonShouldBeEnabled();
  };

  const handleOptionChange = (selectedOption: string) => {
    const updatedCheckedOptions = {
      ...checkedOptions,
      [selectedOption]: !checkedOptions[selectedOption],
    };
    setCheckedOptions(updatedCheckedOptions);
    checkIfButtonShouldBeEnabled(updatedCheckedOptions);
  };

  const checkIfButtonShouldBeEnabled = (currentOptions = checkedOptions) => {
    const anyCheckboxChecked = Object.values(currentOptions).some(
      (checked) => checked,
    );
    setIsButtonDisabled(!(anyCheckboxChecked || query));
  };

  const updatedQuery = () => {
    const selectedOptions = Object.entries(checkedOptions)
      .filter(([, checked]) => checked)
      .map(([option]) => option);
    return [...selectedOptions, query].filter(Boolean).join(', ');
  };

  useEffect(() => {
    checkIfButtonShouldBeEnabled();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const onFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    skip?: boolean,
  ) => {
    e.preventDefault();
    setCompleted(true);
    setSkipped(skip ?? false);

    const formData = skip
      ? undefined
      : new FormData(e.target as HTMLFormElement);

    const responseMessage = await submit(formData, skip);
    setMessages((currentMessages) => [...currentMessages, responseMessage]);
  };

  const handleSkip = (e: React.MouseEvent<HTMLButtonElement>) => {
    void onFormSubmit(e as unknown as React.FormEvent<HTMLFormElement>, true);
  };

  if (error) {
    return (
      <Card className="flex w-full items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <SparklesIcon className="h-4 w-4" />
          <h5 className="truncate text-sm text-muted-foreground">
            {`error: ${(error as unknown as Error).message}`}
          </h5>
        </div>
      </Card>
    );
  }

  if (skipped) {
    return null;
  }

  if (completed) {
    return (
      <Card className="flex w-full items-center justify-between p-2 md:px-4">
        <div className="flex min-w-0 flex-1 items-center space-x-2">
          <MaiLogoIcon className="h-4 w-4 flex-shrink-0" />
          <h5 className="truncate text-muted-foreground">{updatedQuery()}</h5>
        </div>
        <CheckIcon className="h-4 w-4 text-green-500" />
      </Card>
    );
  } else {
    return (
      <Card className="mx-auto w-full rounded-lg p-4">
        <div className="mb-4 flex items-center">
          {pending ? (
            <SpinnerIcon className="size-6 flex-shrink-0 animate-spin" />
          ) : (
            <MaiLogoIcon className="size-8 flex-shrink-0" />
          )}
          <p className="ml-3 font-medium text-foreground">{data?.question}</p>
        </div>
        <form onSubmit={onFormSubmit}>
          <div className="mb-4 flex flex-wrap justify-start">
            {data?.options?.map((option, index) => (
              <div
                key={`option-${index}`}
                className="mb-4 flex items-center space-x-1.5"
              >
                <Checkbox
                  id={option?.value ?? ''}
                  name={option?.value ?? ''}
                  disabled={pending}
                  onCheckedChange={() =>
                    handleOptionChange(option?.label ?? '')
                  }
                />
                <label
                  className="whitespace-nowrap pr-8 text-sm text-secondary-foreground"
                  htmlFor={option?.value}
                >
                  {option?.label}
                </label>
              </div>
            ))}
          </div>
          {data?.allowsInput && (
            <div className="mb-6 flex flex-col space-y-2 text-sm">
              <label className="text-muted-foreground" htmlFor="query">
                {data?.inputLabel}?
              </label>
              <Input
                type="text"
                name="additional_query"
                className="w-full"
                id="query"
                placeholder={data?.inputPlaceholder}
                value={query}
                onChange={handleInputChange}
              />
            </div>
          )}
          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleSkip}
              disabled={pending}
              className="font-sans tracking-normal"
            >
              Skip
            </Button>
            <Button
              className="font-sans tracking-normal"
              type="submit"
              disabled={isButtonDisabled || pending}
            >
              Send
              <ArrowRightIcon className="ml-1 size-3" />
            </Button>
          </div>
        </form>
      </Card>
    );
  }
};
