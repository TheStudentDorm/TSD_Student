import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-white text-lg font-bold mb-3">The Student Dorm</h2>
          <p className="text-sm">
            Your Student Life, Simplified.<br/>
            Connecting students across the UAE with resources, housing, and opportunities.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><NavLink to="/about" className={({isActive})=> isActive? "text-indigo-400 font-semibold":"hover:text-white"}>About</NavLink></li>
            <li><NavLink to="/students" className={({isActive})=> isActive? "text-indigo-400 font-semibold":"hover:text-white"}>Students</NavLink></li>
            <li><NavLink to="/providers" className={({isActive})=> isActive? "text-indigo-400 font-semibold":"hover:text-white"}>Providers</NavLink></li>
            <li><NavLink to="/blog/index" className={({isActive})=> isActive? "text-indigo-400 font-semibold":"hover:text-white"}>Blog</NavLink></li>
            <li><NavLink to="/contact" className={({isActive})=> isActive? "text-indigo-400 font-semibold":"hover:text-white"}>Contact</NavLink></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Stay Connected</h3>
          <ul className="space-y-2">
            <li><a href="https://www.linkedin.com/company/thestudentdorm" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/thestudentdorm/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a></li>
            <li><a href="https://chat.whatsapp.com/LOPWdDaZLdr7YA9sykwA6" target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp Community</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
        © {new Date().getFullYear()} The Student Dorm. All rights reserved.
      </div>
    </footer>
  );
}
