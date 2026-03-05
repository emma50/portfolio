export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  badge?: string;
  blurb?: string;
  bullets: string[];
}

export interface Project {
  index: string;
  name: string;
  desc: string;
  metric: string;
  tags: string[];
  link: string;
}

export interface SkillGroup {
  label: string;
  skills: { name: string; highlight?: boolean }[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "Glovez",
    role: "Senior Frontend Engineer",
    period: "Mar 2023 – Aug 2025",
    location: "Remote · Lagos, Nigeria",
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
    period: "Dec 2021 – Sep 2022",
    location: "Remote · San Francisco",
    badge: "YC S19",
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
    company: "Compute Essentials",
    role: "Frontend Developer",
    period: "Dec 2019 – Oct 2021",
    location: "Remote · Wyoming, US",
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
    period: "Mar 2019 – Jun 2019",
    location: "Lagos, Nigeria",
    bullets: [
      "Built responsive, WCAG-compliant React UI components for Quick Credit, a micro-lending platform, translating complex designs into production-ready code.",
      "Maintained MVP feature quality by implementing Test-Driven Development (TDD) with Mocha and Chai inside an agile sprint environment with daily code reviews.",
    ],
  },
];

export const projects: Project[] = [
  {
    index: "01",
    name: "FabspaceAI",
    desc: "AI-powered platform connecting design engineers, purchasing managers, and EMS providers. Built dynamic user flows, third-party AI integrations, and a responsive SaaS dashboard from the ground up.",
    metric: "⚡ Production SaaS · Live users",
    tags: ["Next.js", "TypeScript", "AI Integrations", "Tailwind CSS"],
    link: "https://www.fabspaceai.com/",
  },
  {
    index: "02",
    name: "Protronics",
    desc: "Performance- and SEO-first corporate site for a US-based contract manufacturing firm. Achieved strong Core Web Vitals through code-splitting, lazy loading, and structured data.",
    metric: "⚡ Improved Core Web Vitals · SEO optimized",
    tags: ["Next.js", "Tailwind CSS", "SEO", "Performance"],
    link: "https://www.protronics-inc.com/",
  },
  {
    index: "03",
    name: "Vision App",
    desc: "AI-powered image Q&A tool built with Cloudinary for asset management and Google Gemini for vision inference. Built the full Q&A flow and image-handling pipeline end-to-end.",
    metric: "⚡ Gemini Vision · Cloudinary pipeline",
    tags: ["React", "Cloudinary", "Gemini API", "Vercel"],
    link: "https://vision-app-five.vercel.app/",
  },
  {
    index: "04",
    name: "Cloudi",
    desc: "Structured, project-based DevOps training platform. Built an accessible, responsive learning UI with course progression, content modules, and a clean enrollment experience.",
    metric: "⚡ Education platform · Job-ready curriculum",
    tags: ["React", "Next.js", "Accessibility", "Responsive Design"],
    link: "https://cloudi-five.vercel.app/",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Core Stack",
    skills: [
      { name: "React", highlight: true },
      { name: "Next.js", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "Node.js", highlight: true },
      { name: "Tailwind CSS" },
      { name: "Storybook" },
    ],
  },
  {
    label: "Testing & DevOps",
    skills: [
      { name: "Jest" },
      { name: "Cypress" },
      { name: "React Testing Library" },
      { name: "GitHub Actions" },
      { name: "Docker" },
      { name: "Vitest" },
    ],
  },
  {
    label: "Specialized In",
    skills: [
      { name: "Core Web Vitals" },
      { name: "CI/CD Pipelines" },
      { name: "Performance Optimization" },
      { name: "SEO Architecture" },
      { name: "WCAG Accessibility" },
      { name: "GitHub Copilot ✓" },
    ],
  },
  {
    label: "State & Data",
    skills: [
      { name: "Redux / RTK Query" },
      { name: "Zustand" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Prisma" },
      { name: "Firebase" },
    ],
  },
];

export const stats = [
  { num: "6+", label: "Years experience" },
  { num: "40%", label: "Traffic growth delivered" },
  { num: "30%", label: "Defect reduction" },
  { num: "66%", label: "Faster deployments" },
];
