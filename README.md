# Gem Store

A gaming gem top-up website where players can purchase gem packs of varying sizes to use in-game. Built with TanStack Start and deployed on Netlify, with Stripe handling secure checkout.

## Features

- Six gem packs from Starter to Legend, each with bonus gems
- Stripe-powered secure checkout
- Instant gem delivery flow with success/cancel pages
- Dark purple gaming aesthetic with glassmorphism cards

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (SSR) |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Payments | Stripe Checkout |
| Deployment | Netlify |

## Running Locally

```bash
# Install dependencies
npm install

# Set required environment variable
STRIPE_SECRET_KEY=sk_test_...

# Start dev server
npm run dev
```

The app runs at `http://localhost:3000`.

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `STRIPE_SECRET_KEY` | Yes | Stripe secret key for checkout sessions |
| `SITE_URL` | Optional | Base URL for Stripe redirect (defaults to localhost) |
