import ExperienceSection from "./ExperienceSection";
import ResumeHeader from "./ResumeHeader";
import SidebarSection from "./SidebarSection";
import { RESUME_UI } from "../config/resumeConfig";

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
    </div>
  );
}
