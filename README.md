# VDOJAR 

Best OTT platform for indie films, redesigned with a Netflix-inspired experience and built on Next.js.

## Stack & Project Structure

- **Framework:** Next.js 15 (App Router) with React 19 and TypeScript
- **Styling:** Tailwind CSS v4 with design tokens for VDOJAR branding
- **Carousel:** Embla for the hero slider and progressive enhancement of content rails
- **Assets:** Static artwork and posters sourced from [vdojar.com](https://vdojar.com) and stored in `public/media`
- **Key directories:**
  - `src/app` – App router entry points, layout, global styles
  - `src/components` – Layout primitives, UI elements, and homepage sections
  - `src/data` – Static JSON-like seeds ready to swap with future APIs
  - `src/types` – Type definitions shared across the UI

## Getting Started

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000) to view the experience.

## Features in This Iteration

- Responsive Netflix-style layout with sticky navigation, hero carousel, and horizontal rails
- Curated content rows (`Trending Now`, `Navratri Special`, `Documentaries`, `Short Films`) powered by reusable data contracts
- Accessibility-first touches: skip link, focus states, semantic sectioning, reduced motion-friendly scrolling
- Download/app call-to-action banner and continue-watching placeholder ready for real profiles

## Next Steps

- Replace static seeds in `src/data` with live API calls when backend endpoints are ready
- Flesh out detail pages (`/movie/[id]`, `/series/[id]`) and filters in dedicated routes
- Integrate authentication flows for **Sign In** and **Join Free** actions
- Add unit tests and visual regression coverage once core flows expand

---

Maintained with ❤️ for indie filmmakers and cinephiles.
