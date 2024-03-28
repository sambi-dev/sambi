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
          Based on our suspiciously thorough discovery, we&apos;ll begin to{' '}
          <strong className="font-semibold text-primary">
            craft a roadmap
          </strong>
          . If the previous stage was about knowing where we&apos;re at, this is
          all about where we&apos;re going.
        </p>
        <p>
          The catch? We&apos;re going to{' '}
          <span className="line-through">ignore what you want</span> reflect on
          what you asked for and deliver a plan that focuses on the{' '}
          <strong className="font-semibold text-primary">
            results you need
          </strong>
          .
        </p>
        <p>
          During this phase, our clients are surprised by how long{' '}
          <span className="line-through">ChatGPT</span> it takes us to produce a
          two-page{' '}
          <strong className="font-semibold text-primary">
            outcome driven plan
          </strong>
          .
        </p>
        <p>
          One for the{' '}
          <strong className="font-semibold text-primary">strategy map </strong>{' '}
          and the other a{' '}
          <strong className="font-semibold text-primary">
            lean set of initiatives
          </strong>{' '}
          with{' '}
          <strong className="font-semibold text-primary">
            key measurements
          </strong>
          .
        </p>
        <p>
          If things start to look questionable, we&apos;ll just label it as a
          bold, synergistic, and transformational strategy. That heading usually
          does the trick.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Joseph O.', role: 'Former Pro Football Player' }}
        className="mt-12"
      >
        When the folks at Yo! CXO said their delivery is on time, I didn&apos;t
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
