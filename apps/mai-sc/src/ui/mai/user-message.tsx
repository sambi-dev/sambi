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
    <div className={cn({ 'mt-16': !isFirstMessage })}>
      <div className="-mb-16 max-w-[30ch] truncate text-sm font-medium text-primary sm:max-w-[55ch] sm:text-base">
        {message}
      </div>
    </div>
  );
};
