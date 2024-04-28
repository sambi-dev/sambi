/**
 * v0 by Vercel.
 * @see https://v0.dev/t/EQBQhrOXD2T
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import type { JSX, SVGProps } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Avatar, AvatarImage } from '@yocxo/ui/avatar';

export default function Component() {
  return (
    <div className="max-w-2xl rounded-lg border bg-white p-2">
      <div className="flex items-start space-x-2">
        <Avatar className="h-8 w-8">
          <AvatarImage
            alt="User profile"
            src="/placeholder.svg?height=32&width=32"
          />
        </Avatar>
        <div className="flex-1 space-y-1">
          <div className="flex items-center space-x-1">
            <span className="text-sm font-semibold">Danny Postma</span>
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-white">
              <CheckIcon className="h-3 w-3" />
            </div>
            <span className="text-xs text-muted-foreground">@dannypostmaa</span>
            <span className="text-xs text-muted-foreground">· 10m</span>
          </div>
          <p className="text-sm">
            If you like
            <span className="font-semibold">@MarkRober</span>, go watch this
            video by <span className="font-semibold">@ColinandSamir</span>.
            {'\n                '}
          </p>
          <p className="text-sm">
            They made a really great business breakdown of Crunch Labs that has
            some golden business nuggets in it.
          </p>
          <Link className="text-xs text-blue-500" href="#">
            youtu.be/piDuorC2Zm4
          </Link>
          <Image
            alt="Tweet image"
            className="mt-2 aspect-video rounded-lg object-cover"
            height={366}
            src="/placeholder.svg"
            width={650}
          />
          <div className="flex items-center justify-between space-x-4 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <ReplyIcon className="h-4 w-4 text-muted-foreground" />
              <span>2</span>
            </div>
            <div className="flex items-center space-x-1">
              <HeartIcon className="h-4 w-4 text-muted-foreground" />
              <span>3</span>
            </div>
            <div className="flex items-center space-x-1">
              <TwitterIcon className="h-4 w-4 text-muted-foreground" />
              <span>100</span>
            </div>
            <div className="flex items-center space-x-1">
              <EyeIcon className="h-4 w-4 text-muted-foreground" />
              <span>400</span>
            </div>
            <div className="flex items-center space-x-1">
              <BookmarkIcon className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex items-center space-x-1">
              <ShareIcon className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BookmarkIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  );
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function EyeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function HeartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function ReplyIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 17 4 12 9 7" />
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
    </svg>
  );
}

function ShareIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
