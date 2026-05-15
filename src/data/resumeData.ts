export type CvLink = {
  label: string;
  href: string;
};

export type CvProject = {
  name: string;
  href: string;
  website?: string;
  description: string;
  stack: string[];
};

export type AiUsageExperienceItem = {
  id: string;
  text: string;
};

export const cv = {
  name: "Tu Pham",
  title: "Software Engineer",
  location: "District 10, HCMC",
  birth: "Sep 1996",
  email: "thanhtutdt96@gmail.com",
  phone: "+84 374 263 605",
  links: [
    { label: "GitHub", href: "https://github.com/thanhtutdt96" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tupham96" },
  ] satisfies CvLink[],
  summary:
    "Software Engineer with 8 years of experience building scalable, high-quality web applications. Passionate on code quality, maintainability, performance, and accessibility. Experienced in component libraries, micro-frontend architecture, CI/CD pipelines, collaborating on backend systems, and working within microservice-based architecture. Proven ability to leading team, driving technical decisions, mentor teammates, and deliver production-ready features for enterprise SaaS products.",
  skills: {
    frontEnd: [
      "React",
      "Vue 2/3",
      "Quasar",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "SCSS",
      "TailwindCSS",
    ],
    stateAndData: ["Redux", "Redux Toolkit", "Zustand", "Vuex"],
    testing: ["Jest", "Cypress", "Vitest"],
    backEnd: [
      "C#",
      "Node.js",
      "PHP",
      "Laravel",
      "MySQL",
      "REST APIs",
      "GraphQL",
      "Microservices",
    ],
    tools: [
      "Git",
      "GitHub",
      "GitLab",
      "Azure DevOps",
      "CI/CD",
      "Storybook",
      "Vite",
    ],
  },
  aiUsageExperience: [
    {
      id: "accelerate",
      text: "Use Copilot and Cursor to ship faster — features, refactors, tests, code review, specs, PRs, and docs.",
    },
    {
      id: "planning",
      text: "Plan before coding: scope, constraints, edge cases, and stack. Ask AI to compare options and trade-offs.",
    },
    {
      id: "mcp",
      text: "Connect agents to Jira and Outlook via MCP to summarize tickets, pull requirements, and plan work.",
    },
    {
      id: "review",
      text: "Review AI output before committing. Use AI for debugging, stack traces, and performance issues.",
    },
    {
      id: "ownership",
      text: "Treat AI as a productivity boost — keep full ownership of engineering decisions.",
    },
  ] satisfies readonly AiUsageExperienceItem[],
  projects: [
    {
      name: "Media Scraper",
      href: "https://github.com/thanhtutdt96/media-scraper",
      website: "https://media-scraper.netlify.app",
      description:
        "Collect images and videos from websites around the world and explore them in one organized gallery.",
      stack: [
        "Node.js",
        "TypeScript",
        "cheerio",
        "BullMQ",
        "PostgreSQL",
        "Prisma",
        "React",
        "shadcn",
        "TailwindCSS",
        "Vite",
      ],
    },
    {
      name: "Elegant Music App",
      href: "https://github.com/thanhtutdt96/elegant-music-app",
      website: "https://elegant-music-app.netlify.app",
      description:
        "Modern music application allowing users to browse tracks, control playback, and manage audio settings.",
      stack: ["React", "Redux Toolkit", "Vite", "TypeScript", "TailwindCSS"],
    },
    {
      name: "Horse Racing Game",
      href: "https://github.com/thanhtutdt96/horse-racing-game",
      website: "https://horse-racing-2025.netlify.app",
      description:
        "Interactive horse racing simulation featuring real-time animations, random race logic, and multi-round results.",
      stack: ["Vue 3", "Vite", "Vuex", "TypeScript", "TailwindCSS"],
    },
    {
      name: "Modern Calculator",
      href: "https://github.com/thanhtutdt96/calculator",
      website: "https://modern-calculator-23.netlify.app",
      description: "Clean and user-friendly calculator application.",
      stack: ["Vue 3", "Vite", "TypeScript", "SCSS", "Jest"],
    },
  ] satisfies CvProject[],
} as const;
