"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Aggressive scroll position reset for mobile
    const resetScrollPosition = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // Additional reset for webkit browsers
      if (document.documentElement.scrollTop !== 0) {
        document.documentElement.scrollTop = 0;
      }
      if (document.body.scrollTop !== 0) {
        document.body.scrollTop = 0;
      }
    };

    // Initial reset
    resetScrollPosition();

    // Prevent default hash scroll behavior on page load
    if (window.location.hash) {
      resetScrollPosition();
    }

    // Additional mobile-specific handling
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );

    if (isMobile) {
      // Prevent scroll restoration on mobile
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }

      // Multiple attempts to ensure scroll position is at top
      const mobileScrollReset = () => {
        resetScrollPosition();

        // Additional reset after DOM is fully ready
        requestAnimationFrame(() => {
          resetScrollPosition();
        });
      };

      // Immediate reset
      mobileScrollReset();

      // Reset after short delay for mobile browser quirks
      setTimeout(mobileScrollReset, 50);
      setTimeout(mobileScrollReset, 100);
      setTimeout(mobileScrollReset, 200);
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
        // Prevent browser&apos;s default hash scroll behavior
        if (window.history.replaceState) {
          window.history.replaceState(
            null,
            "",
            window.location.pathname + window.location.search,
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
        }, 300); // Reduced timeout since we&apos;re preventing default behavior
      }
    };

    // Handle hash navigation on page load
    handleInitialHash();

    // Prevent browser&apos;s default hash scrolling behavior
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
