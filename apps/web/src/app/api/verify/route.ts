import type { TurnstileServerValidationResponse } from '@marsidev/react-turnstile';

import { z } from 'zod';

import { env } from '#/env';
import { obfuscateEmail } from '#/lib/helpers';

const verifyEndpoint =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const secret = env.CLOUDFLARE_TURNSTILE_SECRET_KEY;

const requestBodySchema = z.object({
  token: z.string(),
  email: z.string().email(),
});

export async function POST(request: Request) {
  try {
    const { token, email } = requestBodySchema.parse(await request.json());

    const res = await fetch(verifyEndpoint, {
      method: 'POST',
      body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`,
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });

    const data = (await res.json()) as TurnstileServerValidationResponse;

    if (data.success) {
      console.log(`Turnstile passed for email: ${obfuscateEmail(email)}`);

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Cloudflare security verification failed',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Invalid email address',
          errors: error.errors,
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    }

    console.error('An error occurred:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'An unexpected error occurred. Please try again later.',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }
}
