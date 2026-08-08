import type { Project, Skill, Experience } from '../types';

export const projectsData: Project[] = [
  {
    id: 'flexi-commerce',
    title: 'FlexiCommerce Core',
    subtitle: 'High-Performance E-Commerce Engine',
    problemStatement: 'Legacy e-commerce clients suffered from slow initial load latency and heavy layout shift, resulting in reduced mobile customer conversion rates.',
    solutionDescription: 'Rebuilt the frontend layout utilizing React 18 code-splitting, dynamic component imports, and custom Tailwind styling variables, resulting in a lightweight client bundle.',
    role: 'Lead Frontend Architect',
    category: 'web',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit'],
    tech: ['React 18', 'TypeScript', 'Vite', 'Tailwind v4', 'Redux Toolkit'],
    keyFeatures: [
      'Atomic state management with Redux slices.',
      'Fully responsive UI optimized for mobile viewport grids.',
      'Edge-rendered catalog fetching with stale-while-revalidate caches.'
    ],
    metrics: [
      { label: 'Lighthouse Performance', value: '100%' },
      { label: 'Initial Bundle load', value: '0.4s' },
      { label: 'Conversion Delta', value: '+24%' }
    ],
    links: {
      github: 'https://github.com/example/flexi-commerce',
      demo: 'https://flexi-commerce-demo.vercel.app'
    },
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'apex-notes',
    title: 'ApexNotes Mobile',
    subtitle: 'Native Android Markdown Client',
    problemStatement: 'Recruiters and developers lacked a secure, native offline notepad that could compile formatting instantly without network lags.',
    solutionDescription: 'Engineered a native Android system in Kotlin with SQLite database caching and Room DB syncing, wrapping notes into structured biometrics.',
    role: 'Mobile Engineer & UI Designer',
    category: 'android',
    tags: ['Android Development', 'Kotlin', 'Jetpack Compose', 'Room DB'],
    tech: ['Kotlin', 'Jetpack Compose', 'Room DB', 'Coroutines', 'Hilt'],
    keyFeatures: [
      'Declarative compose UI ensuring consistent 60 FPS transitions.',
      'Encrypted Room database layers for local files safety.',
      'Custom Markdown parser converting raw string values to styled composables.'
    ],
    metrics: [
      { label: 'Active Users', value: '12k+' },
      { label: 'Transaction Latency', value: '<5ms' },
      { label: 'Crash-Free Status', value: '99.9%' }
    ],
    links: {
      github: 'https://github.com/example/apex-notes',
      playstore: 'https://play.google.com/store'
    },
    image: 'https://images.unsplash.com/photo-1607252631355-89473a72b439?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'zenith-ui',
    title: 'Zenith Design System',
    subtitle: 'Figma-to-Code Token Framework',
    problemStatement: 'Visual inconsistencies across platforms and slow hand-off periods between product design and developers delayed release cycles.',
    solutionDescription: 'Drafted a unified design library in Figma mapping components to structured JSON variables that compile directly to Tailwind custom classes.',
    role: 'Lead UI/UX Designer',
    category: 'design',
    tags: ['UI/UX Design', 'Figma', 'Design Systems', 'Interactive Prototypes'],
    tech: ['Figma', 'Tokens Studio', 'Adobe CC', 'CSS Variables', 'Tailwind'],
    keyFeatures: [
      '150+ standardized layout modules and interactive grids.',
      'Strict spacing variables establishing consistent visual margins.',
      'Automated style compiler pipeline that exports to React variables.'
    ],
    metrics: [
      { label: 'Library Components', value: '150+' },
      { label: 'Developer Velocity', value: '3x Faster' },
      { label: 'WCAG AAA Access', value: 'Pass' }
    ],
    links: {
      figma: 'https://figma.com',
      demo: 'https://zenith-ui-preview.vercel.app'
    },
    image: 'https://images.unsplash.com/photo-1581291518655-9523c932eecf?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'hydra-db',
    title: 'Hydra API & Database',
    subtitle: 'High-Ingestion Analytics Service',
    problemStatement: 'Relational data inputs were dropping and failing during high analytics usage peaks exceeding 5k+ API inquiries per second.',
    solutionDescription: 'Configured a backend engine in Node.js and Express utilizing Redis message queues to buffer database queries prior to commit execution.',
    role: 'Systems Architect',
    category: 'systems',
    tags: ['Node.js', 'Express.js', 'PostgreSQL', 'REST APIs'],
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Redis Cache', 'Docker'],
    keyFeatures: [
      'PostgreSQL query indexing reducing complex analytical join latencies.',
      'Rate-limiting routing middleware checking client integrity tokens.',
      'Redis cache layers storing static dashboard reports.'
    ],
    metrics: [
      { label: 'Peak Ingestion', value: '8,500 QPS' },
      { label: 'Average Latency', value: '12ms' },
      { label: 'Docker Uptime', value: '99.99%' }
    ],
    links: {
      github: 'https://github.com/example/hydra-db'
    },
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop'
  }
];

