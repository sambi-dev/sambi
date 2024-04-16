import Link from 'next/link';

import { UserAuthForm } from './user-auth-form';

export default function Authentication() {
  return (
    <section className="px-6 pt-40 sm:pt-0" id="user-auth-form">
      <div className="mx-auto w-full rounded-2xl border bg-card p-10 shadow-md sm:w-[420px]">
        <div className="flex flex-col justify-center space-y-6">
          <div className="mb-4 flex flex-col space-y-2 text-center">
            <h1 className="text-lg font-medium">Log in or sign up</h1>
            <p className="text-sm text-muted-foreground">
              Use email or a supported social provider
            </p>
          </div>
          <UserAuthForm />
        </div>
      </div>
      <p className="mx-auto w-full p-4 text-center text-xs text-muted-foreground sm:w-[420px]">
        Read our{' '}
        <Link
          href="/terms"
          className="underline underline-offset-4 hover:text-primary"
        >
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link
          href="/privacy"
          className="underline underline-offset-4 hover:text-primary"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </section>
  );
}
