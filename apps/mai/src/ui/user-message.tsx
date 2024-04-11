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
    <div className={cn({ 'pt-8 md:pt-16': !isFirstMessage })}>
      <div className="text-lg font-medium text-primary">{message}</div>
    </div>
  );
};
