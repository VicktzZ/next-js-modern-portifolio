# vitor.dev

My personal portfolio site.

[vitordev-one.vercel.app](https://vitordev-one.vercel.app)

## Pages

- **Home**: introduction with animated typing
- **About**: background and skills, with scroll-driven animation
- **Portfolio**: project gallery that scrolls horizontally as you scroll down
- **Contact**: form that sends email through EmailJS, with no backend

Route changes are animated with a shared Framer Motion transition.

## Stack

Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion,
EmailJS.

## Running locally

```bash
npm install
npm run dev
```

The contact form needs three EmailJS values in `.env.local`:
`NEXT_PUBLIC_SERVICE_ID`, `NEXT_PUBLIC_TEMPLATE_ID` and
`NEXT_PUBLIC_PUBLIC_KEY`.
