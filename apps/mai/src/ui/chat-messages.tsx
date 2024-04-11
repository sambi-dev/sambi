import type { AI } from '#/app/action';

import { useUIState } from 'ai/rsc';

export function ChatMessages() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [messages, setMessages] = useUIState<typeof AI>();

  return (
    <>
      {messages.map((message: { id: number; component: React.ReactNode }) => (
        <div key={message.id}>{message.component}</div>
      ))}
    </>
  );
}
