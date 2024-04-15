import Link from 'next/link';

import { Logo } from '@yocxo/ui/logo';
import { ThemeToggle } from '@yocxo/ui/theme';

import { siteConfig } from '#/config/site';
import { FadeIn } from '#/ui/fade-in';
import { FooterNav } from '#/ui/layout/footer/footer-nav';
import SystemStatusWidget from '#/ui/layout/footer/system-status';
import { Container } from '#/ui/page-container';
import { SocialMedia } from '#/ui/social-media';

export function Footer() {
  return (
    <div className="mt-24 border-t sm:mt-32 lg:mt-40">
      <Container as="footer" className="mt-24 w-full">
        <FadeIn>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="max-w-md space-y-8">
              <Link href="/" aria-label="Home">
                <Logo className="h-12" fillOnHover />
              </Link>
              <p className="text-pretty text-sm leading-6 text-muted-foreground">
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
          <div className="mb-20 mt-24 flex flex-col items-center gap-y-4 border-t pt-12 md:flex-row md:flex-wrap md:justify-between md:gap-x-6 md:gap-y-0">
            <p className="font-mono text-xs uppercase text-muted-foreground">
              © {new Date().getFullYear()} {siteConfig.name}. All Rights
              Reserved.{' '}
            </p>
            <SystemStatusWidget />
            <div className="md:items-end">
              <ThemeToggle />
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
