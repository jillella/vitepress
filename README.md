# STUDS - Strongtie Unified Design System

STUDS is a design system built with VitePress, providing a unified and consistent approach to Simpson Strong-Tie's digital products.

## VitePress Setup Wizard

```
% npx vitepress init

┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Site title:
│  STUDS
│
◇  Site description:
│  Strongtie Unified Design System
│
◇  Theme:
│  Default Theme + Customization
│
◇  Use TypeScript for config and theme files?
│  Yes
│
◇  Add VitePress npm scripts to package.json?
│  Yes
│
└  Done! Now run npm run docs:dev and start writing.

Tips:
- Since you've chosen to customize the theme, you should also explicitly install vue as a dev dependency.

Install dependencies:
% npm add -D vitepress
% npm install vue

```

### Create a `.gitignore` file in the root directory with the following content:

```
node_modules
dist
.temp
cache
```

## Folder and File Structure

```
.
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts
│   │   └── theme/
│   │       ├── index.ts
│   │       └── style.css
│   ├── public/
│   │   └── (static assets)
│   ├── components/
│   │   └── (Vue components)
│   ├── guide/
│   │   └── (markdown files for guide pages)
│   └── index.md (home page)
├── package.json
├── .gitignore
└── README.md

```

## Quick Start

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run docs:dev
   ```
4. Open your browser and visit `http://localhost:5173`

## Scripts

- `npm run docs:dev`: Start the development server
- `npm run docs:build`: Build the static site
- `npm run docs:preview`: Preview the built site

## Tech Stack

- VitePress
- Vue 3
- TypeScript

## Customization

This project uses a customized version of the default VitePress theme. You can find the theme customization files in the `docs/.vitepress/theme` directory.
