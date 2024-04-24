'use client';

import { ChatMessages } from '#/ui/mai/chat-messages';
import { ChatPanel } from '#/ui/mai/chat-panel';

export function Chat() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col space-y-3 px-8 pb-14 pt-6 md:space-y-4 md:px-12 md:pb-24 md:pt-8">
      <ChatMessages />
      <ChatPanel />
    </div>
  );
}
