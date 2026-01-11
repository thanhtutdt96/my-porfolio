# My Portfolio

Personal portfolio site built with **Vite + React + TypeScript**, styled with **Tailwind CSS v4** and **DaisyUI**.

## Live site

- **Demo**: `https://tupham96-portfolio.netlify.app`

## Features

- **Single-page sections**: About, Skills, Projects, Contact
- **Active section tracking** (IntersectionObserver) for navigation state
- **Theme toggle** (DaisyUI `light` ↔ `dracula`, persisted in localStorage)
- **Smooth scrolling** + responsive navigation (top navbar + desktop side nav)

## Tech stack

- **Frontend**: React, TypeScript, Vite
- **UI**: Tailwind CSS (v4), DaisyUI, tw-animate-css
- **Icons**: Font Awesome
- **Animation**: GSAP

## Getting started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Install & run

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Scripts

```bash
npm run dev       # start dev server
npm run build     # typecheck + production build
npm run preview   # preview production build locally
npm run lint      # run eslint
```

## Customize content

- **Main content/data**: `src/data/resumeData.ts`
- **Sections**: `src/components/sections/*`
- **Navigation**: `src/components/TopNavbar.tsx` and `src/components/SideNav.tsx`
- **Theme behavior**: `src/hooks/useTheme.ts`

### Deployment (via Netlify)

- **Build command**: `npm run build`
- **Publish directory**: `dist`

## License

MIT
