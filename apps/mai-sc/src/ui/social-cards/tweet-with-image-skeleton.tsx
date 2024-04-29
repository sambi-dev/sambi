/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qBaBV4hm3YH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Skeleton } from '@yocxo/ui/skeleton';

export default function Component() {
  return (
    <div className="max-w-2xl rounded-lg border bg-white p-2">
      <div className="flex items-start space-x-2">
        <Skeleton className="h-8 w-8 rounded-full" />
        <div className="flex-1 space-y-1">
          <div className="flex items-center space-x-1">
            <Skeleton className="h-4 w-32 rounded-full" />
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="h-4 w-20 rounded-full" />
            <Skeleton className="h-4 w-16 rounded-full" />
          </div>
          <Skeleton className="h-3 w-full rounded-full" />
          <Skeleton className="h-3 w-3/4 rounded-full" />
          <Skeleton className="h-3 w-1/2 rounded-full" />
          <Skeleton className="h-[200px] w-full rounded-lg" />
          <div className="flex items-center justify-between space-x-4 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-4 w-4 rounded-full" />
            </div>
            <div className="flex items-center space-x-1">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-4 w-4 rounded-full" />
            </div>
            <div className="flex items-center space-x-1">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-4 w-8 rounded-full" />
            </div>
            <div className="flex items-center space-x-1">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-4 w-8 rounded-full" />
            </div>
            <div className="flex items-center space-x-1">
              <Skeleton className="h-4 w-4 rounded-full" />
            </div>
            <div className="flex items-center space-x-1">
              <Skeleton className="h-4 w-4 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
