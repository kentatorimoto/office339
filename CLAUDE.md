# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio/showcase website for office339 — an architecture and design practice. Built with Next.js (App Router), TypeScript, and Tailwind CSS v4. All content is static JSON; no CMS or database.

## Commands

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run lint` — ESLint
- `npm start` — Start production server

No test framework is configured.

## Architecture

**Data flow:** `data/*.json` → `src/lib/projects.ts` (typed helpers) → Server Components

- `data/projects.json` — All project data (~40 projects). Each has a `slug`, `status` (active/works/archive), `practice` category (Site/Urban/Interface), and bilingual content.
- `data/about.json` — Profile and contact info.
- `src/lib/projects.ts` — Exports `getAllProjects()`, `getProjectBySlug()`, `getAdjacentProjects()`, typed interfaces (`Project`, `LocalizedText`).

**Routing:**
- `/` — Homepage, projects grouped by practice category
- `/about` — Profile page
- `/projects/[slug]` — Dynamic project pages, statically generated via `generateStaticParams()`

**Components:** All server components except `Header.tsx` (client component for mobile menu state). Key components: `ExhibitionSection` (exhibition metadata grid), `VideoSection` (YouTube/Vimeo embed parser).

## Key Conventions

- **Bilingual content:** All text uses `LocalizedText` type (`{ ja: string; en: string }`). Japanese is primary display language.
- **Path alias:** `@/*` maps to `src/*`.
- **Styling:** Tailwind utility classes only, mobile-first responsive with `md` breakpoint. Custom font theme vars defined in `globals.css`.
- **Project navigation:** Prev/next links filtered within same practice category, not global.
- **Static generation:** All pages are pre-rendered at build time. No client-side data fetching.
