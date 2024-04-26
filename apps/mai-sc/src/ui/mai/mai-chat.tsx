'use client';

import { MaiChatMessages } from '#/ui/mai/mai-chat-messages';
import { MaiChatPanel } from '#/ui/mai/mai-chat-panel';

export function MaiChat() {
  return (
    <div className="no-scrollbar mx-auto flex w-full max-w-3xl flex-col space-y-3 overflow-auto px-8 pb-14 pt-6 md:space-y-4 md:px-12 md:pb-24 md:pt-8">
      <MaiChatMessages />
      <MaiChatPanel />
    </div>
  );
}
