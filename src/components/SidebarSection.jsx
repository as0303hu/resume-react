import SectionTitle from "./SectionTitle";
import { RESUME_UI } from "../config/resumeUI";

const SUMMARY_KEYWORDS = [
  "Senior Software Engineer",
  "7+ years",
  "enterprise applications",
  "Python",
  "FastAPI",
  "React.js",
  "PostgreSQL",
  "Docker",
  "Tax Compliance",
  "Financial Services",
  "NBFC",
  "Digital Media",
  "high-performance REST APIs",
  "REST APIs",
  "AI-powered automation",
  "Azure OpenAI",
  "Retrieval-Augmented Generation",
  "RAG",
  "Agentic AI",
  "Large Embedding Models",
  "backend systems",
  "end-to-end",
  "scalable applications",
  "AI-driven products",
];

const SUMMARY_KEYWORD_REGEX = new RegExp(
  `(${SUMMARY_KEYWORDS.map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
  "gi",
);

function renderSummaryWithKeywords(summary) {
  return summary.split(SUMMARY_KEYWORD_REGEX).map((part, index) => {
    if (!part) {
      return null;
    }

    const isKeyword = SUMMARY_KEYWORDS.some(
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

export default function SidebarSection({ data, sectionTitles }) {
  return (
    <aside className={RESUME_UI.columns.right}>
      <SectionTitle title={sectionTitles.summary} />
      <p className={RESUME_UI.summaryText}>
        {renderSummaryWithKeywords(data.summary)}
      </p>

      <SectionTitle title={sectionTitles.skills} />
      <div className={RESUME_UI.skillsWrapper}>
        {data.skills.map((skillGroup) => (
          <div key={skillGroup.category}>
            <p className={RESUME_UI.skillCategory}>{skillGroup.category}</p>
            <div className={RESUME_UI.skillItems}>
              {skillGroup.items.map((item) => (
                <span key={item}>• {item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
