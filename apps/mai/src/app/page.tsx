import type { NextPage } from 'next';

import { GeminiHero } from '#/ui/hero/gemini-hero';

const HomePage: NextPage = () => {
  return (
    <div className="mx-auto w-full bg-background">
      <GeminiHero />
    </div>
  );
};

export default HomePage;
