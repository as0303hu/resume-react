// src/App.jsx
export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-page min-h-screen bg-gray-100 py-8 px-3">
      <div className="max-w-[1100px] mx-auto mb-4 text-right print-control">
        <button
          type="button"
          onClick={handlePrint}
          className="inline-flex items-center rounded-md bg-[#1e40af] px-4 py-2 text-sm font-semibold text-white shadow-sm"
        >
          Print Resume
        </button>
      </div>

      <div className="resume-sheet max-w-[1100px] mx-auto bg-white border border-gray-300 shadow-lg overflow-hidden">
        {/* HEADER */}
        <header className="text-center border-b border-gray-300 pb-4 pt-6">
          <h1 className="text-4xl font-bold tracking-tight text-[#1e40af]">
            ASHUTOSH KUMAR SINGH
          </h1>
          <p className="text-lg text-blue-600 font-semibold">
            <strong>Senior Software Engineer</strong>
          </p>

          <div className="flex justify-center items-center gap-6 text-sm mt-3 flex-wrap">
            <span>📞 7982394846</span>
            <span>✉️ as03038@gmail.com</span>
            <span>🔗 linkedin.com/in/ashu-aks</span>
            <span>💻 leetcode.com/u/Ashu030396</span>
            <span>📍 Bangalore, Karnataka, India</span>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-6 p-6">
          {/* LEFT COLUMN - FULL EXPERIENCE */}
          <div className="col-span-7">
            <h2 className="text-[#1e40af] font-bold text-lg border-b-2 border-[#1e40af] pb-1 mb-3">
              EXPERIENCE
            </h2>

            {/* Accenture */}
            <div className="mb-6">
              <p className="font-bold text-[#1e40af]">
                Senior Software Engineer
              </p>
              <p className="font-semibold">
                Accenture Technologies • 10/2021 – Present • Karnataka, India
              </p>
              <ul className="text-sm mt-2 space-y-1 list-none">
                <li>
                  • <strong>Hyperlocal Social Platform</strong>: Reduced API
                  requests by 60% through image lazy loading and optimized data
                  fetching with React Query and Redux
                </li>
                <li>
                  • Enhanced SEO and ensured 100% crawlability by implementing
                  Node.js-based partial SSR with dynamic meta tags and image
                  rendering per route
                </li>
                <li>
                  • Enabled multi-language support and theming across all major
                  Indian states, enhancing regional accessibility
                </li>
                <li>
                  • Configured API-layer caching and optimized the architecture
                  to scale user base from 10K to 1M+ with significantly faster
                  response times
                </li>

                <li className="mt-2 font-medium">Data Analytics Domain:</li>
                <li>
                  • Built high-performance B2B analytics platform using React
                  &amp; Next.js, improving page load speed by 40% via SSR and
                  code-splitting
                </li>
                <li>
                  • Participated in architectural discussions and constructed 20
                  reusable UI components, reducing dev effort by 35%
                </li>
                <li>
                  • <strong>Key Contributions</strong>: Applied system design
                  principles to architecture and modular component assembly
                </li>
                <li>
                  • <strong>Promoted</strong> in recognition of technical
                  ownership and consistent delivery across multiple client
                  projects
                </li>
              </ul>
            </div>

            {/* Davita */}
            <div className="mb-6">
              <p className="font-bold text-[#1e40af]">Software Developer</p>
              <p className="font-semibold">
                Davita Financial Services Pvt. Ltd. • 09/2020 – 09/2021 •
                Karnataka, India
              </p>
              <ul className="text-sm mt-2 space-y-1 list-none">
                <li>
                  • Crafted end-to-end loan flows integrated with Flipkart using
                  React Hook Form, Yup, and custom hooks (debounce, date-time)
                </li>
                <li>
                  • Engaged across UI Stack and Operational layer to streamline
                  submission flow and{" "}
                  <strong>increased form submissions by 29%</strong>
                </li>
                <li>
                  • Implemented backend rate-limiting to ensure compliance and
                  prevent abuse/misuse of platform
                </li>
                <li>
                  • Styled, paginated &amp; sortable tables with debounced
                  filters + Redux → <strong>reduced API calls by 42%</strong>{" "}
                  and improved performance by 21%
                </li>
                <li>
                  • Developed dashboards with bar, pie, Sankey, and line charts
                  to deliver clear, actionable analytics
                </li>
              </ul>
            </div>

            {/* Mount Blue */}
            <div>
              <p className="font-bold text-[#1e40af]">
                Software Developer Associate
              </p>
              <p className="font-semibold">
                Mount Blue Technology • 05/2020 – 09/2020 • Karnataka, India
              </p>
              <ul className="text-sm mt-2 space-y-1 list-none">
                <li>
                  • Completed 3-month intensive training program covering
                  End-to-End process
                </li>
                <li>
                  • Deputed to Davita Financial Services Pvt. Ltd. — focused on
                  Presentation Layer Fabrication
                </li>
                <li>
                  • Designed &amp; executed frontend logic using Material UI
                  components to support operational roles, enabling complete
                  end-to-end loan workflow from logic to disbursement
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-span-5 space-y-6">
            <h2 className="text-[#1e40af] font-bold text-lg border-b-2 border-[#1e40af] pb-1">
              SUMMARY
            </h2>
            <p className="text-sm leading-relaxed">
              <strong>Senior Software Engineer</strong> with over{" "}
              <strong>7+ years</strong> of experience in developing scalable
              applications using
              <strong> Python, PostgreSQL, AWS, and React</strong>. Skilled in{" "}
              <strong>
                backend development, LLM integration using Azure OpenAI, and
                prompt engineering
              </strong>
              . Proven in delivering <strong>scalable solutions</strong> with
              strong <strong>system design and CI/CD practices</strong>.
            </p>

            <h2 className="text-[#1e40af] font-bold text-lg border-b-2 border-[#1e40af] pb-1">
              EDUCATION
            </h2>
            <p className="font-semibold">Bachelor’s Degree</p>
            <p className="text-sm">
              APJ Abdul Kalam Azad Technical University • 03/06/2017 • India
            </p>

            <h2 className="text-[#1e40af] font-bold text-lg border-b-2 border-[#1e40af] pb-1">
              KEY ACHIEVEMENTS
            </h2>
            <div className="flex gap-2">
              <span className="text-2xl">⭐</span>
              <p>
                <strong>Promotion at Accenture</strong>
                <br />
                Promoted in recognition of technical ownership and consistent
                delivery across multiple client projects
              </p>
            </div>

            {/* SKILLS - 4 Categories */}
            <h2 className="text-[#1e40af] font-bold text-lg border-b-2 border-[#1e40af] pb-1">
              SKILLS
            </h2>

            <div className="space-y-4">
              <div>
                <p className="text-blue-600 font-semibold">Backend & APIs</p>
                <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
                  <span>• Python (FastAPI)</span>
                  <span>• REST API Development</span>
                  <span>• Microservices Architecture</span>
                  <span>• Async Processing</span>
                </div>
              </div>

              <div>
                <p className="text-blue-600 font-semibold">
                  AI & LLM Integration
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
                  <span>• LLM Integration (Azure OpenAI)</span>
                  <span>• Prompt Engineering</span>
                  <span>• AI Workflow Development</span>
                </div>
              </div>

              <div>
                <p className="text-blue-600 font-semibold">Frontend</p>
                <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
                  <span>• React.js</span>
                  <span>• Next.js</span>
                  <span>• Redux / RTK Query</span>
                  <span>• Tailwind CSS / Material UI</span>
                </div>
              </div>

              <div>
                <p className="text-blue-600 font-semibold">Database & Cloud</p>
                <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
                  <span>• PostgreSQL</span>
                  <span>• MongoDB</span>
                  <span>• MySQL</span>
                  <span>• AWS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
