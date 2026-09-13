export const meta = {
  name: "Valters Upenieks",
  title:
    "Integration & QA Engineer · MCP & Agentic AI · API Automation · iGaming Platform Specialist",
  tagline:
    "Integration & QA engineer who ships the tooling that makes AI agents and APIs talk to each other reliably.",
  location: "Tenerife, Spain",
  remote: "Open to Remote",
  phone: "+34 624 421 807",
  email: "valtersupenieks35@gmail.com",
  linkedin: "linkedin.com/in/valters-upenieks-a15890284",
  linkedinUrl: "https://linkedin.com/in/valters-upenieks-a15890284",
  github: "github.com/Golden-Sins",
  githubUrl: "https://github.com/Golden-Sins",
  domain: "valtersupenieks.com",
  siteUrl: "https://valtersupenieks.com",
} as const;

export const navLinks = [
  { label: "Profile", href: "#profile" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export const stats = [
  { value: 100, suffix: "+", label: "API Issues / Month" },
  { value: 30, suffix: "%", label: "CSAT Uplift" },
  { value: 70, suffix: "+", label: "Test Scenarios" },
  { value: 2, suffix: " mo.", label: "Full Autonomy" },
] as const;

export const profile = {
  body: `Integration & QA Engineer with 1+ years of hands-on experience in B2B iGaming platform environments, API integration testing, and automation engineering. At Yggdrasil Gaming — one of the industry's leading game providers — resolved 100+ complex API integration failures monthly across international operator partners, achieving a 30% uplift in customer satisfaction and becoming the most-requested technical engineer company-wide. Built a production-grade automated testing framework with 70+ scenarios, 5 CI/CD workflows, Docker containerisation, and live Datadog observability. Recently built a Model Context Protocol (MCP) server in Node.js/TypeScript exposing the gaming platform API as AI-consumable tools, with an A2A-compliant Agent Card enabling discovery by other agents in multi-agent pipelines — verified via live agentic pipeline with Cursor AI client. Open to remote Integration Engineer, QA Automation, API Support, or Technical Account Manager roles.`,
};

export const testimonial = {
  quote:
    "Valters is a highly reliable and hard-working individual, as well as a true team player who supports his colleagues and contributes to a positive team spirit. He consistently demonstrated exceptional productivity, strong ownership of his responsibilities, and a remarkable commitment to delivering outstanding results. His professionalism, dedication, and proactive attitude make him a valuable asset to any team.",
  author: "Dawid Michalec",
  role: "Technical Operations & Integration Team Lead, Yggdrasil Gaming",
  relation: "direct manager, Oct 2024 – Aug 2025",
  note: "full recommendation on LinkedIn",
};

export type Project = {
  name: string;
  year: string;
  repo: string;
  url: string;
  description: string;
  highlights: string[];
  tags: string[];
  secondaryRepo?: string;
  secondaryUrl?: string;
};

export const projects: Project[] = [
  {
    name: "Gaming Platform Mock Server",
    year: "2026",
    repo: "github.com/Golden-Sins/gaming-platform-mock-server",
    url: "https://github.com/Golden-Sins/gaming-platform-mock-server",
    description:
      "Express/TypeScript backend providing live REST endpoints — paired with a companion MCP (Model Context Protocol) server that exposes the same API as AI-consumable tools for agentic pipelines.",
    highlights: [
      "Routes: auth test results, Datadog metrics summary, transaction status lookup, failure pattern simulation.",
      "Companion MCP layer exposes this API as tools — run_auth_tests, check_transaction, get_failure_report, simulate_failure — with an A2A-compliant Agent Card published at /.well-known/agent-card.json for discovery by other agents in multi-agent pipelines.",
      "Full agentic pipeline verified via Cursor AI client: autonomous tool invocation, live data retrieval, structured reporting — all 4 tools return live data from this backend, not mocks.",
    ],
    tags: ["Express", "TypeScript", "REST API", "MCP", "A2A", "Agentic AI"],
    secondaryRepo: "github.com/Golden-Sins/gaming-platform-mcp",
    secondaryUrl: "https://github.com/Golden-Sins/gaming-platform-mcp",
  },
  {
    name: "Gaming Platform API Testing Framework",
    year: "2025",
    repo: "github.com/Golden-Sins/gaming-platform-api",
    url: "https://github.com/Golden-Sins/gaming-platform-api",
    description:
      "70+ automated test scenarios — authentication, game management, transaction processing — built with Postman and Newman CLI.",
    highlights: [
      "5 GitHub Actions CI/CD workflows (nightly, performance, PR, Docker). Multi-environment configs (dev/staging/prod). Docker containerised.",
      "Datadog integration: custom metrics pipeline, live dashboard (pass/fail rates, duration, system metrics), automated monitor alerting.",
    ],
    tags: ["Postman", "Newman CLI", "GitHub Actions", "Docker", "Datadog"],
  },
  {
    name: "Integration Failure Playground",
    year: "2025",
    repo: "github.com/Golden-Sins/integration-failure-playground",
    url: "https://github.com/Golden-Sins/integration-failure-playground",
    description:
      "Node.js/Express sandbox simulating real-world API failures: 401/403 auth, schema validation (Zod), idempotency (409), rate limiting (429), upstream instability (500).",
    highlights: [
      "OpenAPI/Swagger 3.0 documented · Newman CLI test suite · structured JSON error envelopes with correlation IDs · CI/CD ready.",
    ],
    tags: ["Node.js", "Express", "Zod", "OpenAPI"],
  },
];

export type Job = {
  title: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    title: "Integration & QA Engineer",
    company: "Alma Creative del Mar",
    location: "Tenerife, Spain — Remote",
    dates: "Oct 2025 – Present",
    bullets: [
      "Delivering freelance web development and technical consultancy for SME clients using TypeScript and React.",
      "Managing end-to-end project delivery with QA embedded throughout — requirements, implementation, testing, and deployment.",
    ],
  },
  {
    title: "Integrations Support Engineer",
    company: "Yggdrasil Gaming",
    location: "Riga, Latvia",
    dates: "Oct 2024 – Sep 2025",
    bullets: [
      "Resolved 100+ complex REST API integration issues monthly across international B2B gaming operator partners — 30% increase in customer satisfaction scores.",
      "Diagnosed failures across OAuth2/JWT authentication, JSON schema validation, transaction idempotency, rate limiting, and upstream service instability.",
      "Most-requested technical engineer company-wide for complex escalations. Full operational autonomy within 2 months.",
      "SQL query optimisation and Linux-based database management on AWS Cloud infrastructure.",
      "Created technical runbooks for 20+ recurring integration failure patterns — reducing resolution time across the full support function.",
    ],
  },
  {
    title: "Frontend Developer · QA Engineer",
    company: "Tietoevry",
    location: "Riga, Latvia",
    dates: "Jan 2023 – Jun 2023",
    bullets: [
      "Automated API testing workflows using Postman collections and Newman CLI for CI/CD pipelines.",
      "Contributed to test strategy, code reviews, Agile/Scrum workflows, and JIRA-based bug tracking.",
    ],
  },
];

export type SkillGroup = { group: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    group: "Agentic AI",
    items: [
      "MCP (Model Context Protocol)",
      "A2A (Agent-to-Agent)",
      "Node.js MCP SDK",
      "Agentic pipelines",
      "Cursor AI",
      "LLM integration",
    ],
  },
  {
    group: "API & Integration",
    items: ["REST API", "JSON", "OAuth2/JWT", "OpenAPI/Swagger", "Postman", "Newman CLI", "Zod"],
  },
  {
    group: "Observability",
    items: ["Datadog (metrics, dashboards, monitors, Agent)", "AWS CloudWatch", "Structured logging"],
  },
  {
    group: "Automation & CI/CD",
    items: ["GitHub Actions", "Docker", "Newman CLI", "Playwright (in progress)", "Performance benchmarking"],
  },
  {
    group: "Languages",
    items: ["JavaScript / TypeScript / Node.js", "Python", "Ruby", "SQL"],
  },
  {
    group: "Infrastructure",
    items: ["Linux", "AWS Cloud", "MySQL", "Git/GitHub", "JIRA"],
  },
  {
    group: "Methodologies",
    items: ["Agile/Scrum", "QA strategy", "Technical documentation", "Shift-Left testing"],
  },
  {
    group: "AI & ML",
    items: ["TensorFlow", "PyTorch"],
  },
];

export const certifications = [
  { name: "Postman API Fundamentals Student Expert", date: "Sep 2025" },
  { name: "ISC² Certified in Cybersecurity", date: "Active" },
  { name: "Agile Testing Methodologies", date: "Active" },
  { name: "Software Testing Foundations", date: "University of Minnesota" },
  { name: "Cybersecurity Specialisation", date: "University of Leeds" },
  { name: "Programming Technician", date: "Riga State Technical School" },
];

export const languages = [
  { name: "English", level: "Native" },
  { name: "Latvian", level: "Native" },
  { name: "Spanish", level: "Basic" },
];
