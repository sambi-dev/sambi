import { cn } from '@yocxo/ui';
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  UpworkIcon,
  XIcon,
} from '@yocxo/ui/icons';

import { socialConfig } from '#/config/social';

interface SocialMediaProfile {
  title: string;
  href: string;
  icon: (props: React.ComponentPropsWithoutRef<'svg'>) => JSX.Element;
}

export const socialMediaProfiles: SocialMediaProfile[] = [
  {
    title: 'Upwork',
    href: socialConfig.links.upworkAgency,
    icon: UpworkIcon,
  },
  {
    title: 'GitHub',
    href: socialConfig.links.github,
    icon: GitHubIcon,
  },
  {
    title: 'Facebook',
    href: socialConfig.links.facebook,
    icon: FacebookIcon,
  },
  {
    title: 'Instagram',
    href: socialConfig.links.instagram,
    icon: InstagramIcon,
  },
  {
    title: 'Twitter',
    href: socialConfig.links.twitter,
    icon: XIcon,
  },
  {
    title: 'LinkedIn',
    href: socialConfig.links.linkedIn,
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
        'flex gap-x-6',
        invert ? 'text-[#28282A]' : 'text-secondary-foreground',
        className,
      )}
    >
      {socialMediaProfiles.map((socialMediaProfile) => (
        <li key={socialMediaProfile.title}>
          <a
            href={socialMediaProfile.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit Yo! CXO's ${socialMediaProfile.title} profile in a new window`}
            className={cn(
              'transition',
              invert
                ? 'hover:text-[#28282A]/80'
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
