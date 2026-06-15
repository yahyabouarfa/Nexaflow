# NexaFlow Agent

Premium one-page Next.js landing website for an AI automation agency / AI agent SaaS brand.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Check

```bash
npm run lint
npm run build
```

## Deploy On Vercel

1. Push this project to a GitHub, GitLab, Bitbucket, or Azure DevOps repository.
2. In Vercel, choose **Add New Project** and import the repository.
3. Keep the default Next.js settings:
   - Framework Preset: `Next.js`
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: leave blank
4. Click **Deploy**.

Vercel will redeploy automatically when you push future changes to the production branch.

## Edit Brand Content

- Website copy, nav links, pricing, and contact details: `src/lib/content.ts`
- Global colors and theme tokens: `src/app/globals.css`
- Logo asset: `public/logo-transparent.png`
- Browser icons: `public/favicon.ico`, `public/icon.png`, `public/apple-icon.png`
