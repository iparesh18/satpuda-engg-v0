# Satpuda College of Engineering & Polytechnic, Balaghat

Official website for Satpuda College of Engineering & Polytechnic, Balaghat — an AICTE-approved engineering college affiliated with RGPV Bhopal, established in 1995.

## Tech Stack

- **Framework:** React 19 with Vite 6
- **Routing:** React Router DOM v7
- **Styling:** Tailwind CSS v4 + PostCSS
- **UI:** shadcn/ui (Radix primitives), custom components
- **Animations:** Framer Motion, GSAP, Theatre.js
- **3D:** Spline
- **Form:** React Hook Form + Zod
- **Icons:** Lucide React

## Project Structure

```
src/
  App.jsx          — Route definitions
  main.jsx         — Entry point
  styles/          — Global CSS
components/
  pages/           — Page-level components
  sections/        — Reusable sections
  layout/          — Header, root layout
  ui/              — shadcn/ui components
  bits/            — Custom animated components
  shared/          — Theme provider
  legacy/          — Archived components
public/            — Static assets (images, videos, SVGs)
```

## Pages

- Home, About (Overview, Director's Message, Principal's Message, Mission & Vision)
- Academics, Admissions, Our Campus (Computer Lab, Transport, Scholarship, Library, Sports, Gallery)
- Journey at Satpuda

## Scripts

| Command     | Description        |
| ----------- | ------------------ |
| `npm run dev`    | Start dev server   |
| `npm run build`  | Production build   |
| `npm run preview`| Preview build      |
| `npm run lint`   | Run ESLint         |
