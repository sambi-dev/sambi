# Yo! CXO goes T3 Turbo

Welcome to Yo! CXO, the digital frontier where tech meets design with a dash of marketing genius. Here, Ambreen crafts visuals that pop, Sam tinkers with tech, and Rebekah drives demand. It's our open source playground—from code to coffee quirks.

### What's Inside

Dive into our collective wisdom, where success and slip-ups coexist. This space is more than a showcase, it's a toolkit for those daring to freelance with flair and function. Expect real talk, practical tips, and a glimpse into the freelance hustle.

### Who's This For?

- **Developers:** Explore and experiment with our repos. Innovation encouraged, caution advised.
- **Clients:** Discover how we blend creativity and strategy and apply it to your digital presence.
- **Freelancers:** Unearth insights to fuel your journey.

## t3-oss ftw

### Shoutout to t3-oss and Julius Marminge

**Heads Up!**  
A nod to the groundbreaking efforts of [Julius Marminge](https://github.com/juliusmarminge) and the [t3-oss](https://github.com/t3-oss) team. We've adopted T3 Turbo, adding our twist to the mix.

**Good News**  
Julius and the team's foundational work means OAuth runs smoothly, even in previews. Dive into our [deployment guide](https://github.com/yocxo/studio?tab=readme-ov-file#auth-proxy) and explore the mechanics in the [source](./apps/auth-proxy).

## Installation

### Getting Started

Clone the `yocxo` repository to dive into our digital world:

```bash
git clone https://github.com/yocxo/studio.git
```

For an optimal setup, we recommend using PNPM as your package manager.

**Note:**  
This repository serves as a springboard, not a template. For a generic start, lean in to the command line to spin up `create-t3-turbo` with:

```bash
npx create-turbo@latest -e https://github.com/t3-oss/create-t3-turbo
```

## About This Repo

Discover how to navigate the Turborepo landscape, inspired by t3-oss. Our take builds upon their create-t3-turbo, offering a unique Yo! CXO flavor.

With [Turborepo](https://turborepo.org), we amplify our T3 applications, crafting a boilerplate for agencies and freelancers alike. It's designed as a launchpad for your projects, providing a sturdy, scalable foundation with room for your creative flair.

Ideal for agencies seeking streamlined development or freelancers aiming to enhance their portfolio. We've handled the groundwork, enabling you to concentrate on developing standout apps and experiences.

```text
.github
├── workflows
│   └── CI with pnpm cache setup
.vscode
└── Recommended extensions and settings for VSCode users
apps
├── auth-proxy
│   ├── Nitro server to proxy OAuth requests in preview deployments
│   └── Uses Auth.js Core
├── expo
│   ├── Expo SDK 49
│   ├── React Native using React 18
│   ├── Navigation using Expo Router
│   ├── Tailwind using NativeWind
│   └── Typesafe API calls using tRPC
├── next.js
│   ├── Next.js 14
│   ├── React 18
│   ├── Tailwind CSS
│   └── E2E Typesafe API Server & Client
└── web
    ├── Next.js 14
    ├── React 18
    ├── Tailwind CSS
    └── E2E Typesafe API Server & Client
packages
├── api
│   └── tRPC v11 router definition
├── auth
│   └── Authentication using next-auth. **NOTE: Only for Next.js app, not Expo**
├── db
│   └── Typesafe db calls using Drizzle & Planetscale
└── ui
    └── Start of a UI package for the webapp using shadcn-ui
tooling
├── eslint
│   └── shared, fine-grained, eslint presets
├── prettier
│   └── shared prettier configuration
├── tailwind
│   └── shared tailwind configuration
└── typescript
    └── shared tsconfig you can extend from
```

> **Template Tip:**  
> We use `@yocxo` as a placeholder for package names. For a personal touch, substitute `@yocxo` with your organization or project name using find-and-replace. This ensures cleaner imports and a customized codebase.

## Quick Start

> **Note:**  
> The `db` package is set up for PlanetScale with the [database.js](https://github.com/planetscale/database-js) driver. To switch to a different database, update the [schema](./packages/db/src/schema), [client](./packages/db/src/index.ts), and [drizzle config](./packages/db/drizzle.config.ts) accordingly.
>
> For guidance on using a non-edge database driver, see [this discussion](https://github.com/t3-oss/create-t3-turbo/issues/634#issuecomment-1730240214) in the `create-t3-turbo` repo.

To get it running, follow the steps below:

### 1. Setup Dependencies

```bash
# Install dependencies
pnpm i

# Configure environment variables
# Use `.env.example` in the root for reference
cp .env.example .env

# Push the Drizzle schema to the database
pnpm db:push
```

### 2. Configure Expo `dev`-script

#### Use iOS Simulator

1. Ensure XCode and XCommand Line Tools are installed as per the [Expo documentation](https://docs.expo.dev/workflow/ios-simulator).

   > **NOTE:** Post XCode installation or update, manually launch the simulator once. Execute `npx expo start` in the root directory, then press `I` to open Expo Go. Subsequently, `pnpm dev` can be used for launching.

   ```diff

   + "dev": "expo start --ios",
   ```

2. Run `pnpm dev` at the project root folder.

#### Android Emulator Setup

1. Install Android Studio tools following the [Expo documentation](https://docs.expo.dev/workflow/android-studio-emulator). It's a crucial step for mobile development.

2. Update the `dev` script in `apps/expo/package.json`:

   ```diff
   +  "dev": "expo start --android",
   ```

3. To launch, execute `pnpm dev` in the project's root directory and witness the setup in action.

> **TIP:** Maintain clarity by running each app in a separate terminal window. This allows distinct log tracking and interactive terminal use, like accessing the Expo QR code. Utilize `pnpm --filter expo dev` and `pnpm --filter nextjs dev` for focused app execution.

### 3. When it's time to add a new UI component

Run the `ui-add` script to install a new shadcn/ui in the shared packages workspace via the interactive `shadcn/ui` CLI:

```bash
pnpm ui-add
```

Once the component(s) has been installed, you'll be able to import it inside your apps.

### 4. Adding a New Package

To add a new package to your Turborepo, simply run `pnpm turbo gen init` at the root. The guided setup will ask for the package name and handle dependencies, which you can add immediately or later.

The generator prepares everything for you: `package.json`, `tsconfig.json`, and `index.ts`, along with configurations for formatting, linting, and typechecking. This streamlined process lets you focus on development right away.

Julius's comprehensive approach ensures a smooth start, saving time and effort. 👏🏽

## FAQ

### What's the deal with Solito? Is it included in this starter?

Nope, Solito isn't part of this Turborepo starter. While Solito excels at bridging Next.js and Expo apps, our repo focuses on showcasing a T3 App within a Turborepo context. The Expo app serves as an illustrative example, demonstrating Turborepo's flexibility with different app types, such as Vite or Electron.

Interested in integrating Solito? Follow the [official Solito templates](https://github.com/nandorojo/solito/tree/master/example-monorepos) for guidance. This doesn't preclude Solito's use here; it's simply not the primary focus. Feel encouraged to tailor the starter to your project needs!

### Best Auth Solutions for Expo without Next-Auth.js

For Expo projects, explore alternatives like [Clerk](https://clerk.dev), [Supabase Auth](https://supabase.com/docs/guides/auth), [Firebase Auth](https://firebase.google.com/docs/auth/), and [Auth0](https://auth0.com/docs/). Each offers a comprehensive authentication framework suitable for various app types.

- **Clerk:** Find integration insights with an [official template](https://github.com/clerkinc/t3-turbo-and-clerk) for T3 Turbo.
- **Supabase Auth:** Check out Supabase's [fork](https://github.com/supabase-community/create-t3-turbo) of the repo, highlighted during their Launch Week 7.

Switching to a browser-centric approach? Next-Auth.js remains viable, as demonstrated in [Plasmo Chrome Extension examples](https://github.com/t3-oss/create-t3-turbo/tree/chrome/apps/chrome). These resources offer various pathways to integrate robust authentication into your project.

### Backend Secrets and Client Apps

Fear not! Backend secrets remain secure with our setup. The `api` package functions as a production dependency solely within the Next.js app, safeguarding server-side logic. In contrast, for the Expo app and any future additions, `api` serves merely as a dev dependency, enabling typesafety without risking exposure.

For sharing runtime code (e.g., input validation schemas) between client and server, a `shared` package provides a straightforward solution. Import it as needed to maintain both functionality and security seamlessly.

## Deployment

### Next.js

#### Prerequisites

> **Note:**  
> Ensure the Next.js app is deployed with tRPC to facilitate communication with the Expo app in production.

#### Deploy to Vercel

Vercel simplifies the deployment of your Next.js application.

For newcomers to Vercel and Turborepo deployments, refer to the [official Turborepo guide](https://vercel.com/docs/concepts/monorepos/turborepo) for detailed instructions.

1. Initiate a Vercel project, specifying the `apps/web` directory as the project root. Vercel's zero-config setup does the heavy lifting.
2. Integrate your `DATABASE_URL` into the project's environment variables.
3. Once deployed, assign your domain and update the Expo app's `url` to reflect the production backend, replacing `localhost`.

This setup ensures seamless backend communication for your Expo app in a production environment.

### Auth Proxy

The auth proxy, a Nitro server, facilitates OAuth requests during preview deployments, distinct from production OAuth use. For straightforward implementation, Vercel Edge functions are recommended.

Deployment guidelines are available in the [Nitro documentation](https://nitro.unjs.io/deploy/providers/vercel#vercel-edge-functions).

#### Environment Variables Setup

- **Next.js app:** Define `AUTH_REDIRECT_PROXY_URL` with the auth proxy URL.
- **Auth proxy server:** Configure `AUTH_REDIRECT_PROXY_URL` (as above), `AUTH_DISCORD_ID`, `AUTH_DISCORD_SECRET` (or your OAuth provider's equivalent), and `AUTH_SECRET` (align with the Next.js app's value in previews).

For comprehensive instructions, refer to [the auth proxy README](./apps/auth-proxy/README.md).

### Expo

Deploying your Expo app is a bit different than deploying a Next.js web app. Instead of "deploying" online, you submit production builds to app stores like [Apple App Store](https://www.apple.com/app-store) and [Google Play](https://play.google.com/store/apps). Check out the full [guide to distributing your app](https://docs.expo.dev/distribution/introduction) in the Expo docs for best practices.

1. Update the `getBaseUrl` function to point to your production backend URL:
   https://github.com/yocxo/studio/blob/656965aff7db271e5e080242c4a3ce4dad5d25f8/apps/expo/src/utils/api.tsx#L20-L37

2. Set up [EAS Build](https://docs.expo.dev/build/introduction) to create builds without a full native dev setup:

   ```bash
   pnpm add -g eas-cli
   eas login
   cd apps/expo
   eas build:configure
   ```

3. Create your first build (e.g., iOS production build):

   ```bash
   eas build --platform ios --profile production
   ```

4. Submit the build to the app stores using [EAS Submit](https://docs.expo.dev/submit/introduction):

   ```bash
   eas submit --platform ios --latest
   ```

5. Provide additional info to app stores (screenshots, app info, privacy policies, etc.) using [EAS Metadata](https://docs.expo.dev/eas/metadata).

6. Set up EAS Update for quick bug fixes:

   ```bash
   cd apps/expo
   pnpm expo install expo-updates
   eas update:configure
   ```

7. Create a new build and submit it to the app stores (see steps 2 and 3).

8. Create a new update for `production` builds:

   ```bash
   cd apps/expo
   eas update --auto
   ```

9. That's it! You're now set up for production builds, app store submissions, and EAS Updates.

## References

Our project stands on the groundbreaking work of [create-t3-app](https://github.com/t3-oss/create-t3-app) from the innovative team at t3-oss.

For an in-depth look at how t3-oss transformed a T3 app into a turbo-powered ecosystem, dive into Julius's [blog post](https://jumr.dev/blog/t3-turbo) for the full story.
