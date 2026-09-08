# Short Explanation

## Design Decisions

The brief left visual direction open, so I avoided the generic "SaaS card kit"
look (uniform rounded cards, purple gradient blobs, centered hero with a stock
illustration). Instead:

- **Palette**: near-black ink (`#14161C`), warm paper (`#F7F5F1`), a single
  confident indigo accent (`#4C5FE0`) for primary actions, and a sparing amber
  (`#E8A33D`) reserved for highlights like the "most popular" pricing badge and
  the annual-savings pill — so it doesn't compete with the primary action color.
- **Typography**: Sora for headlines (geometric, has personality) and Public
  Sans for body copy (highly legible at small sizes) — two distinct families
  doing two different jobs, rather than one font stretched across every role.
- **Layout**: the hero is an asymmetric 60/40 split (copy + a mocked task-board
  card), not a centered stack. A faint background grid in the hero and final
  CTA echoes the "organizing work" subject matter without being decorative for
  its own sake.
- **Radius as hierarchy**: structural chrome (navbar, footer, page background)
  stays sharp-edged; only genuinely interactive surfaces (cards, buttons,
  modals) get rounded corners — so radius signals "you can act on this"
  instead of being applied uniformly everywhere.
- **Motion**: orchestrated fade-up on the hero at load, plus responsive user interactions (accordion expand, modal open, carousel transition, hover lift). Sections feature amplified scroll-triggered reveals (`ScrollReveal` component using `IntersectionObserver` with `-90px` bottom margin, 80px+ vertical glide, subtle scaling, and focal blur that snaps into clarity as you scroll), with strict `prefers-reduced-motion` compliance. Statistics also count up dynamically on scroll into view.

## Technology Choices

**React + TypeScript + Vite + Tailwind CSS.** React was preferred by the brief
and is what I already build with. TypeScript was worth the setup cost here
because there are five distinct content shapes (features, testimonials,
pricing plans, FAQs, stats) — typing them once in `src/types/index.ts` means
every component that maps over that data gets compile-time safety instead of
silently rendering `undefined`. Tailwind kept the design system (colors, type
scale, spacing, radius) centralized in `tailwind.config.js` instead of
scattered across component-level CSS files.

## Component Structure

- `components/layout/` — chrome that appears on every page: `Navbar`,
  `MobileMenu`, `Footer`, `BackToTopButton`.
- `components/sections/` — one component per required landing-page section,
  composed in order inside `App.tsx`. Each section owns its own layout but
  imports shared primitives for anything interactive.
- `components/ui/` — reusable primitives (`Button`, `Card`, `Badge`,
  `AccordionItem`, `ThemeToggle`, `PricingToggle`, `TestimonialCarousel`,
  `DemoModal`, `AnimatedCounter`, `NewsletterForm`) used across multiple
  sections so behavior (like hover/focus states) stays consistent everywhere
  instead of being redefined per section.
- `data/` — typed arrays of static content. Sections `.map()` over this data
  rather than hardcoding markup, so adding a 7th feature or a 4th pricing plan
  means editing one array, not the JSX.
- `hooks/` — `useTheme`, `useOnScreen` (IntersectionObserver wrapper for the
  animated counters), `useMediaQuery`, `useScrollSpy` (drives the active nav
  link).
- `context/ThemeContext.tsx` — holds dark/light state and syncs it to the
  `<html>` class and `localStorage`.

## Challenges Faced

The main issue was a dependency mismatch: the installed `lucide-react` version
no longer ships trademarked brand icons (`Github`, `Twitter`, `Linkedin`),
which broke the TypeScript build. I resolved it by swapping the footer's
social icons for generic ones (`Globe`, `Mail`, `MessageCircle`), which also
makes more sense for a fictional brand with no real social accounts to link to.

The other non-trivial piece was the FAQ accordion's height animation —
animating `height: auto` isn't natively supported by CSS transitions, so it
measures `scrollHeight` via a ref and animates to that pixel value instead.

## How AI Tools Were Used

I used Claude (via Antigravity) to scaffold and generate the project from a
detailed written specification covering every required section, interaction,
and bonus feature, plus the target tech stack and code-quality bar. I directed
the design tokens (palette, type, layout concept) rather than accepting
defaults, reviewed all generated component code, diagnosed and fixed the
lucide-react build error myself, and verified the project type-checks and
builds cleanly (`npm run build`, zero TypeScript errors) before treating it as
done.

## Talking Points for Review

- **How the mobile nav works**: `Navbar` tracks `mobileOpen` state and renders
  `MobileMenu`, a fixed-position overlay that slides in from the right using a
  `translate-x` transition. It traps scroll on the body while open and closes
  on link click, Escape, or backdrop click.
- **How the FAQ accordion works**: `FAQ` holds a single `openId` in state (only
  one item open at a time). Each `AccordionItem` measures its own content
  height via `ref.scrollHeight` and animates to that value, rather than using
  `max-height: none`, which can't be transitioned.
- **How data is rendered**: every section imports a typed array from
  `src/data/` and `.map()`s over it into presentational components — there is
  no hardcoded content inside JSX for repeated items.
- **Why this tech stack**: React was preferred by the brief; TypeScript paid
  for itself given five distinct content shapes; Tailwind kept the design
  system centralized instead of per-component CSS.
- **How responsive design was handled**: Tailwind's `sm/md/lg` breakpoints
  throughout, mobile-first; the hero, features grid, pricing grid, and footer
  columns all reflow at defined breakpoints; manually checked at 375/768/1024/1440px.
- **How I'd improve accessibility further**: add skip-to-content link, audit
  color contrast in dark mode with a tool rather than by eye, add live-region
  announcements when the carousel auto-advances (currently silent between
  manual interactions).
- **How I'd optimize performance**: self-host the Google Fonts (currently
  loaded via CDN link) to remove the external request, lazy-load below-the-fold
  sections with `React.lazy`, and compress/replace the hero's mock UI with a
  real optimized image if one were used instead of DOM-based mockup elements.
- **How I'd convert this into a production application**: move `src/data/*`
  content into a CMS or API and fetch it at build/request time, add a real
  backend for the newsletter form and demo request (currently client-side
  validation only, no submission), add auth for the "Sign in" button, and add
  analytics/event tracking on CTA clicks.
