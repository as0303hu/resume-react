import SectionTitle from "./SectionTitle";
import { RESUME_UI } from "../config/resumeUI";

const EXPERIENCE_KEYWORDS = [
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
      return <span key={`${part}-${index}`}>{part}</span>;
    }

    return (
      <span key={`${part}-${index}`} className="font-bold text-black">
        {part}
      </span>
    );
  });
}

function ExperienceBlock({ experience }) {
  return (
    <div className={RESUME_UI.experience.block}>
      <p className={RESUME_UI.experience.role}>{experience.title}</p>
      <p className={RESUME_UI.experience.companyLine}>
        {experience.companyLine}
      </p>

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
    </div>
  );
}

export default function ExperienceSection({ sectionTitle, experiences }) {
  return (
    <section>
      <SectionTitle title={sectionTitle} withMargin />

      {experiences.map((experience) => (
        <ExperienceBlock
          key={`${experience.title}-${experience.companyLine}`}
          experience={experience}
        />
      ))}
    </section>
  );
}
