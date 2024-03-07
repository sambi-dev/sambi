import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

const paragraphTextClass = 'text-[18px] leading-[28px] text-[#747881]';

const siteUrl = 'https://sambi.dev';

console.log('Current siteUrl:', siteUrl);

export const HomeCtaEmail = () => (
  <Html>
    <Head />
    <Preview>
      Oof, we got your brain-buster and we&apos;re on it. We&apos;ll be in touch
      soon.
    </Preview>
    <Tailwind>
      <Body className="bg-[#85ADAB] py-[24px] font-sans">
        <Container className="mx-auto rounded-lg bg-[#FFFFFF] px-[24px] pt-[36px]">
          <Img
            src={`${siteUrl}/sambi-logo.png`}
            width="80"
            height="80"
            alt="A monotone logomark for sambi.dev"
            className="mx-auto justify-center"
          />
          <Hr className="border-t-1 my-[16px] border-[#8C8AA8]" />
          <Text className="mt-[40px] text-[18px] leading-[26px] text-[#747881]">
            🤯 Howdy,
          </Text>
          <Text className={paragraphTextClass}>We got your brain-buster.</Text>
          <Text className={paragraphTextClass}>
            Right now, we&apos;re scrambling to find the answers to your
            question(s) with ChatGPT. One of us will be in touch soon.
          </Text>
          <Text className={paragraphTextClass}>
            Until then, check out our Blog? 👇🏽
          </Text>
          <Section className="mt-[48px] text-center">
            <Button
              className="inline-block w-[75%] rounded-md bg-[#8C8AA8] px-[32px] py-[16px] text-[18px] font-semibold leading-[26px] text-[#FFFFFF] no-underline"
              href={`${siteUrl}/blog`}
            >
              Read some upcycled posts
            </Button>
          </Section>
          <Hr className="border-t-1 mt-[48px] border-[#8C8AA8]" />
          <Text className="mt-[16px] text-[12px] text-[#747881]">
            You&apos;re receiving this email because you filled out the
            brain-busting form on our homepage.
          </Text>
          <Text className="text-[12px] text-[#747881]">
            <span className="font-bold">sambi.dev</span> 1309 Coffen Avenue,
            Suite 1247, Sheridan, WY 82801 🇺🇸
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default HomeCtaEmail;
