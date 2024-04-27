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
    if (session?.user) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (path === '/chat' && messages.length === 1) {
        window.history.replaceState({}, '', `/chat/${id}`);
      }
    }
  }, [id, path, session?.user, messages]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const messagesLength = aiState.messages?.length;
    if (messagesLength === 2) {
      router.refresh();
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  }, [aiState.messages, router]);

  useEffect(() => {
    setNewChatId(id);
  });

  useEffect(() => {
    missingKeys.map((key) => {
      toast.error('Missing environment variable', {
        description: `We encountered an issue: The ${key} environment variable is missing. Please try again.`,
      });
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
