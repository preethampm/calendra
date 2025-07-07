# Calendra

## Project Overview
Calendra is a Next.js project with authentication features, custom middleware, and a modular folder structure. The project includes login and registration pages, global styles, and asset management.

## Features Implemented
- Next.js app structure with TypeScript
- Authentication pages:
  - Login (`/app/(auth)/login`)
  - Register (`/app/(auth)/register`)
- Global CSS styling
- Custom middleware (`Middleware.ts`)
- Asset management (e.g., logo in `assets/`)
- Project configuration files:
  - `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`

## Folder Structure
- `app/` - Main application code
  - `globals.css` - Global styles
  - `layout.tsx` - Root layout
  - `page.tsx` - Main page
  - `(auth)/login/[[...login]]/page.tsx` - Login page
  - `(auth)/register/[[...register]]/page.tsx` - Register page
- `assets/` - Static assets (e.g., logo)
- `Middleware.ts` - Custom middleware logic

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```

---
This README summarizes the current state of the Calendra project as of July 7, 2025.
