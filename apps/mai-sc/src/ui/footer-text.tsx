import React from 'react';

import { cn } from '@yocxo/ui';

import { siteConfig } from '#/config/site';

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <>
      <div
        className={cn(
          'px-2 text-center text-xs text-secondary-foreground/80',
          className,
        )}
        {...props}
      >
        Mai is to help inspire you not replace you.
        <p className=" mt-2 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
        </p>
      </div>
    </>
  );
}
