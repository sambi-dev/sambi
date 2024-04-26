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
          variant="destructive"
          disabled={!isEnabled || isPending}
          className="rounded-full font-sans text-[0.7rem] tracking-normal shadow-none"
        >
          {isPending && <SpinnerIcon className="mr-2 animate-spin" />}
          Clear history
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="font-semibold tracking-tighter">
            Are you sure you want to delete everything?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Your chat and report history will be permanently removed from our
            systems. This action can&apos;t be reversed.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="font-sans tracking-normal"
            disabled={isPending}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="font-sans tracking-normal"
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
