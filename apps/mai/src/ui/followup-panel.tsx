'use client';

import type { AI } from '#/app/action';

import { useState } from 'react';

import { useActions, useUIState } from 'ai/rsc';

import { Button } from '@yocxo/ui/button';
import { ArrowRightIcon } from '@yocxo/ui/icons';
import { Input } from '@yocxo/ui/input';

import { UserMessage } from '#/ui/user-message';

export function FollowupPanel() {
  const [input, setInput] = useState('');
  const { submit } = useActions<typeof AI>();
  const [, setMessages] = useUIState<typeof AI>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);

    const userMessage = {
      id: Date.now(),
      isGenerating: false,
      component: <UserMessage message={input} isFirstMessage={false} />,
    };

    const responseMessage = await submit(formData);
    setMessages((currentMessages) => [
      ...currentMessages,
      userMessage,
      responseMessage,
    ]);

    setInput('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex items-center space-x-1"
    >
      <Input
        type="text"
        name="input"
        placeholder="Anything else I can help with for this client?"
        value={input}
        className="h-12 bg-secondary pr-14"
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        aria-label="Send follow-up message"
        type="submit"
        size={'icon'}
        disabled={input.length === 0}
        variant={'ghost'}
        className="absolute right-1 font-sans tracking-normal"
      >
        <ArrowRightIcon className="text-primary" />
      </Button>
    </form>
  );
}
