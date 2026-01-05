"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Prevent default hash scroll behavior on page load
    if (window.location.hash) {
      window.scrollTo(0, 0);
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Expose lenis instance globally for navigation
    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle initial hash navigation when page loads
    const handleInitialHash = () => {
      const hash = window.location.hash;
      if (hash) {
        // Prevent browser's default hash scroll behavior
        if (window.history.replaceState) {
          window.history.replaceState(
            null,
            "",
            window.location.pathname + window.location.search
          );
        }

        // Wait for the page to fully load and components to mount
        setTimeout(() => {
          const targetElement = document.querySelector(hash) as HTMLElement;

          if (targetElement) {
            // Add tiny negative offset to show a bit above the contact section
            const offset = hash === "#contact" ? -30 : 0;
            lenis.scrollTo(targetElement, {
              duration: 1.5,
              offset: offset,
            });
          }
        }, 300); // Reduced timeout since we're preventing default behavior
      }
    };

    // Handle hash navigation on page load
    handleInitialHash();

    // Prevent browser's default hash scrolling behavior
    const preventHashScroll = (e: Event) => {
      if (window.location.hash) {
        e.preventDefault();
        return false;
      }
    };

    // Add event listener to prevent default hash behavior
    window.addEventListener("hashchange", preventHashScroll, {
      passive: false,
    });

    // Handle hash changes (back/forward navigation)
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetElement = document.querySelector(hash) as HTMLElement;

        if (targetElement) {
          // Add tiny negative offset to show a bit above the contact section
          const offset = hash === "#contact" ? -30 : 0;
          lenis.scrollTo(targetElement, {
            duration: 1.5,
            offset: offset,
          });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      lenis.destroy();
      delete (window as any).lenis;
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("hashchange", preventHashScroll);
    };
  }, []);

  return <>{children}</>;
}
