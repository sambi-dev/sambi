import type { TweetProps } from 'react-tweet';

import { EmbeddedTweet, TweetNotFound } from 'react-tweet';
import { getTweet } from 'react-tweet/api';

const TweetContent = async ({ id, components, onError }: TweetProps) => {
  let error;
  const tweet = id
    ? await getTweet(id).catch((err) => {
        const errorInstance = err as unknown as Error;
        if (onError) {
          onError(errorInstance);
        } else {
          console.error(errorInstance);
        }
        error = errorInstance;
        return undefined;
      })
    : undefined;

  if (!tweet) {
    const NotFound = components?.TweetNotFound ?? TweetNotFound;
    return <NotFound error={error} />;
  }

  return <EmbeddedTweet tweet={tweet} components={components} />;
};

export const ReactTweet = (props: TweetProps) => <TweetContent {...props} />;

const ReactTweetComponent = ({ tweetId }: { tweetId: string }) => (
  <div className="flex justify-center pb-2 pt-8">
    {ReactTweet({ id: tweetId })}
  </div>
);

export default ReactTweetComponent;
