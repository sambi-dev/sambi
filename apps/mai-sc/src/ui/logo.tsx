'use client';

import { cn } from '@yocxo/ui';

function MaiLogoIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 18 18"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-4', className)}
      {...props}
    >
      <defs>
        <path fill="currentColor" d="M2.572 4.734H15.43v8.548H2.572Zm0 0" />
      </defs>
      <path
        fill="currentColor"
        d="M5.782 10.071c0-2.917.036-1.829 3.22.01 3.184-1.839 3.22-2.927 3.22-.01v.147a3.07 3.07 0 0 0 3.063 3.063h.147V7.273c0-4.427-4.445-1.903-6.43-.898-1.986-1.006-6.43-3.529-6.43.898v6.008h.147a3.07 3.07 0 0 0 3.063-3.063Zm2.343 1.854c-.177.275.502 1.356.877 1.356.373 0 1.054-1.078.874-1.356-.087-.136-.481-.203-.874-.203s-.787.067-.877.203m0 0"
      />
    </svg>
  );
}

export { MaiLogoIcon };

export const LogoSpinner = () => (
  <div className="border border-background p-4">
    <MaiLogoIcon className="h-4 w-4 animate-spin" />
  </div>
);
