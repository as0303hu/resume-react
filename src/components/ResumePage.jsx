import ExperienceSection from "./ExperienceSection";
import ResumeHeader from "./ResumeHeader";
import SectionTitle from "./SectionTitle";
import SidebarSection from "./SidebarSection";
import { RESUME_UI } from "../config/resumeUI";

export default function ResumePage({ data, onPrint }) {
  const firstPageexperience = data.experiences.slice(0, 1);
  const secondPageexperience = data.experiences.slice(1);

  return (
    <div className={RESUME_UI.pageWrapper}>
      <div className={RESUME_UI.printControl}>
        <button
          type="button"
          onClick={onPrint}
          className={RESUME_UI.printButton}
        >
          {data.actions.printButtonLabel}
        </button>
      </div>

      <div className={RESUME_UI.sheetWrapper}>
        <ResumeHeader profile={data.profile} />

        <div className={RESUME_UI.bodyGrid}>
          <div className={RESUME_UI.columns.left}>
            <ExperienceSection
              sectionTitle={data.sections.experience}
              experiences={data.experiences}
            />
          </div>

          <SidebarSection data={data} sectionTitles={data.sections} />
        </div>
      </div>

      <div className="resume-page-break w-[210mm] mx-auto bg-white mt-4">
        <div className={RESUME_UI.bodyGrid}>
          <div className={RESUME_UI.columns.left}>
            <ExperienceSection experiences={secondPageexperience} />
          </div>

          <aside className={RESUME_UI.columns.right}>
            {data.secondPage?.blocks.map((block) => (
              <div key={block.title} className="sidebar-section">
                <SectionTitle title={block.title} withMargin />
                <ul className={RESUME_UI.secondPageList}>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            {data.achievement && (
              <div className="sidebar-section">
                <SectionTitle
                  title={data.sections.achievements}
                  withMargin={false}
                />
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
              </div>
            )}

            {data.education && (
              <div className="sidebar-section">
                <SectionTitle title={data.sections.education} withMargin />
                <p className={RESUME_UI.educationDegree}>
                  {data.education.degree}
                </p>
                <p className={RESUME_UI.educationDetails}>
                  {data.education.details}
                </p>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
