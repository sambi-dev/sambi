import * as React from 'react';

import { Alert, AlertDescription, AlertTitle } from '@yocxo/ui/alert';
import { AlertTriangleIcon } from '@yocxo/ui/icons';

import { SidebarList } from '#/ui/sidebar-list';

interface ChatHistoryProps {
  userId?: string;
}

export async function ChatHistory({ userId }: ChatHistoryProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex px-2 py-4">
        <h4 className="text-sm font-medium">Report History</h4>
      </div>
      <div className="flex flex-1 flex-col space-y-4 overflow-auto px-4">
        <Alert className="border-dashed border-muted-foreground bg-transparent">
          <AlertTriangleIcon className="text-muted-foreground" />
          <AlertTitle className="font-medium text-muted-foreground">
            Coming Soon
          </AlertTitle>
          <AlertDescription className="text-xs text-muted-foreground">
            I&apos;m sorry but Sam is really slow.
          </AlertDescription>
        </Alert>
      </div>
      <div className="flex px-2 py-4">
        <h4 className="text-sm font-medium">Chat History</h4>
      </div>
      <React.Suspense
        fallback={
          <div className="flex flex-1 flex-col space-y-4 overflow-auto px-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="h-6 w-full shrink-0 animate-pulse rounded-md"
              />
            ))}
          </div>
        }
      >
        <SidebarList userId={userId} />
      </React.Suspense>
    </div>
  );
}
