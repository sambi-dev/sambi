import { cn } from '@sambi/ui';

import { siteConfig } from '#/config/site';
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  UpworkIcon,
  XIcon,
} from '#/ui/shared/icons';

interface SocialMediaProfile {
  title: string;
  href: string;
  icon: (props: React.ComponentPropsWithoutRef<'svg'>) => JSX.Element;
}

export const socialMediaProfiles: SocialMediaProfile[] = [
  {
    title: 'Upwork',
    href: siteConfig.links.upworkAgency,
    icon: UpworkIcon,
  },
  {
    title: 'GitHub',
    href: siteConfig.links.github,
    icon: GitHubIcon,
  },
  {
    title: 'Facebook',
    href: siteConfig.links.facebook,
    icon: FacebookIcon,
  },
  {
    title: 'Instagram',
    href: siteConfig.links.instagram,
    icon: InstagramIcon,
  },
  {
    title: 'Twitter',
    href: siteConfig.links.twitter,
    icon: XIcon,
  },
  {
    title: 'LinkedIn',
    href: siteConfig.links.linkedIn,
    icon: LinkedInIcon,
  },
];

export function SocialMedia({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <ul
      className={cn(
        'flex gap-x-10',
        invert ? 'text-white' : 'text-secondary-foreground',
        className,
      )}
    >
      {socialMediaProfiles.map((socialMediaProfile) => (
        <li key={socialMediaProfile.title}>
          <a
            href={socialMediaProfile.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit sambi's ${socialMediaProfile.title} profile in a new window`}
            className={cn(
              'transition',
              invert
                ? 'hover:text-white/80'
                : 'hover:text-secondary-foreground/80',
            )}
          >
            <socialMediaProfile.icon className="h-6 w-6 fill-current" />
          </a>
        </li>
      ))}
    </ul>
  );
}
