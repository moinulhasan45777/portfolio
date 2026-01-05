"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled below 2 screen heights
      const scrollThreshold = window.innerHeight * 2;
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    // Get Lenis instance from window
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.5 });
    } else {
      // Fallback to native smooth scroll
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0_0_20px_rgba(255,87,51,0.6)",
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border-2 border-primary/20 backdrop-blur-sm"
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up text-lg"></i>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
