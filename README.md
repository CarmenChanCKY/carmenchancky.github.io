# Personal Portfolio

Personal portfolio website built with [Gatsby](https://www.gatsbyjs.com/) and React, deployed to GitHub Pages.

**Live site:** https://carmenchancky.github.io/

## Tech Stack

- [Gatsby 5](https://www.gatsbyjs.com/) — static site generator
- [React 19](https://react.dev/) — UI
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/) (via PostCSS)

## Getting Started

Requires Node.js (see [.nvmrc](.nvmrc)).

```sh
# Install dependencies
npm install

# Start the dev server at http://localhost:8000
npm run develop
```

## Available Scripts

| Command          | Description                              |
| ---------------- | ---------------------------------------- |
| `npm run develop` | Start dev server with hot reload         |
| `npm run build`   | Build production site to `public/`       |
| `npm run serve`   | Serve the production build locally       |
| `npm run clean`   | Wipe the Gatsby cache                    |

## Deployment

The site is automatically built and deployed to **GitHub Pages** via [GitHub Actions](.github/workflows/gatsby.yml) on every push to `main`.


## License

[0BSD](LICENSE)
