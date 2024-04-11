import React from 'react';

import { cn } from '@yocxo/ui';
import { DiscordIcon, GitHubIcon, XIcon } from '@yocxo/ui/icons';

import { siteConfig } from '#/config/site';
import { socialConfig } from '#/config/social';

import { MaiLogoIcon } from './logo';

interface FooterNavItem {
  name: string;
  href: string;
  external?: boolean;
  icon: React.ElementType;
  color?: string;
}

const navigation: FooterNavItem[] = [
  {
    name: 'Mai',
    href: '/research',
    icon: MaiLogoIcon,
    color: 'text-primary',
  },
  {
    name: 'Discord',
    href: socialConfig.links.discord,
    external: true,
    icon: DiscordIcon,
  },
  {
    name: 'GitHub',
    href: socialConfig.links.github,
    external: true,
    icon: GitHubIcon,
  },
  {
    name: 'Twitter',
    href: socialConfig.links.twitter,
    external: true,
    icon: XIcon,
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="z-50 border-t bg-card dark:bg-zinc-950">
      <div className="mx-auto w-full p-4 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              aria-label={`Navigate to ${item.name}${item.external ? ' in a new window' : ''}`}
              className="text-muted-foreground "
            >
              <span className="sr-only">{item.name}</span>
              <div className="text-muted-foreground hover:text-muted-foreground/80">
                <item.icon aria-hidden="true" className={cn(item.color)} />
              </div>
            </a>
          ))}
        </div>
        <div className="mt-4 md:order-1 md:mt-0">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
