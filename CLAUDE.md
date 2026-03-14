# CLAUDE.md

## Project Purpose

Portfolio website for **office339** — an art direction / curation / production practice founded in Shanghai (2006), now based in Tokachi, Hokkaido. The site showcases projects across three practice categories (Site, Urban, Interface) with bilingual (Japanese/English) content. Production URL: https://office339.com

## Tech Stack

- **Framework:** Next.js 16 (App Router) with React 19
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/postcss` (no `tailwind.config.ts` — theme defined in `globals.css` using `@theme`)
- **Fonts:** Cormorant Garamond (display/headings), Shippori Mincho (Japanese body) — loaded via Google Fonts in `layout.tsx`
- **Images:** Next.js `<Image>` with `fill` layout and `object-cover`
- **Analytics:** Google Analytics (G-X8WPVNPQR9)
- **SEO:** `sitemap.ts`, `robots.ts`, OpenGraph metadata per page
- **No test framework, no CMS, no database**

## Commands

- `npm run dev` — Start development server
- `npm run build` — Production build (static export)
- `npm run lint` — ESLint (flat config via Next.js built-in)
- `npm start` — Start production server

## Directory Structure

```
office339/
├── data/
│   ├── projects.json       # All project data (~12 projects), sorted by `order`
│   └── about.json          # Profile, bio, contact info
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout (Header, Footer, fonts, GA)
│   │   ├── page.tsx        # Homepage — projects grouped by practice category
│   │   ├── about/page.tsx  # About page
│   │   ├── projects/[slug]/page.tsx  # Dynamic project detail pages
│   │   ├── not-found.tsx   # 404 page
│   │   ├── sitemap.ts      # Dynamic sitemap generation
│   │   ├── robots.ts       # robots.txt generation
│   │   └── globals.css     # Tailwind import + @theme (font vars)
│   ├── components/
│   │   ├── Header.tsx      # Client component ("use client") — mobile menu toggle
│   │   ├── Footer.tsx      # Server component — copyright
│   │   ├── ExhibitionSection.tsx  # Exhibition metadata grid (concept/artists/credits)
│   │   ├── VideoSection.tsx       # YouTube/Vimeo embed parser
│   │   └── Tagline.tsx     # Simple text display component
│   └── lib/
│       └── projects.ts     # Data access layer — typed helpers & interfaces
├── public/
│   └── images/
│       ├── logo/           # Site logo and favicon
│       ├── about/          # Profile photos
│       └── projects/{slug}/ # Project images (hero.jpg, 01.jpg, etc.)
├── next.config.ts          # Empty (default config)
├── postcss.config.mjs      # @tailwindcss/postcss plugin
└── tsconfig.json           # Strict TS, path alias @/* → src/*
```

## Architecture

**Data flow:** `data/*.json` → `src/lib/projects.ts` (typed helpers) → Server Components

- `src/lib/projects.ts` exports: `getAllProjects()`, `getProjectBySlug()`, `getAdjacentProjects()`, `getStatusLabel()`
- Type interfaces: `Project`, `LocalizedText`, `Artist`
- Projects have `status` (active/works/archive), `practice` (Site/Urban/Interface), `order` for sorting, `hidden` flag for filtering

**Routing:**
- `/` — Homepage, projects grouped by practice category (Site → Urban → Interface)
- `/about` — Profile page
- `/projects/[slug]` — Project detail, statically generated via `generateStaticParams()`

**Component model:** All server components except `Header.tsx` (client component for mobile menu state via `useState`/`useEffect`).

## Coding Conventions

### TypeScript
- Strict mode enabled. Use proper types — no `any`.
- Path alias: `@/*` maps to `src/*`. Always use `@/` imports for project files.
- JSON data imported directly into TS modules (e.g., `import projectsData from "../../data/projects.json"`).

### Bilingual Content
- All user-facing text uses `LocalizedText` type: `{ ja: string; en: string }`.
- Japanese (`ja`) is the primary display language. English is shown as secondary/subtitle.

### Styling
- **Tailwind CSS v4 utility classes only** — no custom CSS classes, no CSS modules, no styled-components.
- Mobile-first responsive design with `md:` breakpoint (768px).
- Consistent layout: `max-w-7xl mx-auto px-6 md:px-12` for page containers.
- Content sections use 12-column grid: `grid grid-cols-1 md:grid-cols-12` with `md:col-span-4` (label) / `md:col-span-8` (content).
- Font theme vars defined in `globals.css` via `@theme` block: `--font-sans`, `--font-serif`, `--font-display`.
- Hover effects: subtle scale transforms (`group-hover:scale-[1.02]`) and color transitions.
- Header height: `h-18 md:h-24` — main content uses `pt-18 md:pt-24` to offset fixed header.

### Images
- All project images stored under `public/images/projects/{slug}/`.
- Use Next.js `<Image>` with `fill` prop and `object-cover` for responsive images.
- Always provide `sizes` attribute for performance.
- Thumbnail is the first image in `images` array and also used as hero.

### Project Data
- Add new projects to `data/projects.json`. Each project requires: `slug`, `title`, `period`, `status`, `practice`, `role`, `description`, `thumbnail`, `images`, `externalUrl`, `artists`, `tags`, `order`.
- `order` field controls sort order within practice groups. Lower = earlier.
- Set `hidden: true` to exclude a project from display without deleting data.

### Navigation
- Prev/next project links are filtered within the same `practice` category, not global.
- Back link on project pages goes to `/` (homepage), labeled "Practice".

## Development Rules

- All pages are statically generated at build time. No client-side data fetching, no API routes.
- Minimize `"use client"` — only use when React hooks are required (currently only `Header.tsx`).
- Keep components as server components by default.
- No external state management libraries. State is derived from JSON data at build time.
- Run `npm run build` to verify changes compile and generate correctly.
