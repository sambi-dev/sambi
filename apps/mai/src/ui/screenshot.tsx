import type { MotionValue } from 'framer-motion';
import type { StaticImageData } from 'next/image';

import Image from 'next/image';

import { motion } from 'framer-motion';

import { Badge } from '@yocxo/ui/badge';

export const Screenshot = ({
  screen,
  translate,
}: {
  screen: {
    title: string;
    thumbnail: StaticImageData;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={screen.title}
      className="group/screen relative h-96 w-[30rem] flex-shrink-0"
    >
      <div className="block rounded-2xl group-hover/screen:shadow-2xl ">
        <Image
          src={screen.thumbnail}
          height="600"
          width="600"
          className="absolute inset-0 h-full w-full rounded-2xl object-cover object-left-top"
          alt={screen.title}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-background/80 group-hover/screen:opacity-20" />
      <Badge className="absolute bottom-4 left-4 opacity-0 group-hover/screen:opacity-100">
        {screen.title}
      </Badge>
    </motion.div>
  );
};
