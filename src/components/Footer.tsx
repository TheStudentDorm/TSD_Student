  import { NavLink } from "react-router-dom";
  import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

  export default function Footer() {
    return (
      <footer className="bg-[#002060] text-gray-200 py-10 mt-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-start gap-10 text-center sm:text-left">
          
          {/* 1. Logo + Branding */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 flex-1">
            <img
              src="/tsd_footer.png"
              alt="The Student Dorm logo"
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-white text-lg sm:text-xl font-bold">
                The Student Dorm
              </h2>
              <p className="text-sm mt-1 leading-relaxed">
                Your Student Life, Simplified.<br />
                Connecting students across the UAE with resources, housing, and opportunities.
              </p>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="flex-1">
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: "/about", label: "About" },
                { to: "/students", label: "Students" },
                { to: "/providers", label: "Providers" },
                { to: "/blog/index", label: "Blog" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#ff6d34] font-semibold"
                        : "hover:text-[#ff6d34] transition"
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Stay Connected */}
          <div className="flex-1">
            <h3 className="text-white font-semibold mb-3">Stay Connected</h3>
            <ul className="space-y-2">
              {[
                {
                  href: "https://www.linkedin.com/company/thestudentdorm",
                  label: "LinkedIn",
                  icon: <FaLinkedin />,
                },
                {
                  href: "https://www.instagram.com/thestudentdorm/",
                  label: "Instagram",
                  icon: <FaInstagram />,
                },
                {
                  href: "https://chat.whatsapp.com/LOPWdDaZLdr7YA9sykwA6",
                  label: "WhatsApp Community",
                  icon: <FaWhatsapp />,
                },
              ].map(({ href, label, icon }) => (
                <li
                  key={label}
                  className="flex items-center justify-center sm:justify-start gap-2"
                >
                  <span className="text-xl hover:text-[#ff6d34] transition-transform transform hover:scale-110">
                    {icon}
                  </span>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${label}`}
                    className="hover:text-[#ff6d34] transition"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-[#ff6d34]/40 pt-6 text-center text-sm text-gray-300">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium hover:text-[#ff6d34] transition">
            The Student Dorm
          </span>
          . All rights reserved.
        </div>
      </footer>
    );
  }
