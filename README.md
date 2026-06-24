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

## n8n Chatbot

The floating chatbot uses the official `@n8n/chat` package. The browser sends chat
requests to the same-origin Next.js route at `/api/n8n-chat`, and that route forwards
requests to the n8n Chat Trigger URL from:

```bash
NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL
```

For local development, copy `.env.example` to `.env.local` and set the production n8n Chat Trigger webhook URL.

To update the production chatbot:

1. Open n8n.
2. Publish and activate the Chat Agent workflow.
3. Copy the production Chat URL from the Chat Trigger.
4. Add it to Vercel Environment Variables as `NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL`.
5. Redeploy the website so Next.js includes the public variable in the client bundle.

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
