/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';

import type { CarouselApi } from '@yocxo/ui/carousel';
import { Card, CardContent } from '@yocxo/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@yocxo/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@yocxo/ui/dialog';
import { MaximizeIcon } from '@yocxo/ui/icons';

interface SearchResultsImageSectionProps {
  images: string[];
  query?: string;
}

export const SearchResultsImageSection: React.FC<
  SearchResultsImageSectionProps
> = ({ images, query }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Update the current and count state when the carousel api is available
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);

    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Scroll to the selected index
  useEffect(() => {
    if (api) {
      api.scrollTo(selectedIndex, true);
    }
  }, [api, selectedIndex]);

  if (!images || images.length === 0) {
    return <div className="text-muted-foreground">No images found</div>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {images.slice(0, 4).map((image: any, index: number) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
            <div
              className="relative aspect-video w-[calc(50%-0.5rem)] cursor-pointer md:w-[calc(25%-0.5rem)]"
              onClick={() => setSelectedIndex(index)}
            >
              <Card className="h-full flex-1">
                <CardContent className="h-full w-full p-2">
                  {image ? (
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <img
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full animate-pulse bg-muted" />
                  )}
                </CardContent>
              </Card>
              {index === 3 && images.length > 4 && (
                <div className="absolute inset-0 left-1 top-1 z-10 flex size-6 items-center justify-center rounded-full border bg-secondary text-primary">
                  <MaximizeIcon />
                </div>
              )}
            </div>
          </DialogTrigger>
          <DialogContent className="max-h-[80vh] overflow-auto sm:max-w-3xl">
            <DialogHeader>
              <DialogTitle>Search Images</DialogTitle>
              <DialogDescription className="text-sm">{query}</DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <Carousel
                setApi={setApi}
                className="max-h-[60vh] w-full bg-muted"
              >
                <CarouselContent>
                  {images.map((img, idx) => (
                    <CarouselItem key={idx}>
                      <div className="flex h-full items-center justify-center p-1">
                        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                        <img
                          src={img}
                          alt={`Image ${idx + 1}`}
                          className="h-auto max-h-[60vh] w-full object-contain"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute inset-8 flex items-center justify-between p-4">
                  <CarouselPrevious className="h-10 w-10 rounded-full shadow focus:outline-none">
                    <span className="sr-only">Previous</span>
                  </CarouselPrevious>
                  <CarouselNext className="h-10 w-10 rounded-full shadow focus:outline-none">
                    <span className="sr-only">Next</span>
                  </CarouselNext>
                </div>
              </Carousel>
              <div className="py-2 text-center text-sm text-muted-foreground">
                {current} of {count}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};
