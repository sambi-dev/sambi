'use server';

import { z } from 'zod';

import { env } from '#/env';
import { resend } from '#/lib/resend/resend';

import { sendHomeCtaEmail } from './send-home-cta-email';

const contactSchema = z.object({
  email: z.string().email(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  unsubscribed: z.boolean(),
  audienceId: z.string(),
});

interface ResendContact {
  email: string;
  firstName?: string;
  lastName?: string;
  unsubscribed: boolean;
  audienceId: string;
}

export async function addContactHomeCta(
  email: string,
): Promise<{ success: boolean; message?: string }> {
  const contact: ResendContact = {
    email: email,
    firstName: 'Website',
    lastName: 'HomeCTA',
    unsubscribed: false,
    audienceId: env.RESEND_AUDIENCE_ID,
  };

  const validatedContact = contactSchema.parse(contact);

  try {
    await resend.contacts.create(validatedContact);
    await sendHomeCtaEmail({ email });
    return { success: true };
  } catch (error: unknown) {
    console.error('Error creating contact or sending email:', error);
    return {
      success: false,
      message:
        error instanceof Error ? error.message : 'An unknown error occurred',
    };
  }
}
