# Project Upgrade Plan

## Overview
Upgrade from Gatsby 3 + React 17 to Gatsby 5.16 + React 19, replace Bootstrap/SCSS with Tailwind CSS v4, convert all files to TypeScript, remove FontAwesome/carousel dependencies, and adopt a single-page structure.

**Node.js version:** `v24.18.0` — natively supported by Gatsby 5.16 (Node.js 24 support added in Gatsby 5.16, Jan 2026)

## Changes from original plan:
1. **Colors preserved** - All colors from `__variable.scss` defined as Tailwind theme tokens
2. **Single-page structure** - `gatsby-node.ts` deleted, `projectDetail.tsx` template deleted, `createPages` removed entirely. Project thumbnails will not link anywhere for now (modal/detail view to be added later)
3. **No shadow CSS** - Shadow tokens removed from Tailwind theme

---

## Phase 1: Clean Up Dependencies

### Remove packages:
- `bootstrap`, `react-bootstrap`
- `@fortawesome/fontawesome-svg-core`, `@fortawesome/free-brands-svg-icons`, `@fortawesome/free-solid-svg-icons`, `@fortawesome/react-fontawesome`
- `react-swipeable`
- `gatsby-plugin-sass`, `sass`

### Files to delete:
- `gatsby-node.js` (no createPages)
- `src/template/projectDetail.js` (no detail pages)
- `src/components/projectCarousel.js` (carousel removed)
- `src/styles/*.scss` - all 9 SCSS files including `__variable.scss` (colors migrated to Tailwind theme)

---

## Phase 2: Upgrade Gatsby & React

### Target versions:
| Package | Current | Target |
|---------|---------|--------|
| `gatsby` | `^3.10.2` | `^5.16.0` |
| `react` | `^17.0.1` | `^19.0.0` |
| `react-dom` | `^17.0.1` | `^19.0.0` |
| `gatsby-plugin-react-helmet` | `^4.5.0` | Remove |
| `react-helmet` | `^6.1.0` | Remove |
| `node` | `v24.18.0` | `v24.18.0` (no change) |

### New packages:
- `gatsby-plugin-postcss`, `tailwindcss`, `@tailwindcss/postcss`, `postcss`
- `typescript`, `@types/react`, `@types/react-dom`

### Gatsby 5 migration notes:
- `trailingSlash` default changed to `always` - set explicitly in `gatsby-config.ts`
- `<StaticQuery />` deprecated - not used in this project, no action needed
- `react-helmet` replaced by Gatsby Head API (export `Head` component from pages)
- No GraphQL queries to migrate (project uses JSON data directly)

---

## Phase 3: TypeScript Setup

### Create `tsconfig.json` with:
- `jsx: "react-jsx"` (React 19 JSX transform)
- `strict: true`
- Include `src/`

### Rename files:
| Current | New |
|---------|-----|
| `gatsby-config.js` | `gatsby-config.ts` |
| `src/pages/index.js` | `src/pages/index.tsx` |
| `src/pages/404.js` | `src/pages/404.tsx` |
| `src/components/personalInfoPanel.js` | `src/components/personalInfoPanel.tsx` |
| `src/components/projectPanel.js` | `src/components/projectPanel.tsx` |
| `src/components/projectThumbnail.js` | `src/components/projectThumbnail.tsx` |
| `src/components/projectTag.js` | `src/components/projectTag.tsx` |
| `src/components/projectCopyright.js` | `src/components/projectCopyright.tsx` |

### Deleted (not renamed):
- `gatsby-node.js` - deleted entirely
- `src/template/projectDetail.js` - deleted entirely

### Add type interfaces for:
- Project data shape (from `projectDatabase.json`)
- Component props

---

## Phase 4: Tailwind CSS v4 Setup

### Create `postcss.config.js`:
```js
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

### Create `src/styles/global.css`:
```css
@import "tailwindcss";

@theme {
  --color-project-thumbnail-container: #ecefec;
  --color-project: #ecefec;
  --color-personal-info: #12263a;
  --color-personal-info-text: #f0ece8;
  --color-personal-info-text-hover: #cbb7a1;
  --color-project-thumbnail-division-line: #daddd8;
}
```

### Create `gatsby-browser.ts`:
```ts
import "./src/styles/global.css";
```

### Update `gatsby-config.ts`:
```ts
import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  trailingSlash: "always",
  plugins: ["gatsby-plugin-postcss"],
};

export default config;
```

---

## Phase 5: Component Rewrites

### `src/pages/index.tsx`:
- Remove `<Helmet>` -> Gatsby Head API
- Tailwind flex layout (sidebar + main content)
- Responsive: column on mobile, row on desktop

### `src/components/personalInfoPanel.tsx`:
- Inline SVG icons for email and GitHub (no FontAwesome)
- Tailwind responsive classes
- Colors: `bg-personal-info`, `text-personal-info-text`, etc.

### `src/components/projectPanel.tsx`:
- Tailwind grid: `grid grid-cols-1 xl:grid-cols-2`
- Import `projectDatabase.json` directly

### `src/components/projectThumbnail.tsx`:
- Tailwind: rounded corners, hover effects
- Remove `<Link>` (no detail pages) - just render as a card
- Colors from theme tokens

### `src/components/projectTag.tsx`:
- Tailwind badge styling with theme colors

### `src/components/projectCopyright.tsx`:
- Simple TSX conversion

### `src/pages/404.tsx`:
- Tailwind utilities

---

## Phase 6: Final Cleanup

- Delete all SCSS files
- Delete `gatsby-node.js`, `src/template/` directory
- Remove `gatsby-plugin-sass`, `sass` from package.json
- Run `npm install`
- Run `npx gatsby build` - verify compilation
- Fix TypeScript errors

---

## Execution Order
1. Remove old dependencies + delete files
2. Upgrade Gatsby + React
3. Add TypeScript config + rename files
4. Set up Tailwind v4 with theme colors
5. Rewrite components
6. Final cleanup + build verification
