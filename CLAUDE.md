# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing website for CLUBCORE (Danish CRM + events + network-groups + reporting SaaS for business associations and other B2B relationship networks). Note: repo directory is `coremesh-website` but the `package.json` name and product branding is `clubcore`. Primary domain: `clubcore.dk`. Site is localized: Danish (default, unprefixed), English (`/en`), German (`/de`).

## Commands

- `npm run dev` — start Next.js dev server at http://localhost:3000
- `npm run build` — production build
- `npm run start` — run built app
- `npm run lint` — ESLint (flat config via `eslint.config.mjs`, extends `next/core-web-vitals` + `next/typescript`)

## Architecture

- **Next.js 16 App Router** with React 19 and TypeScript. Single-page marketing site per locale — almost all content lives in `app/[locale]/page.tsx` (sectioned JSX: hero, features, pricing, FAQ, etc.). Within a locale, keep extending this one page rather than adding new page routes.
- **i18n** via `next-intl` (v4). Locales `da` (default), `en`, `de`, configured in `i18n/routing.ts` with `localePrefix: "as-needed"` — Danish serves unprefixed at the apex (`clubcore.dk/`), English/German are prefixed (`/en`, `/de`). `i18n/request.ts` resolves messages from `messages/{locale}.json`. `i18n/navigation.ts` exports a locale-aware `Link`/`useRouter`/`usePathname` (used for the header's language switcher). Copy is authored directly as nested JSON in `messages/da.json` / `messages/en.json` / `messages/de.json` — keep all three in sync when editing copy; rich text (`<em>`, `<br>`, the AI section's `<moss>` span) uses next-intl's `t.rich()`.
- **Proxy** (`proxy.ts`, root): Next.js 16 renamed the `middleware.ts` convention to `proxy.ts` — this is where next-intl's locale-detection middleware is wired up. Its matcher explicitly excludes `/ai-i-erhvervsfremme` (see below) so that standalone route isn't rewritten into the locale tree.
- **Two independent root layouts** (no shared top-level `app/layout.tsx`): `app/[locale]/layout.tsx` (fonts, GA, Umami, `NextIntlClientProvider`, `SiteChrome` header/footer, per-locale metadata via `generateMetadata`) and `app/ai-i-erhvervsfremme/layout.tsx` (minimal, Danish-only). Next.js supports this without route groups since the two branches are already distinct top-level path segments; each supplies its own `<html>`/`<body>`.
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss` (no `tailwind.config.*` — v4 is CSS-first; customizations go in `app/globals.css`). The site uses **ClubCore Glass**, the same design system as the platform's admin UI (better-auth repo, `docs/redesign/design-system/tokens.json` + `README.md` are the source of truth; don't invent values — add them there first). Light theme only for now. Key rules: the page ground is `--bg-page` with three fixed colour glows, never white; glass (`.glass`, blur + `--edge-glass` + `--shadow-glass`) is only the floating header and the `.shot` product frames; content sits in `.card` (translucent, no blur, radius 24); one accent (`--accent` = ink) for primary pills (`.btn .btn-primary`, 44px, never under 40px); `--link` blue only for link-tint chips; semantic `positive/negative/info/warning` for icon tiles (`.tile-*`). Type is the system stack (SF Pro on Apple devices) with Inter as fallback (`next/font/google`, `preload: false`); display headings are `.display` (700, -0.035em) and two-tone: the first thought in ink, the `<em>` part in `--ink-muted` (never italic, never a colour). Overlines use `.eyebrow` (11px uppercase). The vaerk section uses the app's own brand tokens (`--vaerk-*`, Manrope) only inside the CSS phone mockup (`.phone*`).
- **Product screenshots** in `public/glass/*.jpg` are taken from the Glass admin on the demo tenant (`app.clubcore.dk/admin`, 1440–1512px wide, JPEG from the Chrome extension — 1x, so replace with 2x PNG exports when convenient). Hidden before capture: the OBS banners on the dashboard and the SUPER ADMIN sidebar group.
- **vaerk section** (`#app`): the member app (repo `vaerk_co`, site `vaerk.io`, design guide `vaerk_co/design/DESIGN.md`). Copy lives under the `app` namespace in the message files; the phone mockup content is fictional networks. Logo is `public/vaerk-logo.svg` (outlined, no font needed).
- **Redirects** (`next.config.ts`): `www.clubcore.dk` and `clubcore.azurewebsites.net` are 301-redirected to apex `clubcore.dk`. Wrapped with `next-intl/plugin`.
- **Hosting/deploy**: Coolify, building the repo with Nixpacks into a Docker image (`npm ci` + `npm run build`) — not Azure App Service; the `azurewebsites.net` redirect above is legacy from an earlier host. `npm ci` requires `package-lock.json` to be exactly in sync with `package.json` — after any dependency change, regenerate it with a clean `rm -rf node_modules package-lock.json && npm install` rather than trusting an incrementally-updated lockfile, since the build server's `npm ci` is stricter about sync than a local `npm install`.
- **Client components**: `app/components/CalendlyClient.tsx` (Calendly embed) and `app/components/SiteChrome.tsx` (header/footer + language switcher, needs `useTranslations`/`useLocale`). The rest of the localized site is server components using `useTranslations` directly (next-intl supports this in Server Components).
- **SEO**: `app/sitemap.tsx` emits `/`, `/en`, `/de` with `hreflang` alternates, plus the standalone article. Static `app/robots.txt`.
- **`/ai-i-erhvervsfremme`**: a standalone, hand-styled Danish-only article (own root layout, own scoped CSS, not part of `SiteChrome` or the locale tree). Linked from the homepage's "Perspektiv" section in all three locales. Translating it is a separate content task — not yet done.
- **Login button** links to the separate app at `https://app.clubcore.dk` (external product, not in this repo).

## Conventions

- Copy lives in `messages/*.json`, not inline in JSX — edit all three locale files together. Danish is the source of truth; English/German should stay meaning-equivalent, not literal translations.
- Never write head-to-head "us vs. them" competitor comparisons in marketing copy (even unnamed) — differentiate affirmatively (what CLUBCORE is/does), not contrastively.
- Icons from `lucide-react`. Images in `public/` served via `next/image`.
- When adding new sections, extend `app/[locale]/page.tsx` (and all three message files) rather than creating new page routes.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
