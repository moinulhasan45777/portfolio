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

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

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
      <section
        className="w-full bg-background-dark py-20 lg:py-28 relative"
        id="projects"
      >
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex justify-center items-center">
            <div className="text-white text-lg">Loading projects...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="w-full bg-background-dark py-20 lg:py-28 relative"
      id="projects"
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
              Portfolio
            </span>
            <span className="h-px w-8 bg-primary"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-display leading-tight mb-4">
            Featured <span className="text-gray-600">Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A selection of projects that demonstrate my passion for building
            complex, scalable web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            // Combine all technologies from frontend, backend, and database
            const allTechnologies = [
              ...project.frontEnd,
              ...project.backEnd,
              ...project.databaseDeploy,
            ];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.15, ease: "easeOut" },
                }}
                className="group relative bg-surface-dark border border-gray-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-200 ease-out flex flex-col h-full"
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
                        project.category
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
                          tech
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

                  <Link
                    href={`/projects/${project.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="inline-flex items-center text-primary font-bold text-sm tracking-wide uppercase hover:text-white transition-colors group/link"
                  >
                    More Details
                    <i className="fas fa-arrow-right ml-2 transform group-hover/link:translate-x-1 transition-transform"></i>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            className="inline-flex items-center justify-center px-8 py-4 border border-gray-700 text-white font-bold transition-all duration-300 rounded hover:border-primary hover:bg-primary hover:shadow-[0_0_20px_rgba(255,87,51,0.4)]"
            href="https://github.com/moinulhasan45777?tab=repositories"
          >
            View All Projects on GitHub
            <i className="fab fa-github ml-2 text-lg"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
