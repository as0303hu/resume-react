import SectionTitle from "./SectionTitle";
import { RESUME_UI } from "../config/resumeConfig";

export default function SidebarSection({ data, sectionTitles }) {
  return (
    <aside className={RESUME_UI.columns.right}>
      <SectionTitle title={sectionTitles.summary} />
      <p className={RESUME_UI.summaryText}>{data.summary}</p>

      <SectionTitle title={sectionTitles.education} />
      <p className={RESUME_UI.educationDegree}>{data.education.degree}</p>
      <p className={RESUME_UI.educationDetails}>{data.education.details}</p>

      <SectionTitle title={sectionTitles.achievements} />
      <div className={RESUME_UI.achievementWrapper}>
        <span className={RESUME_UI.achievementIcon}>
          {data.achievement.icon}
        </span>
        <p>
          <strong>{data.achievement.title}</strong>
          <br />
          {data.achievement.details}
        </p>
      </div>

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
