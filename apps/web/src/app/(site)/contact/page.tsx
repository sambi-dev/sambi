import type { Metadata } from 'next';

import { useId } from 'react';
import Link from 'next/link';

import { Button } from '@sambi/ui/button';

import { Border } from '#/ui/border';
import { FadeIn } from '#/ui/fade-in';
import { Offices } from '#/ui/offices';
import { Container } from '#/ui/page-container';
import { PageIntro } from '#/ui/page-intro';
import { SocialMedia } from '#/ui/social-media';

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  const id = useId();

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border bg-transparent px-6 pb-4 pt-12 text-base/6 text-foreground ring-4 ring-transparent transition focus:border-ring focus:outline-none focus:ring-ring group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-muted-foreground transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-foreground peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-foreground"
      >
        {label}
      </label>
    </div>
  );
}

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border outline-none checked:border-[0.5rem] checked:border-primary focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-muted-foreground">{label}</span>
    </label>
  );
}

function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      <form>
        <h2 className="text-base font-semibold text-foreground">
          Project inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-card">
          <TextInput label="Name" name="name" autoComplete="name" required />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
            required
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Message" name="message" required />
          <div className="border px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-muted-foreground">
                Budget
              </legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput label="$25K – $50K" name="budget" value="25" />
                <RadioInput label="$50K – $100K" name="budget" value="50" />
                <RadioInput label="$100K – $150K" name="budget" value="100" />
                <RadioInput label="More than $150K" name="budget" value="150" />
                <RadioInput label="No idea" name="budget" value="0" />
              </div>
            </fieldset>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          Let’s work together
        </Button>
      </form>
    </FadeIn>
  );
}

function ContactDetails() {
  const contactOptions = [
    {
      label: 'Support',
      email: 'support@sambi.dev',
      linkText: 'Contact Support',
    },
    {
      label: 'Press',
      email: 'press@sambi.dev',
      linkText: 'Press Inquiries',
    },
  ];

  return (
    <FadeIn>
      <h2 className="text-base font-semibold text-primary">
        Working remotely from
      </h2>
      <p className="mt-6 text-pretty text-base text-muted-foreground">
        Prefer doing things in person? If you&apos;re in our neck of the woods,
        perfect. If not, we&apos;re just a Zoom call away.
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="text-base font-semibold text-primary">Email us</h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {contactOptions.map(({ label, email, linkText }) => (
            <div key={email}>
              <dt className="font-semibold text-secondary-foreground">
                {label}
              </dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-muted-foreground hover:text-muted-foreground/80"
                >
                  {linkText}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="text-base font-semibold text-primary">Follow us</h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  );
}

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Wanna contact the cool kids at sambi.dev? 😎 Slide into our Upwork DMs or fill out our contact form 📝 We're totally stoked to hear from you. 🤙",
};

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Drop us a line">
        <p className="text-pretty">
          Want to work together? Woohoo! Send us a message and we&apos;ll get
          back to you in a jiffy. No seriously, we&apos;re quick like that.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  );
}
