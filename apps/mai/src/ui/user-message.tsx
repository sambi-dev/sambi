import React from 'react';

import { cn } from '@yocxo/ui';

interface UserMessageProps {
  message: string;
  isFirstMessage?: boolean;
}

export const UserMessage: React.FC<UserMessageProps> = ({
  message,
  isFirstMessage,
}) => {
  return (
    <div className={cn({ 'mt-8 md:mt-16': !isFirstMessage })}>
      <div className="truncate text-lg font-medium text-primary">{message}</div>
    </div>
  );
};
