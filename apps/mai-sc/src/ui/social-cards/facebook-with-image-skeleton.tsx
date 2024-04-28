/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xnnKeRRtKBs
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Skeleton } from '@yocxo/ui/skeleton';

export default function FacebookWithImageSkeleton() {
  return (
    <div className="mx-auto max-w-lg rounded-lg bg-card shadow">
      <div className="flex items-center border-b p-4">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="ml-2 space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
        <Skeleton className="ml-auto h-5 w-5 rounded-full" />
      </div>
      <div className="p-4">
        <Skeleton className="mb-3 h-4 w-48" />
        <Skeleton className="h-[768px] w-full" />
      </div>
      <div className="flex items-center justify-between border-t p-4">
        <div className="flex space-x-1">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-4 w-8" />
        </div>
        <Skeleton className="h-4 w-20" />
      </div>
      <div className="border-t">
        <div className="flex items-center space-x-2 p-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <div className="flex-1">
            <div className="rounded-lg bg-muted p-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-48" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
