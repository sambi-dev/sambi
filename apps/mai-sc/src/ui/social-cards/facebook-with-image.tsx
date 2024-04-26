/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZwvmmQzufBY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import type { JSX, SVGProps } from 'react';

import Image from 'next/image';

import { Avatar, AvatarFallback, AvatarImage } from '@yocxo/ui/avatar';

interface FacebookPostProps {
  userName: string;
  userLocation: string;
  postDescription: string;
  postEngagements: {
    likes: number;
    hearts: number;
  };
  postComments: {
    userName: string;
    comment: string;
  }[];
}

export function FacebookWithImage({
  props: facebookPost,
}: {
  props: FacebookPostProps;
}) {
  return (
    <div className="mx-auto max-w-2xl rounded-lg bg-card shadow-md">
      <div className="flex items-center border-b p-4">
        <Avatar>
          <AvatarImage
            alt="Profile Picture"
            src="/placeholder-square.svg?height=40&width=40"
          />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="ml-2">
          <p className="font-semibold text-foreground">
            {facebookPost.userName}
          </p>
          <p className="text-xs text-muted-foreground">
            {facebookPost.userLocation}
          </p>
        </div>
        <DotIcon className="ml-auto h-5 w-5 cursor-pointer text-muted-foreground" />
      </div>
      <div className="p-4">
        <p className="mb-3">{facebookPost.postDescription}</p>
        <Image
          alt="Post media"
          className="w-full"
          height="300"
          src="/placeholder-square.svg"
          width="300"
        />
      </div>
      <div className="flex items-center justify-between border-t p-4">
        <div className="flex space-x-1">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
            <ThumbsUpIcon className="h-4 w-4 fill-current text-white" />
          </div>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-600">
            <HeartIcon className="h-4 w-4 fill-current text-white" />
          </div>
          <span className="text-sm text-muted-foreground">
            {facebookPost.postEngagements.likes} likes,{' '}
            {facebookPost.postEngagements.hearts} hearts
          </span>
        </div>
        <span className="text-sm text-muted-foreground">
          {facebookPost.postComments.length} comment(s)
        </span>
      </div>
      <div className="border-t">
        {facebookPost.postComments.map((comment, index) => (
          <div key={index} className="flex items-center space-x-2 p-2">
            <Avatar>
              <AvatarImage
                alt="User Comment"
                src="/placeholder-square.svg?height=32&width=32"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="rounded-lg bg-muted p-2">
                <p className="font-semibold text-foreground">
                  {comment.userName}
                </p>
                <p className="text-muted-foreground">{comment.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DotIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12.1" cy="12.1" r="1" />
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

function ThumbsUpIcon(
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
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}
