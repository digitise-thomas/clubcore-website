# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing website for CLUBCORE (Danish member-management SaaS for business networks / erhvervsnetværk). Note: repo directory is `coremesh-website` but the `package.json` name and product branding is `clubcore`. Primary domain: `clubcore.dk`. Content is in Danish (`<html lang="da">`).

## Commands

- `npm run dev` — start Next.js dev server at http://localhost:3000
- `npm run build` — production build
- `npm run start` — run built app
- `npm run lint` — ESLint (flat config via `eslint.config.mjs`, extends `next/core-web-vitals` + `next/typescript`)

## Architecture

- **Next.js 16 App Router** with React 19 and TypeScript. Single-page marketing site — almost all content lives in `app/page.tsx` (~413 lines of sectioned JSX: hero, features, pricing, FAQ, etc.).
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss` (no `tailwind.config.*` — v4 is CSS-first; customizations go in `app/globals.css`).
- **Layout** (`app/layout.tsx`): renders the sticky header, footer, Inter font, and `<GoogleAnalytics gaId="G-KLP9KS09FC">` (via `@next/third-parties/google`). Site-wide metadata is set here.
- **Redirects** (`next.config.ts`): `www.clubcore.dk` and `clubcore.azurewebsites.net` are 301-redirected to apex `clubcore.dk`. Hosted on Azure App Service.
- **Client components**: `app/components/CalendlyClient.tsx` is the only `"use client"` file — loads the Calendly embed script and initializes an inline widget. The rest of the site is server components.
- **SEO**: `app/sitemap.tsx` (MetadataRoute.Sitemap) and static `app/robots.txt`.
- **Login button** links to the separate app at `https://app.clubcore.dk` (external product, not in this repo).

## Conventions

- Copy is Danish — keep user-facing strings in Danish unless explicitly changing language.
- Icons from `lucide-react`. Images in `public/` served via `next/image`.
- When adding new sections, extend `app/page.tsx` rather than creating page routes — this is a single-page site.
