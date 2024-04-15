import * as React from 'react';

import { cn } from '@yocxo/ui';

function AlertTriangleIcon({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M12 13V9m0 7.375v.001M10.61 3.284a3.546 3.546 0 0 1 2.78 0c2.651 1.128 8.915 11.138 8.731 13.813a3.63 3.63 0 0 1-1.424 2.645c-2.212 1.677-15.182 1.677-17.394 0a3.63 3.63 0 0 1-1.424-2.645c-.184-2.675 6.08-12.685 8.731-13.813Z"
        stroke="currentcolor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function ArrowDownIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
      viewBox="0 0 25 24"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M6.5 14.17a30.23 30.23 0 0 0 5.406 5.62c.174.14.384.21.594.21m6-5.83a30.232 30.232 0 0 1-5.406 5.62.949.949 0 0 1-.594.21m0 0V4"
        stroke="currentcolor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function ArrowElbowIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
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

function ArrowLeftIcon({ className, ...props }: React.ComponentProps<'svg'>) {
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
        d="M10.33 6a30.23 30.23 0 0 0-5.62 5.406.949.949 0 0 0-.21.594m5.83 6a30.233 30.233 0 0 1-5.62-5.406A.949.949 0 0 1 4.5 12m0 0h16"
        stroke="currentcolor"
        strokeWidth="1.75"
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
        d="M15.67 6a30.23 30.23 0 0 1 5.62 5.406c.14.174.21.384.21.594m-5.83 6a30.232 30.232 0 0 0 5.62-5.406.949.949 0 0 0 .21-.594m0 0h-18"
        stroke="currentcolor"
        strokeWidth="1.75"
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
        d="M6.5 9.83a30.23 30.23 0 0 1 5.406-5.62A.949.949 0 0 1 12.5 4m6 5.83a30.233 30.233 0 0 0-5.406-5.62A.949.949 0 0 0 12.5 4m0 0v16"
        stroke="currentcolor"
        strokeWidth="1.75"
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
        d="M10.499 5.516a30.23 30.23 0 0 1 7.796-.152c.223.024.42.123.569.272m.12 8.365a30.23 30.23 0 0 0 .152-7.797.948.948 0 0 0-.272-.568m0 0L6.136 18.364"
        stroke="currentcolor"
        strokeWidth="1.75"
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
      <path d="M4 16h16M4 8h16" stroke="currentcolor" strokeWidth="1.75" />
    </svg>
  );
}

function ChatBubbleTypingIcon({
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
        d="M8.5 12h.01m3.99 0h.01m3.99 0h.01m4.178 3.737A9.002 9.002 0 0 0 21.5 12a9 9 0 1 0-17.911 1.272c.17 1.204.256 1.805.268 1.964.02.257.016.165.014.423 0 .16-.014.34-.04.702l-.153 2.153c-.062.857-.092 1.287.06 1.607.133.281.36.508.641.641.321.152.75.122 1.607.06l2.153-.153c.362-.026.543-.04.702-.04.258-.002.166-.006.423.014.159.012.761.097 1.964.267a9 9 0 0 0 9.46-5.173Z"
        stroke="currentcolor"
        strokeWidth="1.75"
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
        d="m5.5 12.5 4.517 5.225.4-.701a28.598 28.598 0 0 1 8.7-9.42L20 7"
        stroke="currentcolor"
        strokeWidth="1.75"
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
        d="M8.5 10.14a20.36 20.36 0 0 0 3.702 3.893c.175.141.42.141.596 0A20.361 20.361 0 0 0 16.5 10.14"
        stroke="currentcolor"
        strokeWidth="1.75"
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
        d="M10.5 8.14a20.351 20.351 0 0 1 3.894 3.701.472.472 0 0 1 0 .596 20.353 20.353 0 0 1-3.894 3.702"
        stroke="currentcolor"
        strokeWidth="1.75"
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
        d="M16.5 9a20.357 20.357 0 0 0-3.702-3.894.472.472 0 0 0-.596 0A20.355 20.355 0 0 0 8.5 9m0 6a20.354 20.354 0 0 0 3.702 3.894c.175.141.42.141.596 0A20.355 20.355 0 0 0 16.5 15"
        stroke="currentcolor"
        strokeWidth="1.75"
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
        d="M8.5 14a20.354 20.354 0 0 1 3.702-3.894.472.472 0 0 1 .596 0A20.355 20.355 0 0 1 16.5 14"
        stroke="currentcolor"
        strokeWidth="1.75"
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
        fill="currentcolor"
        d="M23.307 13.886c-.105.501-.302.97-.562 1.41a5.427 5.427 0 0 1-2.541 2.249c-.624.277-1.25.548-1.875.82a.353.353 0 0 0-.11.077c-.636.66-1.274 1.318-1.911 1.977-.268.278-2.258 2.554-2.526 2.832-4.075.664-7.627-.472-10.368-2.315-.793-.589-1.665-1.202-2.821-2.589.036 0 .632-.879.648-.9.401-.558.807-1.113 1.2-1.677.462-.661.913-1.33 1.396-1.976.148-.199.3-.396.439-.601.266-.392.416-.825.416-1.303 0-.119-.01-.239-.014-.358-.017-.448-.032-.897-.05-1.345-.004-.09-.007-.183-.028-.269-.18-.717-.366-1.432-.549-2.148a6.666 6.666 0 0 1-.111-.48c-.017-.091-.008-.186-.014-.278-.035-.509-.074-1.019-.106-1.528a10.928 10.928 0 0 0-.131-1.129 10.238 10.238 0 0 0-.455-1.742 11.08 11.08 0 0 0-.598-1.385.358.358 0 0 1-.036-.115c-.024-.201.101-.509.403-.549a.656.656 0 0 1 .234.005c.195.046.389.097.578.162.413.14.758.383 1.017.735.288.393.566.792.843 1.192a6.947 6.947 0 0 0 1.454 1.53c.308.239.632.453.969.649.474.276.945.558 1.418.837a.77.77 0 0 0 .873-.057 3.707 3.707 0 0 1 1.041-.605 3.936 3.936 0 0 1 1.019-.247c.288-.031.576-.033.864-.001.185.02.371.038.556.048.405.022.802.09 1.185.22 1.008.342 1.818.954 2.448 1.808.189.256.349.529.484.818a.272.272 0 0 0 .067.09c.31.254.622.506.934.758a.278.278 0 0 0 .08.046c.251.092.502.184.753.274a6.388 6.388 0 0 1 1.584.82c.349.25.662.539.963.843.59.597.936 1.309 1.022 2.147.043.423.005.841-.082 1.252"
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
        d="m6 18 6-6m0 0 6-6m-6 6L6 6m6 6 6 6"
        stroke="currentcolor"
        strokeWidth="1.75"
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
        d="M16.902 16.902c.235-.035.445-.082.643-.147a5 5 0 0 0 3.21-3.21C21 12.792 21 11.861 21 10s0-2.792-.245-3.545a5 5 0 0 0-3.21-3.21C16.792 3 15.861 3 14 3s-2.792 0-3.545.245a5 5 0 0 0-3.21 3.21 3.921 3.921 0 0 0-.147.643m9.804 9.804C17 16.239 17 15.372 17 14c0-1.861 0-2.792-.245-3.545a5 5 0 0 0-3.21-3.21C12.792 7 11.861 7 10 7c-1.373 0-2.24 0-2.902.098m9.804 9.804a3.923 3.923 0 0 1-.147.643 5 5 0 0 1-3.21 3.21C12.792 21 11.861 21 10 21s-2.792 0-3.545-.245a5 5 0 0 1-3.21-3.21C3 16.792 3 15.861 3 14s0-2.792.245-3.545a5 5 0 0 1 3.21-3.21c.198-.065.407-.112.643-.147M7 14.258l2.036 2.035A13.032 13.032 0 0 1 13 12"
        stroke="currentcolor"
        strokeWidth="1.75"
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
        d="M16.902 16.902c.235-.035.445-.082.643-.147a5 5 0 0 0 3.21-3.21C21 12.792 21 11.861 21 10s0-2.792-.245-3.545a5 5 0 0 0-3.21-3.21C16.792 3 15.861 3 14 3s-2.792 0-3.545.245a5 5 0 0 0-3.21 3.21 3.921 3.921 0 0 0-.147.643m9.804 9.804C17 16.239 17 15.372 17 14c0-1.861 0-2.792-.245-3.545a5 5 0 0 0-3.21-3.21C12.792 7 11.861 7 10 7c-1.373 0-2.24 0-2.902.098m9.804 9.804a3.923 3.923 0 0 1-.147.643 5 5 0 0 1-3.21 3.21C12.792 21 11.861 21 10 21s-2.792 0-3.545-.245a5 5 0 0 1-3.21-3.21C3 16.792 3 15.861 3 14s0-2.792.245-3.545a5 5 0 0 1 3.21-3.21c.198-.065.407-.112.643-.147"
        stroke="currentcolor"
        strokeWidth="1.75"
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
        d="M11 6h2.693a.5.5 0 0 0 .448-.278l.678-1.368a.476.476 0 0 1 .557-.253c.656.188 2.03.642 3.128 1.399 3.864 2.897 3.504 9.39 3.475 10.76a.508.508 0 0 1-.065.24C19.931 20 16.491 20 16.491 20l-1.166-2.426M13 6h-2.688a.5.5 0 0 1-.448-.277l-.683-1.37a.476.476 0 0 0-.556-.252c-.655.188-2.031.641-3.13 1.399-3.863 2.897-3.503 9.39-3.474 10.76a.507.507 0 0 0 .065.24C4.069 20 7.509 20 7.509 20l1.17-2.427M7 17c.6.225 1.155.416 1.678.573M17.004 17c-.6.225-1.156.416-1.68.574m-6.645 0c2.444.735 4.202.735 6.646 0M10.002 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6.002 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        stroke="currentcolor"
        strokeWidth="1.75"
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
        fill="currentColor"
        d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0 2.375 2.375 0 0 1 4.75 0Z"
      />
    </svg>
  );
}

function DoubleChevronRightIcon({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
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
        d="M13.5 8a20.354 20.354 0 0 1 3.894 3.702.472.472 0 0 1 0 .596A20.355 20.355 0 0 1 13.5 16m-6-8a20.355 20.355 0 0 1 3.894 3.702.472.472 0 0 1 0 .596A20.356 20.356 0 0 1 7.5 16"
        stroke="currentcolor"
        strokeWidth="1.75"
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
        d="M3 15a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5M9 12.188a15 15 0 0 0 2.556 2.655c.13.104.287.157.444.157m3-2.812a14.998 14.998 0 0 1-2.556 2.655A.704.704 0 0 1 12 15m0 0V4"
        stroke="currentcolor"
        strokeWidth="1.75"
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
        d="M14.596 8c-1.26 0-1.89 0-2.371.28-.423.247-.768.64-.983 1.124-.246.55-.246 1.27-.246 2.71V13m0 0v7.999m0-7.999h-2.25m2.25 0h3.75m-3.75 7.999V21m0-.001L12 21c2.514 0 3.77 0 4.78-.354a6.3 6.3 0 0 0 3.866-3.865C21 15.77 21 14.514 21 12s0-3.77-.354-4.78a6.3 6.3 0 0 0-3.865-3.866C15.77 3 14.514 3 12 3s-3.77 0-4.78.354a6.3 6.3 0 0 0-3.866 3.865C3 8.23 3 9.486 3 12s0 3.77.354 4.78a6.3 6.3 0 0 0 3.865 3.866c.866.303 1.913.347 3.777.353Z"
        stroke="currentcolor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function FileCheckIcon({ className, ...props }: React.ComponentProps<'svg'>) {
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
        d="M14 2.058V3.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C16.28 8 17.12 8 18.8 8h1.142M14 2.058C13.607 2 13.136 2 12.349 2H10.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C4 5.04 4 6.16 4 8.4v7.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C7.04 22 8.16 22 10.4 22h3.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C20 18.96 20 17.84 20 15.6V9.651c0-.787 0-1.257-.058-1.651M14 2.058c.096.014.187.03.277.053.408.098.798.26 1.156.478.404.248.75.594 1.442 1.286l1.25 1.25c.692.692 1.038 1.038 1.286 1.442a4 4 0 0 1 .479 1.156c.021.09.038.181.052.277M9 14.666l2.341 2.339a14.984 14.984 0 0 1 4.558-4.936"
        stroke="currentcolor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function FileTextIcon({ className, ...props }: React.ComponentProps<'svg'>) {
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
        d="M14 2.058V3.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C16.28 8 17.12 8 18.8 8h1.142M14 2.058C13.607 2 13.136 2 12.349 2H10.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C4 5.04 4 6.16 4 8.4v7.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C7.04 22 8.16 22 10.4 22h3.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C20 18.96 20 17.84 20 15.6V9.651c0-.787 0-1.257-.058-1.651M14 2.058c.096.014.187.03.277.053.408.098.798.26 1.156.478.404.248.75.594 1.442 1.286l1.25 1.25c.692.692 1.038 1.038 1.286 1.442a4 4 0 0 1 .479 1.156c.021.09.038.181.052.277M8 13h8m-8 4h5"
        stroke="currentcolor"
        strokeWidth="1.75"
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
        d="M18.054 4.518A9.395 9.395 0 0 0 12.69 2.85C7.543 2.85 3.25 6.781 3.25 12c0 5.053 4.183 9.1 9.44 9.1 5.364 0 8.807-4.126 8.546-9.1H12.69"
        stroke="currentcolor"
        strokeWidth="1.75"
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
        d="M10 15a3.72 3.72 0 0 0-1 2.58V21m5-6a3.72 3.72 0 0 1 1 2.58V21m-6-1.95a5.7 5.7 0 0 1-2.82.36c-1.52-.52-1.12-1.9-1.9-2.47A2.37 2.37 0 0 0 3 16.5m16-6.75c0 3-1.95 5.25-7 5.25s-7-2.25-7-5.25a6.3 6.3 0 0 1 .68-3c-.34-1.47-.21-3.28.52-3.64.73-.36 2.27.3 3.54 1.15a12.86 12.86 0 0 1 2.26-.2 12.86 12.86 0 0 1 2.26.18c1.27-.85 2.88-1.48 3.54-1.15.66.33.86 2.17.52 3.64A6.3 6.3 0 0 1 19 9.75Z"
        stroke="currentcolor"
        strokeWidth="1.75"
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
        d="M17 7h.01M3 12c0-2.514 0-3.77.354-4.78a6.3 6.3 0 0 1 3.865-3.866C8.23 3 9.486 3 12 3s3.77 0 4.78.354a6.3 6.3 0 0 1 3.866 3.865C21 8.23 21 9.486 21 12s0 3.77-.354 4.78a6.3 6.3 0 0 1-3.865 3.866C15.77 21 14.514 21 12 21s-3.77 0-4.78-.354a6.3 6.3 0 0 1-3.866-3.865C3 15.77 3 14.514 3 12Zm12.777-.56a3.819 3.819 0 1 1-7.554 1.12 3.819 3.819 0 0 1 7.554-1.12Z"
        stroke="currentcolor"
        strokeWidth="1.75"
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
        d="M17 17v-3.5a2.5 2.5 0 0 0-5 0m0 0V17m0-3.5v-3m-4 0V17M8 7v.01M11 21h2c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C21 17.2 21 15.8 21 13v-2c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C17.2 3 15.8 3 13 3h-2c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 3.545 5.73C3 6.8 3 8.2 3 11v2c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C6.8 21 8.2 21 11 21Z"
        stroke="currentcolor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function MaximizeIcon({ className, ...props }: React.ComponentProps<'svg'>) {
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
        d="M12.5 6.289a20.786 20.786 0 0 1 5.347-.202.625.625 0 0 1 .566.566A20.785 20.785 0 0 1 18.21 12M12.5 17.711a20.785 20.785 0 0 1-5.347.202.624.624 0 0 1-.566-.566A20.786 20.786 0 0 1 6.79 12"
        stroke="currentcolor"
        strokeWidth="1.75"
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
        d="M8.5 10h8m-8 4h4m9-2a9 9 0 0 1-10.272 8.91c-1.203-.17-1.805-.255-1.964-.267-.257-.02-.165-.016-.423-.014-.159 0-.34.014-.702.04l-2.153.153c-.857.062-1.286.092-1.607-.06a1.35 1.35 0 0 1-.641-.641c-.152-.32-.122-.75-.06-1.607l.153-2.153c.026-.362.04-.543.04-.702.002-.258.006-.166-.014-.423-.012-.159-.098-.76-.268-1.964A9 9 0 1 1 21.5 12Z"
        stroke="currentcolor"
        strokeWidth="1.75"
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
        d="M21 11.966A6.5 6.5 0 1 1 12.034 3H12a9 9 0 1 0 9 9v-.034Z"
        stroke="currentcolor"
        strokeWidth="1.75"
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
      <path
        d="M10.269 12.961 7.97 11.583A2 2 0 0 1 7 9.868V7.98m3.269 4.98 1.698 1.019m-1.698-1.019.033-1.98m1.665 2.999-2.343 1.3a2 2 0 0 1-1.97-.016l-1.635-.944m5.948-.34 1.731-.961m0 0-.045 2.679a2 2 0 0 1-1 1.698l-1.634.944m2.68-5.321.032-1.98m0 0 2.298 1.378A2 2 0 0 1 17 14.132v1.888m-3.269-4.981-1.698-1.019m0 0 2.343-1.3a2 2 0 0 1 1.97.016l1.635.944m-5.948.34-1.731.961m0 0 .045-2.679a2 2 0 0 1 1-1.698l1.634-.944M7 7.98a3 3 0 0 0-2.696 5.35l1.715.99M7 7.98V6a3 3 0 0 1 5.981-.34m-6.962 8.66a3 3 0 0 0 3.285 5.01l1.715-.99m0 0A3 3 0 0 0 17 18v-1.98m0 0a3 3 0 0 0 2.696-5.35l-1.715-.99m0 0a3 3 0 0 0-3.285-5.01l-1.715.99"
        stroke="currentcolor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function PhotoIcon({ className, ...props }: React.ComponentProps<'svg'>) {
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
        d="M21.999 10H21c-1.393 0-2.09 0-2.676.06A11.5 11.5 0 0 0 8.06 20.324c-.02.2-.034.415-.043.665M22 10 22 11v2c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 21 16.8 21 14 21h-4c-.756 0-1.41 0-1.983-.01M22 10c-.008-2.15-.068-3.336-.544-4.27a5 5 0 0 0-2.185-2.185C18.2 3 16.8 3 14 3h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 5.73C2 6.8 2 8.2 2 11v2c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185c.78.398 1.738.505 3.287.534M7.5 9.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
        stroke="currentcolor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function PlusCircleIcon({ className, ...props }: React.ComponentProps<'svg'>) {
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
        d="M12 15v-3m0 0V9m0 3H9m3 0h3m6.15 0a9.15 9.15 0 1 1-18.3 0 9.15 9.15 0 0 1 18.3 0Z"
        stroke="currentcolor"
        strokeWidth="1.75"
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
        d="M12 19v-7m0 0V5m0 7H5m7 0h7"
        stroke="currentcolor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function RepeatSquareIcon({
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
        d="M12.5 2a15.267 15.267 0 0 1 2.92 2.777c.054.066.08.145.08.225M12.5 8a15.267 15.267 0 0 0 2.92-2.777.356.356 0 0 0 .08-.221M12.5 16a15.263 15.263 0 0 0-2.92 2.777.356.356 0 0 0-.08.221m3 3.002a15.263 15.263 0 0 1-2.92-2.777.355.355 0 0 1-.08-.225m6-13.996C15.2 5 14.868 5 14.5 5h-4c-1.861 0-2.792 0-3.545.245a5 5 0 0 0-3.21 3.21C3.5 9.208 3.5 10.139 3.5 12s0 2.792.245 3.545A5 5 0 0 0 5.5 18m4 .998c.3.002.632.002 1 .002h4c1.861 0 2.792 0 3.545-.245a5 5 0 0 0 3.21-3.21c.245-.753.245-1.684.245-3.545s0-2.792-.245-3.545A5 5 0 0 0 19.5 6"
        stroke="currentcolor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function SearchIcon({ className, ...props }: React.ComponentProps<'svg'>) {
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
        d="m21 21-6.05-6.05m0 0a7 7 0 1 0-9.9-9.9 7 7 0 0 0 9.9 9.9Z"
        stroke="currentcolor"
        strokeWidth="1.75"
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
        d="M21 13v1.6c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6V13m5-6.144a20.328 20.328 0 0 1 3.409-3.64A.921.921 0 0 1 12 3m0 0c.216 0 .425.077.591.216A20.328 20.328 0 0 1 16 6.856M12 3v13"
        stroke="currentcolor"
        strokeWidth="1.75"
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
        d="M9 20.989C9.577 21 10.236 21 11 21h2c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C21 17.2 21 15.8 21 13v-2c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C17.2 3 15.8 3 13 3h-2c-.764 0-1.423 0-2 .011M9 20.99c-1.54-.03-2.492-.138-3.27-.534a5 5 0 0 1-2.185-2.185C3 17.2 3 15.8 3 13v-2c0-2.8 0-4.2.545-5.27A5 5 0 0 1 5.73 3.545c.778-.396 1.73-.504 3.27-.534M9 20.99V3.011"
        stroke="currentcolor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function SparklesIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M5 17.65V19m0 0v1.35M5 19h1.35M5 19H3.65M12.9 3c.64 5.037 2.63 8.142 8.1 9-5.19.814-7.43 3.728-8.1 9-.67-5.272-2.91-8.186-8.1-9 5.19-.814 7.43-3.728 8.1-9ZM5.7 3c.248 1.506 1.151 2.445 2.7 2.7-1.549.255-2.452 1.194-2.7 2.7C5.452 6.894 4.548 5.955 3 5.7 4.506 5.452 5.445 4.548 5.7 3Z"
        stroke="currentcolor"
        strokeWidth="1.75"
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
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M12 2v4m0 12v4M6 12H2m20 0h-4m1.078 7.078L16.25 16.25M19.078 5 16.25 7.828M4.922 19.078 7.75 16.25M4.922 5 7.75 7.828" />
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
        fill="currentcolor"
        d="M13.542 2.416a3.063 3.063 0 0 0-3.084 0c-.512.299-.862.795-1.158 1.304-.3.517-.63 1.208-1.034 2.056l-.02.04c-.273.574-.337.689-.408.772a1.063 1.063 0 0 1-.397.289c-.102.042-.231.067-.86.15l-.045.006c-.931.123-1.691.223-2.275.349-.575.123-1.156.303-1.598.698a3.063 3.063 0 0 0-.953 2.933c.126.579.49 1.066.882 1.504.399.444.955.972 1.636 1.619l.033.03c.46.438.55.534.607.628.086.142.138.302.152.467.009.11-.007.24-.123.865l-.008.044c-.171.923-.31 1.677-.372 2.27-.06.586-.068 1.194.17 1.736a3.063 3.063 0 0 0 2.495 1.813c.59.06 1.166-.136 1.704-.374.546-.242 1.22-.607 2.045-1.055l.04-.022c.557-.303.677-.358.784-.384a1.06 1.06 0 0 1 .49 0c.107.026.227.081.785.384l.04.021c.825.449 1.499.814 2.044 1.056.539.238 1.114.434 1.704.374a3.063 3.063 0 0 0 2.495-1.813c.239-.542.23-1.15.17-1.735-.061-.594-.2-1.347-.372-2.271l-.008-.044c-.116-.625-.131-.755-.122-.865.013-.165.065-.325.151-.467.057-.094.147-.19.608-.627l.032-.03c.681-.648 1.237-1.176 1.636-1.62.393-.438.757-.925.882-1.504a3.063 3.063 0 0 0-.953-2.933c-.442-.395-1.023-.575-1.598-.698-.583-.126-1.343-.226-2.275-.349l-.044-.006c-.63-.083-.759-.108-.86-.15a1.062 1.062 0 0 1-.397-.289c-.072-.083-.136-.198-.41-.771l-.019-.04C15.33 4.927 15 4.236 14.7 3.72c-.295-.509-.646-1.005-1.158-1.304Z"
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
        d="M12 23v-1m-7.778-2.222.707-.707M1 12h1m2.222-7.778.707.707M12 2V1m7.071 3.929.707-.707M22 12h1m-3.929 7.071.707.707M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
        stroke="currentcolor"
        strokeWidth="1.75"
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
        d="m16 6-1.106-2.211a3.236 3.236 0 0 0-5.788 0L8 6M4 6h16M6 6h12v9c0 1.864 0 2.796-.305 3.53a4 4 0 0 1-2.164 2.165C14.796 21 13.864 21 12 21s-2.796 0-3.53-.305a4 4 0 0 1-2.166-2.164C6 17.796 6 16.864 6 15V6Z"
        stroke="currentcolor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function UpworkIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56.7 56.7"
      fill="currentColor"
      aria-hidden="true"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M42.4 17.7c-5.3 0-9.3 3.5-10.9 9-2.5-3.9-4.5-8.3-5.6-12.1h-5.6v14.7c0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3V14.7H4.3v14.7c0 6.1 4.9 11 10.9 11s10.9-4.9 10.9-11v-2.5c1.1 2.2 2.5 4.6 4 6.7l-3.5 16.3h5.7L34.7 38c2.2 1.4 4.7 2.2 7.7 2.2 6.1 0 11.1-5 11.1-11.4 0-6.1-5-11.1-11.1-11.1zm0 16.9c-2.2 0-4.5-1-6.3-2.5l.6-2.2v-.1c.4-2.4 1.7-6.4 5.8-6.4 3.1 0 5.6 2.5 5.6 5.6-.1 3.1-2.8 5.6-5.7 5.6z" />
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
        d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM16 15H8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h12a2 2 0 0 0 2-2 4 4 0 0 0-4-4Z"
        stroke="currentcolor"
        strokeWidth="1.75"
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
        d="M20.395 21h.105a2 2 0 0 0 2-2 4.002 4.002 0 0 0-2.735-3.796M16.404 3.481a4 4 0 0 1 0 7.037M13.5 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM6 15h7a4 4 0 0 1 4 4 2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 4 4 0 0 1 4-4Z"
        stroke="currentcolor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function WindowsIcon({ className, ...props }: React.ComponentProps<'svg'>) {
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
        d="M11 4.877v13.778m10-6.89H3m1.78 6.198 14 1.556A2 2 0 0 0 21 17.53V6.001a2 2 0 0 0-2.22-1.989l-14 1.556A2 2 0 0 0 3 7.556v8.42a2 2 0 0 0 1.78 1.987Z"
        stroke="currentcolor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function XIcon({ className, ...props }: React.ComponentProps<'svg'>) {
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
        d="m18.667 4-5.527 6.316M4.667 20l5.895-6.737m2.578-2.947L9.304 4.9c-.233-.33-.35-.494-.5-.613a1.333 1.333 0 0 0-.45-.233C8.169 4 7.967 4 7.564 4H6.063c-.667 0-1 0-1.18.138a.667.667 0 0 0-.26.502c-.009.227.184.499.57 1.043l5.369 7.58m2.578-2.947 5.668 8c.385.545.578.817.569 1.044a.667.667 0 0 1-.26.502c-.18.138-.513.138-1.18.138h-1.5c-.404 0-.606 0-.79-.054a1.335 1.335 0 0 1-.45-.233c-.151-.119-.268-.284-.501-.613l-4.134-5.837"
        stroke="currentcolor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

export {
  AlertTriangleIcon,
  ArrowDownIcon,
  ArrowElbowIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowUpRightIcon,
  BurgerMenuIcon,
  ChatBubbleTypingIcon,
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
  DoubleChevronRightIcon,
  DownloadIcon,
  FacebookIcon,
  FileCheckIcon,
  FileTextIcon,
  GoogleIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MaximizeIcon,
  MenuIcon,
  MessageIcon,
  MoonIcon,
  OpenAiIcon,
  PhotoIcon,
  PlusCircleIcon,
  PlusIcon,
  RepeatSquareIcon,
  SearchIcon,
  ShareIcon,
  SidebarIcon,
  SparklesIcon,
  SpinnerIcon,
  StarIcon,
  SunIcon,
  TrashIcon,
  UpworkIcon,
  UserIcon,
  UsersIcon,
  WindowsIcon,
  XIcon,
};
