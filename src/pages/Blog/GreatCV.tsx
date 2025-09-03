import { Link } from "react-router-dom";
import NavigationButtons from "../../components/NavigationButtons";

export default function CVGuide() {
  return (
    <div className="pt-20 px-6 max-w-5xl mx-auto">
      {/* Parallax Banner */}
      <div
        className="relative w-full h-64 bg-cover bg-center mb-10"
        style={{ backgroundImage: "url('/images/blog/dos-and-donts.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center", }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center">
            Do’s and Don’ts for a Great CV
          </h1>
        </div>
      </div>

      <p className="text-3xl text-gray-600 mb-6 text-center italic">
        Make your resume stand out and land that dream internship or job.
      </p>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Creating a strong CV isn’t about stuffing in every detail. It’s about presenting the right information clearly and effectively. Whether you’re applying for internships, part-time roles, or your first full-time job, here’s how to get it right:
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* The Do’s */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-green-600 bg-green-100 px-4 py-2 rounded-lg">
           
            The Do’s  <img src="/images/thumbsup.svg" alt="Do Icon" className="h-6 w-6" /> </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Keep it concise (1–2 pages max).</li>
            <li>Highlight achievements with measurable results.</li>
            <li>Tailor your CV to each job application.</li>
            <li>Use a clean, professional layout.</li>
            <li>Include updated contact information and LinkedIn profile.</li>
          </ul>
        </div>

        {/* The Don’ts */}
        <div>
           <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-red-600 bg-red-100 px-4 py-2 rounded-lg">
           The Don’ts <img src="/images/thumbsdown.svg" alt="Do Icon" className="h-6 w-6" /></h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Don’t use long paragraphs; keep it bullet-pointed.</li>
            <li>Don’t include unnecessary personal details (age, religion, photo).</li>
            <li>Don’t exaggerate or add false information.</li>
            <li>Don’t use an unprofessional email address.</li>
            <li>Don’t leave unexplained employment gaps.</li>
          </ul>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-10 mb-2">Final Tip</h2>
      <p className="text-gray-700 mb-10">
        Think of your CV as your personal marketing document. Keep it clear,
        relevant, and professional—your future employer should be able to
        understand your value within 30 seconds.
      </p>

      {/* Navigation links */}
      <div className="flex justify-between">
        <Link
          to="/blog/internship-ready"
          className="inline-block bg-blue-200 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          ← Previous Article: Internship-Ready in 2 Weeks
        </Link>
      </div>
       <NavigationButtons/>
    </div>
  );
}
