import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopClick, setDesktopClick] = useState(false);
  const [desktopHover, setDesktopHover] = useState(false);
  const [studentsOpen, setStudentsOpen] = useState(location.pathname.startsWith("/students"));
  const [studentsDropdown, setStudentsDropdown] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  let hideTimeout: NodeJS.Timeout;

  const isActive = (path: string) => location.pathname === path;
  const isStudentsActive = location.pathname.startsWith("/students");

  const studentLinks = [
    { path: "/students/accommodation", label: "Accommodation" },
    { path: "/students/academics", label: "Academics" },
    { path: "/students/visa", label: "Visa" },
    { path: "/students/transport", label: "Transport" },
    { path: "/students/careers", label: "Careers" },
    { path: "/students/discounts", label: "Discounts" },
    { path: "/students/events", label: "Events" },
    { path: "/students/attractions", label: "Attractions" },
    { path: "/students/emergency", label: "Emergency" },
  ];

  const extraLinks = [
    { path: "/blog/index", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);

      if (mobileOpen) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileOpen]);

  // ✅ underline animation helper
  const underlineClass = (active: boolean) =>
    `relative pb-1 hover:text-[#ff6d34] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#ff6d34] after:transition-all after:duration-300 after:ease-in-out ${
      active ? "text-[#ff6d34] font-semibold after:w-full" : "after:w-0 hover:after:w-full"
    }`;

  return (
    <nav
      className={`bg-[#002060] text-white fixed top-0 w-full z-50 shadow-lg transform transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo1.png" alt="The Student Dorm" className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/about" className={underlineClass(isActive("/about"))}>
            About
          </Link>

          {/* Students Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearTimeout(hideTimeout);
              setStudentsDropdown(true);
            }}
            onMouseLeave={() => {
              hideTimeout = setTimeout(() => setStudentsDropdown(false), 150);
            }}
          >
            <button className={underlineClass(isStudentsActive)}>Students</button>
            <div
              className={`absolute left-0 mt-1 bg-[#002060] text-white shadow-lg rounded-md min-w-[200px] transition-all duration-200 ${
                studentsDropdown ? "block" : "hidden"
              }`}
            >
              {studentLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2 rounded transition-colors duration-200 ${
                    isActive(item.path)
                      ? "bg-[#ff6d34]/20 text-[#ff6d34] font-semibold"
                      : "hover:bg-[#ff6d34]/10 hover:text-[#ff6d34]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/providers" className={underlineClass(isActive("/providers"))}>
            Providers
          </Link>

          {/* Desktop Hamburger */}
          <div
            className="relative"
            onMouseEnter={() => setDesktopHover(true)}
            onMouseLeave={() => setDesktopHover(false)}
          >
            <button
              className="text-white px-3 py-2 bg-[#002060]/80 rounded-md hover:bg-[#ff6d34]/80"
              onClick={() => setDesktopClick((prev) => !prev)}
            >
              ☰
            </button>
            {(desktopHover || desktopClick) && (
              <div className="absolute right-0 mt-2 w-48 bg-[#002060] text-white shadow-lg rounded-md z-50">
                {extraLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-2 transition-colors duration-200 ${
                      isActive(link.path)
                        ? "bg-[#ff6d34]/20 text-[#ff6d34] font-semibold"
                        : "hover:bg-[#ff6d34]/10 hover:text-[#ff6d34]"
                    }`}
                    onClick={() => setDesktopClick(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#002060] text-white shadow-md">
          <Link
            to="/about"
            className={`block px-4 py-2 hover:bg-[#ff6d34]/20 ${
              isActive("/about") ? "bg-[#ff6d34]/20 text-[#ff6d34] font-semibold" : ""
            }`}
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>

          {/* Expandable Students */}
          <button
            onClick={() => setStudentsOpen(!studentsOpen)}
            className={`w-full text-left px-4 py-2 hover:bg-[#ff6d34]/20 flex justify-between items-center ${
              isStudentsActive ? "bg-[#ff6d34]/20 text-[#ff6d34] font-semibold" : ""
            }`}
          >
            Students ▾
          </button>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              studentsOpen ? "max-h-60" : "max-h-0"
            }`}
          >
            <div className="pl-6">
              {studentLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2 rounded transition-colors duration-200 ${
                    isActive(item.path)
                      ? "bg-[#ff6d34]/20 text-[#ff6d34] font-semibold"
                      : "hover:bg-[#ff6d34]/10"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Extra links */}
          {extraLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-2 transition-colors duration-200 ${
                isActive(link.path)
                  ? "bg-[#ff6d34]/20 text-[#ff6d34] font-semibold"
                  : "hover:bg-[#ff6d34]/10 hover:text-[#ff6d34]"
              }`}
              onClick={() => setDesktopClick(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/providers"
            className={`block px-4 py-2 hover:bg-[#ff6d34]/20 ${
              isActive("/providers") ? "bg-[#ff6d34]/20 text-[#ff6d34] font-semibold" : ""
            }`}
            onClick={() => setMobileOpen(false)}
          >
            Providers
          </Link>
        </div>
      )}
    </nav>
  );
}