export const skillsData: Skill[] = [
  // Frontend
  { name: 'HTML5 / CSS3', category: 'frontend', proficiency: 'Expert', context: 'Semantic layout, CSS Grid, custom variables, responsive fluid design, and keyframe animations.' },
  { name: 'JavaScript', category: 'frontend', proficiency: 'Expert', context: 'ES6+ asynchronous functions, event delegation, closures, prototype chain, and memory optimization.' },
  { name: 'TypeScript', category: 'frontend', proficiency: 'Expert', context: 'Strict typing interfaces, generic types, utility mappings, compiler custom configurations, and static safety.' },
  { name: 'React.js', category: 'frontend', proficiency: 'Expert', context: 'Functional components, hooks, custom state context, dynamic imports, performance tuning, and memoization.' },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 'Expert', context: 'Rapid utility styling, custom configuration extend, responsive layouts, and unified design token setups.' },
  { name: 'Framer Motion', category: 'frontend', proficiency: 'Advanced', context: 'Fluid micro-animations, exit animations, layout transitions, drag gestures, and keyframe pathways.' },

  // Backend
  { name: 'Node.js', category: 'backend', proficiency: 'Expert', context: 'Asynchronous event loops, file systems manipulation, microservice structuring, and high performance APIs.' },
  { name: 'Express.js', category: 'backend', proficiency: 'Expert', context: 'Modular routing systems, custom middleware filters, validation structures, and error handling layers.' },
  { name: 'REST APIs', category: 'backend', proficiency: 'Expert', context: 'Standardized resource verbs, rate limiting, semantic status responses, and OpenAPI documentation.' },

  // Databases
  { name: 'PostgreSQL', category: 'database', proficiency: 'Expert', context: 'Relational database schema modeling, indexing strategies, CTE commands, view tables, and query tuning.' },
  { name: 'SQL', category: 'database', proficiency: 'Expert', context: 'Advanced window functions, complex multi-table joins, subqueries, and database performance profiling.' },

  // Mobile
  { name: 'Android Development', category: 'mobile', proficiency: 'Advanced', context: 'Native android architecture components, Gradle configurations, SDK APIs, and multi-thread concurrency.' },
  { name: 'Kotlin', category: 'mobile', proficiency: 'Advanced', context: 'Coroutines, Flow APIs, null-safety checks, extensions, and modern Jetpack Compose native coding.' },
  { name: 'Jetpack Compose', category: 'mobile', proficiency: 'Advanced', context: 'Declarative layout tree, component state hoisting, customizable Canvas, and screen transitions.' },

  // Design & Git
  { name: 'UI/UX Design', category: 'design', proficiency: 'Advanced', context: 'Figma wireframing, high fidelity mockups, user persona analysis, design systems, and visual hierarchy.' },
  { name: 'Figma', category: 'design', proficiency: 'Expert', context: 'Auto layout v4, component variance, design libraries, micro-interactive prototypes, and design tokens.' },
  { name: 'Git / GitHub', category: 'other', proficiency: 'Expert', context: 'Branching models, merge-conflict resolutions, rebase workflows, and GitHub action automation workflows.' }
];

