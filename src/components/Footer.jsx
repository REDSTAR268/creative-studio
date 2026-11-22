
function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#071B49] text-white pt-16 pb-8 px-6 md:px-10">

      {/* Footer Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1
        sm:grid-cols-2 lg:grid-cols-3 gap-12">

        {/* Company Information */}
        <div>
          <h2 className="text-3xl font-bold text-blue-300 mb-5">
            CreativeStudio
          </h2>

          <p className="text-blue-100 leading-relaxed max-w-sm">
            We create meaningful digital experiences through
            innovative design, modern technology, and creativity.
          </p>

          <p className="text-blue-300 font-semibold mt-6">
            CREATIVE IDEAS. POWERFUL RESULTS.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-blue-100 hover:text-blue-300
                  hover:translate-x-1 inline-block
                  transition-all duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-6">
            Our Services
          </h3>

          <ul className="space-y-3 text-blue-100">
            <li>Brand Identity</li>
            <li>Graphic Design</li>
            <li>Photography</li>
            <li>Web Design</li>
          </ul>

          <a
            href="#contact"
            className="inline-block mt-6 bg-blue-500
            hover:bg-blue-400 text-white px-6 py-3
            rounded-lg font-semibold transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-14 pt-6
        border-t border-blue-400/30 flex flex-col
        md:flex-row items-center justify-between gap-4">

        <p className="text-blue-200 text-sm text-center">
          © {currentYear} CreativeStudio. All rights reserved.
        </p>

        <a
          href="#home"
          className="text-blue-300 hover:text-white
          font-semibold transition-colors duration-300"
        >
          Back to Top ↑
        </a>

      </div>

    </footer>
  );
}

export default Footer;
