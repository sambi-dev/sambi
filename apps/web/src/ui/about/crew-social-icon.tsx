import React from 'react';
import Link from 'next/link';

interface SocialMediaIconProps {
  url?: string;
  icon: React.ReactNode;
  label: string;
}

const CrewSocialIcon = ({ url, icon, label }: SocialMediaIconProps) => {
  if (!url) return null;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground transition duration-200 hover:text-foreground"
      aria-label={label}
    >
      <span className="sr-only">{label}</span>
      {icon}
    </Link>
  );
};

export default CrewSocialIcon;
