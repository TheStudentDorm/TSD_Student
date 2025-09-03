import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false); // Mobile menu toggle
  const [desktopClick, setDesktopClick] = useState(false); // Desktop hamburger click
  const [desktopHover, setDesktopHover] = useState(false); // Desktop hamburger hover
  const [studentsOpen, setStudentsOpen] = useState(location.pathname.startsWith("/students")); // Mobile students submenu
  const [studentsDropdown, setStudentsDropdown] = useState(false); // Desktop students dropdown
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
    // { path: "/accommodation", label: "Providers Login" },
    { path: "/blog/index", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gray-900 text-white fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="The Student Dorm" className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            to="/about"
            className={`hover:text-yellow-400 ${isActive("/about") ? "text-yellow-400 font-semibold" : ""}`}
          >
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
            <button className={`hover:text-yellow-400 flex items-center gap-1 ${isStudentsActive ? "text-yellow-400 font-semibold" : ""}`}>
              Students <ChevronDown className="w-4 h-4" />
            </button>
            <div
              className={`absolute left-0 mt-1 bg-indigo-800 text-white shadow-lg rounded-md min-w-[200px] transition-all duration-200 ${
                studentsDropdown ? "block" : "hidden"
              }`}
            >
              {studentLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2 rounded transition-colors duration-200 ${
                    isActive(item.path) ? "bg-indigo-700 font-semibold" : "hover:bg-indigo-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/providers"
            className={`hover:text-yellow-400 ${isActive("/providers") ? "text-yellow-400 font-semibold" : ""}`}
          >
            Providers
          </Link>

          {/* Desktop Hamburger (hover + click) */}
          <div
            className="relative"
            onMouseEnter={() => setDesktopHover(true)}
            onMouseLeave={() => setDesktopHover(false)}
          >
            <button
              className="text-white px-3 py-2 bg-gray-800 rounded-md hover:bg-gray-700"
              onClick={() => setDesktopClick((prev) => !prev)}
            >
              ☰
            </button>
            {(desktopHover || desktopClick) && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-900 text-white shadow-lg rounded-md z-50">
                {extraLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-2 hover:bg-indigo-700 ${
                      isActive(link.path) ? "bg-indigo-700 font-semibold" : ""
                    }`}
                    onClick={() => setDesktopClick(false)} // Close on click
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-900 text-white shadow-md">
          <Link
            to="/about"
            className={`block px-4 py-2 hover:bg-indigo-700 ${isActive("/about") ? "bg-indigo-700 font-semibold" : ""}`}
          >
            About
          </Link>

          {/* Expandable Students */}
          <button
            onClick={() => setStudentsOpen(!studentsOpen)}
            className={`w-full text-left px-4 py-2 hover:bg-indigo-700 flex justify-between items-center ${
              isStudentsActive ? "bg-indigo-700 font-semibold" : ""
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
                    isActive(item.path) ? "bg-indigo-700 font-semibold" : "hover:bg-indigo-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Extra links for mobile */}
          {extraLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-2 hover:bg-indigo-700 ${
                isActive(link.path) ? "bg-indigo-700 font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/providers"
            className={`block px-4 py-2 hover:bg-indigo-700 ${isActive("/providers") ? "bg-indigo-700 font-semibold" : ""}`}
          >
            Providers
          </Link>
        </div>
      )}
    </nav>
  );
}
