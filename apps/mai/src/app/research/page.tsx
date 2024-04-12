'use client';

import type { NextPage } from 'next';

import { Chat } from '#/ui/chat';

export const runtime = 'edge';

const ChatPage: NextPage = () => {
  return <Chat />;
};

export default ChatPage;
