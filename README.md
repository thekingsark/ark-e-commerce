[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fprodigycommerce%2Fnextjs-commerce&project-name=commerce&repo-name=commerce&demo-title=Next.js%20Commerce&env=COMPANY_NAME,PRODIGY_API_DOMAIN,PRODIGY_STORE_TOKEN,SITE_NAME,TWITTER_CREATOR,TWITTER_SITE)

# Next.js Commerce for Prodigy Commerce

A high-perfomance, server-rendered Next.js App Router ecommerce application template to use with Prodigy Commerce.

This template uses React Server Components, Server Actions, `Suspense`, `useOptimistic`, and more.

<h3 id="v1-note"></h3>

> Note: You can also refer to Vercel's original Next.js Commerce [here](https://github.com/vercel/commerce/tree/v1)

## Running locally

You will need to use the environment variables [defined in `.env.example`](.env.example) to run Next.js Commerce. It's recommended you use [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables) for this, but a `.env` file is all that is necessary.

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control your Prodigy Commerce store.

1. Install Vercel CLI: `npm i -g vercel`
2. Link local instance with Vercel and GitHub accounts (creates `.vercel` directory): `vercel link`
3. Download your environment variables: `vercel env pull`

```bash
pnpm install
pnpm dev
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Vercel, Next.js Commerce, and Prodigy Commerce Integration Guide

In near future this section will contain instructions to quickly set up your app.
