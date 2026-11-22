import { useState, useEffect, useRef } from "react";

function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const lastScrollY = useRef(0);
  const isNavigating = useRef(false);

  const isDark = theme === "dark";

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contact" },
  ];

  // Handle navigation clicks
  const handleNavClick = () => {
    isNavigating.current = true;

    setIsVisible(true);
    setIsMenuOpen(false);

    const finishNavigation = () => {
      isNavigating.current = false;
    };

    window.addEventListener("scrollend", finishNavigation, {
      once: true,
    });

    window.setTimeout(finishNavigation, 2000);
  };

  // Handle navbar visibility while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isNavigating.current) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      const difference = currentScrollY - lastScrollY.current;

      if (isMenuOpen) {
        setIsVisible(true);
      } else if (currentScrollY < 80) {
        setIsVisible(true);
      } else if (difference > 8) {
        setIsVisible(false);
      } else if (difference < -8) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  // Theme button
  const themeButton = (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      className={`w-28 shrink-0 flex items-center justify-center
        whitespace-nowrap px-4 py-2 rounded-full font-semibold
        transition-all duration-300 border
        ${
          isDark
            ? "bg-blue-400 text-[#071B49] border-blue-300 hover:bg-blue-300"
            : "bg-blue-600 text-white border-blue-500 hover:bg-blue-700"
        }`}
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );

  return (
    <>
      {/* Navbar space */}
      <div className="h-20" />

      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full h-20 z-50
        px-6 md:px-8 py-4
        border-b border-blue-400/30
        transform-gpu will-change-transform
        transition-all duration-500 ease-in-out
        bg-[#071B49]
        ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={handleNavClick}
            className="text-2xl font-bold text-blue-300
              hover:text-blue-200 transition-colors duration-300"
          >
            CreativeStudio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7 ml-auto pl-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="relative font-medium text-blue-100
                  hover:text-blue-300 transition-all duration-300
                  after:absolute after:left-0 after:-bottom-2
                  after:h-[2px] after:w-0
                  after:transition-all after:duration-300
                  hover:after:w-full after:bg-blue-400"
              >
                {link.name}
              </a>
            ))}

            {themeButton}
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-3 md:hidden">
            {themeButton}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl text-white hover:text-blue-300"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/60 z-[60] md:hidden"
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-[70] h-screen w-64
        p-6 bg-[#071B49]
        transition-transform duration-500 ease-in-out md:hidden
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <h2 className="text-2xl font-bold mb-10 text-blue-300">
          CreativeStudio
        </h2>

        <div className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleNavClick}
              className="font-medium text-blue-100
                hover:text-blue-300 hover:translate-x-2
                transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}

export default Navbar;