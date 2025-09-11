import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ColorThief from "color-thief";
import Logo from "../../public/logo_footer.png"; // Adjust path if needed

export default function Footer() {
  const [bgColor, setBgColor] = useState("#012060"); // fallback color

  useEffect(() => {
    const img = new Image();
    img.src = Logo;
    img.crossOrigin = "anonymous"; // Needed for color extraction
    img.onload = () => {
      try {
        const colorThief = new ColorThief();
        const color = colorThief.getColor(img);
        setBgColor(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);
      } catch (error) {
        console.error("Color extraction failed:", error);
      }
    };
  }, []);

  return (
    <footer style={{ backgroundColor: bgColor }} className="text-gray-200 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div className="flex items-center md:items-start gap-4">
          {/* Logo */}
          <img src={Logo} alt="TSD Logo" className="w-32 h-auto" />
          <div className="flex flex-col">
            <h2 className="text-white text-xl md:text-2xl font-bold">The Student Dorm</h2>
            <p className="text-sm text-left mt-1">
              Your Student Life, Simplified.<br />
              Connecting students across the UAE with resources, housing, and opportunities.
            </p>
          </div>
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
