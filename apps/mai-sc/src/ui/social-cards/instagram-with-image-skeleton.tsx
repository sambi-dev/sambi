/**
 * v0 by Vercel.
 * @see https://v0.dev/t/uGoHTguBGVU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Skeleton } from '@yocxo/ui/skeleton';

export default function Component() {
  return (
    <div className="mx-auto max-w-sm rounded-lg border bg-white">
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Skeleton className="h-8 w-8 rounded-full" />
            <div className="absolute -inset-0.5 rounded-full border-2 border-white bg-gradient-to-r from-[#ffd700] to-[#ff1493]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-4 w-4 rounded-full" />
            </div>
            <Skeleton className="h-3 w-24" />
          </div>
          <Skeleton className="ml-auto h-4 w-4" />
        </div>
        <div className="mt-2">
          <Skeleton className="aspect-square w-full" />
        </div>
      </div>
      <div className="flex justify-between px-4 pt-2">
        <div className="flex space-x-4">
          <Skeleton className="h-6 w-6" />
          <Skeleton className="h-6 w-6" />
          <Skeleton className="h-6 w-6" />
        </div>
        <Skeleton className="h-6 w-6" />
      </div>
      <div className="px-4 py-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="mt-2 h-3 w-full" />
        <Skeleton className="mt-2 h-3 w-24" />
        <Skeleton className="mt-2 h-3 w-32" />
        <div className="mt-2 flex">
          <Skeleton className="h-8 flex-1" />
        </div>
      </div>
    </div>
  );
}
