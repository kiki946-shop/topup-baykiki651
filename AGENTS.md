# AGENTS.md

## Project Overview

A gem top-up ecommerce site for gaming. Players browse gem packs, select one, and pay via Stripe Checkout. Built on TanStack Start (file-based SSR routing) and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Payments | Stripe Checkout |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
src/
  data/products.ts          # Gem pack catalog (id, name, gems, bonus, price, popular)
  routes/
    index.tsx               # Home page — GemStore grid of GemCard components
    products/$productId.tsx # Product detail page
    checkout/success.tsx    # Post-payment success page
    checkout/cancel.tsx     # Cancelled checkout page
  components/
    BuyButton.tsx           # Stripe checkout trigger; disables if STRIPE_SECRET_KEY unset
  lib/
    stripe.ts               # Server functions: getStripeEnabled, createCheckoutSession
  styles.css                # Tailwind + gem-card / buy-btn / hero-glow CSS classes
```

## Key Concepts

### Adding a Gem Pack

Add an entry to `src/data/products.ts`. The `Product` interface requires `id`, `name`, `gems`, `bonus`, `price`, `description`, `shortDescription`, and optionally `popular: true`. Add a matching entry in `GEM_THEMES` in `src/routes/index.tsx` for the card color/icon.

### Stripe Integration

`createCheckoutSession` in `src/lib/stripe.ts` is a TanStack Start server function (POST). It reads `STRIPE_SECRET_KEY` from env. If the key is absent, `BuyButton` renders as disabled. Price is stored as dollars in product data and converted to cents for Stripe.

### File-Based Routing

Routes are defined by files in `src/routes/`:
- `__root.tsx` — Root layout (head tags, styles)
- `index.tsx` — Main gem store page
- `api.*.ts` — Server API endpoints

### Styling Conventions

- Dark glassmorphism gaming aesthetic throughout
- `gem-card` class for frosted-glass cards
- `buy-btn` class for purple gradient purchase CTAs
- `hero-glow` for the heading text shadow effect
- Tailwind utility classes for layout/spacing

## Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite plugins: TanStack Start, Netlify, Tailwind |
| `tsconfig.json` | TypeScript config with `@/*` alias for `src/*` |
| `netlify.toml` | Build command, output directory, dev server settings |
| `styles.css` | Tailwind + custom CSS classes |

## Environment Variables

```
STRIPE_SECRET_KEY=...  # Required for Stripe checkout
SITE_URL=...           # Optional: base URL for redirect after payment
```

## Conventions

- TypeScript strict mode, `@/` alias for `src/`
- Components: PascalCase; utilities: camelCase; routes: kebab-case
- Server-only logic in `src/lib/*.ts` as `createServerFn` calls
- React hooks for local state only (no global state library)

## Project Overview

An interactive resume/portfolio application with an AI-powered assistant. Built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| UI Components | Radix UI + custom components |
| Content | Content Collections (type-safe markdown) |
| AI | TanStack AI with multi-provider support |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   ├── favicon.ico
│   ├── logo.png
│   ├── tanstack-circle-logo.png
│   └── tanstack-word-logo-white.svg  # TanStack wordmark logo (white) used in header/nav.
├── src
│   ├── components
│   │   ├── BuyButton.tsx  # Stripe checkout button component.
│   │   ├── Header.tsx  # Header with nav.
│   │   ├── HeaderNav.tsx  # Navigation sidebar template: mobile menu, Home link, add-on routes; EJS-driven for dynamic route generation.
│   │   ├── ProductAIAssistant.tsx  # AI shopping assistant component.
│   │   └── ProductRecommendation.tsx  # Product recommendation card display.
│   ├── data
│   │   └── products.ts  # Product catalog data.
│   ├── lib
│   │   ├── product-ai-hook.ts  # useProductChat hook for /api/product-chat.
│   │   ├── product-tools.ts  # AI tools: getProducts, recommendProduct.
│   │   └── stripe.server.ts  # Stripe server utilities for checkout.
│   ├── routes
│   │   ├── checkout
│   │   │   ├── cancel.tsx  # Stripe checkout cancel page.
│   │   │   └── success.tsx  # Stripe checkout success page.
│   │   ├── products
│   │   │   └── $productId.tsx  # Product detail page with BuyButton, recommendation.
│   │   ├── __root.tsx  # Root layout: Header, styles.
│   │   ├── api.product-chat.ts  # POST handler for product AI chat.
│   │   └── index.tsx  # Product catalog home with ProductAIAssistant.
│   ├── store
│   │   └── product-assistant.ts  # Zustand store for assistant open state.
│   ├── router.tsx  # TanStack Router setup: creates router from generated routeTree with scroll restoration.
│   └── styles.css  # Global styles: Tailwind, prose.
├── .gitignore  # Template for .gitignore: node_modules, dist, .env, .netlify, .tanstack, etc.
├── AGENTS.md  # This document provides an overview of the project structure for developers and AI agents working on this codebase.
├── netlify.toml  # Netlify deployment config: build command (vite build), publish directory (dist/client), and dev server settings (port 8888, target 3000).
├── package.json  # Project manifest with TanStack Start, React 19, Vite 7, Tailwind CSS 4, and Netlify plugin dependencies; defines dev and build scripts.
├── pnpm-lock.yaml
├── tsconfig.json  # TypeScript config: ES2022 target, strict mode, @/* path alias for src/*, bundler module resolution.
└── vite.config.ts  # Vite config template: TanStack Start, React, Tailwind, Netlify plugin, and optional add-on integrations; processed by EJS.
```

## Key Concepts

### File-Based Routing (TanStack Router)

Routes are defined by files in `src/routes/`:

- `__root.tsx` - Root layout wrapping all pages
- `index.tsx` - Route for `/`
- `api.*.ts` - Server API endpoints (e.g., `api.resume-chat.ts` → `/api/resume-chat`)

### Component Architecture

**UI Primitives** (`src/components/ui/`):
- Radix UI-based, Tailwind-styled
- Card, Badge, Checkbox, Separator, HoverCard

**Feature Components** (`src/components/`):
- Header, HeaderNav, ResumeAssistant

## Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite plugins: TanStack Start, Netlify, Tailwind, Content Collections |
| `tsconfig.json` | TypeScript config with `@/*` path alias for `src/*` |
| `netlify.toml` | Build command, output directory, dev server settings |
| `content-collections.ts` | Zod schemas for jobs and education frontmatter |
| `styles.css` | Tailwind imports + CSS custom properties (oklch colors) |

## Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Conventions

### Naming
- Components: PascalCase
- Utilities/hooks: camelCase
- Routes: kebab-case files

### Styling
- Tailwind CSS utility classes
- `cn()` helper for conditional class merging
- CSS variables for theme tokens in `styles.css`

### TypeScript
- Strict mode enabled
- Import paths use `@/` alias
- Zod for runtime validation
- Type-only imports with `type` keyword

### State Management
- React hooks for local state
- Zustand if you need it for global state
### Ecommerce Integration

Ecommerce site with Stripe checkout and AI shopping assistant.

**Stripe checkout:**
- `createCheckoutSession` server function in `src/lib/stripe.server.ts`
- BuyButton component redirects to Stripe Checkout
- Routes: `/checkout/success`, `/checkout/cancel`

**AI tools available:**
- `getProducts` - Get all products from catalog
- `recommendProduct` - Display product recommendation card (MUST use for recommendations; do not write recommendations manually)

**Dependencies:** stripe, @tanstack/ai, streamdown

## Environment Variables

```
STRIPE_SECRET_KEY=...  # Required for checkout
```

For AI assistant: ANTHROPIC_API_KEY, OPENAI_API_KEY, GEMINI_API_KEY, or OLLAMA_BASE_URL (same as ai add-on).

## Application Name

This starter uses "Application Name" as a placeholder throughout the UI and metadata. Replace it with the user's desired application name in the following locations:

### UI Components
- `src/components/Header.tsx` — app name displayed in the header
- `src/components/HeaderNav.tsx` — app name in the mobile navigation header

### SEO Metadata
- `src/routes/__root.tsx` — the `title` field in the `head()` configuration

Search for all occurrences of "Application Name" in the `src/` directory and replace with the user's application name.
