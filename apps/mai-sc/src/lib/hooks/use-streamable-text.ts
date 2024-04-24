import type { StreamableValue } from 'ai/rsc';

import { useEffect, useState } from 'react';

import { readStreamableValue } from 'ai/rsc';

export const useStreamableText = (
  content: string | StreamableValue<string>,
) => {
  const [rawContent, setRawContent] = useState(
    typeof content === 'string' ? content : '',
  );

  useEffect(() => {
    void (async () => {
      if (typeof content === 'object') {
        let value = '';
        for await (const delta of readStreamableValue(content)) {
          console.log(delta);
          if (typeof delta === 'string') {
            setRawContent((value = value + delta));
          }
        }
      }
    })();
  }, [content]);

  return rawContent;
};
