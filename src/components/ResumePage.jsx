import ExperienceSection from "./ExperienceSection";
import ResumeHeader from "./ResumeHeader";
import SectionTitle from "./SectionTitle";
import SidebarSection from "./SidebarSection";
import { RESUME_UI } from "../config/resumeUI";

export default function ResumePage({ data, onPrint }) {
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

      {data.secondPage && (
        <div className={RESUME_UI.secondPageWrapper}>
          <div className={RESUME_UI.secondPageCard}>
            <div className={RESUME_UI.secondPageContent}>
              <div className={RESUME_UI.secondPageBlockLeft}>
                <SectionTitle withMargin title={data.sections.poc} />
                <div className="mb-4">
                  <p className="text-sm font-semibold text-slate-900">
                    {data.poc.title}
                  </p>
                  <ul className="list-disc list-inside text-sm leading-relaxed text-gray-700 mt-2">
                    {data.poc.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                {data.secondPage.blocks
                  .filter((_, index) => index === 0)
                  .map((block) => (
                    <div key={block.title}>
                      <SectionTitle title={block.title} withMargin />
                      <ul className={RESUME_UI.secondPageList}>
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>

              <div className={RESUME_UI.secondPageBlockRight}>
                {data.secondPage.blocks
                  .filter((_, index) => index === 1)
                  .map((block) => (
                    <div key={block.title}>
                      <SectionTitle title={block.title} withMargin />
                      <ul className={RESUME_UI.secondPageList}>
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                <div>
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

                <div>
                  <SectionTitle title={data.sections.education} withMargin />
                  <p className={RESUME_UI.educationDegree}>
                    {data.education.degree}
                  </p>
                  <p className={RESUME_UI.educationDetails}>
                    {data.education.details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
