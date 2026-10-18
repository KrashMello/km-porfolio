# AGENTS.md

Personal portfolio site (KrashMello / Joel Soteldo): Nuxt 4 + Vue 3 + Pinia + Tailwind v4. Source is in `app/` (Nuxt 4 srcDir); it is a **single-page site** — `app/pages/index.vue` renders the sections. Vercel Analytics/SpeedInsights are wired in `app/app.vue`.

## Commands

- `pnpm install` — always first. `postinstall` runs `nuxt prepare`, which generates `.nuxt/` (needed by lint and tsconfig). `node_modules` may be absent in a fresh checkout.
- `pnpm dev` — dev server at `http://localhost:3000`
- `pnpm build` / `pnpm generate` (static) / `pnpm preview`
- Lint: **there is no `lint` script** — run `pnpm exec eslint .` (autofix: `pnpm exec eslint . --fix`).
- No tests, no typecheck script, no CI. Verification = lint + `pnpm build`.
- `pnpm-lock.yaml` is gitignored on purpose — lockfile changes will never show in git status.
- `pnpm-workspace.yaml` only lists `onlyBuiltDependencies` (pnpm build-script allowlist). This is **not** a monorepo.

## Quirks that will bite you

- `eslint.config.mjs` imports the generated `./.nuxt/eslint.config.mjs` — lint fails until `pnpm install` (or `pnpm exec nuxt prepare`) has run.
- **i18n is hand-rolled.** All copy lives in `public/es.json` and `public/en.json` (top-level keys: `hero`, `nav`, `experience`, `projects`, `a11y`), fetched at runtime from `/{lang}.json` by the store. Never hardcode user-facing text in components; edit the JSON files and keep both languages in sync. Adding a language also requires: a CV at `public/Joel_Soteldo_CV_<lang>.pdf` and a button in `app/components/selectLang.vue` (languages are hardcoded there).
- State lives in `app/stores/stateMachine.ts` (`theme`, `lang`, `data`) and is persisted to localStorage via `pinia-plugin-persistedstate`. Theme class + language fetch initialize in `onBeforeMount` inside `app/layouts/default.vue`. SSR renders before the fetch, so `data` starts as `{}` — components must tolerate missing content (see prop defaults in `ui/hero.vue`).
- Dark mode is class-based, not media-based: `app/assets/css/main.css` defines `@custom-variant dark (&:where(.dark, .dark *))`. Tailwind v4 defaults to `prefers-color-scheme`; this line is what makes every `dark:` class follow the `dark` class on `<html>` toggled by the store. Keep it.
- Tailwind v4 is loaded via `@tailwindcss/vite` in `nuxt.config.ts` (not an `@nuxtjs/tailwind` module). There is no `tailwind.config` file — Tailwind config is CSS-first in `app/assets/css/main.css`, which defines the Nord-based theme tokens (`--color-nord-*`, semantic `--color-surface`/`--color-content`/`--color-accent` via CSS vars on `:root`/`.dark`) and the font stack. Fonts (Space Grotesk, IBM Plex Sans/Mono) are downloaded at build and self-hosted by `@nuxt/fonts` — it detects the `font-family` names in the `@theme` block.
- Auto-imports: components use path prefixes (`ui-hero`, `km-article`, `icons-project-road` from `app/components/`), and Pinia stores from `app/stores/` are auto-imported (`useStateMachineStore()` is used without any import — verified in `.nuxt/imports.d.ts`).
- Header nav in `app/layouts/default.vue` links to `/#me`, `/#experience`, `/#projects` — these must match the section `id`s in `ui/hero.vue`, `ui/experience.vue`, and `ui/projects.vue`.
- `app/components/ui/projects.vue` fetches `https://api.github.com/users/krashmello/repos` client-side, unauthenticated (rate-limited), then filters with two hardcoded repo-name blocklists. An empty projects grid is usually rate limit/network — not a rendering bug.
- Repo-local skills are installed under `.agents/skills/` and tracked by `skills-lock.json` (autoskills registry). For stack work, load the `nuxt`, `vue-best-practices`, `vue-pinia-best-practices`, and `tailwind-css-patterns` skills. Don't hand-edit the skill files or the lock hashes.
