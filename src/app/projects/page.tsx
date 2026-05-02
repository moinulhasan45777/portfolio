"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Project {
  title: string;
  subTitle: string;
  image: string;
  category: string;
  date: string;
  projectDescription: string;
  frontEnd: string[];
  backEnd: string[];
  databaseDeploy: string[];
  live: string;
  github: string;
}

export default function AllProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reset scroll position to top when component mounts
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/projects.json");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Helper function to get technology colors
  const getTechColor = (tech: string): string => {
    const colorMap: { [key: string]: string } = {
      JavaScript: "text-yellow-400",
      "React.js": "text-blue-400",
      "Next.js": "text-white",
      "Node.js": "text-green-400",
      "Express.js": "text-gray-300",
      MongoDB: "text-green-500",
      Firebase: "text-orange-400",
      JWT: "text-purple-400",
      "Tailwind CSS": "text-cyan-400",
      "TanStack Query": "text-red-400",
      "Swiper Slider": "text-blue-300",
      Vercel: "text-white",
    };
    return colorMap[tech] || "text-gray-400";
  };

  // Helper function to get project icon
  const getProjectIcon = (category: string): string => {
    if (category.includes("Full Stack")) return "fas fa-layer-group";
    if (category.includes("Web")) return "fas fa-globe";
    if (category.includes("Mobile")) return "fas fa-mobile-alt";
    return "fas fa-code";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background-dark flex items-center justify-center">
        <div className="text-white text-lg">Loading projects...</div>
      </div>
    );
  }

  return (
    <div className="bg-background-dark text-white min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-6 md:px-12 py-20 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-primary"></span>
            <span className="text-primary font-bold tracking-widest uppercase text-sm">
              All Projects
            </span>
            <span className="h-px w-8 bg-primary"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-display leading-tight mb-4">
            Building <span className="text-primary">Solutions</span> That{" "}
            <span className="text-gray-600">Matter</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            A comprehensive showcase of web applications and systems I&apos;ve
            built, demonstrating expertise in full-stack development, modern
            frameworks, and scalable architecture.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link
              href="/#projects"
              className="inline-flex items-center px-6 py-3 border border-gray-700 text-white font-bold transition-all duration-300 rounded hover:border-primary hover:text-primary"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Home
            </Link>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <i className="fas fa-code text-primary"></i>
              <span className="font-bold">{projects.length}</span> Projects
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            // Combine all technologies from frontend, backend, and database
            const allTechnologies = [
              ...project.frontEnd,
              ...project.backEnd,
              ...project.databaseDeploy,
            ];

            const projectSlug = project.title
              .toLowerCase()
              .replace(/\s+/g, "-");

            return (
              <Link key={index} href={`/projects/${projectSlug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.15, ease: "easeOut" },
                  }}
                  className="group relative bg-surface-dark border border-gray-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-200 ease-out flex flex-col h-full cursor-pointer"
                >
                  <div className="h-56 overflow-hidden relative">
                    <Image
                      alt={`${project.title} Project Image`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={project.image}
                      width={400}
                      height={224}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-80"></div>
                  </div>

                  <div className="p-8 relative -mt-12 flex flex-col flex-grow">
                    <div className="bg-gray-900/90 backdrop-blur border border-gray-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                      <i
                        className={`${getProjectIcon(
                          project.category,
                        )} text-white text-xl`}
                      ></i>
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-xs font-medium text-gray-500">
                        <i className="far fa-calendar-alt mr-1"></i>{" "}
                        {project.date}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm font-medium text-gray-300 mb-3">
                      {project.subTitle}
                    </p>

                    <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
                      {project.projectDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {allTechnologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 text-xs font-medium ${getTechColor(
                            tech,
                          )} bg-gray-800/50 border border-gray-700/50 rounded-full`}
                        >
                          {tech}
                        </span>
                      ))}
                      {allTechnologies.length > 4 && (
                        <span className="px-3 py-1 text-xs font-medium text-gray-400 bg-gray-800/50 border border-gray-700/50 rounded-full">
                          +{allTechnologies.length - 4} more
                        </span>
                      )}
                    </div>

                    <div className="flex-grow"></div>

                    <span className="inline-flex items-center text-primary font-bold text-sm tracking-wide uppercase group-hover:text-white transition-colors">
                      More Details
                      <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                    </span>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mt-20 text-center"
        >
          <div className="bg-surface-dark border border-gray-800 rounded-2xl p-12 max-w-3xl mx-auto">
            <i className="fas fa-quote-left text-primary text-4xl mb-6 opacity-50"></i>
            <p className="text-xl md:text-2xl text-gray-300 font-light italic leading-relaxed mb-6">
              Code is not just about solving problems—it&apos;s about crafting
              experiences, building systems that scale, and creating value that
              lasts.
            </p>
            <div className="flex items-center justify-center gap-6 mt-8">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold transition-all duration-300 rounded shadow-[0_0_15px_rgba(255,87,51,0.3)] hover:shadow-[0_0_25px_rgba(255,87,51,0.6)] hover:scale-105 uppercase tracking-wide text-sm"
              >
                Get In Touch
                <i className="fas fa-paper-plane ml-2"></i>
              </Link>
              <a
                href="https://github.com/moinulhasan45777?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-700 text-white font-bold transition-all duration-300 rounded hover:border-primary hover:text-primary uppercase tracking-wide text-sm"
              >
                GitHub Profile
                <i className="fab fa-github ml-2"></i>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