export const experienceData: Experience[] = [
  {
    id: 'exp1',
    role: 'Senior Software Engineer & UI Architect',
    company: 'InnovateTech Labs',
    location: 'Remote',
    period: '2024 - Present',
    type: 'professional',
    description: [
      'Spearheaded development of core web storefronts and client dashboard web applications using React, TypeScript, and Tailwind CSS.',
      'Designed and engineered the central design system module used across 3 distinct product lines, accelerating UI implementation speed by 3x.',
      'Optimized loading benchmarks across web platforms, bringing down Core Web Vitals Largest Contentful Paint (LCP) from 3.2s to 1.1s.'
    ],
    achievements: [
      'Led a team of 4 engineers to rebuild the enterprise dashboard, decreasing support tickets related to UX navigation issues by 45%.',
      'Configured responsive Kotlin-based Android companion apps, integrating Room database cache structures.'
    ],
    tech: ['React.js', 'TypeScript', 'Tailwind', 'Kotlin', 'Room DB', 'Figma']
  },
  {
    id: 'exp2',
    role: 'Full-Stack Developer & UX Designer',
    company: 'Quantum Systems',
    location: 'Hybrid',
    period: '2022 - 2024',
    type: 'professional',
    description: [
      'Designed high-fidelity layout workflows in Figma, and implemented clean, responsive frontend and mobile views.',
      'Designed high-throughput Express.js backend services querying PostgreSQL databases with optimized index tables.',
      'Built custom REST APIs with secure JWT authentication and strict input sanitation checks.'
    ],
    achievements: [
      'Optimized SQL queries and normalized database tables, reducing execution delays of analytical report pipelines by 60%.',
      'Developed native mobile app widgets for quick data updates, utilizing Android SDK integrations.'
    ],
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Figma', 'Android SDK', 'React.js']
  },
  {
    id: 'exp3',
    role: 'Independent Web Developer & UI Designer',
    company: 'Self-Employed / Client Contracts',
    period: '2021 - 2022',
    type: 'freelance',
    description: [
      'Consulted for startup clients to build responsive single-page dashboard panels and custom Figma specifications.',
      'Implemented structural CSS optimization passes, reducing document loading times by 30%.'
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Figma']
  },
  {
    id: 'exp4',
    role: 'Open Source Launch: ApexNotes Workspace',
    company: 'Self-Published Project',
    period: '2021',
    type: 'personal',
    description: [
      'Designed and coded an open-source markdown mobile editor in Kotlin, accumulating community feedback.',
      'Shipped dynamic preview templates and localized biometric file folders.'
    ],
    tech: ['Kotlin', 'Android SDK', 'Room DB']
  },
  {
    id: 'exp5',
    role: 'Software Engineering Intern',
    company: '[Company Placeholder]',
    location: '[Location Placeholder]',
    period: '2020 - 2021',
    type: 'internship',
    description: [
      'Assisted frontend and backend refactoring sprints, contributing clean TypeScript and SQL components.',
      'Wrote automated integration test queries against sandbox staging environments.'
    ],
    tech: ['JavaScript', 'Node.js', 'PostgreSQL']
  },
  {
    id: 'exp6',
    role: 'B.S. in Computer Science',
    company: '[University Placeholder]',
    location: '[Location Placeholder]',
    period: '2018 - 2022',
    type: 'education',
    description: [
      'Completed academic projects in database index structures, Android compilation trees, and algorithm profiling.'
    ],
    tech: ['SQL', 'Java', 'Data Structures']
  },
  {
    id: 'exp7',
    role: 'First Native Android Application Deployment',
    company: 'Google Play Console',
    period: '2019',
    type: 'milestone',
    description: [
      'Successfully compiled and deployed a native utility application on Google Play Store, managing SDK configurations and asset bundles.'
    ],
    tech: ['Kotlin', 'Android Studio']
  }
];
