# Dimitris Sidiropoulos — Portfolio

Personal portfolio website built with React, TypeScript, and Vite.

🌐 **Live site:** https://jimsidi.github.io

## Tech Stack

- React 18 + TypeScript
- Vite
- Framer Motion — animations
- Lucide React — icons
- Vitest + Testing Library

## Sections

- **Hero** — introduction and call to action
- **About** — bio, education, and personal details
- **Skills** — tech stack grouped by category
- **Experience** — work history timeline
- **Projects** — personal, professional, and academic projects
- **Homelab** — self-hosted infrastructure, services, and hardware
- **Certifications** — completed and in-progress certifications
- **Contact** — email, LinkedIn, and GitHub

## DevOps

- ESLint + Prettier — code quality and formatting
- Husky + lint-staged — pre-commit hooks
- Commitlint — conventional commit messages
- GitHub Actions — CI/CD pipeline (lint → test → build → Lighthouse → deploy)
- Lighthouse CI — performance monitoring on every push
- Dependabot — automated dependency updates

## Development

```bash
npm install          # install dependencies
npm run dev          # start dev server
npm run build        # production build
npm run test         # run tests
npm run lint         # run linter
npm run format       # format code
npm run type-check   # typescript check
```

## Branch Strategy

- `main` — production, auto-deploys to GitHub Pages
- Feature branches — open a PR, CI must pass before merging