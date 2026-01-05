"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = [
        "about",
        "expertise",
        "education",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }

      // If at the very top, no section is active
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleScrollToTop = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    // Get Lenis instance from window
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.5 });
    } else {
      // Fallback to native smooth scroll
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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

    // Immediately set active state for clicked link with no transition
    setIsClicked(true);
    setActiveSection(href);

    // Reset the clicked flag after a brief moment to re-enable transitions
    setTimeout(() => setIsClicked(false), 100);

    const targetElement = document.querySelector(href);
    if (targetElement) {
      // Get Lenis instance from window
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(targetElement, { duration: 1.5 });
      } else {
        // Fallback to native smooth scroll
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#expertise", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "/Moinul  Hasan_Resume.pdf", label: "Resume" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className={`w-full py-6 px-6 md:px-12 flex justify-between items-center z-50 fixed top-0 transition-all duration-300 ${
        scrolled
          ? "bg-background-dark/80 backdrop-blur-md border-b border-gray-800/30"
          : "bg-transparent"
      }`}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="text-2xl font-bold font-display tracking-tight text-white hover:text-primary transition-colors cursor-pointer"
        onClick={handleScrollToTop}
      >
        Moinul Hasan
      </motion.div>

      <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
        {navItems.map((item) => {
          const isActive = activeSection === item.href;
          const isPdf = item.href.endsWith(".pdf");

          return (
            <a
              key={item.label}
              className={`${isClicked ? "" : "transition-colors"} ${
                isActive ? "text-primary" : "text-gray-300 hover:text-primary"
              }`}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              {...(isPdf && {
                download: "Moinul Hasan - Resume.pdf",
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {item.label}
            </a>
          );
        })}
        <a
          className={`px-6 py-2.5 rounded font-bold ${
            isClicked ? "" : "transition-all duration-300"
          } ${
            activeSection === "#contact"
              ? "bg-primary text-white shadow-[0_0_20px_rgba(255,87,51,0.6)]"
              : "bg-primary text-white shadow-[0_0_15px_rgba(255,87,51,0.3)] hover:shadow-[0_0_20px_rgba(255,87,51,0.6)] hover:scale-105"
          }`}
          href="#contact"
          onClick={(e) => {
            // Immediately set active state
            setIsClicked(true);
            setActiveSection("#contact");
            setTimeout(() => setIsClicked(false), 100);
            handleSmoothScroll(e, "#contact");
          }}
        >
          Get In Touch
        </a>
      </div>

      <button
        className="lg:hidden text-2xl focus:outline-none text-white hover:text-primary transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-30"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-screen w-80 bg-surface-dark border-l border-gray-800 lg:hidden z-40 pt-20"
            >
              <div className="flex flex-col space-y-6 px-8">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href;
                  const isPdf = item.href.endsWith(".pdf");

                  return (
                    <a
                      key={item.label}
                      className={`${
                        isClicked ? "" : "transition-colors"
                      } text-lg font-medium ${
                        isActive
                          ? "text-primary"
                          : "text-gray-300 hover:text-primary"
                      }`}
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      {...(isPdf && {
                        download: "Moinul Hasan - Resume.pdf",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                    >
                      {item.label}
                    </a>
                  );
                })}
                <a
                  className={`px-6 py-3 rounded font-bold ${
                    isClicked ? "" : "transition-all duration-300"
                  } text-center mt-8 ${
                    activeSection === "#contact"
                      ? "bg-primary text-white shadow-[0_0_20px_rgba(255,87,51,0.6)]"
                      : "bg-primary text-white"
                  }`}
                  href="#contact"
                  onClick={(e) => {
                    // Immediately set active state
                    setIsClicked(true);
                    setActiveSection("#contact");
                    setTimeout(() => setIsClicked(false), 100);
                    handleSmoothScroll(e, "#contact");
                  }}
                >
                  Get In Touch
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
