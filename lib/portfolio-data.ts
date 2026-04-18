export type PortfolioProject = {
  title: string;
  slug: string;
  category:
    | "Custom Business Systems"
    | "Automation Engines"
    | "AI Assistants"
    | "Operating System Design"
    | "Reporting & Visibility Systems"
    | "Platforms, Tools & Digital Utilities";
  summary: string;
  clientType: string;
  status: "Concept Build" | "Internal Demo" | "Production-Ready Prototype";
  visualType: "dashboard" | "workflow" | "assistant" | "reporting" | "tool";
  thumbnail: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  useCase: string;
  outcome: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "ISP Support & Operations Console",
    slug: "isp-support-operations-console",
    category: "Custom Business Systems",
    summary:
      "A support and operational command environment for high-volume service environments handling onboarding, faults, voucher queries, and coverage workflows.",
    clientType: "Internet service provider / telecom operations",
    status: "Production-Ready Prototype",
    visualType: "dashboard",
    thumbnail: "/images/portfolio/dashboard-1.jpg",
    problem:
      "Support demand, onboarding friction, voucher issues, and operational visibility create pressure when teams rely on fragmented handling and manual follow-up.",
    solution:
      "A structured internal console centralizes support logic, operational monitoring, household visibility, and service handling into one controlled system.",
    features: [
      "Household and area visibility dashboards",
      "Voucher and support query handling",
      "Coverage and service status panels",
      "Support workflow routing and escalation logic",
      "Operational metrics and live activity views",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "Custom dashboard UI architecture",
    ],
    useCase:
      "Used by teams that need one system to manage support pressure, visibility, and service operations at scale.",
    outcome:
      "Creates stronger control, faster issue handling, and a more structured operational environment for support-heavy businesses.",
  },
  {
    title: "Franchise Lead Routing System",
    slug: "franchise-lead-routing-system",
    category: "Custom Business Systems",
    summary:
      "A lead distribution and territory-aware routing system for brands operating across franchise regions and local operators.",
    clientType: "Franchise network / distributed sales operation",
    status: "Production-Ready Prototype",
    visualType: "workflow",
    thumbnail: "/images/portfolio/workflow-1.jpg",
    problem:
      "Parent-brand leads and territory leads often become fragmented, delayed, or duplicated when routing logic is not structured clearly.",
    solution:
      "A centralized system captures leads, applies territory logic, assigns ownership, tracks movement, and gives leadership visibility across the network.",
    features: [
      "Territory-based routing logic",
      "Lead ownership assignment",
      "Franchise vs central team visibility",
      "Escalation and reassignment controls",
      "Cross-territory dashboard reporting",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "Workflow logic layer",
    ],
    useCase:
      "Ideal for brands with regional operators, franchisees, or layered sales accountability.",
    outcome:
      "Improves lead control, removes routing confusion, and creates cleaner accountability across distributed teams.",
  },
  {
    title: "Travel Booking Automation Engine",
    slug: "travel-booking-automation-engine",
    category: "Custom Business Systems",
    summary:
      "A full booking and payment workflow system for travel businesses moving from manual lead handling to digital booking execution.",
    clientType: "Travel company / booking operation",
    status: "Internal Demo",
    visualType: "workflow",
    thumbnail: "/images/portfolio/workflow-2.jpg",
    problem:
      "Manual itinerary discussion, booking coordination, payment handling, and voucher delivery slow the business and create unnecessary admin pressure.",
    solution:
      "A structured booking system lets users view offers, select packages, pay directly, and move into an automated confirmation flow.",
    features: [
      "Package browsing and itinerary flow",
      "Integrated booking journey",
      "Payment confirmation logic",
      "Voucher and confirmation delivery workflow",
      "Admin-side booking visibility",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Form and workflow architecture",
      "API-ready checkout structure",
    ],
    useCase:
      "Designed for travel businesses ready to reduce manual sales coordination and improve direct booking efficiency.",
    outcome:
      "Transforms a manual sales-and-booking pipeline into a cleaner digital transaction flow.",
  },
  {
    title: "Client Operations Portal",
    slug: "client-operations-portal",
    category: "Custom Business Systems",
    summary:
      "A secure portal environment giving clients direct access to project status, requests, files, service visibility, and delivery milestones.",
    clientType: "Service business / agency / managed operations",
    status: "Concept Build",
    visualType: "dashboard",
    thumbnail: "/images/portfolio/dashboard-2.jpg",
    problem:
      "Client communication often becomes fragmented across email threads, messages, and informal updates, creating confusion and duplicated work.",
    solution:
      "A client portal creates one controlled place for requests, delivery status, shared materials, and project communication visibility.",
    features: [
      "Client request submission",
      "Project and milestone tracking",
      "Shared file access structure",
      "Service status visibility",
      "Client-side dashboard experience",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Portal UI architecture",
    ],
    useCase:
      "Useful for businesses that want to professionalize client interaction and reduce communication fragmentation.",
    outcome:
      "Creates a cleaner client experience and reduces operational drag caused by scattered communication.",
  },
  {
    title: "Lead Conversion Engine",
    slug: "lead-conversion-engine",
    category: "Automation Engines",
    summary:
      "An automation system designed to capture leads, qualify them, trigger follow-up, and keep pipeline movement from stalling.",
    clientType: "Sales-driven business / service operation",
    status: "Production-Ready Prototype",
    visualType: "workflow",
    thumbnail: "/images/portfolio/workflow-3.jpg",
    problem:
      "Leads often leak due to slow response times, weak qualification, poor follow-up consistency, and lack of pipeline movement.",
    solution:
      "An automated conversion layer handles inbound capture, logic-based qualification, timed follow-up, and visible stage progression.",
    features: [
      "Automated lead capture",
      "Qualification logic",
      "Follow-up sequencing",
      "Pipeline stage updates",
      "Response speed visibility",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "React",
      "Automation workflow logic",
      "CRM-ready architecture",
    ],
    useCase:
      "Built for businesses that need stronger sales handling without increasing manual admin.",
    outcome:
      "Improves follow-up speed, raises process consistency, and reduces lead leakage.",
  },
  {
    title: "WhatsApp Follow-Up Automation Layer",
    slug: "whatsapp-follow-up-automation-layer",
    category: "Automation Engines",
    summary:
      "A structured WhatsApp automation flow for businesses needing faster engagement, qualification, reminders, and next-step messaging.",
    clientType: "Lead-driven service business",
    status: "Internal Demo",
    visualType: "workflow",
    thumbnail: "/images/portfolio/workflow-4.jpg",
    problem:
      "WhatsApp is often one of the highest-conversion channels, but manual handling creates delays, inconsistency, and missed opportunities.",
    solution:
      "A messaging layer uses automation rules, response logic, and handoff triggers to keep conversations moving reliably.",
    features: [
      "Automated first-response flows",
      "Reminder and follow-up triggers",
      "Handoff conditions for human intervention",
      "Message sequence logic",
      "Lead progression support",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "WhatsApp integration-ready architecture",
      "Workflow logic",
      "Tailwind CSS",
    ],
    useCase:
      "Designed for businesses that rely heavily on WhatsApp for lead movement or support interaction.",
    outcome:
      "Increases response consistency and reduces the operational load of manual chat handling.",
  },
  {
    title: "Task Routing & Escalation Engine",
    slug: "task-routing-escalation-engine",
    category: "Automation Engines",
    summary:
      "An automation engine that assigns, routes, tracks, and escalates tasks based on rules, workload, and business priority.",
    clientType: "Operations-heavy business / internal teams",
    status: "Concept Build",
    visualType: "workflow",
    thumbnail: "/images/portfolio/workflow-5.jpg",
    problem:
      "Task ownership becomes unclear when assignments happen informally and escalation paths are not built into the workflow.",
    solution:
      "A structured engine routes internal tasks based on logic, assigns ownership, tracks aging, and escalates where needed.",
    features: [
      "Rules-based task assignment",
      "Escalation logic",
      "Priority-based movement",
      "Aging and delay visibility",
      "Internal accountability tracking",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Workflow engine architecture",
      "Dashboard-ready UI",
    ],
    useCase:
      "Works well for teams handling recurring internal workflow, support queues, or service delivery coordination.",
    outcome:
      "Creates stronger accountability and prevents important work from stalling invisibly.",
  },
  {
    title: "BluGrid Website Advisor",
    slug: "blugrid-website-advisor",
    category: "AI Assistants",
    summary:
      "A branded AI assistant that helps website visitors describe their business problems and understand the right system direction.",
    clientType: "BluGrid internal / website lead qualification",
    status: "Internal Demo",
    visualType: "assistant",
    thumbnail: "/images/portfolio/assistant-1.jpg",
    problem:
      "Most sites rely on passive forms, which do not help visitors understand what they actually need.",
    solution:
      "An advisor-style assistant asks structured questions, interprets pain points, and recommends likely BluGrid service directions.",
    features: [
      "Conversational business intake",
      "System-direction recommendations",
      "Lead qualification logic",
      "Quick prompts and guided flow",
      "Audit handoff path",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "React",
      "OpenAI-ready assistant interface",
      "Tailwind CSS",
    ],
    useCase:
      "Useful for turning interest into qualified conversations through guided discovery.",
    outcome:
      "Improves website engagement and helps convert vague interest into clearer system opportunities.",
  },
  {
    title: "Customer Support AI Assistant",
    slug: "customer-support-ai-assistant",
    category: "AI Assistants",
    summary:
      "An AI-first support layer designed to handle repetitive support questions, basic diagnosis, and escalation triage.",
    clientType: "Support-heavy service business",
    status: "Concept Build",
    visualType: "assistant",
    thumbnail: "/images/portfolio/assistant-2.jpg",
    problem:
      "High support volume creates operational strain when repetitive queries consume the same human effort repeatedly.",
    solution:
      "A support assistant answers common questions, gathers context, guides users through basic resolution steps, and escalates when needed.",
    features: [
      "Support question handling",
      "Guided triage logic",
      "Escalation conditions",
      "Context gathering before handoff",
      "Workflow-ready support routing",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "React",
      "OpenAI-ready architecture",
      "Support workflow design",
    ],
    useCase:
      "Best for support operations looking to reduce repetitive query load.",
    outcome:
      "Improves response capacity while reducing the pressure placed on human teams.",
  },
  {
    title: "Internal Team Assistant",
    slug: "internal-team-assistant",
    category: "AI Assistants",
    summary:
      "An internal assistant that helps team members access process guidance, system logic, and operational support without relying on informal tribal knowledge.",
    clientType: "Internal operations / employee enablement",
    status: "Concept Build",
    visualType: "assistant",
    thumbnail: "/images/portfolio/assistant-3.jpg",
    problem:
      "Teams often depend on memory, informal explanation, and repeated questions when process guidance is not easily accessible.",
    solution:
      "An internal assistant provides structured process guidance, system support, and contextual operational answers inside the business.",
    features: [
      "Internal process guidance",
      "Operational knowledge support",
      "Workflow-specific assistance",
      "Team enablement interactions",
      "Structured internal prompt pathways",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "React",
      "Assistant interface architecture",
      "Knowledge-layer ready design",
    ],
    useCase:
      "Useful for businesses that want stronger internal clarity and less repeated support overhead.",
    outcome:
      "Improves consistency and reduces dependence on informal process knowledge.",
  },
  {
    title: "Business Operating System Blueprint",
    slug: "business-operating-system-blueprint",
    category: "Operating System Design",
    summary:
      "A structured operating model that redesigns how a business runs across workflows, accountability, visibility, and control.",
    clientType: "Growing business with operational complexity",
    status: "Concept Build",
    visualType: "workflow",
    thumbnail: "/images/portfolio/workflow-6.jpg",
    problem:
      "As businesses grow, patchwork processes create hidden pressure, weak accountability, and poor coordination between teams.",
    solution:
      "A full operating system blueprint maps the business flow and structures it into a cleaner digital environment.",
    features: [
      "Workflow architecture mapping",
      "Responsibility and control structure",
      "Cross-functional system design",
      "Visibility model planning",
      "Operational layer strategy",
    ],
    techStack: [
      "System architecture planning",
      "Next.js-ready UI approach",
      "TypeScript",
      "Workflow modeling",
      "Dashboard design strategy",
    ],
    useCase:
      "Designed for businesses that have outgrown informal operations and need a more engineered structure.",
    outcome:
      "Creates a framework for stronger scale, cleaner movement, and more reliable execution.",
  },
  {
    title: "Franchise Operations OS",
    slug: "franchise-operations-os",
    category: "Operating System Design",
    summary:
      "An operating environment for franchise groups needing central oversight while still supporting local execution layers.",
    clientType: "Franchise operation / distributed multi-location brand",
    status: "Internal Demo",
    visualType: "workflow",
    thumbnail: "/images/portfolio/workflow-7.jpg",
    problem:
      "Franchise businesses need central control and visibility without completely flattening local operator flexibility.",
    solution:
      "A layered operating system structure supports central reporting, local task visibility, territory logic, and shared standards.",
    features: [
      "Franchise-level visibility model",
      "Local vs central control logic",
      "Standardized reporting pathways",
      "Territory-aware workflow structure",
      "Accountability across multiple operators",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Dashboard and routing architecture",
      "Workflow modeling",
    ],
    useCase:
      "Built for brands managing multiple operators, territories, or branch-based execution.",
    outcome:
      "Improves structure and reduces friction between central leadership and local operations.",
  },
  {
    title: "Executive Reporting Command Layer",
    slug: "executive-reporting-command-layer",
    category: "Reporting & Visibility Systems",
    summary:
      "A reporting environment designed for leadership visibility across pipeline activity, operations, support, and performance movement.",
    clientType: "Owner-led or executive-led business",
    status: "Production-Ready Prototype",
    visualType: "reporting",
    thumbnail: "/images/portfolio/reporting-1.jpg",
    problem:
      "Leadership often has to make decisions from fragmented reports, delayed updates, and incomplete operational visibility.",
    solution:
      "A command-layer dashboard pulls key movement into one executive view so leaders can identify pressure, performance, and bottlenecks faster.",
    features: [
      "Executive KPI visibility",
      "Pipeline and activity monitoring",
      "Operational health snapshots",
      "Decision-support reporting",
      "Centralized leadership view",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Dashboard UI system",
    ],
    useCase:
      "Useful for leadership teams that need live operational visibility rather than retrospective reporting.",
    outcome:
      "Creates faster decision-making and reduces blind spots inside the business.",
  },
  {
    title: "Sales Pipeline Visibility Dashboard",
    slug: "sales-pipeline-visibility-dashboard",
    category: "Reporting & Visibility Systems",
    summary:
      "A sales and activity dashboard focused on pipeline movement, conversion pressure, follow-up speed, and rep-level visibility.",
    clientType: "Sales-led service business",
    status: "Internal Demo",
    visualType: "reporting",
    thumbnail: "/images/portfolio/reporting-2.jpg",
    problem:
      "Sales teams struggle when pipeline movement is not visible enough to detect stalling, leakage, or inconsistent execution.",
    solution:
      "A dedicated dashboard layer exposes pipeline health, activity velocity, response gaps, and conversion movement clearly.",
    features: [
      "Pipeline stage visibility",
      "Response-time metrics",
      "Rep activity monitoring",
      "Lead leakage indicators",
      "Sales movement insights",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Dashboard components",
    ],
    useCase:
      "Designed for teams that need stronger insight into how sales work is actually moving.",
    outcome:
      "Improves visibility into where conversion pressure is building and where follow-up needs improvement.",
  },
  {
    title: "Business Systems Audit Tool",
    slug: "business-systems-audit-tool",
    category: "Platforms, Tools & Digital Utilities",
    summary:
      "An interactive audit tool that scores operational structure and highlights where system maturity is weakest.",
    clientType: "Lead generation / advisory / qualification tool",
    status: "Production-Ready Prototype",
    visualType: "tool",
    thumbnail: "/images/portfolio/tool-1.jpg",
    problem:
      "Most businesses know something feels inefficient but cannot clearly identify where their operational structure is weakest.",
    solution:
      "A guided audit tool scores business-system maturity and highlights friction areas that likely need redesign or automation.",
    features: [
      "Interactive operational scoring",
      "Gap identification",
      "Maturity band analysis",
      "BluGrid direction recommendation",
      "Lead qualification support",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Client-side scoring logic",
    ],
    useCase:
      "Useful as both a value tool for visitors and a qualification layer for BluGrid opportunities.",
    outcome:
      "Turns vague operational pain into something visible and actionable.",
  },
  {
    title: "Automation Readiness Tool",
    slug: "automation-readiness-tool",
    category: "Platforms, Tools & Digital Utilities",
    summary:
      "A scoring tool that evaluates whether a business is ready for automation and deeper system-driven execution.",
    clientType: "Lead qualification / business readiness assessment",
    status: "Production-Ready Prototype",
    visualType: "tool",
    thumbnail: "/images/portfolio/tool-2.jpg",
    problem:
      "Businesses often want automation before they have the structure needed to deploy it effectively.",
    solution:
      "A readiness tool measures process repeatability, data quality, team alignment, and rule clarity before automation planning begins.",
    features: [
      "Automation readiness scoring",
      "Readiness band results",
      "Structural gap insights",
      "Recommendation logic",
      "BluGrid next-step suggestion",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Client-side scoring engine",
    ],
    useCase:
      "Useful for helping businesses understand whether they need automation now or structural cleanup first.",
    outcome:
      "Improves the quality of system planning and reduces premature automation decisions.",
  },
  {
    title: "Revenue & Time Leakage Estimator",
    slug: "revenue-time-leakage-estimator",
    category: "Platforms, Tools & Digital Utilities",
    summary:
      "A business calculator that estimates operational waste caused by manual admin, delayed follow-up, and weak system handling.",
    clientType: "Lead generation / business insight tool",
    status: "Production-Ready Prototype",
    visualType: "tool",
    thumbnail: "/images/portfolio/tool-3.jpg",
    problem:
      "Operational leakage is often invisible because businesses do not quantify the cost of manual work or missed opportunity handling.",
    solution:
      "An estimator calculates likely wasted time and exposed revenue based on team effort, lead flow, and follow-up quality.",
    features: [
      "Manual-work estimates",
      "Lead leakage calculations",
      "Recoverable value estimates",
      "Business impact framing",
      "Conversion-oriented CTA logic",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Interactive calculator logic",
    ],
    useCase:
      "Works as a value-driven tool to create urgency and expose the cost of weak systems.",
    outcome:
      "Helps businesses see operational weakness in commercial terms rather than vague frustration.",
  },
];

export const portfolioCategories = [
  "Custom Business Systems",
  "Automation Engines",
  "AI Assistants",
  "Operating System Design",
  "Reporting & Visibility Systems",
  "Platforms, Tools & Digital Utilities",
] as const;

export function getProjectBySlug(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}