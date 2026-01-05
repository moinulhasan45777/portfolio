"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "FinTrack Dashboard",
      subtitle: "Financial Tracking Dashboard",
      category: "Web Development",
      date: "March, 2025",
      description:
        "A real-time financial analytics dashboard allowing users to track assets, analyze spending patterns, and forecast savings with predictive algorithms.",
      technologies: ["React", "TypeScript", "Node.js"],
      techColors: ["text-primary", "text-blue-400", "text-green-400"],
      icon: "fas fa-chart-line",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDuQcCWfWKDxBkTQOzqYa6akOvCrqYxAdoT62-sEYv7FTPA1heM7Yq3UlfC1OOeTMYN55gxiSo0MQLCCInZ-gNxl1E8VEqUE4Q6aX2okuXdu9Uc0Q_A-5MTfUsPeQNxMfx2foCT52dRChQZWr0TT9WYqOWM1SHiI0OTjoeo-VGyRxNgGis051r6CeaATgQizYJR1xLYQZJ6VEpdA6t7cuRiLN1kTPhIgi-AMnilpLmIFy4SRS9R5zyEUEaUOGcdPSPeqaE0I53C8LY",
    },
    {
      title: "DevSpace API",
      subtitle: "Developer Collaboration Platform",
      category: "Backend Engineering",
      date: "February, 2025",
      description:
        "A robust RESTful API for developer collaboration platforms, featuring real-time code synchronization, version control integration, and secure authentication.",
      technologies: ["Node.js", "Express", "MongoDB"],
      techColors: ["text-green-400", "text-white", "text-yellow-400"],
      icon: "fas fa-code-branch",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAg1QCY1Gots5dqak2jZ7ZXy5rlREwAFZve6fTkfU8kVrVXh16QhjCGLrySejAv5ohQdtxU6aHk7y9IYlp03Q23R5gQVgxcDBrlDzdJWRhN3A8StQg_uHV4e_cjL_3WqG37hVeks_wArSjU-MpOqN1fnB9-NeGdNHFYC3RSY7h7yGk4P_JwF84vzCz_kS_iW_YY39QXOmptcZPwu_3Zw9_w4yllRZf_5392o9TzdoGjgOAhGqi49NVZGdAJpz-EcSWNV0NWyRDqa7c",
    },
    {
      title: "Neural Image Gen",
      subtitle: "Style Transfer Application",
      category: "Artificial Intelligence",
      date: "January, 2025",
      description:
        "An AI-powered application that generates stylistic variations of uploaded images using Generative Adversarial Networks (GANs) and Python.",
      technologies: ["Python", "TensorFlow", "Flask"],
      techColors: ["text-blue-400", "text-orange-400", "text-white"],
      icon: "fas fa-brain",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDn2s1vO4Mwkyub3e251sHI8m_6lbSCj2RkknTYocLo1vVgeVYm9Io3uIqCkiQtd8Qv5UUwjfNVihC-V_rlkCv3grJ-hfsRKI-XACNOuxcdeTpJsxnViCQRGKt-HQDdmVISDxJOVNOCrA5sS_qZ8_eOO6bIYmxLx5ovYQsZFkMn_Y82EOZHnVFKbDxG0Ui3SFXvFmqwGpFEBP1eE2dhkwtuk8Q2SzYNffX2JloAtdNvqj7PoU_dPeFRT37MnHStUk65qyLjZb7iI0k",
    },
  ];

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
          {projects.map((project, index) => (
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
              className="group relative bg-surface-dark border border-gray-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-200 ease-out"
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

              <div className="p-8 relative -mt-12">
                <div className="bg-gray-900/90 backdrop-blur border border-gray-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                  <i className={`${project.icon} text-white text-xl`}></i>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-xs font-medium text-gray-500">
                    <i className="far fa-calendar-alt mr-1"></i> {project.date}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm font-medium text-gray-300 mb-3">
                  {project.subtitle}
                </p>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs font-medium ${
                        project.techColors[techIndex]
                      } bg-${
                        project.techColors[techIndex].split("-")[1]
                      }-400/10 border border-${
                        project.techColors[techIndex].split("-")[1]
                      }-400/20 rounded-full`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  className="inline-flex items-center text-white font-bold text-sm tracking-wide uppercase hover:text-primary transition-colors"
                  href="#"
                >
                  View Details
                  <i className="fas fa-arrow-right ml-2 text-primary"></i>
                </a>
              </div>
            </motion.div>
          ))}
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
