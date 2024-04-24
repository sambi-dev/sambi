import type { DialogProps } from '@radix-ui/react-dialog';
import type { Chat, ServerActionResult } from '#/lib/types';

import * as React from 'react';

import { Button } from '@yocxo/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@yocxo/ui/dialog';
import { SpinnerIcon } from '@yocxo/ui/icons';
import { toast } from '@yocxo/ui/toast';

import { useCopyToClipboard } from '#/lib/hooks/use-copy-to-clipboard';

interface ChatShareDialogProps extends DialogProps {
  chat: Pick<Chat, 'id' | 'title' | 'messages'>;
  shareChat: (id: string) => ServerActionResult<Chat>;
  onCopy: () => void;
}

export function ChatShareDialog({
  chat,
  shareChat,
  onCopy,
  ...props
}: ChatShareDialogProps) {
  const { copyToClipboard } = useCopyToClipboard({ timeout: 1000 });
  const [isSharePending, startShareTransition] = React.useTransition();

  const copyShareLink = React.useCallback(
    async (chat: Chat) => {
      if (!chat.sharePath) {
        return toast.error('Copy to clipboard failed', {
          description:
            'We could not copy the share link to your clipboard. Please try again.',
        });
      }

      const url = new URL(window.location.href);
      url.pathname = chat.sharePath;
      copyToClipboard(url.toString());
      onCopy();
      toast.success('Share link copied to clipboard');
    },
    [copyToClipboard, onCopy],
  );

  return (
    <Dialog {...props}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share link to chat</DialogTitle>
          <DialogDescription>
            Anyone with the URL will be able to view the shared chat.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-1 rounded-md border p-4 text-sm">
          <div className="font-medium">{chat.title}</div>
          <div className="text-muted-foreground">
            {chat.messages.length} messages
          </div>
        </div>
        <DialogFooter className="items-center">
          <Button
            className="font-sans tracking-normal"
            disabled={isSharePending}
            onClick={() => {
              startShareTransition(async () => {
                const result = await shareChat(chat.id);

                if (result && 'error' in result) {
                  toast.error('Sharing the chat failed, ruff', {
                    description: `We encountered a problem: ${result.error}. Please try again.`,
                  });
                  return;
                }

                void copyShareLink(result);
              });
            }}
          >
            {isSharePending ? (
              <>
                <SpinnerIcon className="mr-2 animate-spin" />
                Copying...
              </>
            ) : (
              <>Copy link</>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
