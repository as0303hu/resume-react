export const RESUME_CONFIG = {
  actions: {
    printButtonLabel: "Print Resume",
  },
  sections: {
    experience: "EXPERIENCE",
    poc: "PROOF OF CONCEPT",
    summary: "SUMMARY",
    education: "EDUCATION",
    achievements: "KEY ACHIEVEMENTS",
    skills: "SKILLS",
  },
  profile: {
    name: "Ashutosh Kumar Singh",
    role: "Senior Software Engineer | Full Stack (Python | React | GenAI)",
    contacts: [
      { icon: "📞", value: "7982394846" },
      {
        icon: "✉️",
        value: "as0303hu@gmail.com",
        url: "mailto:as0303hu@gmail.com",
      },
      {
        icon: "🔗",
        value: "linkedin.com/in/ashu-aks",
        url: "https://linkedin.com/in/ashu-aks",
      },
      { icon: "📍", value: "Noida, Uttar Pradesh, India" },
    ],
  },
  summary:
    "Senior Software Engineer with 7+ years of experience in designing and developing scalable enterprise applications using Python, FastAPI, React.js, PostgreSQL, and Docker across Tax Compliance, Financial Services (NBFC), and Digital Media domains. Experienced in building high-performance REST APIs, AI-powered automation solutions, and modern web applications. Hands-on expertise in Azure OpenAI, Retrieval-Augmented Generation (RAG), Agentic AI, and Large Embedding Models for developing intelligent tax research and document analysis solutions. Proven ability to collaborate directly with business stakeholders and deliver end-to-end, scalable applications from design to production. Passionate about building robust backend systems, AI-driven products, and high-quality software solutions.",
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
  certifications: {
    items: ["AWS Certified Cloud Practitioner", "Microsoft Azure Fundamentals"],
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
        "Mount Blue Technology • 05/2019 – 09/2020 • Karnataka, India",
      points: [
        "Completed 3-month intensive training program covering End-to-End process",
        "Deputed to Davita Financial Services Pvt. Ltd. - focused on Presentation Layer Fabrication",
        "Designed & executed frontend logic using Material UI components to support operational roles, enabling complete end-to-end loan workflow from logic to disbursement",
      ],
    },
  ],
  poc: {
    title: "RAG & Vector Database Proof of Concept",
    items: [
      "Built a proof of concept for RAG-enabled AI workflows using Azure OpenAI and vector database search",
      "Integrated retrieval-augmented generation with contextual prompt orchestration for higher-quality responses",
      "Validated concept performance by combining LLM inference, vector search, and prompt engineering in a real-world scenario",
      "Demonstrated end-to-end retrieval and answer generation with scalable search vectors",
    ],
  },
  footer: {
    signatureLabel: "Signature",
    signature: "Ashutosh Kumar Singh",
    dateLabel: "Date",
    date: "27 June 2026",
  },
  secondPage: {
    title: "ADDITIONAL INFORMATION",
    blocks: [
      {
        title: "PROJECTS",
        items: [
          "Built a modular React resume template with reusable UI sections and print-friendly layout",
          "Created a clean, professional structure that can be extended with more experience or portfolio content",
        ],
      },
      {
        title: "CERTIFICATIONS",
        items: [
          "AWS Certified Cloud Practitioner",
          "Microsoft Azure Fundamentals",
        ],
      },
    ],
  },
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript (ES6+)", "SQL"],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        "FastAPI",
        "React.js",
        "Next.js",
        "LangGraph",
        "Redux",
        "React Query",
        "Material UI",
        "Pydantic",
      ],
    },
    {
      category: "AI & Generative AI",
      items: [
        "Azure OpenAI",
        "LangGraph",
        "Agentic AI",
        "Retrieval-Augmented Generation (RAG)",
        "Prompt Engineering",
        "Large Language Models (LLMs)",
        "Embedding Models",
        "AI Workflow Automation",
      ],
    },
    {
      category: "Backend Development",
      items: [
        "REST APIs",
        "Microservices",
        "Asynchronous Programming",
        "API Integration",
        "Authentication & Authorization",
      ],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "SQLite"],
    },
    {
      category: "DevOps & Cloud",
      items: ["Docker", "AWS", "Liquibase", "Git", "GitHub"],
    },
    {
      category: "Automation & Tools",
      items: ["Jira", "Confluence"],
    },
    {
      category: "Methodologies",
      items: ["Agile", "Scrum"],
    },
  ],
};
