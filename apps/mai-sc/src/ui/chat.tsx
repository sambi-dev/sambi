'use client';

import type { Message } from '#/lib/chat/actions';
import type { Session } from '#/lib/types';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { useAIState, useUIState } from 'ai/rsc';

import { cn } from '@yocxo/ui';
import { toast } from '@yocxo/ui/toast';

import { useLocalStorage } from '#/lib/hooks/use-local-storage';
import { useScrollAnchor } from '#/lib/hooks/use-scroll-anchor';
import { ChatList } from '#/ui/chat-list';
import { ChatPanel } from '#/ui/chat-panel';
import { EmptyScreen } from '#/ui/empty-screen';

export interface ChatProps extends React.ComponentProps<'div'> {
  initialMessages?: Message[];
  id?: string;
  session?: Session;
  missingKeys: string[];
}

export function Chat({ id, className, session, missingKeys }: ChatProps) {
  const router = useRouter();
  const path = usePathname();
  const [input, setInput] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [messages] = useUIState();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [aiState] = useAIState();

  const [_, setNewChatId] = useLocalStorage('newChatId', id);

  useEffect(() => {
    console.log('🤖 Checking if user is in a chat path with only one message');
    if (session?.user) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (!path.includes('chat') && messages.length === 1) {
        window.history.replaceState({}, '', `/chat/${id}`);
        console.log(
          `🤖 Redirected to /chat/${id} because the path did not include 'chat' and only one message was present`,
        );
      }
    }
  }, [id, path, session?.user, messages]);

  useEffect(() => {
    console.log('🤖 Checking AI state for message length of 2');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const messagesLength = aiState.messages?.length;
    if (messagesLength === 2) {
      const refreshAfterSave = async () => {
        await new Promise((resolve) => {
          const checkSaveStatus = () => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (aiState.saved) {
              resolve(true);
            } else {
              setTimeout(checkSaveStatus, 100);
            }
          };
          checkSaveStatus();
        });

        router.refresh();
        console.log(
          '🤖 Refreshed the router after the chat is saved with 2 messages',
        );
      };
      void refreshAfterSave();
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  }, [aiState.messages, aiState.saved, router]);

  useEffect(() => {
    console.log(`🤖 Setting new chat ID in local storage: ${id}`);
    setNewChatId(id);
  }, [id, setNewChatId]);

  useEffect(() => {
    console.log('🤖 Checking for missing environment keys');
    missingKeys.forEach((key) => {
      toast.error('Missing environment variable', {
        description: `We encountered an issue: The ${key} environment variable is missing. Please try again.`,
      });
      console.log(`🤖 Reported missing environment variable: ${key}`);
    });
  }, [missingKeys]);

  const { messagesRef, scrollRef, visibilityRef, isAtBottom, scrollToBottom } =
    useScrollAnchor();

  return (
    <div
      className="no-scrollbar group w-full overflow-auto pl-0 peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px]"
      ref={scrollRef}
    >
      <div
        className={cn('pb-[200px] pt-4 md:pt-10', className)}
        ref={messagesRef}
      >
        {/*eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
        {messages.length ? (
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          <ChatList messages={messages} isShared={false} session={session} />
        ) : (
          <EmptyScreen />
        )}
        <div className="h-px w-full" ref={visibilityRef} />
      </div>
      <ChatPanel
        id={id}
        input={input}
        setInput={setInput}
        isAtBottom={isAtBottom}
        scrollToBottom={scrollToBottom}
      />
    </div>
  );
}
