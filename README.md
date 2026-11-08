# Productivity Software Reviews (Astro Static Blog)

A clean, fast, typography-focused static blog built with [Astro](https://astro.build/) for English-language SaaS tool reviews targeting small business owners and creators.

## Features Included

- **Fast Static Output (`output: 'static'`)**: Zero database required; compiles to pure static HTML & CSS.
- **Pinterest Verification Placeholder**: Located directly in `<head>` inside `src/layouts/BaseLayout.astro`.
- **Pages Included**:
  - **Home** (`src/pages/index.astro`): Hero section, trust badges, latest articles grid, and software category directory.
  - **Blog Index** (`src/pages/blog/index.astro`): Interactive category filter pills and review archive.
  - **Sample Review Article** (`src/pages/blog/notion-vs-clickup-vs-asana-small-business.astro`): Full review demonstrating the `<ComparisonTable />`, `<BestForBox />`, and `<ProsConsBox />` components inside `ArticleLayout.astro`.
  - **About** (`src/pages/about.astro`): Publication mission & 4-step testing methodology.
  - **Contact** (`src/pages/contact.astro`): Contact form + direct editorial email directory.
  - **Privacy Policy** (`src/pages/privacy-policy.astro`): Privacy, cookies, and affiliate tracking disclosure.
  - **Affiliate Disclosure** (`src/pages/affiliate-disclosure.astro`): Full FTC compliance & editorial ethics policy.

## Getting Started

1. Make sure [Node.js](https://nodejs.org/) (v18.17.1+ or v20+) is installed.
2. Install dependencies and start the development server:

```bash
npm install
npm run dev
```

3. Build for production:

```bash
npm run build
npm run preview
```
