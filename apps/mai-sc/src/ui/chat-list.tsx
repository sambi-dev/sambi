import type { UIState } from '#/lib/chat/actions';
import type { Session } from '#/lib/types';

import Link from 'next/link';

import { AlertTriangleIcon } from '@yocxo/ui/icons';
import { Separator } from '@yocxo/ui/separator';

export interface ChatList {
  messages: UIState;
  session?: Session;
  isShared: boolean;
}

export function ChatList({ messages, session, isShared }: ChatList) {
  if (!messages.length) {
    return null;
  }

  return (
    <div className="relative mx-auto max-w-2xl px-4">
      {!isShared && !session ? (
        <>
          <div className="group relative mb-4 flex items-start md:-ml-12">
            <div className="flex size-[25px] shrink-0 select-none items-center justify-center rounded-md border bg-background shadow-sm">
              <AlertTriangleIcon />
            </div>
            <div className="ml-4 flex-1 space-y-2 overflow-hidden px-1">
              <p className="leading-normal text-muted-foreground">
                Please{' '}
                <Link href="/login" className="font-semibold text-primary">
                  log in
                </Link>{' '}
                or{' '}
                <Link href="/signup" className="font-semibold text-primary">
                  sign up
                </Link>{' '}
                to save and revisit your chat history.
              </p>
            </div>
          </div>
          <Separator className="my-4" />
        </>
      ) : null}

      {messages.map((message, index) => (
        <div key={message.id}>
          {message.display}
          {index < messages.length - 1 && <Separator className="my-4" />}
        </div>
      ))}
    </div>
  );
}
