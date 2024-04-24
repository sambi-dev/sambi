import type { NextPage } from 'next';

import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage: NextPage = () => {
  return (
    <div className="relative isolate min-h-full">
      <Image
        width={1920}
        height={1080}
        src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-top grayscale"
      />
      <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
        <p className="font-medium leading-8 text-white">404</p>
        <h1 className="mt-4 text-3xl font-medium text-white">Page not found</h1>
        <p className="mt-4 text-white/80 sm:mt-6">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="font-sans text-sm font-medium leading-7 tracking-normal text-white"
          >
            <span aria-hidden="true">&larr;</span> Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
