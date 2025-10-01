import { useState, useEffect } from "react";
import { tsdJobs } from "../../data/tsdJobs";
import { beyondJobs } from "../../data/beyondJobs";
import { Job } from "../../data/job";
import { ChevronDown } from "lucide-react";
import NavigationButtons from "../../components/NavigationButtons";
import HeroSectionSmall from "../../components/HeroSectionSmall";

/* -------------------------
   Data / helpers
   ------------------------- */
const faqs = [
  {
    q: "Can I apply even if I’m a full-time student?",
    a: "Yes! All roles at TSD are remote/flexible and designed to accommodate class schedules.",
  },
  {
    q: "Will I receive a certificate?",
    a: "Absolutely. All interns and team members receive experience letters/certificates.",
  },
];

const departmentColors: Record<string, string> = {
  Partnerships: "#FDE9D9",
  Marketing: "#E4DFEC",
  Technical: "#DCE6F1",
  Operations: "#F2DCDB",
  Finance: "#C8E4DF",
};

const highlightText = (text: string, query: string) => {
  if (!query) return text;
  try {
    const regex = new RegExp(`(${query})`, "gi");
    return text.split(regex).map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-yellow-200 px-0.5">
          {part}
        </mark>
      ) : (
        part
      )
    );
  } catch {
    // if query has regex chars, fallback to raw text
    return text;
  }
};

/* -------------------------
   SideDrawer
   ------------------------- */
