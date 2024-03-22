import type { Chat, ServerActionResult } from '#/lib/types';

import * as React from 'react';
import { useRouter } from 'next/navigation';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@sambi/ui/alert-dialog';
import { Button } from '@sambi/ui/button';
import { ShareIcon, SpinnerIcon, TrashIcon } from '@sambi/ui/icons';
import { toast } from '@sambi/ui/toast';
import { Tooltip, TooltipContent, TooltipTrigger } from '@sambi/ui/tooltip';

import { ChatShareDialog } from '#/ui/chat-share-dialog';

interface SidebarActionsProps {
  chat: Chat;
  removeChat: (args: { id: string; path: string }) => ServerActionResult<void>;
  shareChat: (id: string) => ServerActionResult<Chat>;
}

export function SidebarActions({
  chat,
  removeChat,
  shareChat,
}: SidebarActionsProps) {
  const router = useRouter();
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [shareDialogOpen, setShareDialogOpen] = React.useState(false);
  const [isRemovePending, startRemoveTransition] = React.useTransition();

  return (
    <>
      <div className="">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              className="size-7 p-0 hover:bg-background"
              onClick={() => setShareDialogOpen(true)}
            >
              <ShareIcon />
              <span className="sr-only">Share</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Share chat</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              className="size-7 p-0 hover:bg-destructive hover:text-white"
              disabled={isRemovePending}
              onClick={() => setDeleteDialogOpen(true)}
            >
              <TrashIcon />
              <span className="sr-only">Delete</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Delete chat</TooltipContent>
        </Tooltip>
      </div>
      <ChatShareDialog
        chat={chat}
        shareChat={shareChat}
        open={shareDialogOpen}
        onOpenChange={setShareDialogOpen}
        onCopy={() => setShareDialogOpen(false)}
      />
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete your chat message and remove your
              data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isRemovePending}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              disabled={isRemovePending}
              onClick={(event) => {
                event.preventDefault();

                startRemoveTransition(async () => {
                  const result = await removeChat({
                    id: chat.id,
                    path: chat.path,
                  });

                  if (result && 'error' in result) {
                    toast.error('Unable to delete chat', {
                      description: `We encountered a problem: ${result.error}. Please try again.`,
                    });
                    return;
                  }

                  setDeleteDialogOpen(false);
                  router.refresh();
                  router.push('/');
                  toast.success('Chat deleted');
                });
              }}
            >
              {isRemovePending && <SpinnerIcon className="mr-2 animate-spin" />}
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
