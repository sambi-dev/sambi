<a href="https://coco.yocxo.com/">
  <img alt="Next.js 14 and App Router-ready AI chatbot." src="../coco/src/app/opengraph-image.gif">
  <h1 align="center">:: CocoGPT by Yo CXO :: Powered by Vercel ::</h1>
</a>

So, you want to create a ChatGPT wrapper? You've got a game-changing idea that people are practically begging for. Because the world desperately needs another AI product that'll ~~be outdated in a month~~ solve all their problems.

But this isn't your average project. The [geniuses at Vercel](https://vercel.com) built something remarkable. We forked it and added that signature Yo CXO touch. Get ready for a chatbot that's as unique as it is powerful.

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#model-providers"><strong>Model Providers</strong></a> ·
  <a href="#running-locally"><strong>Running locally</strong></a> ·
  <a href="#authors"><strong>Authors</strong></a> ·
  <a href="#license"><strong>License</strong></a>
</p>
<br/>

## :: Features ::

- [Next.js 14](https://nextjs.org)
- [React Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components) (RSCs), Suspense, and Server Actions to keep things smooth
- **Streamable UI components** with generative UI composed by [shadcn/ui](https://ui.shadcn.com) and [v0 by Vercel](https://v0.dev)
  - Yeah we know this is kind of old school when you think about it, but still pretty f'in sweet to experience.
- [Vercel AI SDK](https://sdk.vercel.ai/docs) for a seamless streaming chat UI
- Support for OpenAI (default), Anthropic, Cohere, Hugging Face, or custom AI chat models and/or LangChain
- [shadcn/ui](https://ui.shadcn.com)
  - Styling with [Tailwind CSS](https://tailwindcss.com) to keep it fresh
  - Icons from [Pika Icons](https://pikaicons.com/) to add some warmth
- Chat History, rate limiting, and session storage with [Vercel KV](https://vercel.com/storage/kv)
- [NextAuth.js](https://github.com/nextauthjs/next-auth)

## :: Model providers ::

This template ships with OpenAI `gpt-3.5-turbo` as the default. However, thanks to the [Vercel AI SDK](https://sdk.vercel.ai/docs), you can switch LLM providers to [Anthropic](https://anthropic.com), [Cohere](https://cohere.com/), [Hugging Face](https://huggingface.co), or using [LangChain](https://js.langchain.com) with just a few lines of code. Variety? ✅

## :: Creating a KV database instance ::

Follow the steps outlined in the [quick start guide](https://vercel.com/docs/storage/vercel-kv/quickstart#create-a-kv-database) provided by Vercel. This guide will assist you in creating and configuring your KV database instance on Vercel, enabling your application to interact with it.

Remember to update your environment variables `KV_URL`, `KV_REST_API_URL`, `KV_REST_API_TOKEN`, `KV_REST_API_READ_ONLY_TOKEN` in the `.env` file with the appropriate credentials provided during the KV database setup. No one likes a misconfigured chatbot.

## :: Setting up your own playground ::

Want to roll out your own CocoGPT? You've got two options. Clone the whole Turborepo—a big job—or take the smart shortcut.

### :: The whole shebang ::

Check out the [README.md](/README.md) in the root for the grand tour on cloning the entire Turborepo.

### :: The smart shortcut ::

1. Fork the [Vercel Chat template](https://github.com/vercel/ai-chatbot). This is your starting line.
2. Copy our customizations over. Yes, it's a bit manual, but it's a time-saver compared to wrestling with the entire Turborepo.

## :: Running locally ::

Got your setup ready? Sweet. Here's how to get it running on your machine:

1. **Environment Setup**: Grab the `.env.example` file, fill it with your secrets and rename it to `.env`. Keep it safe and don't share it!
2. **Vercel CLI Magic**: Install the Vercel CLI with `pnpm i -g vercel`, then link your project with `vercel link`. Pull your env vars with `vercel env pull`.
3. **Get It Running**: Install dependencies with `pnpm install` and then kick things off with `pnpm dev`.

Boom, your very own CocoGPT should now be snorting along on [localhost:3003](http://localhost:3003/). Enjoy.

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control access to your various OpenAI and authentication provider accounts. And that's just asking for trouble.

## Authors

This project was built on the shoulders of giants at [Vercel](https://vercel.com) and the [Next.js](https://nextjs.org) team members:

- Jared Palmer ([@jaredpalmer](https://twitter.com/jaredpalmer)) - [Vercel](https://vercel.com) 😳
- Shu Ding ([@shuding\_](https://twitter.com/shuding_)) - [Vercel](https://vercel.com) 🤩
- shadcn ([@shadcn](https://twitter.com/shadcn)) - [Vercel](https://vercel.com) 😎

### Power ups by

- Ambreen Dar ([@breenzy](https://twitter.com/breenzy)) - [yocxo.com](https://yocxo.com/about#ambreen)
- Rebekah Radice ([@rebekahradice](https://twitter.com/rebekahradice)) - [yocxo.com](https://yocxo.com/about#rebekah)
- Sam Rizvi ([@srizvi](https://github.com/srizvi)) - [yocxo.com](https://yocxo.com/about#sam)

## License

This project is licensed under the Apache License 2.0. It includes the original license by Vercel, Inc and ours. See the [LICENSE](LICENSE) file the finer details.
