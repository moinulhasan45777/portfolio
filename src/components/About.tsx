"use client";

import Image from "next/image";
import dp from "@/assets/ddpp.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      className="w-full bg-surface-dark py-20 lg:py-28 relative overflow-hidden"
      id="about"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full lg:w-1/2 order-2 lg:order-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-0.5 w-12 bg-primary"></span>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">
                About Me
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display leading-tight">
              Crafting logic into <br />
              <span className="text-gray-600">digital reality.</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-10">
              <p>
                I&apos;m Moinul Hasan, a Full Stack Developer with a pragmatic
                approach to building systems. While I appreciate aesthetics, my
                true passion lies in the architecture that powers them. I focus
                on creating scalable, efficient, and maintainable codebases that
                stand the test of time.
              </p>
              <p>
                With 1 year of hands-on experience, I&apos;ve navigated the
                complexities of full-stack development. From optimizing database
                queries to fine-tuning frontend performance, I treat every line
                of code as a critical component of the user experience.
              </p>
            </div>
            <div className="flex flex-wrap gap-10 border-t border-gray-800 pt-8">
              <div>
                <h4 className="text-4xl font-bold text-white font-display">
                  01<span className="text-primary text-2xl">+</span>
                </h4>
                <p className="text-sm text-gray-500 mt-1 uppercase tracking-wide">
                  Years Exp.
                </p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-white font-display">
                  15<span className="text-primary text-2xl">+</span>
                </h4>
                <p className="text-sm text-gray-500 mt-1 uppercase tracking-wide">
                  Projects
                </p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-white font-display">
                  100<span className="text-primary text-2xl">%</span>
                </h4>
                <p className="text-sm text-gray-500 mt-1 uppercase tracking-wide">
                  Quality
                </p>
              </div>
            </div>
            <div className="mt-10">
              <a
                className="inline-flex items-center text-primary font-bold hover:text-white transition-colors group text-sm uppercase tracking-wider"
                href="/Moinul Hasan_Resume.pdf"
                download="Moinul Hasan - Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Full Resume
                <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute top-4 right-4 w-full h-full border-2 border-dashed border-gray-700 rounded-lg translate-x-4 translate-y-4 hidden md:block"></div>
              <div className="absolute -top-4 -left-4 w-2/3 h-2/3 bg-gray-800/30 rounded-lg -z-10 hidden md:block"></div>
              <div className="relative rounded-lg overflow-hidden bg-gray-900 shadow-2xl z-10 aspect-[4/5] border border-gray-800/50">
                <Image
                  alt="Moinul Hasan Professional Headshot"
                  className="w-full h-full object-cover opacity-90 transition-opacity duration-300 hover:opacity-100"
                  src={dp}
                  width={400}
                  height={500}
                />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background-dark/90 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 z-20 bg-[#1e1e1e] border border-gray-700 p-4 rounded-lg shadow-2xl max-w-[220px] hidden sm:block">
                <div className="flex items-center justify-between mb-3 border-b border-gray-700 pb-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <i className="fas fa-code text-gray-500 text-xs"></i>
                </div>
                <div className="space-y-1.5 font-mono text-[10px] text-gray-400">
                  <div className="flex">
                    <span className="text-primary mr-2">const</span>
                    <span className="text-white">developer</span> = {"{"}
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">name</span>:
                    <span className="text-green-400">&apos;Moinul&apos;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">focus</span>:
                    <span className="text-green-400">
                      &apos;Innovation&apos;
                    </span>
                    ,
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">coffee</span>:
                    <span className="text-primary">true</span>
                  </div>
                  <div>{"}"}</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl shadow-lg z-20 hidden lg:flex">
                <i className="fas fa-quote-right"></i>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
