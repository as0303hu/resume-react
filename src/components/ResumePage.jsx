import ExperienceSection from "./ExperienceSection";
import ResumeHeader from "./ResumeHeader";
import SectionTitle from "./SectionTitle";
import SidebarSection from "./SidebarSection";
import SkillsBlock from "./SkillsBlock";
import { RESUME_UI } from "../config/resumeUI";

export default function ResumePage({ data, onPrint }) {
  const firstPageExperiences = data.experiences.slice(0, 1);
  const secondPageExperiences = data.experiences.slice(1);

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
              experiences={firstPageExperiences}
            />
          </div>

          <SidebarSection data={data} sectionTitles={data.sections} />
        </div>
      </div>

      <div className="resume-page-break w-[210mm] mx-auto bg-white mt-4">
        <div className={RESUME_UI.bodyGrid}>
          <div className={RESUME_UI.columns.left}>
            <ExperienceSection experiences={secondPageExperiences} />
          </div>

          <aside className={RESUME_UI.columns.right}>
            {data.secondPageSkills?.length > 0 && (
              <SkillsBlock skills={data.secondPageSkills} />
            )}

            {data.achievements?.length > 0 && (
              <div className="sidebar-section">
                <SectionTitle
                  title={data.sections.achievements}
                  withMargin={false}
                />
                {data.achievements.map((achievement) => (
                  <div key={achievement.title} className={RESUME_UI.achievementWrapper}>
                    <span className="text-sn">
                      {achievement.icon}
                    </span>
                    <p className="text-[11px] leading-relaxed text-gray-700">
                      <strong className="text-[12px] text-slate-900">{achievement.title}</strong>
                      <br />
                      {achievement.details}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {data.secondPage?.blocks.map((block) => (
              <div key={block.title} className="sidebar-section">
                <SectionTitle title={block.title} withMargin />
                <div className="space-y-3">
                  {block.items.map((item) =>
                    typeof item === "string" ? (
                      <p
                        key={item}
                        className="text-sm leading-relaxed text-gray-700"
                      >
                        {item}
                      </p>
                    ) : (
                      <div
                        key={item.name}
                        className="rounded-md border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-3"
                      >
                        <p className="font-bold text-[#1e40af] text-[13px] m-0 leading-tight">
                          {item.name}
                        </p>
                        {item.tech && (
                          <div className="flex flex-wrap gap-1 mt-1.5">
                            {item.tech.map((t) => (
                              <span
                                key={t}
                                className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-slate-700"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                        <p className="text-[11px] leading-relaxed text-gray-600 mt-1.5">
                          {item.description}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}

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