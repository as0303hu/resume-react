import { RESUME_UI } from "../config/resumeUI";

export default function SectionTitle({ title, withMargin = false }) {
  const className = withMargin
    ? RESUME_UI.sectionTitleWithMargin
    : RESUME_UI.sectionTitle;

  return <h2 className={className}>{title}</h2>;
}
