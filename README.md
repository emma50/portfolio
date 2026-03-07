# Emmanuel Okwuidegbe — Portfolio

React + Vite + TypeScript + Tailwind CSS

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for Production

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. Import in Vercel → it auto-detects Vite
3. Deploy — zero config needed

## Project Structure

```
src/
├── components/
│   ├── Nav.tsx          # Sticky nav with mobile menu
│   ├── Hero.tsx         # Hero with stats + dual CTAs
│   ├── About.tsx        # Bio + skill groups
│   ├── Experience.tsx   # X→Y→Z bullet roles
│   ├── Projects.tsx     # Project cards with tags/metrics
│   ├── Testimonial.tsx  # Peer testimonial block
│   ├── Contact.tsx      # Email + social links
│   └── Footer.tsx
├── hooks/
│   └── useInView.ts     # Scroll-triggered animation hook
├── data.ts              # All content in one typed file
├── App.tsx
├── main.tsx
└── index.css
```
