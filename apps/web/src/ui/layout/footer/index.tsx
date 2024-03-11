import Link from 'next/link';

import { ThemeToggle } from '@sambi/ui/theme';

import { siteConfig } from '#/config/site';
import { FadeIn } from '#/ui/fade-in';
import { Logo } from '#/ui/logo';
import { Container } from '#/ui/page-container';
import { SocialMedia } from '#/ui/social-media';

import { FooterNav } from './footer-nav';

export function Footer() {
  return (
    <div className="mt-24 border-t sm:mt-32 lg:mt-40">
      <Container as="footer" className="mt-24 w-full">
        <FadeIn>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="max-w-md space-y-8">
              <Link href="/" aria-label="Home">
                <Logo className="h-16" fillOnHover />
              </Link>
              <p className="leading-6 text-muted-foreground">
                {siteConfig.description}
              </p>
              <div className="flex space-x-4">
                <SocialMedia />
              </div>
            </div>
            <div className="flex lg:justify-end">
              <FooterNav />
            </div>
          </div>
          <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t pt-12">
            <p className="font-mono text-sm text-primary">
              © {siteConfig.name}. All Rights Reserved.{' '}
              {new Date().getFullYear()}
            </p>
            <ThemeToggle />
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
