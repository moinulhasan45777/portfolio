"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: string;
  customIcon?: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      icon: "fas fa-code",
      skills: [
        {
          name: "TypeScript",
          icon: "fab fa-js-square text-blue-500",
          customIcon: "TS",
        },
        { name: "JavaScript", icon: "fab fa-js text-yellow-400" },
        { name: "C#", icon: "fas fa-code text-purple-500" },
        { name: "Python", icon: "fab fa-python text-blue-400" },
        { name: "Java", icon: "fab fa-java text-red-500" },
        { name: "C++", icon: "fas fa-file-code text-blue-500" },
      ],
    },
    {
      title: "Frontend",
      icon: "fas fa-laptop-code",
      skills: [
        { name: "Next.js", icon: "fas fa-n text-white" },
        { name: "React", icon: "fab fa-react text-blue-400" },
        { name: "HTML5", icon: "fab fa-html5 text-orange-500" },
        { name: "CSS3", icon: "fab fa-css3-alt text-blue-500" },
        { name: "Tailwind CSS", icon: "fas fa-wind text-teal-400" },
        { name: "TanStack Query", icon: "fas fa-database text-red-400" },
      ],
    },
    {
      title: "Backend & Data",
      icon: "fas fa-server",
      skills: [
        { name: "Node.js", icon: "fab fa-node text-green-500" },
        { name: "Express.js", icon: "fas fa-exchange-alt text-gray-400" },
        { name: "JWT", icon: "fas fa-key text-yellow-500" },
        { name: "PHP", icon: "fab fa-php text-purple-400" },
        { name: "MongoDB", icon: "fas fa-leaf text-green-400" },
        { name: "Mongoose", icon: "fas fa-paw text-red-500" },
        { name: "MySQL", icon: "fas fa-database text-blue-500" },
        { name: "Firebase", icon: "fas fa-fire text-yellow-500" },
        { name: "Clerk", icon: "fas fa-user-lock text-purple-500" },
      ],
    },
    {
      title: "Tools & Workflow",
      icon: "fas fa-wrench",
      skills: [
        { name: "Git", icon: "fab fa-git-alt text-red-500" },
        { name: "GitHub", icon: "fab fa-github text-white" },
        { name: "VSCode", icon: "fas fa-code text-blue-400" },
        { name: "ESLint", icon: "fab fa-js text-purple-400" },
        { name: "Postman", icon: "fas fa-paper-plane text-orange-500" },
        { name: "Vercel", icon: "fas fa-server text-white" },
      ],
    },
  ];

  return (
    <section
      className="w-full py-20 lg:py-28 relative bg-background-dark"
      id="expertise"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:w-1/3 flex flex-col items-start text-left mb-8 lg:mb-0 lg:sticky lg:top-24 h-fit"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-0.5 w-12 bg-primary"></span>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">
                Skills
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display leading-tight mb-6">
              Technical <br />
              <span className="text-gray-600">Expertise</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              A comprehensive toolkit I leverage to architect scalable solutions
              and seamless digital experiences. From high-level architecture to
              low-level optimization.
            </p>
            <a
              className="group inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors text-sm uppercase tracking-wider"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const targetElement = document.querySelector("#projects");
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
              View My Projects
              <i className="fas fa-arrow-down transform group-hover:translate-y-1 transition-transform"></i>
            </a>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
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
                className="bg-surface-dark p-8 rounded-2xl border border-gray-800 hover:border-primary/40 transition-all duration-200 ease-out group"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-3">
                    <span className="w-2 h-8 bg-primary rounded-sm"></span>
                    {category.title}
                  </h3>
                  <i
                    className={`${category.icon} text-gray-700 text-2xl group-hover:text-primary transition-colors`}
                  />
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-2 bg-background-dark px-4 py-2 rounded border border-gray-800 text-gray-300 hover:text-white hover:border-primary/50 transition-colors cursor-pointer"
                    >
                      {skill.customIcon ? (
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-blue-500"
                          >
                            <rect
                              width="24"
                              height="24"
                              rx="4"
                              fill="currentColor"
                            />
                            <text
                              x="12"
                              y="16"
                              textAnchor="middle"
                              className="fill-white text-xs font-bold"
                              style={{ fontSize: "10px" }}
                            >
                              TS
                            </text>
                          </svg>
                        </div>
                      ) : (
                        <i className={skill.icon} />
                      )}
                      {skill.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
