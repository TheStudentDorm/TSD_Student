import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [studentsDropdown, setStudentsDropdown] = useState(false);
  const [extraDropdown, setExtraDropdown] = useState(false);
  const [studentsOpen, setStudentsOpen] = useState(location.pathname.startsWith("/students"));

  const studentsRef = useRef<HTMLDivElement>(null);
  const extraRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;
  const isStudentsActive = location.pathname.startsWith("/students");

  const studentLinks = [
    { path: "/students", label: "A Glance" },
    { path: "/students/accommodation", label: "Accommodation" },
    { path: "/students/academics", label: "Academics" },
    { path: "/students/visa", label: "Visa" },
    { path: "/students/transport", label: "Transport" },
    // { path: "/students/careers", label: "Careers" },
    { path: "/students/CareerPage", label: "Careers" },
    { path: "/students/discounts", label: "Discounts" },
    { path: "/students/events", label: "Events" },
    { path: "/students/attractions", label: "Attractions" },
    { path: "/students/emergency", label: "Emergency" },
  ];

  const extraLinks = [
    { path: "/blog/index", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (studentsRef.current && !studentsRef.current.contains(event.target as Node)) {
        setStudentsDropdown(false);
      }
      if (extraRef.current && !extraRef.current.contains(event.target as Node)) {
        setExtraDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const underlineClass = (active: boolean) =>
    `relative pb-1 text-white font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-tsd-orange after:transition-all after:duration-300 after:ease-in-out ${
      active ? "text-tsd-orange after:w-full" : "hover:text-tsd-orange after:w-0 hover:after:w-full"
    }`;

  return (
    <nav className="bg-[#002060] fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src="/logo1.png" alt="The Student Dorm" className="h-10 w-48 md:h-10 object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/about" className={underlineClass(isActive("/about"))}>About</Link>

          {/* Students Dropdown */}
          <div
            ref={studentsRef}
            className="relative"
            onMouseEnter={() => setStudentsDropdown(true)}
            onMouseLeave={() => setStudentsDropdown(false)}
          >
            <button className={underlineClass(isStudentsActive)}>Students</button>
            {studentsDropdown && (
              <div className="absolute left-0 mt-1 bg-[#002060] text-white shadow-lg rounded-md min-w-[200px]">
                {studentLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-2 text-white hover:text-tsd-orange hover:bg-[#003080] ${isActive(item.path) ? "bg-tsd-orange/20 text-tsd-orange font-semibold" : ""}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/providers" className={underlineClass(isActive("/providers"))}>Providers</Link>

          {/* Extra Dropdown */}
          <div ref={extraRef} className="relative">
            <button
              className="text-white px-3 py-2 rounded-md hover:text-tsd-orange"
              onClick={() => setExtraDropdown(prev => !prev)}
            >
              ☰
            </button>
            {extraDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-[#002060] text-white shadow-lg rounded-md">
                {extraLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-4 py-2 text-white hover:text-tsd-orange hover:bg-[#003080]"
                    onClick={() => setExtraDropdown(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-white text-2xl" onClick={() => setMobileOpen(!mobileOpen)}>☰</button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-3/4 max-w-sm bg-[#002060] shadow-lg flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-[#003080]">
              <img src="/logo1.png" alt="The Student Dorm" className="h-12 w-auto object-contain" />
              <button className="text-white text-2xl" onClick={() => setMobileOpen(false)}>✕</button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <Link to="/about" className="block px-4 py-3 text-white hover:text-tsd-orange hover:bg-[#003080]" onClick={() => setMobileOpen(false)}>About</Link>

              <button
                onClick={() => setStudentsOpen(!studentsOpen)}
                className={`w-full text-left px-4 py-3 flex justify-between items-center text-white hover:text-tsd-orange hover:bg-[#003080] font-semibold ${isStudentsActive ? "bg-tsd-orange/20 text-tsd-orange" : ""}`}
              >
                Students <span className={`${studentsOpen ? "rotate-90" : ""}`}>▸</span>
              </button>
              {studentsOpen && (
                <div className="bg-[#001540]">
                  {studentLinks.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      className="block px-6 py-2 text-white hover:text-tsd-orange hover:bg-[#003080]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}

              <Link to="/providers" className="block px-4 py-3 text-white hover:text-tsd-orange hover:bg-[#003080]" onClick={() => setMobileOpen(false)}>Providers</Link>

              {extraLinks.map((link) => (
                <Link key={link.path} to={link.path} className="block px-4 py-3 text-white hover:text-tsd-orange hover:bg-[#003080]" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}