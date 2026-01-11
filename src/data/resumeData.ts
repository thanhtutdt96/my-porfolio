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

export const cv = {
  name: "Tu Pham",
  title: "Senior FrontEnd Developer",
  location: "District 10, HCMC",
  birth: "Sep 1996",
  email: "thanhtutdt96@gmail.com",
  phone: "+84 374 263 605",
  links: [
    { label: "GitHub", href: "https://github.com/thanhtutdt96" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tupham96" },
  ] satisfies CvLink[],
  summary:
    "With 7+ years of experience building scalable, high-quality web applications. Passionate on code quality, maintainability, performance, and accessibility. Experienced in component libraries, micro-frontend architecture, CI/CD pipelines, and unit testing. Proven ability to leading team, driving technical decisions, mentor teammates, and deliver production-ready features for enterprise SaaS products.",
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
    stateAndData: [
      "Redux",
      "Redux Toolkit",
      "Zustand",
      "Vuex",
      "REST APIs",
      "GraphQL",
    ],
    testing: ["Jest", "Cypress", "Vitest"],
    backEnd: ["Node.js", "PHP", "Laravel", "MySQL"],
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
  projects: [
    {
      name: "Horse Racing Game",
      href: "https://github.com/thanhtutdt96/horse-racing-game",
      website: "https://horse-racing-2025.netlify.app",
      description:
        "Interactive horse racing simulation featuring real-time animations, random race logic, and multi-round results.",
      stack: ["Vue 3", "Vite", "Vuex", "TypeScript", "TailwindCSS"],
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
      name: "Modern Calculator",
      href: "https://github.com/thanhtutdt96/calculator",
      website: "https://modern-calculator-23.netlify.app",
      description: "Clean and user-friendly calculator application.",
      stack: ["Vue 3", "Vite", "TypeScript", "SCSS", "Jest"],
    },
    {
      name: "Data Converter",
      href: "https://github.com/thanhtutdt96/convert-csv-json",
      website: "https://data-converter-csv-json.netlify.app",
      description:
        "Utility tool to convert CSV to JSON or vice versa, copy data to clipboard, and export files.",
      stack: [
        "React",
        "Redux",
        "Material UI",
        "TypeScript",
        "styled-components",
      ],
    },
  ] satisfies CvProject[],
} as const;
