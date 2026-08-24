import SectionTitle from "./SectionTitle";
import { RESUME_UI } from "../config/resumeUI";

const EXPERIENCE_KEYWORDS = [
  "AI-powered",
  "200+",
  "VisualPing",
  "FastAPI",
  "ECS Fargate",
  "Python 3.11",
  "PostgreSQL 15",
  "Azure Logic App",
  "AWS SQS",
  "3K-4K",
  "Cognito OAuth 2.0",
  "REST APIs",
  "Datadog",
  "RAG",
  "LangChain",
  "PyMuPDF",
  "pgvector",
  "PostgreSQL",
  "Azure OpenAI GPT-4.1",
  "LangGraph",
  "end-to-end",
  "React 19",
  "Flask",
  "PICT",
  "Python 3.12",
  "SQLAlchemy 2",
  "asyncpg",
  "Liquibase",
  "CoreCalc",
  "TRAIN",
  "compliance",
  "tax",
  "React.js",
  "Next.js",
  "SSR",
  "code-splitting",
  "React Query",
  "Redux",
  "UI components",
  "Material UI",
  "React Hook Form",
  "Yup",
  "custom hooks",
  "debounce",
  "rate-limiting",
  "end-to-end loan workflow",
  "tables",
  "200+",
  "3K-4K",
  "100+",
  "20+",
  "60%",
  "40%",
  "35%",
  "29%",
  "42%",
  "21%",
  "44",
  "870-294"
];

const KEYWORD_REGEX = new RegExp(
  `(${EXPERIENCE_KEYWORDS.map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
  "gi"
);

const METRIC_SPLIT_REGEX = /(\d[\d,]*(\.\d+)?(?:[KkMmBb])?\+?(?:\s*[-–]\s*\d[\d,]*(\.\d+)?(?:[KkMmBb])?\+?)?)/g;
const METRIC_DETECT_REGEX = /^\d[\d,]*(\.\d+)?(?:[KkMmBb])?\+?(?:\s*[-–]\s*\d[\d,]*(\.\d+)?(?:[KkMmBb])?\+?)?$/;

function renderSegmentWithMetrics(segment, parentIndex) {
  return segment.split(METRIC_SPLIT_REGEX).map((metricPart, metricIndex) => {
    if (!metricPart) {
      return null;
    }

    if (METRIC_DETECT_REGEX.test(metricPart)) {
      return <span key={`${parentIndex}-${metricIndex}-${metricPart}`}>{metricPart}</span>;
    }

    return <span key={`${parentIndex}-${metricIndex}-${metricPart}`}>{metricPart}</span>;
  });
}

function renderPointWithKeywords(point) {
  const parts = point.split(KEYWORD_REGEX);

  return parts.map((part, index) => {
    if (!part) {
      return null;
    }

    const isKeyword = EXPERIENCE_KEYWORDS.some(
      (keyword) => keyword.toLowerCase() === part.toLowerCase()
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
  const companyMeta = [experience.company, experience.duration, experience.location]
    .filter(Boolean)
    .join(" | ");

  const projects = Array.isArray(experience.projects)
    ? experience.projects.map((project) =>
        typeof project === "string"
          ? { name: project, points: [] }
          : { name: project?.name, points: project?.points || [] }
      ).filter((project) => project.name)
    : experience.project
    ? [{ name: experience.project, points: experience.points || [] }]
    : [];

  return (
    <div className={RESUME_UI.experience.block}>
      {!experience.continuation && (
        <>
          <p className={RESUME_UI.experience.role}>{experience.title}</p>
          <p className={RESUME_UI.experience.companyLine}>
            {companyMeta || experience.companyLine}
          </p>
        </>
      )}

      {projects.map((project) => (
        <div key={project.name} className="experience-project">
          <p className={RESUME_UI.experience.projectLine}>
            <span>Project:</span>{" "}
            <span>{project.name}</span>
          </p>

          <ul className={RESUME_UI.experience.list}>
            {project.points.map((point) => (
              <li key={`${project.name}-${point}`}>{renderPointWithKeywords(point)}</li>
            ))}
          </ul>
        </div>
      ))}

      {projects.length === 0 && (
        <ul className={RESUME_UI.experience.list}>
          {experience.points?.map((point) => (
            <li key={point}>{renderPointWithKeywords(point)}</li>
          ))}

          {experience.highlightLabel && (
            <li className={RESUME_UI.experience.highlightLabel}>
              {experience.highlightLabel}
            </li>
          )}

          {experience.highlightPoints?.map((point) => (
            <li key={point}>{renderPointWithKeywords(point)}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ExperienceSection({ sectionTitle, experiences }) {
  return (
    <section>
      {sectionTitle && <SectionTitle title={sectionTitle} withMargin />}

      {experiences.map((experience) => (
        <ExperienceBlock
          key={`${experience.title}-${experience.company || experience.companyLine}`}
          experience={experience}
        />
      ))}
    </section>
  );
}