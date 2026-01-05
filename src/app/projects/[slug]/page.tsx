"use client";

import { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  subTitle: string;
  image: string;
  category: string;
  date: string;
  projectDescription: string;
  keyFeatureTitles: string[];
  keyFeatureDescription: string[];
  challengesFacedTitle: string[];
  challengesFacedDescription: string[];
  improvements: string[];
  frontEnd: string[];
  backEnd: string[];
  databaseDeploy: string[];
  live: string;
  github: string;
}

interface ProjectDetailsProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectDetails({ params }: ProjectDetailsProps) {
  const { slug } = use(params);
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        console.log("Fetching projects for slug:", slug);
        const response = await fetch("/projects.json");

        if (!response.ok) {
          throw new Error(`Failed to fetch projects: ${response.status}`);
        }

        const projects: Project[] = await response.json();

        // Find project by converting title to slug format
        const foundProject = projects.find((p) => {
          const projectSlug = p.title.toLowerCase().replace(/\s+/g, "-");
          return projectSlug === slug;
        });

        if (!foundProject) {
          setError("Project not found");
          return;
        }

        setProject(foundProject);
      } catch (error) {
        console.error("Error fetching project:", error);
        setError("Failed to load project");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  // Helper function to get technology colors
  const getTechColor = (tech: string): string => {
    const colorMap: { [key: string]: string } = {
      JavaScript: "text-yellow-300 bg-yellow-500/10 border-yellow-500/20",
      "React.js": "text-blue-300 bg-blue-500/10 border-blue-500/20",
      "Next.js": "text-white bg-black/30 border-white/20",
      "Node.js": "text-green-300 bg-green-500/10 border-green-500/20",
      "Express.js": "text-gray-300 bg-gray-500/10 border-gray-500/20",
      MongoDB: "text-green-400 bg-green-600/10 border-green-600/20",
      Firebase: "text-orange-300 bg-orange-500/10 border-orange-500/20",
      JWT: "text-yellow-300 bg-yellow-500/10 border-yellow-500/20",
      "Tailwind CSS": "text-teal-300 bg-teal-500/10 border-teal-500/20",
      "TanStack Query": "text-red-300 bg-red-500/10 border-red-500/20",
      "Swiper Slider": "text-blue-300 bg-blue-500/10 border-blue-500/20",
      Vercel: "text-white bg-black/30 border-white/20",
    };
    return colorMap[tech] || "text-gray-300 bg-gray-500/10 border-gray-500/20";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background-dark flex items-center justify-center">
        <div className="text-white text-lg">Loading project details...</div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-background-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-4 text-white">
            Project Not Found
          </h2>
          <p className="text-gray-400 mb-8">
            The project you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Link
            href="/#projects"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-bold rounded hover:bg-primary/90 transition-colors"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-dark text-white">
      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 py-8 pb-24 mt-20">
        {/* Hero Image */}
        <div className="w-full max-w-4xl mx-auto relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl mb-12">
          <div className="aspect-video w-full relative">
            <Image
              alt={`${project.title} Full Preview`}
              className="w-full h-full object-cover"
              src={project.image}
              width={800}
              height={450}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Header */}
            <header className="mb-10">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                  {project.category}
                </span>
                <span className="text-gray-500 text-sm font-medium">
                  <i className="far fa-calendar-alt mr-2"></i>
                  {project.date}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display leading-tight mb-4">
                {project.title}
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-400 font-light border-l-4 border-primary pl-4">
                {project.subTitle}
              </h2>
            </header>

            {/* Content Sections */}
            <div className="prose prose-lg prose-invert max-w-none text-gray-400 space-y-12">
              {/* Project Overview */}
              <section>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <i className="fas fa-info-circle text-primary text-lg"></i>
                  Project Overview
                </h3>
                <p>{project.projectDescription}</p>
              </section>

              {/* Key Features */}
              <section>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <i className="fas fa-star text-primary text-lg"></i>
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.keyFeatureTitles.map((title, index) => (
                    <div
                      key={index}
                      className="bg-surface-dark p-6 rounded-xl border border-gray-800 hover:border-primary/30 transition-colors"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                        <i className="fas fa-check"></i>
                      </div>
                      <h4 className="text-white font-bold mb-2">{title}</h4>
                      <p className="text-sm">
                        {project.keyFeatureDescription[index]}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Challenges Faced */}
              <section>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <i className="fas fa-mountain text-primary text-lg"></i>
                  Challenges Faced
                </h3>
                <div className="space-y-4">
                  {project.challengesFacedTitle.map((title, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-gray-700 pl-6 py-1"
                    >
                      <h4 className="text-white font-bold text-lg mb-1">
                        {title}
                      </h4>
                      <p className="text-sm">
                        {project.challengesFacedDescription[index]}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Improvements & Future Plans */}
              <section>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <i className="fas fa-rocket text-primary text-lg"></i>
                  Improvements &amp; Future Plans
                </h3>
                <ul className="list-disc list-outside ml-5 space-y-2">
                  {project.improvements.map((improvement, index) => (
                    <li key={index}>{improvement}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-surface-dark p-8 rounded-2xl border border-gray-800 sticky top-28">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="w-1.5 h-6 bg-primary mr-3 rounded-full"></span>
                Tech Stack
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs uppercase text-gray-500 font-bold tracking-wider mb-3">
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.frontEnd.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1.5 text-xs font-medium border rounded ${getTechColor(
                          tech
                        )}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs uppercase text-gray-500 font-bold tracking-wider mb-3">
                    Backend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.backEnd.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1.5 text-xs font-medium border rounded ${getTechColor(
                          tech
                        )}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs uppercase text-gray-500 font-bold tracking-wider mb-3">
                    Database &amp; Deploy
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.databaseDeploy.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1.5 text-xs font-medium border rounded ${getTechColor(
                          tech
                        )}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-700 my-8"></div>
              <div className="space-y-4">
                <a
                  className="flex items-center justify-center w-full px-6 py-4 bg-primary text-white font-bold rounded shadow-[0_0_15px_rgba(255,87,51,0.3)] hover:shadow-[0_0_25px_rgba(255,87,51,0.6)] hover:scale-[1.02] transition-all duration-300 uppercase tracking-wide text-sm"
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live Demo{" "}
                  <i className="fas fa-external-link-alt ml-2"></i>
                </a>
                <a
                  className="flex items-center justify-center w-full px-6 py-4 bg-transparent border-2 border-gray-700 text-white font-bold rounded hover:border-primary hover:text-primary hover:bg-surface-dark transition-all duration-300 uppercase tracking-wide text-sm"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository <i className="fab fa-github ml-2"></i>
                </a>
                <button
                  className="flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-primary to-orange-600 text-white font-bold rounded shadow-[0_0_15px_rgba(255,87,51,0.3)] hover:shadow-[0_0_25px_rgba(255,87,51,0.6)] hover:scale-[1.02] transition-all duration-300 uppercase tracking-wide text-sm"
                  onClick={() => {
                    // Use replace to avoid adding to browser history
                    window.location.replace("/#contact");
                  }}
                >
                  Get In Touch <i className="fas fa-envelope ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
