"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      className="w-full bg-surface-dark py-24 relative border-t border-gray-800"
      id="education"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-primary"></span>
            <span className="text-primary font-bold tracking-widest uppercase text-sm">
              Education
            </span>
            <span className="h-px w-8 bg-primary"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-display leading-tight mb-4">
            Academic Journey
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Building a strong theoretical foundation to fuel innovative
            engineering solutions.
          </p>
        </motion.div>
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 hidden lg:block"></div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex flex-col lg:flex-row items-center lg:justify-between w-full group"
          >
            <div className="hidden lg:flex w-5/12 justify-end pr-12">
              <div className="text-right">
                <span className="text-5xl font-bold text-gray-800 group-hover:text-primary/20 transition-colors duration-300 font-display">
                  2026
                </span>
                <p className="text-sm text-primary uppercase tracking-widest mt-1 font-semibold">
                  Expected Graduation
                </p>
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 bg-surface-dark border-4 border-background-dark rounded-full z-10 hidden lg:flex shadow-[0_0_15px_rgba(255,87,51,0.3)]">
              <i className="fas fa-graduation-cap text-primary text-sm"></i>
            </div>
            <div className="w-full lg:w-5/12 pl-0 lg:pl-12">
              <div className="relative bg-background-dark border border-gray-800 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 shadow-xl group-hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <div className="lg:hidden mb-4 flex items-center justify-between">
                  <span className="text-primary text-sm font-bold uppercase tracking-wider border border-primary/20 bg-primary/5 px-3 py-1 rounded-full">
                    2021 - 2026
                  </span>
                  <i className="fas fa-graduation-cap text-gray-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  Bachelor of Science
                </h3>
                <div className="text-gray-400 font-medium mb-4">
                  Computer Science & Engineering
                </div>
                <div className="flex items-start gap-3 mb-6 pb-6 border-b border-gray-800">
                  <i className="fas fa-university mt-1 text-primary"></i>
                  <div>
                    <p className="text-gray-200 font-semibold leading-snug">
                      American International University-Bangladesh
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Major</span>
                    <span className="text-gray-300 font-medium">
                      Information Systems
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">CGPA</span>
                    <span className="text-white font-bold bg-gray-800 px-2 py-0.5 rounded border border-gray-700">
                      3.72
                      <span className="text-gray-500 font-normal"> / 4.00</span>
                    </span>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none rounded-tr-xl">
                  <div className="absolute top-0 right-0 w-2 h-2 bg-primary"></div>
                  <div className="absolute top-0 right-2 w-full h-px bg-gradient-to-l from-primary to-transparent"></div>
                  <div className="absolute top-2 right-0 w-px h-full bg-gradient-to-b from-primary to-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
