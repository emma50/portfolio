export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Pricing", href: "#pricing" },
];

export const HERO_STATS = [
  { num: "6+", label: "Years shipping production apps" },
  { num: "40%", label: "Average load time improvement" },
  { num: "30%", label: "Conversion rate uplift, on avg." },
  { num: "66%", label: "Reduction in user drop-off" },
];

export const STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "GraphQL",
  "Docker",
  "Framer Motion",
  "GitHub Actions",
  "Jest",
  "Cypress",
  "Vercel",
  "Figma",
];

export interface Service {
  num: string;
  title: string;
  desc: string;
  tag: string;
}

export const SERVICES: Service[] = [
  {
    num: "01",
    title: "MVP & Product Builds",
    desc: "You have an idea and a deadline. I'll scope it, build it, and ship it — clean code, documented, ready to scale. No bloat, no over-engineering.",
    tag: "→ From idea to deployed in weeks",
  },
  {
    num: "02",
    title: "Landing Pages & Marketing Sites",
    desc: "Fast, conversion-focused sites built for Core Web Vitals. Load under 2 seconds, structured for SEO, optimised to convert visitors into signups.",
    tag: "→ Speed + SEO + conversion, all three",
  },
  {
    num: "03",
    title: "Performance & Code Fixes",
    desc: "Slow site? Buggy UI? Messy codebase? I audit, clean up, and optimise your existing frontend — measurable results, no full rebuild required.",
    tag: "→ Measurable improvements, fast",
  },
  {
    num: "04",
    title: "Ongoing Frontend Partner",
    desc: "For teams that need a reliable senior engineer on retainer — feature development, code reviews, and frontend ownership without the full-time overhead.",
    tag: "→ Senior output, flexible commitment",
  },
];

export interface Project {
  type: string;
  title: string;
  desc: string;
  metric: string;
  href: string;
}

export const PROJECTS: Project[] = [
  {
    type: "SaaS / AI Platform",
    title: "FabSpace",
    desc: "AI-powered platform connecting design engineers, purchasing managers, and EMS providers. Built dynamic user flows, third-party AI integrations, and a responsive SaaS dashboard from the ground up.",
    metric: "⚡ Production SaaS · Live users",
    href: "https://www.fabspaceai.com/",
  },
  {
    type: "Corporate / Marketing",
    title: "Protronics",
    desc: "Performance- and SEO-first corporate site for a US-based contract manufacturing firm. Achieved strong Core Web Vitals through code-splitting, lazy loading, and structured data.",
    metric: "⚡ Core Web Vitals · SEO optimised",
    href: "https://www.protronics-inc.com/",
  },
  {
    type: "AI Tool",
    title: "Vision",
    desc: "AI-powered image Q&A tool built with Cloudinary for asset management and Google Gemini for vision inference. Built the full Q&A flow and image-handling pipeline end-to-end.",
    metric: "⚡ Gemini Vision · Cloudinary pipeline",
    href: "#",
  },
  {
    type: "EdTech Platform",
    title: "H&A Infotech",
    desc: " An IT services company based in the United Kingdom that provides tech training. Built an accessible, responsive learning UI with course progression, content modules, and a clean enrollment experience.",
    metric: "⚡ Education platform · Job-ready curriculum",
    href: "https://hainfotech.uk",
  },
];

export interface ExperienceRole {
  company: string;
  role: string;
  period?: string;
  badge?: string;
  blurb?: string;
  bullets: string[];
}