function SideDrawer({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) setVisible(true);
    else {
      const t = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className={`flex-1 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <div
        className={`w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

/* -------------------------
   JobFilters
   ------------------------- */
function JobFilters({
  searchQuery,
  setSearchQuery,
  selectedDepartments,
  toggleDepartment,
  selectedWorkType,
  setWorkType,
  selectedEmploymentType,
  setEmploymentType,
  clearFilters,
  closeDrawer,
}: {
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  selectedDepartments: string[];
  toggleDepartment: (d: string) => void;
  selectedWorkType: string;
  setWorkType: (v: string) => void;
  selectedEmploymentType: string;
  setEmploymentType: (v: string) => void;
  clearFilters: () => void;
  closeDrawer?: () => void;
}) {
  return (
    <div className="p-4 h-fit max-h-[450px] overflow-y-auto">
      <h2 className="font-semibold text-lg mb-2">Filters</h2>

      <input
        type="text"
        placeholder="Search by title or keyword"
        className="w-full border p-2 rounded mb-3"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <p className="font-medium text-base">Department</p>
      <div className="space-y-1">
        {Object.keys(departmentColors).map((dept) => (
          <label key={dept} className="flex items-center gap-2 text-sm text-[#02066F]">
            <input
              type="checkbox"
              checked={selectedDepartments.includes(dept)}
              onChange={() => toggleDepartment(dept)}
            />
            {dept}
          </label>
        ))}
      </div>

      <p className="font-medium text-base mt-3">Work Type</p>
      <select
        className="w-full border p-1 rounded text-sm text-[#02066F]"
        value={selectedWorkType}
        onChange={(e) => setWorkType(e.target.value)}
      >
        <option value="">All</option>
        <option value="Remote">Remote</option>
        <option value="On-site">On-site</option>
        <option value="Hybrid">Hybrid</option>
      </select>

      <p className="font-medium text-base mt-3">Employment</p>
      <select
        className="w-full border p-1 rounded text-sm text-[#02066F]"
        value={selectedEmploymentType}
        onChange={(e) => setEmploymentType(e.target.value)}
      >
        <option value="">All</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Contract">Contract</option>
        <option value="Internship">Internship</option>
      </select>

      <button
        onClick={clearFilters}
        className="mt-3 w-full bg-red-500 text-white py-1 rounded text-sm"
      >
        Clear Filters
      </button>

      {closeDrawer && (
        <button
          onClick={closeDrawer}
          className="mt-2 w-full bg-gray-300 text-black py-1 rounded text-sm"
        >
          Close
        </button>
      )}
    </div>
  );
}

/* -------------------------
   JobSection
   ------------------------- */
function JobSection({
  jobs,
  searchQuery,
  setSearchQuery,
  selectedDepartments,
  setSelectedDepartments, // used by clearFilters
  toggleDepartment,
  selectedWorkType,
  setWorkType,
  selectedEmploymentType,
  setEmploymentType,
  drawerOpen,
  setDrawerOpen,
  isGrid = false,
  isTsd = false,
}: {
  jobs: Job[];
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  selectedDepartments: string[];
  setSelectedDepartments: (v: string[]) => void;
  toggleDepartment: (d: string) => void;
  selectedWorkType: string;
  setWorkType: (v: string) => void;
  selectedEmploymentType: string;
  setEmploymentType: (v: string) => void;
  drawerOpen: boolean;
  setDrawerOpen: (v: boolean) => void;
  isGrid?: boolean;
  isTsd?: boolean;
}) {
  const q = searchQuery.trim().toLowerCase();

  const filteredJobs = jobs.filter((job) => {
    // job.title might be empty for comingSoon placeholders
    const title = (job.title || "").toLowerCase();
    const matchesSearch =
      q === "" ||
      title.includes(q) ||
      job.keywords?.some((kw) => kw.toLowerCase().includes(q));

    return (
      matchesSearch &&
      (selectedDepartments.length === 0 || selectedDepartments.includes(job.department)) &&
      (selectedWorkType === "" || job.workType === selectedWorkType) &&
      (selectedEmploymentType === "" || job.employmentType === selectedEmploymentType)
    );
  });

  // Use comingSoon flag; cast to any to avoid requiring TS change in your Job model
  const realJobs = filteredJobs.filter((job) => !((job as any).comingSoon));
  const comingSoonJobs = filteredJobs.filter((job) => !!(job as any).comingSoon);

  const renderJobCard = (job: Job, index: number) => {
    const deptColor = departmentColors[job.department] || "#EEE";
    const bgColor = "bg-white";

    return (
      <div
        key={job.id ?? `${job.title}-${index}`}
        className={`border rounded-lg p-4 shadow-sm mb-4 ${bgColor} transform transition duration-300 hover:scale-[1.02] hover:shadow-lg ${
          isTsd ? "hover:border-tsd-blue" : ""
        }`}
      >
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-bold">{highlightText(job.title, searchQuery)}</h3>
          {job.applyUrl && (
            <a
              href={job.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3 py-1 rounded-lg transition text-sm font-medium ${
                isTsd ? "bg-tsd-orange text-white hover:bg-[#01044A]" : "bg-blue-600 text-white hover:bg-blue-800"
              }`}
            >
              <span className="hidden sm:inline">Apply Now</span>
              <span className="inline sm:hidden">Apply</span>
            </a>
          )}
        </div>

        {job.keywords?.length > 0 && (
          <ul className="flex flex-wrap gap-2 text-sm text-gray-600 mt-1">
            {job.keywords.map((kw, idx) => (
              <li key={idx} className="flex items-center gap-1">
                <span className="text-gray-400">•</span>
                <span>{highlightText(kw, searchQuery)}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2 mt-3">
          <span className={`px-3 py-1 text-sm rounded-full text-white ${isTsd ? "bg-tsd-blue" : "bg-blue-600"}`}>
            {job.workType}
          </span>
          <span className={`px-3 py-1 text-sm rounded-full text-white ${isTsd ? "bg-tsd-blue" : "bg-blue-600"}`}>
            {job.employmentType}
          </span>
          <span className="px-3 py-1 text-sm rounded-full" style={{ backgroundColor: deptColor }}>
            {job.department}
          </span>
        </div>
      </div>
    );
  };

  // Clear filters callback
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedDepartments([]);
    setWorkType("");
    setEmploymentType("");
    // close drawer if open on mobile
    setDrawerOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Desktop filters */}
      {jobs.length > 0 && (
        <div className="hidden md:block md:w-64 flex-shrink-0 h-fit bg-gray-100 rounded-lg shadow-md order-first">
          <JobFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedDepartments={selectedDepartments}
            toggleDepartment={toggleDepartment}
            selectedWorkType={selectedWorkType}
            setWorkType={setWorkType}
            selectedEmploymentType={selectedEmploymentType}
            setEmploymentType={setEmploymentType}
            clearFilters={clearFilters}
          />
        </div>
      )}

      {/* Mobile drawer */}
      {jobs.length > 0 && (
        <>
          <SideDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)}>
            <JobFilters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedDepartments={selectedDepartments}
              toggleDepartment={toggleDepartment}
              selectedWorkType={selectedWorkType}
              setWorkType={setWorkType}
              selectedEmploymentType={selectedEmploymentType}
              setEmploymentType={setEmploymentType}
              clearFilters={clearFilters}
              closeDrawer={() => setDrawerOpen(false)}
            />
          </SideDrawer>

          <button className="md:hidden mb-4 bg-blue-900 text-white px-3 py-1 rounded" onClick={() => setDrawerOpen(true)}>
            Show Filters
          </button>
        </>
      )}

      {/* Job list */}
      <div className="flex-1">
        {/* CASE A: No real jobs but there are Coming Soon placeholders */}
        {realJobs.length === 0 && comingSoonJobs.length > 0 ? (
          <>
            <p className="ml-5 mb-2 text-xl text-[#02066F]">No jobs currently available</p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4">
              {comingSoonJobs.map((_, idx) => (
                <div
                  key={`coming-soon-${idx}`}
                  className="p-6 bg-gray-100 border border-dashed rounded-lg flex items-center justify-center text-gray-500 italic"
                >
                  Coming Soon
                </div>
              ))}
            </div>
          </>
        ) : /* CASE B: There are real jobs */ realJobs.length > 0 ? (
          <>
            {selectedDepartments.length === 0 && !searchQuery && !selectedWorkType && !selectedEmploymentType && (
              <p className={`ml-5 mb-2 ${isGrid ? "text-lg text-gray-500" : "text-xl text-[#02066F]"}`}>
                <b>{realJobs.length}</b> Jobs available
              </p>
            )}

            {isGrid ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {realJobs.map((job, idx) => renderJobCard(job, idx))}
              </div>
            ) : (
              realJobs.map((job, idx) => renderJobCard(job, idx))
            )}

            {/* show coming soon placeholders below real jobs if any */}
            {comingSoonJobs.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
                {comingSoonJobs.map((_, idx) => (
                  <div
                    key={`coming-soon-${idx}`}
                    className="p-6 bg-gray-100 border border-dashed rounded-lg flex items-center justify-center text-gray-500 italic"
                  >
                    Coming Soon
                  </div>
                ))}
              </div>
            )}
          </>
        ) : /* CASE C: No jobs at all after filters */ (
          <p className="text-gray-500 italic">
            {searchQuery || selectedDepartments.length > 0 || selectedWorkType || selectedEmploymentType
              ? "No jobs match your filters."
              : "No jobs currently available in this section."}
          </p>
        )}
      </div>
    </div>
  );
}

/* -------------------------
   Main page
   ------------------------- */
export default function CareerPage() {
  // TSD state
  const [tsdSearchQuery, setTsdSearchQuery] = useState("");
  const [selectedTsdDepartments, setSelectedTsdDepartments] = useState<string[]>([]);
  const [selectedTsdWorkType, setSelectedTsdWorkType] = useState("");
  const [selectedTsdEmploymentType, setSelectedTsdEmploymentType] = useState("");
  const [tsdDrawerOpen, setTsdDrawerOpen] = useState(false);

  // Beyond (UAE) state
  const [beyondSearchQuery, setBeyondSearchQuery] = useState("");
  const [selectedBeyondDepartments, setSelectedBeyondDepartments] = useState<string[]>([]);
  const [selectedBeyondWorkType, setSelectedBeyondWorkType] = useState("");
  const [selectedBeyondEmploymentType, setSelectedBeyondEmploymentType] = useState("");
  const [beyondDrawerOpen, setBeyondDrawerOpen] = useState(false);

  const toggleTsdDepartment = (dept: string) =>
    setSelectedTsdDepartments((prev) => (prev.includes(dept) ? prev.filter((d) => d !== dept) : [...prev, dept]));

  const toggleBeyondDepartment = (dept: string) =>
    setSelectedBeyondDepartments((prev) => (prev.includes(dept) ? prev.filter((d) => d !== dept) : [...prev, dept]));

  return (
    <div className="w-full">
      <HeroSectionSmall
        title="Careers & Internships"
        subtitle="Explore internships, part-time jobs, and career opportunities tailored for students in the UAE."
        icon="/icons/career.svg"
        image="/images/student-hero-careers.jpg"
      />

      {/* Beyond / UAE Section */}
      <h2 className="text-3xl font-bold ml-4 mt-10 mb-4 text-[#02066F]">Career Opportunities in the UAE</h2>
      <div className="relative p-1 bg-[#EEFFFF] rounded-lg shadow-md border border-gray-200 mb-4">
        <p className="text-lg text-gray-700 ml-4 mb-4">
          <strong>Explore What’s Out There</strong>
          <br />
          We’ve curated real-time internship and entry-level job opportunities across the UAE, especially student-friendly roles in marketing, operations, finance, tech, and design.
        </p>
      </div>

      <JobSection
        jobs={beyondJobs}
        searchQuery={beyondSearchQuery}
        setSearchQuery={setBeyondSearchQuery}
        selectedDepartments={selectedBeyondDepartments}
        setSelectedDepartments={setSelectedBeyondDepartments}
        toggleDepartment={toggleBeyondDepartment}
        selectedWorkType={selectedBeyondWorkType}
        setWorkType={setSelectedBeyondWorkType}
        selectedEmploymentType={selectedBeyondEmploymentType}
        setEmploymentType={setSelectedBeyondEmploymentType}
        drawerOpen={beyondDrawerOpen}
        setDrawerOpen={setBeyondDrawerOpen}
        isGrid
        isTsd={false}
      />

      <hr className="my-8 border-gray-300" />

      {/* TSD Section */}
      <h2 className="text-3xl font-bold ml-4 mt-10 mb-4 text-[#02066F]">Careers At TSD</h2>
      <div className="relative p-1 bg-green-50 rounded-xl shadow-md border border-gray-200 mb-4">
        <p className="text-lg ml-4 text-gray-700 leading-snug mb-3">
          Be part of a fast-growing student-led startup transforming campus life in the UAE.
        </p>
        <h3 className="text-xl ml-4 text-tsd-orange mb-1 font-semibold">Why work with us?</h3>
        <p className="text-gray-700 ml-4 text-md leading-tight sm:leading-snug mb-4">
          We’re young, dynamic, and driven by purpose. Working at TSD means joining a team that values initiative, creativity, and student insight — because that’s where we came from.
        </p>
      </div>

      <JobSection
        jobs={tsdJobs}
        searchQuery={tsdSearchQuery}
        setSearchQuery={setTsdSearchQuery}
        selectedDepartments={selectedTsdDepartments}
        setSelectedDepartments={setSelectedTsdDepartments}
        toggleDepartment={toggleTsdDepartment}
        selectedWorkType={selectedTsdWorkType}
        setWorkType={setSelectedTsdWorkType}
        selectedEmploymentType={selectedTsdEmploymentType}
        setEmploymentType={setSelectedTsdEmploymentType}
        drawerOpen={tsdDrawerOpen}
        setDrawerOpen={setTsdDrawerOpen}
        isGrid={false}
        isTsd
      />

      {/* Pitch + FAQ (separate, centered) */}
      <section className="py-16 px-6 flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
        <div className="flex-1 p-6 bg-white rounded-xl shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold text-tsd-blue mb-3">Can’t find your role?</h2>
          <p className="text-gray-700 mb-2">
            <strong>Pitch us your skillset!</strong> If you're passionate about students, design, or coding, we want to hear from you.
          </p>
          <p className="text-gray-700">
            Email:{" "}
            <a href="mailto:thestudentdorm@gmail.com" className="text-tsd-orange underline hover:text-tsd-blue transition">
              thestudentdorm@gmail.com
            </a>{" "}
            with your CV and a short 2-sentence pitch.
          </p>
        </div>

        <div className="flex-1 p-6 bg-white rounded-xl shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold text-tsd-blue mb-3">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="border-b pb-2">
                <summary className="cursor-pointer flex items-center justify-between font-medium text-gray-800">
                  {faq.q}
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </summary>
                <p className="text-gray-700 mt-2 text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <NavigationButtons  />
    </div>
  );
}
