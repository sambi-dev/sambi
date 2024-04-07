import { revalidateTag } from 'next/cache';

interface RevalidateRequestBody {
  tag: string;
}

const webhookSecret = process.env.BASEHUB_WEBHOOK_SECRET;
if (typeof webhookSecret !== 'string') {
  throw new Error('Missing BASEHUB_WEBHOOK_SECRET.');
}

export const POST = async (request: Request) => {
  const authorization = request.headers.get('authorization');
  if (authorization !== `Bearer ${webhookSecret}`) {
    return new Response(JSON.stringify({ message: 'Unauthorized.' }), {
      status: 401,
    });
  }

  const requestBody = (await request.json()) as RevalidateRequestBody;

  if (typeof requestBody.tag === 'string') {
    revalidateTag(requestBody.tag);
  } else {
    return new Response(JSON.stringify({ message: 'Invalid tag.' }), {
      status: 400,
    });
  }

  return new Response(JSON.stringify({ revalidated: true, now: Date.now() }));
};
