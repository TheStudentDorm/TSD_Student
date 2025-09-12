import { Link } from "react-router-dom";
import NavigationButtons from "../../components/NavigationButtons";

export default function CVGuide() {
  return (
    <div className="pt-20 px-6 max-w-5xl mx-auto">
      {/* Parallax Banner */}
      <section>
        
          <h1 className="text-3xl md:text-5xl font-bold text-tsd-blue drop-shadow-lg text-center px-4">
            Do’s and Don’ts for a Great CV
          </h1>
        
      </section>

      {/* Subtitle */}
      <p className="text-2xl text-tsd-orange mb-6 text-center italic">
        Make your resume stand out and land that dream internship or job.
      </p>
      <p className="text-lg text-tsd-blue mb-6 text-center">
        Creating a strong CV isn’t about stuffing in every detail. It’s about presenting the right information clearly and effectively. Whether you’re applying for internships, part-time roles, or your first full-time job, here’s how to get it right:
      </p>

      {/* Do’s and Don’ts */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-tsd-blue bg-tsd-blue/10 px-4 py-2 rounded-lg">
            The Do’s
            <img src="/images/thumbsup.svg" alt="Do Icon" className="h-6 w-6 shrink-0" />
          </h2>
          <ul className="list-disc list-inside text-base text-tsd-blue-500 space-y-2">
            <li >Keep It Concise & Clear
              <ul className="text-sm text-gray-700 mt-2 text-left ml-10">
              <p >Stick to one page. Recruiters only scan your CV, so make every line impactful.</p>
              </ul>
            </li>
            <li>Highlight Your Best Yet Relevant Skills
              <ul className="text-sm text-gray-700 mt-2 text-left ml-10">
              <p >Showcase internships, projects, and certifications relevant to the role.
                Use action verbs like ‘Led,’ ‘Developed,’ ‘Implemented’ and ‘Created’ to show impact. 
              </p>
              </ul>
            </li>
            <li>Tailor your CV.
              <ul className="text-sm text-gray-700 mt-2 text-left ml-10">
              <p >Each role is different, match your skills and experience to the company’s requirements or job description.</p>
              </ul>
            </li>
            <li>Keep It Clean
              <ul className="text-sm text-gray-700 mt-2 text-left ml-10">
              <p >Use a simple layout with consistent fonts, neat bullet points, and readable headings.
                  Try free student-friendly templates on Canva or Overleaf.
                  </p>
              </ul>
            </li>
            <li>Show Numbers Wherever Possible
              <ul className="text-sm text-gray-700 mt-2 text-left ml-10">
              <p >Quantify your achievements:
                    “Managed 5 events with 300+ attendees”
                    is more powerful than
                    “Helped organise events.”
                      </p>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-tsd-orange bg-tsd-orange/10 px-4 py-2 rounded-lg">
            The Don’ts
            <img src="/images/thumbsdown.svg" alt="Don't Icon" className="h-6 w-6 shrink-0" />
          </h2>
          <ul className="list-disc list-inside text-tsd-blue-500 space-y-2">
            <li>Don’t Overload with Information
              <ul className="text-sm text-gray-700 mt-2 text-left ml-10">
              <p >Avoid listing every project, class, or club you’ve ever joined. Keep it relevant and focused.</p>
              </ul>
            </li>
            <li>Don’t Use Unprofessional Email Addresses.
              <ul className="text-sm text-gray-700 mt-2 text-left ml-10">
              <p >Your email should be simple and professional, ideally in the format firstname.lastname@email.com </p>
              </ul>
            </li>
            <li>Don’t Use Paragraph-Heavy Descriptions.
            <ul className="text-sm text-gray-700 mt-2 text-left ml-10">
              <p >Recruiters scan; they don’t read. Use short bullet points instead of long blocks of text.</p>
              </ul></li>
            <li>Don’t Include Irrelevant Personal Details.
              <ul className="text-sm text-gray-700 mt-2 text-left ml-10">
              <p >Skip information like age, marital status, or unrelated hobbies unless specifically requested.</p>
              </ul>
            </li>
            <li>Don’t Submit Without Proofreading.
              <ul className="text-sm text-gray-700 mt-2 text-left ml-10">
              <p >Spelling and grammar mistakes can cost you an interview. Always proofread with a friend or use tools like Grammarly</p>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* Final Tip */}
      <h2 className="text-xl font-semibold mt-10 mb-2 text-tsd-blue">Final Tip</h2>
      <p className="text-gray-700 mb-10">
        Think of your CV as your personal marketing document...
      </p>

      {/* Navigation Link */}
      <div className="flex justify-between flex-wrap gap-4">
        <Link
          to="/blog/internship-ready"
          className="inline-block bg-tsd-blue text-white px-5 py-2 rounded-lg hover:bg-tsd-blue/80 transition"
        >
          ← Previous Article: Internship-Ready in 2 Weeks
        </Link>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-12">
        <NavigationButtons />
      </div>
    </div>
  );
}
