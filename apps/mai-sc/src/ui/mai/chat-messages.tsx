import type { AI } from '#/app/(mai)/action';
import type { StreamableValue } from 'ai/rsc';

import { useUIState } from 'ai/rsc';

import { CollapsibleMessage } from './collapsible-message';

export function ChatMessages() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [messages, setMessages] = useUIState<typeof AI>();

  return (
    <>
      {messages.map(
        (message: {
          id: number;
          component: React.ReactNode;
          isCollapsed?: StreamableValue<boolean>;
        }) => (
          <CollapsibleMessage
            key={message.id}
            message={message}
            isLastMessage={message.id === messages[messages.length - 1]?.id}
          />
        ),
      )}
    </>
  );
}
