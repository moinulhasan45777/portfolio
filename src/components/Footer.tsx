"use client";

export default function Footer() {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Handle PDF download
    if (href.endsWith(".pdf")) {
      // Let the browser handle the PDF download naturally
      return;
    }

    e.preventDefault();

    // Check if we're on the homepage
    const isHomepage = window.location.pathname === "/";

    if (isHomepage) {
      // If on homepage, scroll to section
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const lenis = (window as any).lenis;
        if (lenis) {
          // Add tiny negative offset to show a bit above the contact section
          const offset = href === "#contact" ? -30 : 0;

          lenis.scrollTo(targetElement, {
            duration: 1.5,
            offset: offset,
          });
        } else {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // If on another page, navigate to homepage with hash
      window.location.href = `/${href}`;
    }
  };

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Check if we're on the homepage
    const isHomepage = window.location.pathname === "/";

    if (isHomepage) {
      // If on homepage, scroll to top
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.5 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to homepage
      window.location.href = "/";
    }
  };

  return (
    <footer className="w-full bg-background-dark border-t border-gray-800 pt-16 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <a
              className="inline-block mb-2 group"
              href="#"
              onClick={handleScrollToTop}
            >
              <h3 className="text-3xl font-bold font-display text-white tracking-tight group-hover:text-primary transition-colors">
                Moinul Hasan
                <span className="text-primary group-hover:text-white transition-colors">
                  .
                </span>
              </h3>
            </a>
            <p className="text-gray-300 font-medium text-lg mb-4">
              Software Developer
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
              Creating scalable and efficient web applications with a focus on
              user experience and clean architecture. Let's build something
              amazing together.
            </p>
            <div className="flex items-center gap-4">
              <a
                aria-label="LinkedIn"
                className="w-10 h-10 rounded bg-surface-dark border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
                href="https://www.linkedin.com/in/moinulhasan45777/"
              >
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
              <a
                aria-label="GitHub"
                className="w-10 h-10 rounded bg-surface-dark border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
                href="https://github.com/moinulhasan45777"
              >
                <i className="fab fa-github text-lg"></i>
              </a>
              <a
                aria-label="ResearchGate"
                className="w-10 h-10 rounded bg-surface-dark border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
                href="https://www.researchgate.net/profile/Moinul-Hasan-7"
              >
                <i className="fab fa-researchgate text-lg"></i>
              </a>
              <a
                aria-label="Facebook"
                className="w-10 h-10 rounded bg-surface-dark border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
                href="https://www.facebook.com/moinulhasan45777/"
              >
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
            </div>
          </div>
          <div className="md:col-span-1">
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm border-l-2 border-primary pl-3">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a
                  className="text-gray-400 hover:text-primary transition-colors flex items-center group"
                  href="#about"
                  onClick={(e) => handleSmoothScroll(e, "#about")}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mr-2 group-hover:bg-primary transition-colors"></span>
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-primary transition-colors flex items-center group"
                  href="#expertise"
                  onClick={(e) => handleSmoothScroll(e, "#expertise")}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mr-2 group-hover:bg-primary transition-colors"></span>
                  Skills
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-primary transition-colors flex items-center group"
                  href="#education"
                  onClick={(e) => handleSmoothScroll(e, "#education")}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mr-2 group-hover:bg-primary transition-colors"></span>
                  Education
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-primary transition-colors flex items-center group"
                  href="#projects"
                  onClick={(e) => handleSmoothScroll(e, "#projects")}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mr-2 group-hover:bg-primary transition-colors"></span>
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm border-l-2 border-primary pl-3">
              Resources
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a
                  className="text-gray-400 hover:text-primary transition-colors flex items-center group"
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, "#contact")}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mr-2 group-hover:bg-primary transition-colors"></span>
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-primary transition-colors flex items-center group"
                  href="/Moinul  Hasan_Resume.pdf"
                  onClick={(e) =>
                    handleSmoothScroll(e, "/Moinul  Hasan_Resume.pdf")
                  }
                  download="Moinul Hasan - Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mr-2 group-hover:bg-primary transition-colors"></span>
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 Moinul Hasan. All rights reserved.</p>
          <p>Designed & Built with Next.js, Shadcn & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
