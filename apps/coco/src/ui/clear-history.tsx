'use client';

import type { ServerActionResult } from '#/lib/types';

import * as React from 'react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@yocxo/ui/alert-dialog';
import { Button } from '@yocxo/ui/button';
import { SpinnerIcon } from '@yocxo/ui/icons';
import { toast } from '@yocxo/ui/toast';

interface ClearHistoryProps {
  isEnabled: boolean;
  clearChats: () => ServerActionResult<void>;
}

export function ClearHistory({
  isEnabled = false,
  clearChats,
}: ClearHistoryProps) {
  const [open, setOpen] = React.useState(false);
  const [isPending, startTransition] = React.useTransition();

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          disabled={!isEnabled || isPending}
          className="text-[0.7rem]"
        >
          {isPending && <SpinnerIcon className="anim mr-2" />}
          Clear history
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="font-mono font-semibold tracking-tighter">
            Are you sure about this?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Your chat history will be permanently removed from our systems, like
            forever. This action can&apos;t be reversed.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={isPending}
            onClick={(event) => {
              event.preventDefault();
              startTransition(async () => {
                const result = await clearChats();
                if (result && 'error' in result) {
                  toast.error('Unable to delete chat history', {
                    description: `We encountered an issue: ${result.error}. Please try again.`,
                  });
                  return;
                }

                setOpen(false);
              });
            }}
          >
            {isPending && <SpinnerIcon className="mr-2 animate-spin" />}
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
