import { cn } from '@sambi/ui';

import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  UpworkIcon,
  XIcon,
} from '#/ui/shared/icons';

export const socialMediaProfiles = [
  {
    title: 'Upwork',
    href: 'https://www.upwork.com/agencies/425232908694130688/',
    icon: UpworkIcon,
  },
  {
    title: 'GitHub',
    href: 'https://github.com/srizvi/sambi',
    icon: GitHubIcon,
  },
  {
    title: 'Facebook',
    href: 'https://www.facebook.com/rebekahradicellc',
    icon: FacebookIcon,
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/rebekahradice/',
    icon: InstagramIcon,
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/rebekahradice',
    icon: XIcon,
  },
  {
    title: 'LinkedIn',
    href: 'https://twitter.com/rebekahradice',
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
