import React, { Suspense } from 'react';
import { unstable_cache } from 'next/cache';

import { EmbeddedTweet, TweetNotFound, TweetSkeleton } from 'react-tweet';
import { getTweet as _getTweet } from 'react-tweet/api';

const getTweet = unstable_cache(
  async (id: string) => _getTweet(id),
  ['tweet'],
  { revalidate: 3600 * 24 },
);

const fetchAndRenderTweet = async ({ id }: { id: string }) => {
  try {
    const tweet = await getTweet(id);
    return tweet ? <EmbeddedTweet tweet={tweet} /> : <TweetNotFound />;
  } catch (error) {
    console.error(error);
    return <TweetNotFound error={error} />;
  }
};

const ReactTweetComponent = ({ tweetId }: { tweetId: string }) => (
  <Suspense fallback={<TweetSkeleton />}>
    {fetchAndRenderTweet({ id: tweetId })}
  </Suspense>
);

export default ReactTweetComponent;
