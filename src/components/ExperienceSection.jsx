import SectionTitle from "./SectionTitle";
import { RESUME_UI } from "../config/resumeUI";

const EXPERIENCE_KEYWORDS = [
  "280+ regulatory sources",
  "3k-4k regulatory alerts per month",
  "asynchronous processing pipelines",
  "AI-assisted triage and summarization workflows",
  "scalable backend solutions",
  "database queries",
  "REST APIs",
  "AWS SQS",
  "microservices",
  "Prompt Engineering",
  "Python",
  "FastAPI",
  "enterprise applications",
  "tax",
  "analytics",
  "AI-powered",
  "alert processing system",
  "Azure OpenAI",
  "LLMs",
  "classify",
  "filter",
  "decision accuracy",
  "end-to-end pipeline",
  "LLM validation",
  "Selenium-based web scraping",
  "rule-based processing",
  "VisualPing",
  "human-in-the-loop",
  "review workflow",
  "data quality",
  "compliance",
  "backend performance",
  "API caching",
  "asynchronous processing",
  "modular architecture",
  "system design",
  "architecture discussions",
  "extensible solutions",
  "React.js",
  "Next.js",
  "SSR",
  "code-splitting",
  "API requests",
  "React Query",
  "Redux",
  "SEO",
  "dynamic rendering",
  "crawlability",
  "UI components",
  "technical ownership",
  "API requests",
  "React Query",
  "Redux",
  "SEO",
  "Node.js",
  "meta tags",
  "multi-language",
  "theming",
  "API-layer caching",
  "architecture",
  "CI/CD",
  "B2B analytics platform",
  "React",
  "UI components",
  "PostgreSQL",
  "AWS",
  "prompt engineering",
  "React Hook Form",
  "Yup",
  "custom hooks",
  "debounce",
  "rate-limiting",
  "Material UI",
  "tables",
  "dashboards",
  "bar",
  "pie",
  "Sankey",
  "line charts",
  "end-to-end",
  "loan workflow",
  "10K",
  "1M+",
  "20+",
  "60%",
  "40%",
  "35%",
  "29%",
  "42%",
  "21%",
];

const KEYWORD_REGEX = new RegExp(
  `(${EXPERIENCE_KEYWORDS.map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
  "gi",
);

const METRIC_SPLIT_REGEX =
  /(\d[\d,]*(?:\.\d+)?(?:[KkMmBb])?\+?(?:\s*[-–]\s*\d[\d,]*(?:\.\d+)?(?:[KkMmBb])?\+?)?%?)/g;
const METRIC_DETECT_REGEX =
  /^\d[\d,]*(?:\.\d+)?(?:[KkMmBb])?\+?(?:\s*[-–]\s*\d[\d,]*(?:\.\d+)?(?:[KkMmBb])?\+?)?%?$/;

function renderSegmentWithMetrics(segment, parentIndex) {
  return segment.split(METRIC_SPLIT_REGEX).map((metricPart, metricIndex) => {
    if (!metricPart) {
      return null;
    }

    if (!METRIC_DETECT_REGEX.test(metricPart)) {
      return (
        <span key={`${parentIndex}-${metricIndex}-${metricPart}`}>
          {metricPart}
        </span>
      );
    }

    return (
      <span
        key={`${parentIndex}-${metricIndex}-${metricPart}`}
        className="font-bold text-black"
      >
        {metricPart}
      </span>
    );
  });
}

function renderPointWithKeywords(point) {
  const parts = point.split(KEYWORD_REGEX);

  return parts.map((part, index) => {
    if (!part) {
      return null;
    }

    const isKeyword = EXPERIENCE_KEYWORDS.some(
      (keyword) => keyword.toLowerCase() === part.toLowerCase(),
    );

    if (!isKeyword) {
      return (
        <span key={`${part}-${index}`}>
          {renderSegmentWithMetrics(part, index)}
        </span>
      );
    }

    return (
      <span key={`${part}-${index}`} className="font-bold text-black">
        {part}
      </span>
    );
  });
}

function ExperienceBlock({ experience }) {
  const companyMeta = [
    experience.company,
    experience.duration,
    experience.location,
  ]
    .filter(Boolean)
    .join(" | ");
  const projects = Array.isArray(experience.projects)
    ? experience.projects
        .map((project) =>
          typeof project === "string"
            ? { name: project, points: [] }
            : { name: project.name, points: project.points || [] },
        )
        .filter((project) => project.name)
    : experience.project
      ? [{ name: experience.project, points: experience.points || [] }]
      : [];

  return (
    <div className={RESUME_UI.experience.block}>
      <p className={RESUME_UI.experience.role}>{experience.title}</p>
      <p className={RESUME_UI.experience.companyLine}>
        {companyMeta || experience.companyLine}
      </p>
      {projects.map((project) => (
        <div key={project.name} className={"experience-project"}>
          <p className={RESUME_UI.experience.projectLine}>
            <span>Project:</span> <strong>{project.name}</strong>
          </p>
          <ul className={RESUME_UI.experience.list}>
            {project.points.map((point) => (
              <li key={point}>• {renderPointWithKeywords(point)}</li>
            ))}
          </ul>
        </div>
      ))}
      {!projects.length && (
        <ul className={RESUME_UI.experience.list}>
          {experience.points.map((point) => (
            <li key={point}>• {renderPointWithKeywords(point)}</li>
          ))}

          {experience.highlightLabel && (
            <li className={RESUME_UI.experience.highlightLabel}>
              {experience.highlightLabel}
            </li>
          )}

          {experience.highlightPoints?.map((point) => (
            <li key={point}>• {renderPointWithKeywords(point)}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ExperienceSection({ sectionTitle, experiences }) {
  return (
    <section>
      {sectionTitle && <sectionTitle title={sectionTitle} withMargin />}

      {experiences.map((experience) => (
        <ExperienceBlock
          key={`${experience.title}-${experience.company || experience.companyLine}`}
          experience={experience}
        />
      ))}
    </section>
  );
}
