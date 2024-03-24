import { StarIcon } from '@sambi/ui/icons';

interface StarRatingProps {
  rating?: 1 | 2 | 3 | 4 | 5;
  size?: 'default' | 'sm' | 'lg';
}

export function StarRating({ rating = 5, size = 'default' }: StarRatingProps) {
  const sizeClasses = {
    default: 'size-4',
    sm: 'size-3',
    lg: 'size-6',
  };

  return (
    <div className="flex gap-1">
      {[...Array(rating).keys()].map((index) => (
        <StarIcon key={index} className={`${sizeClasses[size]} fill-current`} />
      ))}
    </div>
  );
}
