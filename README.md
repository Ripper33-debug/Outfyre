# OUTFYRE

Premium interactive marketing site for **OUTFYRE** — an AI lead generation agency.

Dark, cinematic, and deeply interactive. Built with Next.js 14, Framer Motion, GSAP, Three.js, and Lenis smooth scrolling.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** — micro-interactions, hero animations, spring physics
- **Three.js / React Three Fiber** — 3D hero background
- **GSAP ScrollTrigger** — scroll reveals, horizontal process section, counters
- **Lenis** — buttery smooth scrolling

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Update the Calendly booking URL in `src/lib/constants.ts`:

```ts
export const CALENDLY_URL = "https://calendly.com/your-link";
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — no extra config needed
4. Deploy

Or use the CLI:

```bash
npm i -g vercel
vercel
```

## Features

- Custom animated cursor with glowing orange orb + trail
- Magnetic hover buttons with spring physics
- Word-by-word hero headline animation
- Lenis smooth scroll synced with GSAP ScrollTrigger
- Horizontal scroll "How It Works" section
- Mouse-tracking spotlight cards
- Animated metric counters on scroll
- Canvas ember particle system
- Three.js floating orb background
- Frosted glass navigation on scroll
- Calendly booking modal
- Full `prefers-reduced-motion` support

## Project Structure

```
src/
├── app/              # Next.js App Router
├── components/
│   ├── effects/      # 3D background, ember particles
│   ├── providers/    # Lenis + GSAP + booking context
│   ├── sections/     # Page sections
│   └── ui/           # Reusable UI components
├── hooks/            # Reduced motion, media queries
└── lib/              # Constants & content
```

## License

Private — OUTFYRE © 2026
