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
        icon: "✉",
        value: "as0303hu@gmail.com",
        url: "mailto:as0303hu@gmail.com",
      },
      {
        icon: "🔗",
        value: "linkedin.com/in/ashu-aks",
        url: "https://linkedin.com/in/ashu-aks",
      },
      // TODO: uncomment once GitHub profile has pinned repos
      // (see local-doc/evaluation/CV-EXPECTATIONS-ANALYSIS.md)
      // {
      //   icon: "💻",
      //   value: "github.com/as0303hu",
      //   url: "https://github.com/as0303hu",
      // },
      { icon: "📍", value: "Noida, Uttar Pradesh, India" },
    ],
  },
  summary:
    "Senior Software Engineer with 7+ years building backend systems and " +
    "AI-powered platforms using Python, FastAPI, React, and AWS. Shipped " +
    "production LLM pipelines (RAG, LangGraph, multi-agent workflows) and " +
    "owned end-to-end system design for regulatory intelligence and tax " +
    "research platforms processing 4K+ alerts/month.",
  education: {
    degree: "B.Tech",
    details: "APJ Abdul Kalam Azad Technical University • 03/06/2017 • India",
  },
  achievements: [
    {
      icon: "🚀",
      title: "GRIP Platform - POC to Production Launch",
      details:
        "Led backend delivery from POC to production, migrating 7,574 alerts " +
        "- platform now used by E-Invoicing Tax Research team to monitor " +
        "global mandates with >90% AI classification accuracy across 200+ " +
        "government sources.",
    },
    {
      icon: "⚡",
      title: "Test Data Generation - Manual to Automated",
      details:
        "Eliminated the most time-consuming manual step in regression testing " +
        "- shipped a platform covering ~249 countries that auto-generates " +
        "combinatorial test data via a custom permutation engine, replacing " +
        "hundreds of hand-crafted CSV rows per country.",
    },
  ],
  certifications: {
    items: [
      "Large PDF RAG Pipeline - LangChain, PyMuPDF, pgvector, Azure OpenAI - " +
        "Production RAG system for 100+ page regulatory PDFs",
    ],
  },
  experiences: [
    {
      title: "Senior Software Engineer",
      company: "Accenture Technologies",
      duration: "Oct 2021 - Present",
      location: "Bengaluru, India",
      projects: [
        {
          name: "GRIP | Global Regulatory Intelligence Platform | Senior Backend & GenAI Engineer",
          points: [
            "Owned the backend for an AI-powered regulatory intelligence " +
              "platform used by the E-Invoicing Tax Research team to monitor " +
              "global e-invoicing mandates - built the ingestion pipeline " +
              "processing webhooks from 200+ government websites via VisualPing " +
              "into FastAPI on ECS Fargate.",
            "Designed FastAPI (Python 3.11) backend services and PostgreSQL " +
              "15 data models for the full alert lifecycle - ingestion, AI " +
              "classification, multi-level review (3 approval tiers), and " +
              "publishing to Notion.",
            "Built event-driven processing pipelines using Python and AWS " +
              "SQS, reliably processing 3K-4K regulatory alerts/month - " +
              "integrated VisualPing webhooks and backend queue processing " +
              "across 4 environments (dev, stable, stage, prod).",
            "Built REST APIs for alert management (with server-side " +
              "pagination and total_count), datasource monitoring, and the " +
              "3-level approval workflow - implemented Cognito OAuth 2.0 token " +
              "validation middleware for all protected endpoints.",
            "Implemented structured logging across all third-party " +
              "integrations (Notion, OpenAI) with correlation context - making " +
              "API failures, error rates, AI processing backlog, and webhook " +
              "issues traceable and debuggable in production.",
            "Built and shipped a production RAG pipeline for large regulatory " +
              "PDFs (100+ pages) using LangChain, PyMuPDF, and pgvector - " +
              "chunking, embedding, and vector similarity search over a " +
              "dedicated PostgreSQL vector store, enabling semantic retrieval " +
              "of regulatory content that the standard AI pipeline couldn't " +
              "process.",
            "Designed a 3-stage LLM prompt pipeline (triage -> exploration -> " +
              "item tagging) using Azure OpenAI GPT-4.1 and Jinja templates - " +
              "each stage produces paired reasoning and confidence fields, " +
              "enabling transparent AI decisions that analysts validate before " +
              "publishing for business-wide consumption.",
          ],
        },
        {
          name: "Tax Research Reimagined (TRR) / TRAIN | Backend & GenAI Engineer",
          points: [
            "Contributed to the RuleBuilder AI agent - a LangGraph-based " +
              "multi-agent system with 5 specialized agents (Orchestrator, " +
              "DataModel, FormSpec, Rules, Template) that automates tax rule " +
              "authoring from natural language for production rule execution.",
            "Owned and architected the Test Data Generation platform " +
              "end-to-end - designed the FastAPI engine and React 19 frontend, " +
              "consuming DMD APIs for live tax form definitions, replacing the " +
              "team's manual PICT/Excel process with an automated combinatorial " +
              "permutation engine generating test coverage across ~249 " +
              "countries.",
            "Delivered 3 milestone releases for the test data engine - " +
              "cascade selection UI, combinatorial n-way coverage generation, " +
              "merge workflows, multi-tax-set support, column profile " +
              "management, and dual-format CSV export (44-col VITR regression / " +
              "87-208-col VVC Tax Research).",
            "Built the FastAPI backend (Python 3.12, SQLAlchemy 2, asyncpg) " +
              "with PostgreSQL schema design (Liquibase migrations), REST APIs " +
              "for generation runs, transaction CRUD, and CSV export - serving " +
              "a React 19 frontend deployed on Azure.",
          ],
        },
      ],
    },
    {
      continuation: true,
      projects: [
        {
          name: "Social Media Platform | Full Stack Engineer",
          points: [
            "Built high-performance full-stack features using React.js, " +
              "improving page load performance by 40% via code-splitting and " +
              "lazy loading.",
            "Reduced API calls by 60% using optimised data-fetching " +
              "strategies with React Query, Redux, and caching.",
            "Developed 20+ reusable UI components using Material UI, reducing " +
              "development effort by 35%.",
            "Integrated frontend modules with backend APIs to deliver " +
              "scalable and responsive user experiences.",
          ],
        },
      ],
    },
    {
      title: "Software Developer",
      company: "Davinta Financial Services Pvt. Ltd.",
      duration: "Sep 2020 - Sep 2021",
      location: "Karnataka, India",
      projects: [
        {
          name: "Marketplace Partner Integration Platform",
          points: [
            "Built and integrated partner-facing application forms for " +
              "marketplace channels such as Flipkart and Amazon to support " +
              "embedded customer onboarding journeys.",
            "Developed the UI flow where users launch a specific product card " +
              "and open a contextual application experience directly within the " +
              "partner touchpoint.",
            "Crafted end-to-end loan application flows using React Hook Form, " +
              "Yup, and reusable custom hooks (debounce, date-time) to improve " +
              "form reliability and validation quality.",
            "Collaborated across UI and operational layers to streamline " +
              "submission workflows, contributing to a 29% increase in " +
              "completed form submissions.",
          ],
        },
        {
          name: "Loan Operations Workflow Platform",
          points: [
            "Implemented backend rate-limiting to ensure compliance and " +
              "prevent abuse/misuse of platform",
            "Styled, paginated & sortable tables with debounced filters + " +
              "Redux, reduced API calls by 42% and improved performance by 21%.",
          ],
        },
      ],
    },
    {
      title: "Software Developer Associate",
      company: "Mount Blue Technology",
      duration: "May 2019 - Sep 2020",
      location: "Karnataka, India",
      projects: [
        {
          name: "Loan Operations Workflow Platform",
          points: [
            "Built the frontend foundation for the Loan Operations Workflow " +
              "Platform using React and Material UI - implemented core UI " +
              "modules for operational roles across loan origination, " +
              "processing, and disbursement.",
            "Developed reusable form components, data tables, and workflow " +
              "screens that supported end-to-end loan lifecycle management for " +
              "operations teams.",
            "Collaborated with backend engineers to integrate REST APIs and " +
              "establish frontend patterns (state management, routing, " +
              "component structure) used across the platform.",
          ],
        },
      ],
    },
  ],
  footer: {
    signatureLabel: "Signature",
    signature: "Ashutosh Kumar Singh",
    dateLabel: "Date",
    date: "15 August 2026",
  },
  secondPageSkills: [],
  secondPage: {
    title: "ADDITIONAL INFORMATION",
    blocks: [
      {
        title: "PROJECTS",
        items: [
          {
            name: "Large PDF RAG Pipeline",
            tech: ["LangChain", "PyMuPDF", "pgvector", "Azure OpenAI"],
            description:
              "Production RAG system for processing 100+ page regulatory PDFs " +
              "- chunking, embedding generation, and vector similarity search " +
              "over a dedicated PostgreSQL vector store. Integrated into GRIP " +
              "for semantic retrieval of regulatory content.",
          },
        ],
      },
    ],
  },
  skills: [
    {
      category: "Languages",
      items: ["Python", "JavaScript (ES6+)", "TypeScript", "SQL"],
    },
    {
      category: "AI / GenAI",
      items: [
        "Azure OpenAI",
        "RAG",
        "LangChain",
        "LangGraph",
        "Prompt Engineering",
        "Agentic AI",
        "Embedding Models",
        "PyMuPDF",
      ],
    },
    {
      category: "Backend",
      items: [
        "FastAPI",
        "REST API Design",
        "SQLAlchemy",
        "asyncpg",
        "Async Programming",
        "Jinja Templates",
      ],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "pgvector", "Liquibase", "Database Design"],
    },
    {
      category: "Frontend",
      items: [
        "React.js",
        "Redux",
        "React Query",
        "Material UI",
        "React Hook Form",
      ],
    },
    {
      category: "Cloud & Infrastructure",
      items: [
        "AWS (SQS, CloudFront)",
        "Azure",
        "Cognito OAuth 2.0",
        "Docker",
        "CI/CD",
      ],
    },
    {
      category: "Tools & Practices",
      items: [
        "Git",
        "Jira",
        "Confluence",
        "Microservices",
        "Event-Driven Architecture",
        "System Design",
      ],
    },
  ],
};
