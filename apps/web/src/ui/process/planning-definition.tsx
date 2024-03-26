import imageChatGpt from '#/images/chatgpt.jpg';
import { Blockquote } from '#/ui/blockquote';
import { ImageCredit } from '#/ui/process/image-credit';
import { Section } from '#/ui/process/section';

export function PlanningDefinition() {
  return (
    <Section
      title="Planning & definition"
      image={{ src: imageChatGpt, flipped: true }}
    >
      <div className="space-y-6 text-sm text-muted-foreground md:text-base">
        <p>
          Based on our suspiciously thorough discovery, we&apos;ll{' '}
          <strong className="font-semibold text-primary">
            craft a roadmap
          </strong>{' '}
          that looks impressive on paper.
        </p>
        <p>
          In reality, it&apos;s our best guess at turning your vague ideas into
          something resembling what you asked for.
        </p>
        <p>
          We&apos;ll talk about synergy and growth hacking after fussing with
          ChatGPT on those topics. The more impressive our charts and graphs
          look, the less likely you are to notice we&apos;re winging it.
        </p>
        <p>
          And hey, if things start to look questionable, we&apos;ll claim
          it&apos;s a bold, disruptive strategy. No one understands what that
          means anyway.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Joseph O.', role: 'Former Pro Football Player' }}
        className="mt-12"
      >
        When the folks at Yo CXO said their delivery is on time, I didn&apos;t
        think they were referring only to their invoices.
      </Blockquote>
      <ImageCredit
        photographerName="Jonathan Kemper"
        photographerUrl="https://unsplash.com/@jupp?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        photoUrl="https://unsplash.com/photos/a-close-up-of-a-computer-screen-with-a-purple-background-N8AYH8R2rWQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
      />
    </Section>
  );
}
