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
    role: "Senior Software Engineer | Python | FastAPI | React | Generative AI",
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
    "Senior Software Engineer with 7+ years of experience developing scalable backend systems, modern web applications, and AI-powered enterprise solutions using Python, FastAPI, React, PostgreSQL, and AWS. Built and optimized large-scale regulatory intelligence, tax research, and financial services platforms through microservices architecture, asynchronous processing, and API-driven systems. Experienced in Generative AI technologies including Azure OpenAI, RAG, Agentic AI, Prompt Engineering, and document intelligence workflows. Strong track record of translating complex business requirements into secure, scalable, and production-ready software solutions.",
  education: {
    degree: "B.Tech",
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
      company: "Accenture Technologies",
      duration: "Oct 2021 – Present",
      location: "Bengaluru, India",
      projects: [
        {
          name: "GRIP – Global Regulatory Intelligence Platform | Senior Backend Engineer",
          points: [
            "Architected and developed scalable backend services for a global regulatory intelligence platform ingesting content from 280+ regulatory sources.",
            "Designed and maintained FastAPI-based microservices and PostgreSQL data models for alert generation, classification, enrichment, and delivery workflows.",
            "Designed and implemented event-driven processing pipelines using Python and AWS SQS, reliably handling 3K–4K regulatory alerts/month with high reliability and fault tolerance",
            "Developed REST APIs for alert management, source monitoring, workflow automation, and regulatory research operations.",
            "Optimised database queries and backend workflows to improve performance, scalability, and reliability.",
            "Designed and implemented a RAG (Retrieval-Augmented Generation) POC using embedding models and Azure OpenAI for semantic search, contextual retrieval, and AI-driven summarisation.",
            "Implemented LLM-driven triage and summarisation workflows using Azure OpenAI and prompt engineering to enhance regulatory research outputs.",
            "Collaborated with product, research, and compliance stakeholders to deliver production-grade backend systems.",
          ],
        },
        {
          name: "Tax Research Reimagination / AI Workflow Automation | Backend & GenAI Engineer",
          points: [
            "Engineered AI workflow automation pipelines combining LLM validation, Selenium-based extraction, rule-based enrichment, and structured tax research insight generation.",
            "Designed end-to-end document intelligence workflows for PDF ingestion, extraction, validation, enrichment, human review, and publishing.",
            "Built AI-native backend solutions using Azure OpenAI, prompt engineering, and workflow orchestration to automate tax research operations.",
            "Authored HLD and LLD architecture for large-scale PDF processing systems, covering workflow orchestration, service integration, exception handling, and publishing lifecycle.",
            "Developed Agentic AI workflows orchestrating multi-step LLM-driven extraction, validation, enrichment, and decision-making pipelines.",
            "Defined scalable system architecture, API integration patterns, and observability workflows for enterprise AI platform modernization.",
            "Automated human-in-the-loop review and publishing workflows to improve quality, compliance readiness, and production reliability.",
          ],
        },
        {
          name: "Social Media Platform | Full Stack Engineer",
          points: [
            "Built high-performance full-stack features using React.js and Next.js, improving page load performance by 40% via SSR and code-splitting.",
            "Reduced API calls by 60% using optimised data-fetching strategies with React Query, Redux, and caching.",
            "Developed 20+ reusable UI components using Material UI, reducing development effort by 35%.",
            "Integrated frontend modules with backend APIs to deliver scalable and responsive user experiences.",
          ],
        },
      ],
    },
    {
      title: "Software Developer",
      company: "Davita Financial Services Pvt. Ltd.",
      duration: "Sep 2020 – Sep 2021",
      location: "Karnataka, India",
      projects: [
        {
          name: "Marketplace Partner Integration Platform",
          points: [
            "Built and integrated partner-facing application forms for marketplace channels such as Flipkart and Amazon to support embedded customer onboarding journeys.",
            "Developed the UI flow where users launch a specific product card and open a contextual application experience directly within the partner touchpoint.",
            "Crafted end-to-end loan application flows using React Hook Form, Yup, and reusable custom hooks (debounce, date-time) to improve form reliability and validation quality.",
            "Collaborated across UI and operational layers to streamline submission workflows, contributing to a 29% increase in completed form submissions.",
          ],
        },
        {
          name: "Loan Operations Workflow Platform",
          points: [
            "Implemented backend rate-limiting to ensure compliance and prevent abuse/misuse of platform",
            "Styled, paginated & sortable tables with debounced filters + Redux, reduced API calls by 42% and improved performance by 21%",
          ],
        },
      ],
    },
    {
      title: "Software Developer Associate",
      company: "Mount Blue Technology",
      duration: "May 2019 – Sep 2020",
      location: "Karnataka, India",
      projects: [
        {
          name: "Loan Operations Workflow Platform",
          points: [
            "Completed 3-month intensive training program covering End-to-End process",
            "Deputed to Davita Financial Services Pvt. Ltd. - focused on Presentation Layer Fabrication",
            "Designed & executed frontend logic using Material UI components to support operational roles, enabling complete end-to-end loan workflow from logic to disbursement",
          ],
        },
      ],
    },
  ],
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
      category: "Backend Development",
      items: [
        "FastAPI",
        "REST APIs",
        "Microservices",
        "Asynchronous Programming",
        "API Integration",
        "Authentication & Authorization",
        "Backend Architecture",
      ],
    },
    {
      category: "AI & Generative AI",
      items: [
        "Azure OpenAI",
        "Generative AI",
        "LLMs",
        "RAG",
        "Agentic AI",
        "LangGraph",
        "Prompt Engineering",
        "Embedding Models",
        "AI Workflow Automation",
      ],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "SQLite"],
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Docker", "Liquibase", "Git", "GitHub"],
    },
    {
      category: "Messaging & Integration",
      items: ["AWS SQS", "Event-Driven Architecture", "Service Integrations"],
    },
    {
      category: "Frontend Development",
      items: ["React.js", "Redux", "React Query", "Material UI"],
    },
    {
      category: "Architecture & Engineering",
      items: [
        "System Design",
        "Distributed Systems",
        "Microservices Architecture",
        "API Design",
        "Scalable Systems",
        "Performance Optimization",
      ],
    },
    {
      category: "Monitoring & Collaboration",
      items: ["Datadog", "Jira", "Confluence", "Agile", "Scrum"],
    },
  ],
};
