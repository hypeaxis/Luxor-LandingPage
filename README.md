# ezsol-frontend

Frontend template built with Next.js 15, React 19, TypeScript, Tailwind CSS 4, and shadcn/ui.

## Overview

Project highlights:
- App Router architecture (Next.js)
- Dark/Light mode with next-themes
- Scroll animation with AOS
- Jotai for state management
- Reusable UI components (shadcn/ui + Radix UI)

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui
- next-themes
- Jotai
- AOS
- react-toastify

## Getting Started

Requirements:
- Node.js 18+
- npm (or yarn/pnpm/bun)

Install and run:

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Scripts

```bash
npm run dev
npm run build
npm start
npm run lint
```

## Project Structure

```text
src/
  app/           # Next.js App Router pages and layout
  components/    # Shared components and providers
  layout/        # Header/Footer/layout wrappers
  view/          # Landing page sections
  styles/        # Theme, variables, typography, css layers
  lib/           # Utilities
  constant/      # Constants and metadata

public/
  assets/        # Static images and assets
```

## Configuration Notes

- Theme variables:
  - src/styles/variables.dark.css
  - src/styles/variables.light.css
- App metadata:
  - src/constant/metadata.ts
- Main page composition:
  - src/app/page.tsx

## Troubleshooting

Port 3000 already in use:

```bash
npm run dev -- -p 3001
```

Dependency issues:

```bash
rm -rf node_modules package-lock.json
npm install
```

## Documentation

- docs/UI_Guide_Instruction.md
- github/copilot-instructions.md
