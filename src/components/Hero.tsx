"use client";

import Image from "next/image";
import dp from "@/assets/portfoliodp.png";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { staggerContainer } from "@/utils/animations";

export default function Hero() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const imageGlowRef = useRef<HTMLDivElement>(null);
  const imageBorderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations for background elements
    if (backgroundRef.current) {
      const bgElements = backgroundRef.current.children;

      gsap.fromTo(
        bgElements[0],
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          delay: 0.5,
        },
      );

      gsap.fromTo(
        bgElements[1],
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          delay: 0.8,
        },
      );

      // Continuous floating animation for background elements
      gsap.to(bgElements[0], {
        y: -20,
        duration: 4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(bgElements[1], {
        y: 15,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1,
      });
    }

    // GSAP animations for image elements
    if (imageGlowRef.current && imageBorderRef.current) {
      // Pulsing glow effect
      gsap.to(imageGlowRef.current, {
        scale: 1.1,
        opacity: 0.3,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Rotating border
      gsap.to(imageBorderRef.current, {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    }
  }, []);

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/moinulhasan45777/",
      icon: "fab fa-linkedin",
      label: "LinkedIn",
    },
    {
      href: "https://github.com/moinulhasan45777",
      icon: "fab fa-github",
      label: "GitHub",
    },
    {
      href: "https://www.researchgate.net/profile/Moinul-Hasan-7",
      icon: "fab fa-researchgate",
      label: "ResearchGate",
    },
    {
      href: "https://www.facebook.com/moinulhasan45777/",
      icon: "fab fa-facebook",
      label: "Facebook",
    },
  ];

  return (
    <section className="w-full relative min-h-screen py-12 lg:py-0 pt-24">
      {/* Enhanced Background Elements with GSAP - Full Width */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      >
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/15 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-[60px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-primary/8 rounded-full blur-[40px]"></div>
      </div>

      {/* Content Container - Constrained Width */}
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center justify-center relative min-h-screen z-10">
        {/* Left Content */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="w-full lg:w-1/2 mt-12 lg:mt-0 z-10 flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:pr-8"
        >
          <motion.h2
            variants={{
              initial: { opacity: 0, y: 50, scale: 0.8 },
              animate: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100,
                },
              },
            }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 relative text-white"
          >
            Hello
            <motion.span
              className="text-primary"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              .
            </motion.span>
          </motion.h2>

          <motion.div
            variants={{
              initial: { opacity: 0, x: -50 },
              animate: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.2,
                  ease: "easeOut",
                },
              },
            }}
            className="flex items-center justify-center lg:justify-start mb-6 w-full"
          >
            <motion.div
              className="h-1 w-12 bg-primary mr-4 rounded-full hidden sm:block shadow-[0_0_10px_rgba(255,87,51,0.5)]"
              animate={{
                width: [48, 60, 48],
                boxShadow: [
                  "0_0_10px_rgba(255,87,51,0.5)",
                  "0_0_20px_rgba(255,87,51,0.8)",
                  "0_0_10px_rgba(255,87,51,0.5)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-text-muted">
              I&apos;m Moinul
            </h3>
          </motion.div>

          <motion.h1
            variants={{
              initial: { opacity: 0, y: 100, rotateX: -90 },
              animate: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                transition: {
                  duration: 1,
                  delay: 0.4,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 80,
                },
              },
            }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-8 leading-tight text-white drop-shadow-sm"
          >
            Full Stack Developer
          </motion.h1>

          <motion.div
            variants={{
              initial: { opacity: 0, y: 50 },
              animate: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.1,
                  ease: "easeOut",
                },
              },
            }}
            className="flex flex-col items-center lg:items-start gap-6 mt-8 w-full lg:w-auto"
          >
            <motion.div
              variants={staggerContainer}
              className="flex flex-wrap justify-center sm:justify-start gap-4 w-full sm:w-auto"
            >
              <motion.a
                variants={{
                  initial: { opacity: 0, scale: 0, rotateY: -180 },
                  animate: {
                    opacity: 1,
                    scale: 1,
                    rotateY: 0,
                    transition: {
                      duration: 0.8,
                      delay: 0.2,
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 120,
                    },
                  },
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold transition-all duration-200 ease-out rounded shadow-[0_0_15px_rgba(255,87,51,0.2)] hover:shadow-[0_0_25px_rgba(255,87,51,0.4)] hover:scale-105 text-center w-auto tracking-wide whitespace-nowrap"
                href="/Moinul Hasan_Resume.pdf"
                download="Moinul Hasan - Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Resume
              </motion.a>
              <motion.a
                variants={{
                  initial: { opacity: 0, scale: 0, rotateY: 180 },
                  animate: {
                    opacity: 1,
                    scale: 1,
                    rotateY: 0,
                    transition: {
                      duration: 0.8,
                      delay: 0.25,
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 120,
                    },
                  },
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-primary text-white font-bold transition-all duration-200 ease-out rounded shadow-[0_0_15px_rgba(255,87,51,0.3)] hover:shadow-[0_0_30px_rgba(255,87,51,0.6)] hover:scale-105 text-center w-auto tracking-wide whitespace-nowrap"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.querySelector("#contact");
                  if (targetElement) {
                    const lenis = (window as any).lenis;
                    if (lenis) {
                      lenis.scrollTo(targetElement, { duration: 1.5 });
                    } else {
                      targetElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Static Social Icons (no animation as requested) */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  aria-label={link.label}
                  className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full border border-gray-700 bg-surface-dark text-white hover:border-primary hover:text-primary hover:shadow-[0_0_10px_rgba(255,87,51,0.3)] transition-all duration-300"
                  href={link.href}
                >
                  <i className={`${link.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Right Content - Image with GSAP animations */}
        <motion.div
          variants={{
            initial: { opacity: 0, x: 100, scale: 0.8 },
            animate: {
              opacity: 1,
              x: 0,
              scale: 1,
              transition: {
                duration: 1,
                delay: 0.3,
                ease: "easeOut",
                type: "spring",
                stiffness: 80,
              },
            },
          }}
          initial="initial"
          animate="animate"
          className="w-full lg:w-1/2 flex justify-center items-center relative z-10 mb-8 lg:mb-0"
        >
          <div className="relative w-72 h-72 md:w-[28rem] md:h-[28rem] flex justify-center items-center">
            {/* Animated rotating border */}
            <div
              ref={imageBorderRef}
              className="absolute inset-0 rounded-full border-2 border-dashed border-primary/60 transform scale-110"
            ></div>

            {/* Static inner border */}
            <div className="absolute inset-0 rounded-full border border-primary/40 transform scale-105"></div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>

            {/* Animated glow effect */}
            <div
              ref={imageGlowRef}
              className="absolute inset-0 bg-primary opacity-20 blur-[90px] rounded-full"
            ></div>

            {/* Additional floating particles */}
            <motion.div
              className="absolute -top-4 -right-4 w-3 h-3 bg-primary rounded-full"
              animate={{
                y: [-10, 10, -10],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 w-2 h-2 bg-primary/70 rounded-full"
              animate={{
                y: [10, -10, 10],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            ></motion.div>

            {/* Main image container */}
            <motion.div
              className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl z-20 bg-surface-dark"
              whileHover={{
                scale: 1.05,
                boxShadow: "0_0_40px_rgba(255,87,51,0.4)",
                transition: { duration: 0.3 },
              }}
            >
              <Image
                alt="Portrait of Moinul Hasan, Full Stack Developer"
                className="w-full h-full object-cover object-top"
                src={dp}
                width={384}
                height={384}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
