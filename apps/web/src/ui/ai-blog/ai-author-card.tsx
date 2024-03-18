import { FadeIn } from '#/ui/fade-in';
import { SectionIntro } from '#/ui/section-intro';

export default function AiAuthorCard() {
  return (
    <FadeIn className="mx-auto my-10 max-w-3xl items-center rounded-4xl border bg-card p-6 sm:my-16">
      <SectionIntro
        eyebrow="The AI Blog"
        title="AI content that hits different"
        centered
      >
        <p className="lg:text-lg">
          ChatGPT wrappers and Twitter bros tell you to game your SEO.
          Don&apos;t fall for that <span className="line-through">shit</span>.
          Quality matters, and you&apos;ll get crushed by Google like they did.
          Our AI Blog transparently explores what humans and AI can achieve
          together to craft high-quality, meaningful content.{' '}
        </p>
      </SectionIntro>
    </FadeIn>
  );
}
