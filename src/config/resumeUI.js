export const RESUME_UI = {
  pageWrapper: "resume-page bg-gray-100 py-4 px-2",
  sheetWrapper: "resume-sheet w-[210mm] mx-auto bg-white",
  printControl: "max-w-[210mm] mx-auto mb-4 text-right print-control",
  printButton:
    "inline-flex items-center rounded-md bg-[#1e40af] px-4 py-2 text-sm font-semibold text-white shadow-sm",
  header: {
    wrapper:
      "border-b border-gray-300 pb-4 pt-4 px-6 flex flex-col gap-3 md:flex-row md:items-start md:justify-between",
    left: "text-left",
    name: "text-3xl font-bold tracking-tight text-[#1e40af] leading-tight",
    role: "text-base text-blue-600 font-semibold mt-1",
    contactsList: "list-none m-0 p-0 space-y-1 text-[13px] text-right",
    contactItem: "flex items-center justify-end gap-2 leading-tight",
    contactIcon: "w-4 text-center",
  },
  bodyGrid: "grid grid-cols-12 gap-4 p-4",
  columns: {
    left: "col-span-7",
    right: "col-span-5 space-y-1",
  },
  sectionTitle:
    "text-[#1e40af] font-bold text-lg border-b-2 border-[#1e40af] pb-1",
  sectionTitleWithMargin:
    "text-[#1e40af] font-bold text-lg border-b-2 border-[#1e40af] pb-1 mb-3",
  experience: {
    role: "font-bold text-[#1e40af] m-0 leading-tight",
    companyLine: "font-semibold m-0 mt-0.5 leading-tight",
    projectLine: "text-[13px] mt-1 leading-tight font-semibold text-[#1e40af]",
    list: "text-[11px] mt-2 space-y-1 list-none",
    item: "",
    block: "mb-6",
    highlightLabel: "mt-2 font-medium",
  },
  summaryText: "text-sm leading-relaxed",
  educationDegree: "font-semibold",
  educationDetails: "text-sm",
  secondPageWrapper: "resume-page-break p-0 m-0",
  secondPageCard: "resume-second-page w-[210mm] mx-auto bg-white p-4",
  secondPageContent: "grid grid-cols-12 gap-4 p-0",
  secondPageBlockTitle:
    "font-semibold text-slate-900 mb-3 text-[#1e40af] font-bold text-lg border-b-2 border-[#1e40af] pb-1",
  secondPageList:
    "list-disc list-inside text-sm leading-relaxed text-gray-700 space-y-1",
  secondPageBlockLeft: "col-span-7 px-4 pt-4",
  secondPageBlockRight: "col-span-5 space-y-3 px-4 pt-0",
  achievementWrapper: "flex gap-2",
  achievementIcon: "text-2xl",
  skillCategory:
    "text-[#1e40af] font-bold m-0 mb-2 leading-tight tracking-wide text-[12px] uppercase",
  skillItems: "flex flex-wrap gap-1.5 text-[11px] leading-tight",
  skillGroup:
    "skill-group rounded-md border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-2.5",
  skillTag:
    "inline-flex items-center rounded-full border border-blue-200 bg-white px-2 py-0.5 text-[10.5px] font-medium text-slate-700",
  skillsWrapper: "space-y-2.5",
};