export const EXPERIENCE: ExperienceRole[] = [
  {
    company: "Glovez",
    role: "Senior Frontend Engineer",
    period: "Recent",
    blurb:
      "B2B SaaS startup building business software for the African market. Joined as an early engineer, scaling from pre-launch MVP to production.",
    bullets: [
      "Eliminated a full category of runtime errors and reduced production defects by **30%** by leading a cross-application TypeScript migration that increased type coverage across the entire frontend codebase.",
      "Grew organic traffic by **40%** by engineering performance-first Next.js applications, directly improving Core Web Vitals scores and search engine rankings.",
      "Cut deployment time by **66%** (30 min → <10 min) by architecting containerized CI/CD pipelines with GitHub Actions and Docker, enabling faster, more confident releases.",
      "Accelerated feature delivery and reduced UI code duplication by **30%** by designing a standardized Tailwind CSS component system adopted across the engineering team.",
    ],
  },
  {
    company: "GitStart",
    role: "Full Stack Developer",
    badge: "YC-Backed",
    blurb:
      "Y Combinator-backed platform that embeds vetted engineers into remote teams to accelerate shipping velocity.",
    bullets: [
      "Improved merge velocity and codebase maintainability for high-growth engineering teams by delivering production-ready pull requests and complex React component refactors across multiple client codebases.",
      "Reduced new feature implementation time by rebuilding legacy UI into a reusable, Storybook-documented component library, enforcing design consistency and reducing cross-team duplication.",
      "Increased release frequency and cut manual release errors by automating CI/CD workflows and containerized deployments using GitHub Actions and Docker.",
      "Reduced production regressions and improved uptime by introducing comprehensive Jest unit tests and Cypress E2E test coverage across all client applications.",
    ],
  },
  {
    company: "Compute Essentials Inc",
    role: "Frontend Developer",
    bullets: [
      "Improved user engagement and reduced bounce rates on high-traffic real estate platforms by optimizing JavaScript bundle sizes and implementing React lazy loading and code-splitting strategies.",
      "Increased lead capture and search visibility by shipping SEO-optimized Next.js pages with structured data, semantic HTML, and Core Web Vitals improvements aligned to client acquisition KPIs.",
      "Shortened release cycles and caught regressions earlier by building automated CI/CD pipelines and a frontend test automation suite covering all critical user flows.",
      "Standardized engineering practices across a growing team by producing technical documentation and onboarding guides, reducing new-hire ramp time from day one.",
    ],
  },
  {
    company: "Andela",
    role: "Software Engineer Intern",
    bullets: [
      "Built responsive, WCAG-compliant React UI components for Quick Credit, a micro-lending platform, translating complex designs into production-ready code.",
      "Maintained MVP feature quality by implementing Test-Driven Development (TDD) with Mocha and Chai inside an agile sprint environment with daily code reviews.",
    ],
  },
];

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    num: "STEP 01",
    title: "Free call",
    desc: "30 minutes. You share what you need, I ask the right questions. No pitch, no pressure.",
  },
  {
    num: "STEP 02",
    title: "Proposal",
    desc: "Clear scope, timeline, and fixed price in writing. You approve before anything starts.",
  },
  {
    num: "STEP 03",
    title: "Build",
    desc: "I build in sprints and share progress regularly. You're never in the dark or waiting.",
  },
  {
    num: "STEP 04",
    title: "Launch",
    desc: "Deployed, tested, handed over. Clean code + docs. You own it completely.",
  },
];

export interface PricingPlan {
  tier: string;
  name: string;
  desc: string;
  price: string;
  priceSub: string;
  features: { text: string; disabled?: boolean }[];
  cta: string;
  featured?: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    tier: "Launch",
    name: "Ship Fast",
    desc: "For founders who need a clean, fast web presence immediately.",
    price: "$400",
    priceSub: "starting from",
    cta: "Get started",
    features: [
      { text: "Landing page or 1–3 page site" },
      { text: "Mobile-responsive design" },
      { text: "Performance-optimised build" },
      { text: "Contact form + basic SEO" },
      { text: "Delivered in 1–2 weeks" },
      { text: "1 revision round" },
      { text: "API integrations", disabled: true },
      { text: "Auth / user system", disabled: true },
    ],
  },
  {
    tier: "★ Most Popular · Build",
    name: "Full Product",
    desc: "For startups building their first serious web app or rebuilding an existing one.",
    price: "$1,200",
    priceSub: "starting from",
    cta: "Start a project →",
    featured: true,
    features: [
      { text: "Full web app or 5–10 page site" },
      { text: "React / Next.js development" },
      { text: "TypeScript + clean architecture" },
      { text: "API integrations & auth" },
      { text: "Performance optimisation" },
      { text: "Delivered in 3–5 weeks" },
      { text: "2 revision rounds" },
      { text: "30-day post-launch support" },
    ],
  },
  {
    tier: "Scale",
    name: "Ongoing Partner",
    desc: "For teams that need a reliable senior engineer without full-time overhead.",
    price: "Custom",
    priceSub: "/ monthly",
    cta: "Let's talk",
    features: [
      { text: "Dedicated hours per month" },
      { text: "Feature development & maintenance" },
      { text: "Code reviews & technical input" },
      { text: "Priority response & turnaround" },
      { text: "Direct Slack access" },
      { text: "Cancel anytime" },
    ],
  },
];
