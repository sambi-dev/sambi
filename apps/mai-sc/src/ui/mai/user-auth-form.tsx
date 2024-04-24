'use client';

import * as React from 'react';

import { cn } from '@yocxo/ui';
import { Button } from '@yocxo/ui/button';
import { DiscordIcon, GoogleIcon, SpinnerIcon } from '@yocxo/ui/icons';
import { Input } from '@yocxo/ui/input';

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              placeholder="Enter your email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button
            aria-label="Get magic link via email"
            disabled={isLoading}
            className="mt-2 rounded-full font-sans tracking-normal dark:text-zinc-950"
          >
            {isLoading && <SpinnerIcon className="mr-2 h-4 w-4 animate-spin" />}
            Get magic link via email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-4 py-2">
          <Button
            aria-label="Sign in with Discord"
            variant="outline"
            className="rounded-full font-sans tracking-normal text-muted-foreground"
            type="button"
            disabled={isLoading}
          >
            {isLoading ? (
              <SpinnerIcon className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <>
                <DiscordIcon className="mr-2" />
                Discord
              </>
            )}
          </Button>
          <Button
            aria-label="Sign in with Google"
            variant="outline"
            className="rounded-full font-sans tracking-normal text-muted-foreground"
            type="button"
            disabled={isLoading}
          >
            {isLoading ? (
              <SpinnerIcon className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <>
                <GoogleIcon className="mr-2" />
                Google
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
