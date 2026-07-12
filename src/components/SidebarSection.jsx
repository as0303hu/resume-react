import SectionTitle from "./SectionTitle";
import { RESUME_UI } from "../config/resumeUI";

const SUMMARY_KEYWORDS = [
  "Senior Software Engineer",
  "7+ years",
  "scalable backend systems",
  "mordern web applications",
  "AI-powered enterprise solutions",
  "large-scale regulatory intelligence",
  "tax research",
  "financial services platforms",
  "microservices architecture",
  "asynchronous processing",
  "API-driven systems",
  "Generative AI",
  "RAG",
  "Agentic AI",
  "document intelligence workflows",
  "production-ready software solutions",
  "secure",
  "scalable",
  "AWS",
  "Prompt Engineering",
  "Python",
  "FastAPI",
  "React",
  "PostgreSQL",
  "Azure OpenAI",
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
      <div className="sidebar-section">
        <SectionTitle title={sectionTitles.summary} />
        <p className={RESUME_UI.summaryText}>
          {renderSummaryWithKeywords(data.summary)}
        </p>
      </div>

      <div className="sidebar-section skills-section mt-[20px]">
        <SectionTitle title={sectionTitles.skills} />
        <div className={RESUME_UI.skillsWrapper}>
          {data.skills.map((skillGroup) => (
            <div key={skillGroup.category} className={RESUME_UI.skillGroup}>
              <p className={RESUME_UI.skillCategory}>{skillGroup.category}</p>
              <div className={RESUME_UI.skillItems}>
                {skillGroup.items.map((item) => (
                  <span key={item} className={RESUME_UI.skillTag}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
