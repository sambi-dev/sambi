/**
 * Inspired by v0 by Vercel.
 * @see https://v0.dev/t/QymconjlUzC
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@yocxo/ui/card';

import {
  calculateNPSAndCounts,
  mockWarningsForAiSummary,
} from '#/content/warnings';
import perplexityAiImage from '#/images/llms/perplexity.jpg';

interface NPSData {
  nps: number;
  promoters: number;
  passives: number;
  detractors: number;
  totalRespondents: number;
  relativeNPS: number;
  benchmarkNPS: number;
}

const getNPSData = (reviews: typeof mockWarningsForAiSummary): NPSData => {
  const {
    nps,
    promoters,
    passives,
    detractors,
    totalRespondents,
    relativeNPS,
    benchmarkNPS,
  } = calculateNPSAndCounts(reviews);
  return {
    nps,
    promoters,
    passives,
    detractors,
    totalRespondents,
    relativeNPS,
    benchmarkNPS,
  };
};

interface Props {
  summary: string;
}

export default function AIReviewSummary({ summary }: Props) {
  const {
    nps,
    promoters,
    passives,
    detractors,
    totalRespondents,
    relativeNPS,
    benchmarkNPS,
  } = getNPSData(mockWarningsForAiSummary);

  const npsEvaluation = nps > 76 ? 'pretty, pretty, pretty good' : 'horrible';

  return (
    <Card className="grid grid-cols-1 rounded-4xl border-primary/50 bg-card p-8 shadow-lg sm:col-span-2 sm:mx-auto xl:col-start-2 xl:row-end-1">
      <CardHeader className="mt-4 items-center gap-4 space-y-0 p-0">
        <div className="grid gap-1 text-center">
          <CardTitle className="flex flex-col font-mono text-2xl font-semibold tracking-tighter">
            Mock Net Promoter Score
          </CardTitle>
          <CardDescription className="flex flex-col items-center gap-2">
            <span className="flex justify-center text-xs">
              Based on {totalRespondents} mock respondents
            </span>
            <span className="my-6 flex font-mono text-[3rem] font-semibold tracking-tighter text-primary md:text-[4rem]">
              {nps}
            </span>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4 p-0">
        <div className="mt-2 text-pretty text-sm leading-loose text-secondary-foreground">
          {summary} Yo! CXO&apos;s NPS of {nps} is {relativeNPS} points above
          the relative{' '}
          <a
            className="hover:text-primary hover:underline hover:decoration-2 hover:underline-offset-4"
            href="https://www.retently.com/blog/good-net-promoter-score/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Navigate to view industry benchmarks for NPS in a new window on Retently blog"
          >
            industry benchmark
          </a>{' '}
          of {benchmarkNPS}. That is {npsEvaluation}.
        </div>
        <p className="mt-1 text-center text-xs leading-loose text-alternate">
          {promoters} highly recommend, {passives} ghosted, and {detractors}{' '}
          hater.
        </p>
      </CardContent>
      <CardFooter className="mt-4 flex items-center gap-4 border-t border-foreground/20">
        <div className="flex-auto text-right font-mono font-semibold leading-6 tracking-tight">
          <div className="mt-4 text-sm text-foreground md:text-base">
            NPS Sentiment analysis
          </div>
          <div className="text-sm text-muted-foreground">By Perplexity AI</div>
        </div>
        <Image
          width={80}
          height={80}
          className="mt-4 hidden size-12 w-auto flex-none rounded-full border shadow-md sm:block"
          src={perplexityAiImage}
          alt=""
        />
      </CardFooter>
    </Card>
  );
}
