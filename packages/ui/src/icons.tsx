import * as React from 'react';

import { cn } from '.';

function AlertTriangleIcon({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M12 13.0001V9.0001M12 16.3751V16.3762M10.6101 3.28373C11.4989 2.90542 12.5011 2.90542 13.3899 3.28373C16.0413 4.41217 22.3045 14.4218 22.1211 17.0972C22.0491 18.1459 21.5294 19.1112 20.6973 19.7421C18.4845 21.4193 5.51548 21.4193 3.30278 19.7421C2.47058 19.1112 1.9509 18.1459 1.87895 17.0972C1.69539 14.4218 7.95863 4.41217 10.6101 3.28373Z"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowDownIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 25 24"
      fill="none"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M6.5 14.1696C8.05556 16.273 9.87278 18.1622 11.9057 19.7905C12.0801 19.9302 12.29 20 12.5 20M18.5 14.1696C16.9444 16.273 15.1272 18.1622 13.0943 19.7905C12.9199 19.9302 12.71 20 12.5 20M12.5 20L12.5 4"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowElbowIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M200 32v144a8 8 0 0 1-8 8H67.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L67.31 168H184V32a8 8 0 0 1 16 0Z"
        stroke="currentcolor"
        strokeWidth="6"
      />
    </svg>
  );
}

function ArrowRightIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 24"
      fill="none"
      aria-hidden="true"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M15.6696 6C17.773 7.55556 19.6622 9.37278 21.2905 11.4057C21.4302 11.5801 21.5 11.79 21.5 12M15.6696 18C17.773 16.4444 19.6622 14.6272 21.2905 12.5943C21.4302 12.4199 21.5 12.21 21.5 12M21.5 12H3.5"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 24"
      fill="none"
      aria-hidden="true"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M6.5 9.8304C8.05556 7.727 9.87278 5.83783 11.9057 4.20952C12.0801 4.06984 12.29 4 12.5 4M18.5 9.8304C16.9444 7.727 15.1272 5.83783 13.0943 4.20952C12.9199 4.06984 12.71 4 12.5 4M12.5 4V20"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpRightIcon({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 24"
      fill="none"
      aria-hidden="true"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M18.0152 14.8992L14.6903 11.2238L6.61604 19.298C6.22552 19.6885 5.59235 19.6885 5.20183 19.298C4.8113 18.9075 4.8113 18.2743 5.20183 17.8838L13.2761 9.80958L9.60064 6.48464C9.31395 6.2253 9.20243 5.82394 9.31423 5.45388C9.42602 5.08381 9.7411 4.81133 10.1234 4.75409C12.7958 4.35396 15.5033 4.30134 18.1783 4.59695C18.631 4.64697 19.0382 4.85008 19.344 5.15588C19.6498 5.46168 19.8529 5.86887 19.9029 6.32155C20.1985 8.99652 20.1459 11.704 19.7458 14.3764C19.6885 14.7587 19.416 15.0738 19.046 15.1856C18.6759 15.2974 18.2745 15.1859 18.0152 14.8992Z"
        fill="currentcolor"
      />
    </svg>
  );
}

function BurgerMenuIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M4 16H20M4 8H20"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M5.5 12.5L10.0168 17.7247L10.4177 17.0238C12.5668 13.2658 15.541 10.0448 19.1161 7.60354L20 7"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M8.5 10.1392C9.56206 11.601 10.8071 12.9104 12.2021 14.0334C12.3774 14.1744 12.6226 14.1744 12.7979 14.0334C14.1929 12.9104 15.4379 11.601 16.5 10.1392"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M10.5 8.13916C11.9619 9.20122 13.2713 10.4462 14.3942 11.8413C14.5353 12.0165 14.5353 12.2618 14.3942 12.437C13.2713 13.8321 11.9619 15.0771 10.5 16.1392"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronSortIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M16.5 9C15.4379 7.53812 14.1929 6.22872 12.7979 5.1058C12.6226 4.96473 12.3774 4.96473 12.2021 5.1058C10.8071 6.22872 9.56206 7.53812 8.5 9M8.5 15C9.56206 16.4619 10.8071 17.7713 12.2021 18.8942C12.3774 19.0353 12.6226 19.0353 12.7979 18.8942C14.1929 17.7713 15.4379 16.4619 16.5 15"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronUpIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M8.5 14C9.56206 12.5381 10.8071 11.2287 12.2021 10.1058C12.3774 9.96473 12.6226 9.96473 12.7979 10.1058C14.1929 11.2287 15.4379 12.5381 16.5 14"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CocoIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M23.307 13.886c-0.105 0.501 -0.302 0.97 -0.562 1.41 -0.603 1.024 -1.457 1.768 -2.541 2.249 -0.624 0.277 -1.25 0.548 -1.875 0.82 -0.042 0.019 -0.078 0.044 -0.11 0.077 -0.636 0.66 -1.274 1.318 -1.911 1.977 -0.268 0.278 -2.258 2.554 -2.526 2.832 -4.075 0.664 -7.627 -0.472 -10.368 -2.315 -0.793 -0.589 -1.665 -1.202 -2.821 -2.589 0.036 0 0.632 -0.879 0.648 -0.9 0.401 -0.558 0.807 -1.113 1.2 -1.677 0.462 -0.661 0.913 -1.33 1.396 -1.976 0.148 -0.199 0.3 -0.396 0.439 -0.601 0.266 -0.392 0.416 -0.825 0.416 -1.303 0 -0.119 -0.01 -0.239 -0.014 -0.358 -0.017 -0.448 -0.032 -0.897 -0.05 -1.345 -0.004 -0.09 -0.007 -0.183 -0.028 -0.269 -0.18 -0.717 -0.366 -1.432 -0.549 -2.148 -0.041 -0.159 -0.082 -0.319 -0.111 -0.48 -0.017 -0.091 -0.008 -0.186 -0.014 -0.278 -0.035 -0.509 -0.074 -1.019 -0.106 -1.528 -0.024 -0.379 -0.068 -0.756 -0.131 -1.129a10.238 10.238 0 0 0 -0.455 -1.742c-0.169 -0.475 -0.366 -0.937 -0.598 -1.385 -0.018 -0.035 -0.031 -0.076 -0.036 -0.115 -0.024 -0.201 0.101 -0.509 0.403 -0.549 0.077 -0.01 0.16 -0.013 0.234 0.005 0.195 0.046 0.389 0.097 0.578 0.162 0.413 0.14 0.758 0.383 1.017 0.735 0.288 0.393 0.566 0.792 0.843 1.192 0.406 0.586 0.893 1.093 1.454 1.53 0.308 0.239 0.632 0.453 0.969 0.649 0.474 0.276 0.945 0.558 1.418 0.837 0.279 0.164 0.635 0.141 0.873 -0.057 0.313 -0.261 0.663 -0.458 1.041 -0.605a3.936 3.936 0 0 1 1.019 -0.247c0.288 -0.031 0.576 -0.033 0.864 -0.001 0.185 0.02 0.371 0.038 0.556 0.048 0.405 0.022 0.802 0.09 1.185 0.22 1.008 0.342 1.818 0.954 2.448 1.808 0.189 0.256 0.349 0.529 0.484 0.818 0.016 0.033 0.039 0.067 0.067 0.09 0.31 0.254 0.622 0.506 0.934 0.758 0.024 0.019 0.051 0.036 0.08 0.046 0.251 0.092 0.502 0.184 0.753 0.274 0.566 0.201 1.095 0.471 1.584 0.82 0.349 0.25 0.662 0.539 0.963 0.843 0.59 0.597 0.936 1.309 1.022 2.147 0.043 0.423 0.005 0.841 -0.082 1.252"
        fill="currentcolor"
      />
    </svg>
  );
}

function CloseMenuIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M6 18L12 12M12 12L18 6M12 12L6 6M12 12L18 18"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CopiedIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M16.9018 16.9018C17.1375 16.8669 17.3474 16.8195 17.5451 16.7553C19.0673 16.2607 20.2607 15.0673 20.7553 13.5451C21 12.7919 21 11.8613 21 10C21 8.13872 21 7.20808 20.7553 6.45492C20.2607 4.93273 19.0673 3.73931 17.5451 3.24472C16.7919 3 15.8613 3 14 3C12.1387 3 11.2081 3 10.4549 3.24472C8.93273 3.73931 7.73931 4.93273 7.24472 6.45492C7.18049 6.65258 7.13312 6.86246 7.09819 7.09819M16.9018 16.9018C17 16.2393 17 15.3728 17 14C17 12.1387 17 11.2081 16.7553 10.4549C16.2607 8.93273 15.0673 7.73931 13.5451 7.24472C12.7919 7 11.8613 7 10 7C8.6272 7 7.76066 7 7.09819 7.09819M16.9018 16.9018C16.8669 17.1375 16.8195 17.3474 16.7553 17.5451C16.2607 19.0673 15.0673 20.2607 13.5451 20.7553C12.7919 21 11.8613 21 10 21C8.13872 21 7.20808 21 6.45492 20.7553C4.93273 20.2607 3.73931 19.0673 3.24472 17.5451C3 16.7919 3 15.8613 3 14C3 12.1387 3 11.2081 3.24472 10.4549C3.73931 8.93273 4.93273 7.73931 6.45492 7.24472C6.65258 7.18049 6.86246 7.13312 7.09819 7.09819M7 14.2587L9.0362 16.2927C10.0155 14.5802 11.3709 13.1125 13 12"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CopyIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M16.9018 16.9018C17.1375 16.8669 17.3474 16.8195 17.5451 16.7553C19.0673 16.2607 20.2607 15.0673 20.7553 13.5451C21 12.7919 21 11.8613 21 10C21 8.13872 21 7.20808 20.7553 6.45492C20.2607 4.93273 19.0673 3.73931 17.5451 3.24472C16.7919 3 15.8613 3 14 3C12.1387 3 11.2081 3 10.4549 3.24472C8.93273 3.73931 7.73931 4.93273 7.24472 6.45492C7.18049 6.65258 7.13312 6.86246 7.09819 7.09819M16.9018 16.9018C17 16.2393 17 15.3728 17 14C17 12.1387 17 11.2081 16.7553 10.4549C16.2607 8.93273 15.0673 7.73931 13.5451 7.24472C12.7919 7 11.8613 7 10 7C8.6272 7 7.76066 7 7.09819 7.09819M16.9018 16.9018C16.8669 17.1375 16.8195 17.3474 16.7553 17.5451C16.2607 19.0673 15.0673 20.2607 13.5451 20.7553C12.7919 21 11.8613 21 10 21C8.13872 21 7.20808 21 6.45492 20.7553C4.93273 20.2607 3.73931 19.0673 3.24472 17.5451C3 16.7919 3 15.8613 3 14C3 12.1387 3 11.2081 3.24472 10.4549C3.73931 8.93273 4.93273 7.73931 6.45492 7.24472C6.65258 7.18049 6.86246 7.13312 7.09819 7.09819"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DiscordIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M11 5.99991H13.6929C13.8829 5.99991 14.0565 5.89225 14.1409 5.72204L14.8191 4.35434C14.9221 4.14663 15.1533 4.03755 15.3761 4.10146C16.0315 4.2894 17.4069 4.74283 18.5042 5.49991C22.3682 8.39714 22.0078 14.8896 21.9786 16.2608C21.9768 16.3445 21.9554 16.427 21.9142 16.4999C19.9311 19.9999 16.491 19.9999 16.491 19.9999L15.3248 17.5737M13 5.99991H10.3119C10.1224 5.99991 9.94909 5.8927 9.86449 5.72306L9.18127 4.35311C9.07799 4.14602 8.84722 4.03743 8.62476 4.10121C7.96978 4.28899 6.59358 4.74248 5.49577 5.49991C1.6318 8.39714 1.99218 14.8896 2.0214 16.2608C2.02319 16.3445 2.04456 16.427 2.08583 16.4999C4.06894 19.9999 7.50897 19.9999 7.50897 19.9999L8.67893 17.5733M7.00128 16.9999C7.60094 17.2247 8.15567 17.4158 8.67893 17.5733M17.0038 16.9999C16.4036 17.2249 15.8485 17.4162 15.3248 17.5737M8.67893 17.5733C11.1232 18.3086 12.8808 18.3088 15.3248 17.5737M10.0021 11.9999C10.0021 12.5522 9.55422 12.9999 9.00179 12.9999C8.44937 12.9999 8.00154 12.5522 8.00154 11.9999C8.00154 11.4476 8.44937 10.9999 9.00179 10.9999C9.55422 10.9999 10.0021 11.4476 10.0021 11.9999ZM16.0036 11.9999C16.0036 12.5522 15.5558 12.9999 15.0033 12.9999C14.4509 12.9999 14.0031 12.5522 14.0031 11.9999C14.0031 11.4476 14.4509 10.9999 15.0033 10.9999C15.5558 10.9999 16.0036 11.4476 16.0036 11.9999Z"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DownloadIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M3 15C3 17.7614 5.23858 20 8 20H16C18.7614 20 21 17.7614 21 15M9 12.1885C9.74024 13.1755 10.599 14.0668 11.5564 14.8426C11.6859 14.9475 11.843 15 12 15M15 12.1885C14.2598 13.1755 13.401 14.0668 12.4436 14.8426C12.3141 14.9475 12.157 15 12 15M12 15V4"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DotFilledIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FacebookIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M14.5964 8C13.3362 8 12.7062 8 12.2249 8.28027C11.8015 8.5268 11.4573 8.92018 11.2416 9.404C10.9964 9.9541 10.9964 10.6741 10.9964 12.1143V13M10.9964 13V20.999M10.9964 13H8.74641M10.9964 13H14.7464M10.9964 20.999V21M10.9964 20.999C11.3072 21 11.6408 21 12 21C14.5136 21 15.7704 21 16.7808 20.6465C18.5904 20.0132 20.0132 18.5904 20.6465 16.7808C21 15.7704 21 14.5136 21 12C21 9.48639 21 8.22958 20.6465 7.21924C20.0132 5.40959 18.5904 3.98676 16.7808 3.35354C15.7704 3 14.5136 3 12 3C9.48639 3 8.22958 3 7.21924 3.35354C5.40959 3.98676 3.98676 5.40959 3.35354 7.21924C3 8.22958 3 9.48639 3 12C3 14.5136 3 15.7704 3.35354 16.7808C3.98676 18.5904 5.40959 20.0132 7.21924 20.6465C8.08519 20.9495 9.1322 20.9928 10.9964 20.999Z"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function GoogleIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M18.0543 4.51753C16.5373 3.46708 14.6867 2.8501 12.6894 2.8501C7.54259 2.8501 3.25 6.78097 3.25 12C3.25 17.0534 7.43253 21.0996 12.6894 21.0996C18.0543 21.0996 21.4965 16.9741 21.2362 12H12.6894"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitHubIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M10 14.9993C9.34732 15.6987 8.98919 16.6227 9 17.5793V20.9993M14 14.9993C14.6527 15.6987 15.0108 16.6227 15 17.5793V20.9993M9 19.0493C8.10549 19.4055 7.13532 19.5294 6.18 19.4093C4.66 18.8893 5.06 17.5093 4.28 16.9393C3.90518 16.6713 3.46037 16.5184 3 16.4993M19 9.74927C19 12.7493 17.05 14.9993 12 14.9993C6.95 14.9993 5 12.7493 5 9.74927C4.9753 8.70844 5.20893 7.67772 5.68 6.74927C5.34 5.27927 5.47 3.46927 6.2 3.10927C6.93 2.74927 8.47 3.40927 9.74 4.25927C10.486 4.12615 11.2422 4.05922 12 4.05927C12.7572 4.05262 13.5134 4.11285 14.26 4.23927C15.53 3.38927 17.14 2.75927 17.8 3.08927C18.46 3.41927 18.66 5.25927 18.32 6.72927C18.7943 7.66371 19.028 8.70171 19 9.74927Z"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function InstagramIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M17 6.99945H17.01M3 12C3 9.48639 3 8.22958 3.35354 7.21924C3.98676 5.40959 5.40959 3.98676 7.21924 3.35354C8.22958 3 9.48639 3 12 3C14.5136 3 15.7704 3 16.7808 3.35354C18.5904 3.98676 20.0132 5.40959 20.6465 7.21924C21 8.22958 21 9.48639 21 12C21 14.5136 21 15.7704 20.6465 16.7808C20.0132 18.5904 18.5904 20.0132 16.7808 20.6465C15.7704 21 14.5136 21 12 21C9.48639 21 8.22958 21 7.21924 20.6465C5.40959 20.0132 3.98676 18.5904 3.35354 16.7808C3 15.7704 3 14.5136 3 12ZM15.7775 11.4398C15.8953 12.2344 15.7596 13.0458 15.3896 13.7588C15.0197 14.4718 14.4344 15.0499 13.7169 15.4111C12.9994 15.7722 12.1863 15.8979 11.3933 15.7703C10.6003 15.6427 9.86768 15.2683 9.29971 14.7003C8.73174 14.1323 8.35732 13.3997 8.22972 12.6067C8.10211 11.8137 8.22781 11.0006 8.58893 10.2831C8.95005 9.56564 9.52822 8.98031 10.2412 8.61036C10.9542 8.24042 11.7656 8.1047 12.5601 8.22253C13.3706 8.3427 14.1209 8.72036 14.7003 9.29971C15.2796 9.87907 15.6573 10.6294 15.7775 11.4398Z"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function LinkedInIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M17 17V13.5C17 12.1193 15.8807 11 14.5 11C13.1193 11 12 12.1193 12 13.5M12 13.5V17M12 13.5V10.5M8 10.5V17M8 7V7.01M11 21H13C15.8003 21 17.2004 21 18.27 20.455C19.2108 19.9757 19.9757 19.2108 20.455 18.27C21 17.2004 21 15.8003 21 13V11C21 8.19974 21 6.79961 20.455 5.73005C19.9757 4.78924 19.2108 4.02433 18.27 3.54497C17.2004 3 15.8003 3 13 3H11C8.19974 3 6.79961 3 5.73005 3.54497C4.78924 4.02433 4.02433 4.78924 3.54497 5.73005C3 6.79961 3 8.19974 3 11V13C3 15.8003 3 17.2004 3.54497 18.27C4.02433 19.2108 4.78924 19.9757 5.73005 20.455C6.79961 21 8.19974 21 11 21Z"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function MenuIcon({
  open,
  className,
  ...props
}: React.ComponentProps<'svg'> & {
  open: boolean;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d={open ? 'M17 7 7 17M7 7l10 10' : 'm15 16-3 3-3-3M15 8l-3-3-3 3'}
      />
    </svg>
  );
}

function MessageIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 25 24"
      fill="none"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M8.5 10H16.5M8.5 14H12.5M21.5 12C21.5 16.9706 17.4706 21 12.5 21C12.0683 21 11.6437 20.9696 11.2283 20.9108C10.0246 20.7406 9.42273 20.6555 9.26429 20.6433C9.0069 20.6234 9.09919 20.6266 8.84105 20.6286C8.68217 20.6298 8.50106 20.6428 8.1393 20.6686L5.98597 20.8224C5.12856 20.8837 4.69982 20.9143 4.37922 20.7623C4.09778 20.6289 3.87113 20.4022 3.7377 20.1208C3.5857 19.8002 3.61632 19.3715 3.67757 18.514L3.83138 16.3607C3.85723 15.9988 3.87015 15.8179 3.87139 15.6589C3.87339 15.4008 3.87659 15.4931 3.85674 15.2357C3.84452 15.0773 3.7594 14.4754 3.58915 13.2717C3.53039 12.8563 3.5 12.4317 3.5 12C3.5 7.02944 7.52944 3 12.5 3C17.4706 3 21.5 7.02944 21.5 12Z"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MoonIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M20.9999 11.9659C19.8486 13.7891 17.8157 15.0001 15.5 15.0001C11.9101 15.0001 9 12.09 9 8.50012C9 6.18432 10.2111 4.15137 12.0344 3.00006C12.0229 3.00002 12.0115 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.9886 21 11.9773 20.9999 11.9659Z"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function OpenAiIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn('size-4', className)}
      {...props}
    >
      <title>OpenAI icon</title>
      <path
        d="M10.2686 12.9612L7.971 11.5826C7.36859 11.2212 6.99999 10.5701 6.99999 9.86762V7.98057M10.2686 12.9612L11.9667 13.98M10.2686 12.9612L10.3019 10.9812M11.9667 13.98L9.62403 15.2806C9.0098 15.6215 8.26171 15.6152 7.6533 15.264L6.01903 14.3204M11.9667 13.98L13.6981 13.0189M13.6981 13.0189L13.653 15.6979C13.6412 16.4003 13.2617 17.0451 12.6533 17.3963L11.019 18.3399M13.6981 13.0189L13.7314 11.0389M13.7314 11.0389L16.029 12.4174C16.6314 12.7788 17 13.4299 17 14.1324V16.0195M13.7314 11.0389L12.0333 10.02M12.0333 10.02L14.376 8.71953C14.9902 8.37855 15.7383 8.38484 16.3467 8.7361L17.981 9.67964M12.0333 10.02L10.3019 10.9812M10.3019 10.9812L10.347 8.30211C10.3588 7.59968 10.7383 6.95496 11.3467 6.60369L12.981 5.66017M6.99999 7.98057C5.6193 7.37832 3.97674 7.89673 3.20577 9.23209C2.37734 10.667 2.86897 12.5017 4.30385 13.3302L6.01903 14.3204M6.99999 7.98057V6C6.99999 4.34315 8.34313 3 9.99999 3C11.5419 3 12.8122 4.16332 12.981 5.66017M6.01903 14.3204C4.80715 15.215 4.43483 16.8967 5.2058 18.2321C6.03423 19.6669 7.869 20.1586 9.30388 19.3301L11.019 18.3399M11.019 18.3399C11.1878 19.8367 12.4581 21 14 21C15.6568 21 17 19.6569 17 18V16.0195M17 16.0195C18.3807 16.6218 20.0233 16.1034 20.7942 14.768C21.6227 13.3331 21.131 11.4983 19.6961 10.6699L17.981 9.67964M17.981 9.67964C19.1929 8.78507 19.5652 7.10334 18.7943 5.76796C17.9658 4.33308 16.1311 3.84146 14.6962 4.66989L12.981 5.66017"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlusIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M12 19V12M12 12V5M12 12L5 12M12 12L19 12"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShareIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      fill="none"
      className={cn('size-4', className)}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M21 13V14.6C21 16.84 21 17.96 20.564 18.816C20.1805 19.5686 19.5686 20.1805 18.816 20.564C17.96 21 16.84 21 14.6 21H9.4C7.16 21 6.04 21 5.184 20.564C4.43139 20.1805 3.81949 19.5686 3.436 18.816C3 17.96 3 16.84 3 14.6V13M8 6.856C8.98262 5.50734 10.1276 4.28481 11.409 3.216C11.5745 3.07685 11.7838 3.00038 12 3M12 3C12.2162 3.00038 12.4255 3.07685 12.591 3.216C13.8724 4.28482 15.0174 5.50735 16 6.856M12 3V16"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SidebarIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M9 20.989C9.57703 21 10.2365 21 11 21H13C15.8003 21 17.2004 21 18.27 20.455C19.2108 19.9757 19.9757 19.2108 20.455 18.27C21 17.2004 21 15.8003 21 13V11C21 8.19974 21 6.79961 20.455 5.73005C19.9757 4.78924 19.2108 4.02433 18.27 3.54497C17.2004 3 15.8003 3 13 3H11C10.2365 3 9.57703 3 9 3.01105M9 20.989C7.46078 20.9595 6.50797 20.8514 5.73005 20.455C4.78924 19.9757 4.02433 19.2108 3.54497 18.27C3 17.2004 3 15.8003 3 13V11C3 8.19974 3 6.79961 3.54497 5.73005C4.02433 4.78924 4.78924 4.02433 5.73005 3.54497C6.50797 3.14859 7.46078 3.04052 9 3.01105M9 20.989L9 3.01105"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SpinnerIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837" />
    </svg>
  );
}

function StarIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M13.542 2.41641C12.5891 1.8612 11.4112 1.8612 10.4583 2.41641C9.94638 2.71465 9.59554 3.21145 9.30023 3.7204C9.00069 4.23665 8.67062 4.9284 8.26602 5.77633L8.24672 5.81677C7.97327 6.38983 7.90927 6.50492 7.83773 6.58824C7.72967 6.71411 7.59365 6.81294 7.44055 6.87681C7.33919 6.9191 7.20997 6.9444 6.58045 7.02739L6.53602 7.03324C5.60456 7.15601 4.84467 7.25617 4.26113 7.38152C3.68584 7.5051 3.10494 7.68525 2.66311 8.07993C1.84059 8.81467 1.47661 9.93489 1.71017 11.0128C1.83563 11.5918 2.1997 12.079 2.59249 12.5171C2.99089 12.9615 3.54676 13.4891 4.22814 14.1359L4.2607 14.1668C4.72121 14.604 4.81088 14.7004 4.86803 14.7942C4.95434 14.9359 5.0063 15.0958 5.01974 15.2611C5.02863 15.3706 5.01277 15.5013 4.89716 16.1257L4.88899 16.1697C4.71792 17.0935 4.57836 17.8472 4.51725 18.4409C4.45701 19.0262 4.44883 19.6344 4.68766 20.1765C5.13227 21.1858 6.08518 21.8782 7.18248 21.9891C7.77191 22.0487 8.34776 21.853 8.88582 21.6149C9.43159 21.3733 10.1052 21.0076 10.9309 20.5595L10.9703 20.5381C11.5284 20.2352 11.6478 20.1797 11.7547 20.1544C11.9161 20.116 12.0842 20.116 12.2456 20.1544C12.3525 20.1797 12.4719 20.2352 13.03 20.5381L13.0694 20.5595C13.895 21.0076 14.5687 21.3733 15.1145 21.6149C15.6526 21.853 16.2284 22.0487 16.8178 21.9891C17.9151 21.8782 18.868 21.1858 19.3127 20.1765C19.5515 19.6344 19.5433 19.0262 19.4831 18.4409C19.422 17.8472 19.2824 17.0936 19.1113 16.1698L19.1032 16.1257C18.9875 15.5013 18.9717 15.3706 18.9806 15.2611C18.994 15.0958 19.046 14.9359 19.1323 14.7942C19.1894 14.7004 19.2791 14.604 19.7396 14.1668L19.772 14.1361C20.4535 13.4892 21.0094 12.9615 21.4078 12.5171C21.8006 12.079 22.1647 11.5918 22.2901 11.0128C22.5237 9.93489 22.1597 8.81467 21.3372 8.07993C20.8954 7.68525 20.3145 7.5051 19.7392 7.38152C19.1556 7.25617 18.3958 7.15602 17.4643 7.03324L17.4199 7.02739C16.7903 6.9444 16.6611 6.9191 16.5598 6.87681C16.4067 6.81294 16.2706 6.71411 16.1626 6.58824C16.091 6.50492 16.027 6.38983 15.7536 5.81677L15.7343 5.77632C15.3297 4.9284 14.9996 4.23664 14.7001 3.7204C14.4048 3.21145 14.0539 2.71465 13.542 2.41641Z"
        fill="currentcolor"
      />
    </svg>
  );
}

function SunIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M12 23V22M4.22183 19.7782L4.92893 19.0711M1 12H2M4.22183 4.22183L4.92893 4.92893M12 2V1M19.0711 4.92893L19.7782 4.22183M22 12H23M19.0711 19.0711L19.7782 19.7782M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12Z"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrashIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M16 6L14.8944 3.78885C14.3463 2.69253 13.2257 2 12 2C10.7743 2 9.65374 2.69253 9.10557 3.78885L8 6M4 6H20M6 6H18V15C18 16.8638 18 17.7957 17.6955 18.5307C17.2895 19.5108 16.5108 20.2895 15.5307 20.6955C14.7956 21 13.8638 21 12 21C10.1362 21 9.20435 21 8.46927 20.6955C7.48915 20.2895 6.71046 19.5108 6.30448 18.5307C6 17.7957 6 16.8638 6 15V6Z"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UpworkIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56.7 56.7"
      aria-hidden="true"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.8,24.6c-2.8,0-3.7,2.7-3.9,4.3v0.1l-0.4,1.5c1.2,1,2.7,1.7,4.2,1.7c2,0,3.8-1.7,3.9-3.9C42.6,26.3,40.9,24.6,38.8,24.6   z"
      />
      <path
        d="M28.9,3.7C15.2,3.7,4.1,14.8,4.1,28.5c0,13.7,11.1,24.8,24.8,24.8c13.7,0,24.8-11.1,24.8-24.8C53.7,14.8,42.6,3.7,28.9,3.7   z M38.8,36.1c-2,0-3.7-0.6-5.2-1.5l-1.7,8H28l2.4-11c-1-1.4-2-3-2.7-4.5v1.7c0,4.1-3.3,7.4-7.3,7.4c-4,0-7.3-3.3-7.3-7.4v-10h3.8   v10c0,2,1.6,3.6,3.6,3.6c2,0,3.6-1.6,3.6-3.6v-10h3.8c0.8,2.5,2.1,5.5,3.8,8.2c1-3.8,3.8-6.1,7.3-6.1c4.1,0,7.5,3.4,7.5,7.5   C46.3,32.7,42.9,36.1,38.8,36.1z"
        fill="currentColor"
      />
    </svg>
  );
}

function UserIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 15H8C5.79086 15 4 16.7909 4 19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19C20 16.7909 18.2091 15 16 15Z"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UsersIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      fill="none"
      className={cn('size-4', className)}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M20.3946 21.0001H20.5C21.6046 21.0001 22.5 20.1047 22.5 19.0001C22.5 17.2332 21.3543 15.7338 19.7653 15.2044M16.404 3.48145C17.6524 4.15837 18.5 5.48025 18.5 7.00012C18.5 8.51999 17.6524 9.84187 16.404 10.5188M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7ZM6 15H13C15.2091 15 17 16.7909 17 19C17 20.1046 16.1046 21 15 21H4C2.89543 21 2 20.1046 2 19C2 16.7909 3.79086 15 6 15Z"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M18.6667 4L13.1404 10.3158M4.66672 20L10.5615 13.2632M13.1404 10.3158L9.30438 4.90023C9.0709 4.5706 8.95416 4.40579 8.80327 4.28671C8.66967 4.18126 8.5171 4.10237 8.35383 4.05429C8.16944 4 7.96747 4 7.56353 4H6.06276C5.39581 4 5.06234 4 4.88254 4.13843C4.726 4.25895 4.63097 4.44271 4.62311 4.64012C4.61407 4.86685 4.80682 5.13897 5.19233 5.68322L10.5615 13.2632M13.1404 10.3158L18.8078 18.3168C19.1933 18.861 19.386 19.1332 19.377 19.3599C19.3691 19.5573 19.2741 19.741 19.1176 19.8616C18.9378 20 18.6043 20 17.9373 20H16.4366C16.0326 20 15.8307 20 15.6463 19.9457C15.483 19.8976 15.3304 19.8187 15.1968 19.7133C15.046 19.5942 14.9292 19.4294 14.6957 19.0998L10.5615 13.2632"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export {
  AlertTriangleIcon,
  ArrowDownIcon,
  ArrowElbowIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowUpRightIcon,
  BurgerMenuIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronSortIcon,
  ChevronUpIcon,
  CocoIcon,
  CloseMenuIcon,
  CopiedIcon,
  CopyIcon,
  DiscordIcon,
  DotFilledIcon,
  DownloadIcon,
  FacebookIcon,
  GoogleIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MenuIcon,
  MessageIcon,
  MoonIcon,
  OpenAiIcon,
  PlusIcon,
  ShareIcon,
  SidebarIcon,
  SpinnerIcon,
  StarIcon,
  SunIcon,
  TrashIcon,
  UpworkIcon,
  UserIcon,
  UsersIcon,
  XIcon,
};
