# NOVA — Build Better. Work Smarter.

A fully responsive, modern marketing landing page for **NOVA**, a fictional
AI-powered productivity platform that helps teams manage projects, automate
repetitive tasks, and collaborate efficiently. Built for the Front-End
Development Intern assignment.

**Live demo:** [https://nova-landing-page-tan.vercel.app](https://nova-landing-page-tan.vercel.app)

---

## Project Description

NOVA's landing page is a single-page marketing site covering the full funnel
a real SaaS product would need: navigation, hero, social proof, features,
product explanation, onboarding steps, statistics, use-case breakdowns,
testimonials, pricing, FAQ, and a closing call-to-action — all built as
independent, typed, reusable React components backed by static, structured
content.

## Technologies Used

| Tool | Why it was chosen |
|---|---|
| **React 19 + TypeScript** | Component reusability, strong typing across all content models (features, pricing, testimonials, FAQs) catches mismatches at compile time |
| **Vite** | Fast dev server and build, minimal config overhead |
| **Tailwind CSS** | Utility-first styling keeps design tokens (color, spacing, radius) consistent without hand-rolled CSS files per component |
| **lucide-react** | Lightweight, tree-shakeable icon set used consistently across the UI |

No backend, API, or database is used — all content lives in typed data files
under `src/data/`, which is what a CMS or API response would populate in a
production version of this site.

## Features

**Required sections** — all implemented as separate components:
Navbar, Hero, Trusted By, Features (6), Product/About, How It Works,
Statistics, Solutions/Use Cases, Testimonials (4), Pricing (3 plans),
FAQ (6 questions), Final CTA, Footer.

**Required interactions** — all working, not just styled:
- Responsive navigation with active-link highlighting (scroll-spy)
- Mobile hamburger menu (slide-in panel, closes on link click, Escape, or backdrop click)
- Smooth scrolling to every section, offset for the sticky navbar
- FAQ accordion (single-open, animated height transition, ARIA-correct)
- Button hover/active/focus-visible states
- Card hover effects (lift + shadow) on Features, Pricing, Testimonials
- Every nav link resolves to a real section — no dead links

**Bonus features** — all implemented:
- Dark/light mode toggle (React context, persisted to `localStorage`, respects system preference on first load)
- Animated statistics (count-up on scroll into view via `IntersectionObserver`, respects `prefers-reduced-motion`)
- Scroll animations (smooth, amplified scroll-triggered reveals across all sections with upward translation, focal blur, and scale transitions via `IntersectionObserver`)
- Testimonial carousel (autoplay, pause on hover, dot navigation, arrow controls)
- Monthly/annual pricing toggle (updates price and shows a savings badge)
- Demo modal (focus-trapped, closable via Escape/backdrop/close button, rendered via portal)
- Newsletter email validation (inline error/success states, no real submission)
- Back-to-top button (appears after scrolling past the hero)

## Installation

```bash
# clone the repo
git clone <your-repo-url>
cd nova-landing-page

# install dependencies
npm install

# start the dev server
npm run dev

# build for production
npm run build

# preview the production build locally
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

## Screenshots

_Add screenshots here after deploying — desktop hero, mobile menu open,
pricing toggle, dark mode, FAQ accordion open._

## AI Tools Used

This project was built with AI assistance (Claude, via Antigravity/Claude Code).
The AI scaffolded the Vite/React/TypeScript/Tailwind project structure, generated
component code, data files, and styling based on a detailed specification I
wrote covering every required section, interaction, and bonus feature from the
assignment brief. I reviewed the generated code, understand how each component
and hook works, fixed a dependency issue during the build (a lucide-react icon
set change), and verified the project builds cleanly with zero TypeScript
errors before submitting. See `SHORT_EXPLANATION.md` for a full breakdown of
design decisions, technology choices, and how I'd explain the implementation.
