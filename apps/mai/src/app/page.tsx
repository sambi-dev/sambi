import type { NextPage } from 'next';

import { screens } from '#/data/screens';
import Authentication from '#/ui/auth';
import { HeroParallax } from '#/ui/hero-parallax';

const HomePage: NextPage = () => {
  return (
    <div className="mx-auto w-full bg-background pt-24 sm:pt-32">
      <HeroParallax screens={screens} />
      <div className="pt-32">
        <Authentication />
      </div>
    </div>
  );
};

export default HomePage;
