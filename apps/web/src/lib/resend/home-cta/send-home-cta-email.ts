'use server';

import { siteConfig } from '#/config/site';
import { env } from '#/env';
import HomeCtaEmail from '#/lib/resend/emails/home-cta-email';
import { resend } from '#/lib/resend/resend';

const plainTextHomeCtaEmail = `🤯 Howdy!\n
We got your brain-buster.\n
Right now, we&apos;re scrambling to find the answers to your question(s) with ChatGPT. One of us will be in touch soon.\n\n
Until then, check out our Blog? https://sambi.dev/blog \n\n
sambi.dev | 1309 Coffeen Ave., STE 1247, Sheridan, WY 82801`;

interface SendHomeCtaEmailParams {
  email: string;
}

export async function sendHomeCtaEmail({ email }: SendHomeCtaEmailParams) {
  const subjectLine = `${siteConfig.name} got your brain buster`;

  try {
    const result = await resend.emails.send({
      from: env.RESEND_FROM_ADDRESS,
      to:
        process.env.NODE_ENV === 'development' ? 'delivered@resend.dev' : email,
      bcc: env.RESEND_BCC_ADDRESS,
      subject: subjectLine,
      react: HomeCtaEmail(),
      text: plainTextHomeCtaEmail,
    });

    if (process.env.NODE_ENV !== 'production') {
      console.log(result);
    }
  } catch (error) {
    throw new Error('Failed to send welcome email.');
  }
}
