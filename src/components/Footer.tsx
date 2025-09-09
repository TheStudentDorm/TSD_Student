import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#02066f] text-gray-200 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-white text-lg font-bold mb-3">The Student Dorm</h2>
          <p className="text-sm">
            Your Student Life, Simplified.<br />
            Connecting students across the UAE with resources, housing, and opportunities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ff6d34] font-semibold"
                    : "hover:text-[#ff6d34] transition"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/students"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ff6d34] font-semibold"
                    : "hover:text-[#ff6d34] transition"
                }
              >
                Students
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/providers"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ff6d34] font-semibold"
                    : "hover:text-[#ff6d34] transition"
                }
              >
                Providers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog/index"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ff6d34] font-semibold"
                    : "hover:text-[#ff6d34] transition"
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ff6d34] font-semibold"
                    : "hover:text-[#ff6d34] transition"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Stay Connected</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.linkedin.com/company/thestudentdorm"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff6d34] transition"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thestudentdorm/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff6d34] transition"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://chat.whatsapp.com/LOPWdDaZLdr7YA9sykwA6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff6d34] transition"
              >
                WhatsApp Community
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 border-t border-[#ff6d34]/40 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} The Student Dorm. All rights reserved.
      </div>
    </footer>
  );
}
