'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useFormState, useFormStatus } from 'react-dom';

import { Button } from '@yocxo/ui/button';
import {
  DiscordIcon,
  GitHubIcon,
  GoogleIcon,
  SpinnerIcon,
} from '@yocxo/ui/icons';
import { toast } from '@yocxo/ui/toast';

import { authenticate } from '#/app/login/actions';
import { getMessageFromCode } from '#/lib/utils';

export default function LoginForm() {
  const router = useRouter();
  const [result, dispatch] = useFormState(authenticate, undefined);

  useEffect(() => {
    if (result) {
      const message = getMessageFromCode(result.resultCode);
      if (result.type === 'error') {
        toast.error('Login Error', {
          description: message,
        });
      } else {
        toast.success('Success', {
          description: message,
        });
        router.refresh();
      }
    }
  }, [result, router]);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center font-mono text-xl font-semibold tracking-tighter">
          Log in to your account
        </h2>
      </div>
      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-card px-6 py-12 shadow-md sm:rounded-2xl sm:px-12">
          <form className="space-y-6" action={dispatch}>
            <div>
              <div>
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-muted-foreground/80"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border bg-background px-2 py-[9px] text-sm outline-none placeholder:text-muted-foreground/80"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-muted-foreground/80"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border bg-background px-2 py-[9px] text-sm outline-none placeholder:text-muted-foreground/80"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    required
                    minLength={6}
                  />
                </div>
              </div>
            </div>

            {/*<div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm leading-6 text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm leading-6">
                  <a
                    href="/"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>*/}

            <LoginButton />
          </form>

          <div>
            <div className="relative mt-10">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-alternate" />
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-card px-6 font-mono text-xs font-medium tracking-tighter text-muted-foreground line-through">
                  Or soon, continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <Button variant="secondary" className="text-xs" disabled>
                <GoogleIcon className="mr-2 text-primary" />
                Google
              </Button>

              <Button variant="secondary" className="text-xs" disabled>
                <DiscordIcon className="mr-2 text-primary" />
                Discord
              </Button>
              <Button variant="secondary" className="text-xs" disabled>
                <GitHubIcon className="mr-2 text-primary" />
                GitHub
              </Button>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-sm text-center text-xs text-muted-foreground">
          No account?{' '}
          <Link
            href="/signup"
            className="font-semibold leading-6 text-primary hover:text-primary/80"
          >
            Sign up
          </Link>
          . By clicking log in, you get that this experience is a demo and that
          the data is complete 🐴💩. It means you agree to our{' '}
          <Link
            href="https://yocxo.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold leading-6 text-primary hover:text-primary/80"
          >
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link
            href="https://yocxo.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold leading-6 text-primary hover:text-primary/80"
          >
            Privacy Policy{' '}
          </Link>
          too.
        </p>
      </div>
    </div>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="my-4 w-full" aria-disabled={pending}>
      {pending ? <SpinnerIcon className="animate-spin" /> : 'Log in'}
    </Button>
  );
}
