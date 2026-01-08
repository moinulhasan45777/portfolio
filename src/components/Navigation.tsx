"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import navbarLogo from "@/assets/navbarlogo.svg";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Simple: show background if scrolled more than 5px, hide only at very top
      setScrolled(currentScrollY > 5);

      // Detect active section
      const sections = [
        "about",
        "expertise",
        "education",
        "projects",
        "achievements",
        "contact",
      ];
      const scrollPosition = currentScrollY + 100; // Offset for navbar height

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
      if (currentScrollY < 100) {
        setActiveSection("");
      }
    };

    // Simple event listener - no throttling for mobile reliability
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial call
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mobile viewport and menu positioning
  useEffect(() => {
    const handleResize = () => {
      // Close menu on orientation change or resize to prevent positioning issues
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    // Apply blur and prevent interactions when menu is open
    if (isMenuOpen) {
      // Prevent scrolling by adding overflow hidden to body
      document.body.style.overflow = "hidden";

      // Add blur effect to main content
      const mainContent = document.querySelector("main");
      const footer = document.querySelector("footer");
      if (mainContent) {
        mainContent.style.filter = "blur(4px)";
        mainContent.style.pointerEvents = "none";
        mainContent.style.userSelect = "none";
      }
      if (footer) {
        footer.style.filter = "blur(4px)";
        footer.style.pointerEvents = "none";
        footer.style.userSelect = "none";
      }
    } else {
      // Restore scrolling and remove blur
      document.body.style.overflow = "";

      // Remove blur effect from main content
      const mainContent = document.querySelector("main");
      const footer = document.querySelector("footer");
      if (mainContent) {
        mainContent.style.filter = "";
        mainContent.style.pointerEvents = "";
        mainContent.style.userSelect = "";
      }
      if (footer) {
        footer.style.filter = "";
        footer.style.pointerEvents = "";
        footer.style.userSelect = "";
      }
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      // Clean up body styles and blur effects on unmount
      document.body.style.overflow = "";
      const mainContent = document.querySelector("main");
      const footer = document.querySelector("footer");
      if (mainContent) {
        mainContent.style.filter = "";
        mainContent.style.pointerEvents = "";
        mainContent.style.userSelect = "";
      }
      if (footer) {
        footer.style.filter = "";
        footer.style.pointerEvents = "";
        footer.style.userSelect = "";
      }
    };
  }, [isMenuOpen]);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        // Prevent any scroll position changes when closing menu
        event.preventDefault();
        event.stopPropagation();

        // Store current scroll position
        const currentScrollY = window.scrollY;

        setIsMenuOpen(false);

        // Ensure scroll position doesn't change
        requestAnimationFrame(() => {
          if (window.scrollY !== currentScrollY) {
            window.scrollTo(0, currentScrollY);
          }
        });
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

    // Check if we're on the homepage
    const isHomepage = window.location.pathname === "/";

    if (isHomepage) {
      // If on homepage, scroll to top
      // Get Lenis instance from window
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.5 });
      } else {
        // Fallback to native smooth scroll
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to homepage
      window.location.href = "/";
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

    // Check if we're on the homepage
    const isHomepage = window.location.pathname === "/";

    if (isHomepage) {
      // If on homepage, scroll to section
      const targetElement = document.querySelector(href);
      if (targetElement) {
        // Get Lenis instance from window
        const lenis = (window as any).lenis;
        if (lenis) {
          // Add tiny negative offset to show a bit above the contact section
          const offset = href === "#contact" ? -30 : 0;

          lenis.scrollTo(targetElement, {
            duration: 1.5,
            offset: offset,
          });
        } else {
          // Fallback to native smooth scroll
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // If on another page, navigate to homepage with hash
      window.location.href = `/${href}`;
    }

    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#expertise", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
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
        className="flex items-center cursor-pointer group"
        onClick={handleScrollToTop}
      >
        <Image
          src={navbarLogo}
          alt="Moinul Hasan Logo"
          width={100}
          height={32}
          className="h-8 w-auto transition-all duration-300 group-hover:brightness-0 group-hover:saturate-100"
          style={{
            filter: "brightness(1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter =
              "brightness(0) saturate(100%) invert(47%) sepia(96%) saturate(4456%) hue-rotate(8deg) brightness(101%) contrast(101%)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = "brightness(1)";
          }}
          priority
        />
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
        <i className="fas fa-bars"></i>
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
              className="fixed inset-0 bg-black/50 lg:hidden z-40"
              onClick={() => setIsMenuOpen(false)}
              style={{
                touchAction: "none",
                WebkitTouchCallout: "none",
                WebkitUserSelect: "none",
                userSelect: "none",
              }}
            />

            {/* Menu Panel */}
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-surface-dark border-l border-gray-800 lg:hidden z-50 overflow-hidden"
              style={{
                height: "100dvh", // Dynamic viewport height for mobile browsers
              }}
            >
              <div className="flex flex-col space-y-6 px-8 pt-8">
                {/* Close Button */}
                <div className="flex justify-end mb-4">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="w-10 h-10 rounded-full bg-background-dark border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary hover:bg-primary/10 transition-all duration-300"
                    aria-label="Close menu"
                  >
                    <i className="fas fa-times text-lg"></i>
                  </button>
                </div>

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
