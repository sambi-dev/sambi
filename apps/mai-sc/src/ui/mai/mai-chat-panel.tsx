import type { MaiAI } from '#/app/(mai)/action';

import { useEffect, useRef, useState } from 'react';

import { useActions, useAIState, useUIState } from 'ai/rsc';

import { cn } from '@yocxo/ui';
import { Button } from '@yocxo/ui/button';
import { ArrowRightIcon, PlusIcon } from '@yocxo/ui/icons';
import { Input } from '@yocxo/ui/input';

import { MaiEmptyScreen } from '#/ui/mai/mai-empty-screen';
import { UserMessage } from '#/ui/mai/user-message';

export function MaiChatPanel() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useUIState<typeof MaiAI>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [aiMessages, setAiMessages] = useAIState<typeof MaiAI>();
  const { submit } = useActions<typeof MaiAI>();
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [showEmptyScreen, setShowEmptyScreen] = useState(false);
  // Focus on input when button is pressed
  useEffect(() => {
    if (isButtonPressed) {
      inputRef.current?.focus();
      setIsButtonPressed(false);
    }
  }, [isButtonPressed]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Clear messages if button is pressed
    if (isButtonPressed) {
      handleClear();
      setIsButtonPressed(false);
    }

    // Add user message to UI state
    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: Date.now(),
        component: <UserMessage message={input} />,
      },
    ]);

    // Submit and get response message
    const formData = new FormData(e.currentTarget);
    const responseMessage = await submit(formData);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    setMessages((currentMessages) => [
      ...currentMessages,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      responseMessage as any,
    ]);

    setInput('');
  };

  // Clear messages
  const handleClear = () => {
    setIsButtonPressed(true);
    setMessages([]);
    setAiMessages([]);
  };

  useEffect(() => {
    // focus on input when the page loads
    inputRef.current?.focus();
  }, []);

  // If there are messages and the new button has not been pressed, display the new Button
  if (messages.length > 0 && !isButtonPressed) {
    return (
      <div className="pointer-events-none fixed bottom-2 left-0 right-0 mx-auto flex items-center justify-center md:bottom-16">
        <Button
          aria-label="New report"
          type="button"
          size="lg"
          className="group pointer-events-auto rounded-full transition-all hover:scale-105"
          onClick={() => handleClear()}
        >
          <span className="mr-2 hidden font-sans text-sm font-medium tracking-normal duration-300 animate-in fade-in group-hover:block dark:text-zinc-950">
            New report
          </span>
          <PlusIcon className="transition-all group-hover:rotate-90" />
        </Button>
      </div>
    );
  }

  // Condition 1 and 3: If there are no messages or the button is pressed, display the form
  const formPositionClass =
    messages.length === 0
      ? 'fixed bottom-8 left-0 right-0 top-10 mx-auto h-screen flex flex-col items-center justify-center'
      : 'fixed bottom-8-ml-6';
  return (
    <div className={formPositionClass}>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl px-6">
        <div className="relative flex w-full items-center">
          <Input
            ref={inputRef}
            type="text"
            name="input"
            autoComplete="off"
            placeholder="I am Mai, ask me a question..."
            value={input}
            className="h-12 rounded-full bg-card pl-4 pr-10"
            onChange={(e) => {
              setInput(e.target.value);
              setShowEmptyScreen(e.target.value.length === 0);
            }}
            onFocus={() => setShowEmptyScreen(true)}
            onBlur={() => setShowEmptyScreen(false)}
          />
          <Button
            type="submit"
            aria-label="Send Message"
            size={'icon'}
            variant={'ghost'}
            className="absolute right-2 top-1/2 -translate-y-1/2 transform"
            disabled={input.length === 0}
          >
            <ArrowRightIcon className="text-primary" />
          </Button>
        </div>
        <MaiEmptyScreen
          submitMessage={(message) => {
            setInput(message);
          }}
          className={cn(showEmptyScreen ? 'visible' : 'invisible')}
        />
      </form>
    </div>
  );
}
