import type { AI } from '#/lib/chat/actions';

import * as React from 'react';

import { useActions, useAIState, useUIState } from 'ai/rsc';
import { nanoid } from 'nanoid';

import { Button } from '@yocxo/ui/button';
import { ShareIcon } from '@yocxo/ui/icons';

import { shareChat } from '#/app/actions';
import { ButtonScrollToBottom } from '#/ui/button-scroll-to-bottom';
import { ChatShareDialog } from '#/ui/chat-share-dialog';
import { FooterText } from '#/ui/footer-text';
import { PromptForm } from '#/ui/prompt-form';

import { UserMessage } from './stocks/message';

export interface ChatPanelProps {
  id?: string;
  title?: string;
  input: string;
  setInput: (value: string) => void;
  isAtBottom: boolean;
  scrollToBottom: () => void;
}

export function ChatPanel({
  id,
  title,
  input,
  setInput,
  isAtBottom,
  scrollToBottom,
}: ChatPanelProps) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [aiState] = useAIState();
  const [messages, setMessages] = useUIState<typeof AI>();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { submitUserMessage } = useActions();
  const [shareDialogOpen, setShareDialogOpen] = React.useState(false);

  const exampleMessages = [
    {
      heading: 'Spill the tea on',
      subheading: "today's hottest memecoins 🔥",
      message: 'What are the trending memecoins today?',
    },
    {
      heading: "What's the deal with",
      subheading: '$SHIB right now? 💸',
      message: "What is the price of $SHIB right now?'",
    },
    {
      heading: 'Feeling lucky, get me',
      subheading: '420 $TSLA 🎲',
      message: 'I would like to buy 420 $TSLA',
    },
    {
      heading: 'Give me the juicy deets on',
      subheading: "what's going on with the $RDDT IPO 📰",
      message: 'What are some recent events about the $RDDT IPO?',
    },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 w-full duration-300 ease-in-out animate-in peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px]">
      <ButtonScrollToBottom
        isAtBottom={isAtBottom}
        scrollToBottom={scrollToBottom}
      />

      <div className="mx-auto sm:max-w-2xl sm:px-4">
        <div className="mb-4 grid grid-cols-2 gap-2 px-4 sm:px-0">
          {messages.length === 0 &&
            exampleMessages.map((example, index) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
              <div
                key={example.heading}
                className={`cursor-pointer rounded-lg border bg-card p-4 hover:bg-primary/20 ${
                  index > 1 && 'hidden md:block'
                }`}
                onClick={async () => {
                  setMessages((currentMessages) => [
                    ...currentMessages,
                    {
                      id: nanoid(),
                      display: <UserMessage>{example.message}</UserMessage>,
                    },
                  ]);

                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
                  const responseMessage = await submitUserMessage(
                    example.message,
                  );

                  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                  setMessages((currentMessages) => [
                    ...currentMessages,
                    responseMessage,
                  ]);
                }}
              >
                <div className="text-sm font-semibold tracking-tighter">
                  {example.heading}
                </div>
                <div className="text-sm text-muted-foreground">
                  {example.subheading}
                </div>
              </div>
            ))}
        </div>

        {messages?.length >= 2 ? (
          <div className="flex h-12 items-center justify-center">
            <div className="flex space-x-2">
              {id && title ? (
                <>
                  <Button
                    className="font-sans tracking-normal"
                    variant="outline"
                    onClick={() => setShareDialogOpen(true)}
                  >
                    <ShareIcon className="mr-2" />
                    Share
                  </Button>
                  <ChatShareDialog
                    open={shareDialogOpen}
                    onOpenChange={setShareDialogOpen}
                    onCopy={() => setShareDialogOpen(false)}
                    shareChat={shareChat}
                    chat={{
                      id,
                      title,
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                      messages: aiState.messages,
                    }}
                  />
                </>
              ) : null}
            </div>
          </div>
        ) : null}

        <div className="space-y-4 border-t bg-card px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4">
          <PromptForm input={input} setInput={setInput} />
          <FooterText className="hidden sm:block" />
        </div>
      </div>
    </div>
  );
}
