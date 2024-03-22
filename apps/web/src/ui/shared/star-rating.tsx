import { StarIcon } from '@sambi/ui/icons';

export function StarRating({ rating = 5 }: { rating?: 1 | 2 | 3 | 4 | 5 }) {
  return (
    <div className="flex gap-1">
      {[...Array(rating).keys()].map((index) => (
        <StarIcon key={index} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}
