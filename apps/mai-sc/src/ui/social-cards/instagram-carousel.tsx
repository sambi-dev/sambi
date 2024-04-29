/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fSvLUCHf4uZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import type { JSX, SVGProps } from 'react';

import Image from 'next/image';

import { Avatar, AvatarFallback, AvatarImage } from '@yocxo/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@yocxo/ui/carousel';
import { Input } from '@yocxo/ui/input';

export default function Component() {
  return (
    <div className="mx-auto max-w-sm rounded-lg border bg-white">
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Avatar>
              <AvatarImage
                alt="User profile picture"
                src="/placeholder.svg?height=32&width=32"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="absolute -inset-0.5 rounded-full border-2 border-white bg-gradient-to-r from-[#ffd700] to-[#ff1493]" />
          </div>
          <div>
            <p className="flex items-center text-sm font-bold">
              whereyourheartisnow
              <BadgeIcon className="ml-1 h-4 w-4 text-blue-500" />
              <span className="ml-1 h-1.5 w-1.5 rounded-full bg-gray-500" />
              <span className="ml-1 text-xs text-gray-500">4d</span>
            </p>
            <p className="text-xs text-gray-500">
              Lucky Socks • Belong Together (Sped Up)
            </p>
          </div>
          <MoreHorizontalIcon className="ml-auto h-4 w-4 text-gray-500" />
        </div>
        <div className="mt-2">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  alt="Instagram post content"
                  className="w-full"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: '400/400',
                    objectFit: 'cover',
                  }}
                  width="400"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  alt="Instagram post content"
                  className="w-full"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: '400/400',
                    objectFit: 'cover',
                  }}
                  width="400"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  alt="Instagram post content"
                  className="w-full"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: '400/400',
                    objectFit: 'cover',
                  }}
                  width="400"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="flex justify-between px-4 pt-2">
        <div className="flex space-x-4">
          <HeartIcon className="h-6 w-6 text-gray-500" />
          <MessageCircleIcon className="h-6 w-6 text-gray-500" />
          <SendIcon className="h-6 w-6 text-gray-500" />
        </div>
        <BookmarkIcon className="h-6 w-6 text-gray-500" />
      </div>
      <div className="px-4 py-2">
        <p className="text-sm font-bold">149,412 likes</p>
        <p className="text-sm">
          <span className="font-bold">whereyourheartisnow</span>
          Do you believe it? 💜 this boy gave me a love I&apos;ve never felt
          before, it&apos;s irreplaceable 💙{'\n            '}
        </p>
        <p className="mt-1 text-xs text-gray-500">... more</p>
        <p className="mt-1 text-xs text-gray-500">View all 1,565 comments</p>
        <div className="mt-2 flex">
          <Input
            className="flex-1 border-none text-xs focus:ring-0"
            placeholder="Add a comment..."
          />
        </div>
      </div>
    </div>
  );
}

function BadgeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
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

function MessageCircleIcon(
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
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  );
}

function MoreHorizontalIcon(
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
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  );
}

function SendIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}
