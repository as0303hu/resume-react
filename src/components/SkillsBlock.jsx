import { RESUME_UI } from "../config/resumeUI";

export default function SkillsBlock({ skills }) {
  return (
    <div className={RESUME_UI.skillsWrapper}>
      {skills.map((skillGroup) => (
        <div key={skillGroup.category} className={RESUME_UI.skillGroup}>
          <p className={RESUME_UI.skillCategory}>{skillGroup.category}</p>
          <div className={RESUME_UI.skillItems}>
            {skillGroup.items.map((item, index) => (
              <span key={`${skillGroup.category}-${index}`} className={RESUME_UI.skillTag}>
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}