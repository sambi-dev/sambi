import Link from 'next/link';

import { ThemeToggle } from '@sambi/ui/theme';

import { siteConfig } from '#/config/site';
import { FadeIn } from '#/ui/fade-in';
import { Logo } from '#/ui/logo';
import { Container } from '#/ui/page-container';
import { ArrowRightIcon } from '#/ui/shared/icons';
import { socialMediaProfiles } from '#/ui/social-media';

const navigation = [
  {
    title: 'Work',
    links: [
      { title: 'Envicrete', href: '/work/envicrete' },
      { title: 'And Voila', href: '/work/and-voila' },
      { title: 'RoastMy.xyz', href: '/work/roast-my-xyz' },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/work',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Process', href: '/process' },
      { title: 'Blog', href: '/blog' },
      { title: 'Generated', href: '/mdx' },
      { title: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { title: 'Privacy', href: '/privacy' },
      { title: 'Terms', href: '/terms' },
      { title: 'Accessibility', href: '/accessibility' },
    ],
  },
  {
    title: 'Connect',
    links: socialMediaProfiles,
  },
];

function Navigation() {
  return (
    <nav>
      <ul className="grid grid-cols-2 gap-16 sm:grid-cols-4">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="text-sm font-semibold tracking-wider text-primary">
              {section.title}
            </div>
            <ul className="mt-4 text-sm text-secondary-foreground">
              {section.links.map((link, linkIndex) => {
                const isSocialMediaLink = socialMediaProfiles.some(
                  (socialMediaProfile) => socialMediaProfile.href === link.href,
                );
                return (
                  <li key={linkIndex} className="mt-4">
                    {isSocialMediaLink ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit sambi's ${link.title as string} profile in a new window`}
                        className="transition hover:text-primary"
                      >
                        {link.title}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="transition hover:text-primary"
                        aria-label={`Visit sambi's ${link.title as string} page in the same window`}
                      >
                        {link.title}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function NewsletterForm() {
  return (
    <form className="max-w-sm">
      <h2 className="text-sm font-semibold text-foreground">
        Our ramblings, your inbox
      </h2>
      <p className="mt-4 text-sm text-muted-foreground">
        Want to keep tabs on what we&apos;re up to? Subscribe to our
        unpredictably infrequent emails. Includes free delivery.
      </p>
      <div className="relative mt-6">
        <input
          id="footer-email-cta"
          name="email"
          type="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-2xl border bg-card py-4 pl-6 pr-20 text-base/6 text-foreground ring-4 ring-transparent transition placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-ring"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-primary text-white transition hover:bg-primary/80"
          >
            <ArrowRightIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  );
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link>
          <p className="text-sm text-primary">
            © {siteConfig.name}. All Rights Reserved.{' '}
            {new Date().getFullYear()}
          </p>
          <ThemeToggle />
        </div>
      </FadeIn>
    </Container>
  );
}
