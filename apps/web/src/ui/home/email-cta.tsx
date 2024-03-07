'use client';

import { useRef, useState, useTransition } from 'react';

import { Turnstile } from '@marsidev/react-turnstile';

import { Button } from '@sambi/ui/button';
import { toast } from '@sambi/ui/toast';

import { addContactHomeCta } from '#/lib/resend/home-cta/add-contact-home-cta';
import { Container } from '#/ui/shared/container';
import { SpinnerIcon } from '#/ui/shared/icons';
import { Pattern } from '#/ui/shared/pattern';

interface ApiResponse {
  success: boolean;
  message?: string;
}

export function EmailCta() {
  const [email, setEmail] = useState('');
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(async () => {
      if (!formRef.current) return;
      const formData = new FormData(formRef.current);
      const token = formData.get('cf-turnstile-response')?.toString() ?? '';

      const res = await fetch('/api/verify', {
        method: 'POST',
        body: JSON.stringify({ token, email }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = (await res.json()) as ApiResponse;
      if (data.success) {
        const { success, message } = await addContactHomeCta(email);
        if (success) {
          toast.success('Your request has been received', {
            description:
              "We're busy checking ChatGPT for answers and will be in touch within one business day.",
          });
        } else {
          toast.error('There was a problem with your request.', {
            description: `Something went wrong: ${message}. Please check your input and try again.`,
          });
        }
      } else {
        toast.error('Cloudflare security verification failed.', {
          description: `Please check the email address and try again.`,
        });
      }
      setEmail('');
    });
  };

  return (
    <section
      id="email-cta"
      aria-label="Subscribe to our infrequent but awesome email newsletter"
      className="scroll-mt-14 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-background via-primary to-background sm:scroll-mt-32"
    >
      <div className="overflow-hidden lg:relative">
        <Container
          size="md"
          className="relative grid grid-cols-1 items-end gap-y-12 py-24 lg:static lg:grid-cols-2 lg:py-28 xl:py-32"
        >
          <Pattern className="absolute -top-32 left-0 w-full sm:-top-5 sm:left-3/4 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:left-2/3 xl:right-auto" />
          <div>
            <h2 className="text-5xl font-bold tracking-tight text-foreground sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
              Got a brain-buster? Try us
            </h2>
            <p className="mt-4 text-lg tracking-tight text-secondary-foreground">
              We&apos;re not the know-it-alls we sound like. But we&apos;re
              pretty good at finding solutions. Drop us a line, challenge
              accepted.
            </p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="lg:pl-16">
            <h3 className="text-sm font-medium tracking-tight text-foreground/80">
              We won&apos;t spam you.
            </h3>
            <div className="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
              <div className="relative sm:static sm:flex-auto">
                <input
                  type="email"
                  id="home-email-cta"
                  name="email"
                  required
                  aria-label="Email address"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-foreground placeholder:text-secondary-foreground/80 focus:outline-none sm:py-3"
                />
                <div className="absolute inset-0 rounded-md border border-secondary-foreground/50 peer-focus:border-primary peer-focus:bg-card peer-focus:ring-4 peer-focus:ring-ring sm:rounded-xl" />
              </div>
              <Turnstile
                siteKey="0x4AAAAAAATrIPqB0JKl8mtv"
                options={{ size: 'invisible' }}
              />
              <Button
                type="submit"
                className="mt-4 w-full text-primary-foreground sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none"
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <SpinnerIcon className="mr-2 h-4 w-4 animate-spin stroke-primary-foreground" />{' '}
                    Just a sec...
                  </>
                ) : (
                  'Get answers'
                )}
              </Button>
            </div>
          </form>
        </Container>
      </div>
    </section>
  );
}
