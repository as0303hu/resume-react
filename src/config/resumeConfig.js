export const RESUME_CONFIG = {
  actions: {
    printButtonLabel: "Print Resume",
  },
  sections: {
    experience: "EXPERIENCE",
    summary: "SUMMARY",
    education: "EDUCATION",
    achievements: "KEY ACHIEVEMENTS",
    skills: "SKILLS",
  },
  profile: {
    name: "Ashutosh Kumar Singh",
    role: "Senior Software Engineer",
    contacts: [
      { icon: "📞", value: "7982394846" },
      { icon: "✉️", value: "as03038@gmail.com" },
      { icon: "🔗", value: "linkedin.com/in/ashu-aks" },
      { icon: "📍", value: "Bangalore, Karnataka, India" },
    ],
  },
  summary:
    "Senior Software Engineer with over 7+ years of experience in developing scalable applications using Python, PostgreSQL, AWS, and React. Skilled in backend development, LLM integration using Azure OpenAI, and prompt engineering. Proven in delivering scalable solutions with strong system design and CI/CD practices.",
  education: {
    degree: "Bachelor's Degree",
    details: "APJ Abdul Kalam Azad Technical University • 03/06/2017 • India",
  },
  achievement: {
    icon: "⭐",
    title: "Promotion at Accenture",
    details:
      "Promoted in recognition of technical ownership and consistent delivery across multiple client projects",
  },
  experiences: [
    {
      title: "Senior Software Engineer",
      companyLine:
        "Accenture Technologies • 10/2021 – Present • Karnataka, India",
      points: [
        "Designed and developed scalable backend services using Python (FastAPI) for enterprise applications in tax and analytics domains",
        "Built an AI-powered alert processing system using Azure OpenAI (LLMs) to classify and filter business-relevant alerts, reducing manual effort and improving decision accuracy",
        "Engineered an end-to-end pipeline integrating LLM validation, Selenium-based web scraping, and rule-based processing to enrich alerts with contextual external data",
        "Automated alert ingestion from monitoring tools (e.g., VisualPing) and transformed raw inputs into structured, actionable insights",
        "Developed a human-in-the-loop review workflow to validate and publish alerts, ensuring high data quality and compliance",
        "Optimized backend performance using API caching, asynchronous processing, and modular architecture, enabling scalable and efficient systems",
        "Contributed to system design and architecture discussions, building extensible solutions aligned with evolving business needs",
        "Built high-performance applications using React.js and Next.js, improving page load time by 40% via SSR and code-splitting",
        "Reduced API requests by 60% through optimized data fetching (React Query, Redux), improving overall system efficiency",
        "Implemented SEO optimizations with dynamic rendering, achieving full crawlability",
        "Developed 20+ reusable UI components, reducing development effort by 35% and improving maintainability",
        "Promoted for strong technical ownership and consistent delivery across multiple client engagements",
      ],
    },
    {
      title: "Software Developer",
      companyLine:
        "Davita Financial Services Pvt. Ltd. • 09/2020 – 09/2021 • Karnataka, India",
      points: [
        "Crafted end-to-end loan flows integrated with Flipkart using React Hook Form, Yup, and custom hooks (debounce, date-time)",
        "Engaged across UI Stack and Operational layer to streamline submission flow and increased form submissions by 29%",
        "Implemented backend rate-limiting to ensure compliance and prevent abuse/misuse of platform",
        "Styled, paginated & sortable tables with debounced filters + Redux, reduced API calls by 42% and improved performance by 21%",
      ],
    },
    {
      title: "Software Developer Associate",
      companyLine:
        "Mount Blue Technology • 05/2020 – 09/2020 • Karnataka, India",
      points: [
        "Completed 3-month intensive training program covering End-to-End process",
        "Deputed to Davita Financial Services Pvt. Ltd. - focused on Presentation Layer Fabrication",
        "Designed & executed frontend logic using Material UI components to support operational roles, enabling complete end-to-end loan workflow from logic to disbursement",
      ],
    },
  ],
  skills: [
    {
      category: "Backend & APIs",
      items: [
        "Python (FastAPI)",
        "REST API Development",
        "Microservices Architecture",
        "Async Processing",
      ],
    },
    {
      category: "AI & LLM Integration",
      items: [
        "LLM Integration (Azure OpenAI)",
        "Prompt Engineering",
        "AI Workflow Development",
      ],
    },
    {
      category: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "Redux / RTK Query",
        "Tailwind CSS / Material UI",
      ],
    },
    {
      category: "Database & Cloud",
      items: ["PostgreSQL", "MongoDB", "MySQL", "AWS"],
    },
  ],
};

export const RESUME_UI = {
  pageWrapper: "resume-page min-h-screen bg-gray-100 py-4 px-2",
  sheetWrapper:
    "resume-sheet max-w-[1100px] mx-auto bg-white border border-gray-300 shadow-lg overflow-hidden",
  printControl: "max-w-[1100px] mx-auto mb-4 text-right print-control",
  printButton:
    "inline-flex items-center rounded-md bg-[#1e40af] px-4 py-2 text-sm font-semibold text-white shadow-sm",
  header: {
    wrapper:
      "border-b border-gray-300 pb-4 pt-4 px-6 flex flex-col gap-3 md:flex-row md:items-start md:justify-between",
    left: "text-left",
    name: "text-3xl font-bold tracking-tight text-[#1e40af] leading-tight",
    role: "text-base text-blue-600 font-semibold mt-1",
    contactsList: "list-none m-0 p-0 space-y-1 text-[13px] text-right",
    contactItem: "flex items-center justify-end gap-2 leading-tight",
    contactIcon: "w-4 text-center",
  },
  bodyGrid: "grid grid-cols-12 gap-6 p-4",
  columns: {
    left: "col-span-7",
    right: "col-span-5 space-y-6",
  },
  sectionTitle:
    "text-[#1e40af] font-bold text-lg border-b-2 border-[#1e40af] pb-1",
  sectionTitleWithMargin:
    "text-[#1e40af] font-bold text-lg border-b-2 border-[#1e40af] pb-1 mb-3",
  experience: {
    role: "font-bold text-[#1e40af] m-0 leading-tight",
    companyLine: "font-semibold m-0 mt-0.5 leading-tight",
    list: "text-[11px] mt-2 space-y-1 list-none",
    item: "",
    block: "mb-6",
    highlightLabel: "mt-2 font-medium",
  },
  summaryText: "text-sm leading-relaxed",
  educationDegree: "font-semibold",
  educationDetails: "text-sm",
  achievementWrapper: "flex gap-2",
  achievementIcon: "text-2xl",
  skillCategory: "text-blue-600 font-semibold m-0 mb-1 leading-tight",
  skillItems: "flex flex-wrap gap-x-4 gap-y-0.5 text-[12px] leading-tight",
  skillsWrapper: "space-y-2",
};
