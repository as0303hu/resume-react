import ResumePage from "../components/ResumePage";
import { RESUME_CONFIG } from "../config/resumeConfig";

export default function ResumeContainer() {
  const handlePrint = () => {
    window.print();
  };

  return <ResumePage data={RESUME_CONFIG} onPrint={handlePrint} />;
}
