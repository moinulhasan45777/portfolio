"use client";

import { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";

// Import achievement images
import appshowcaseImg from "@/assets/achievements/appshowcase.jpg";
import appshowcaseExternalImg from "@/assets/achievements/appshowcasingexternal.jpg";
import mvpImg from "@/assets/achievements/mvp.jpg";
import mvpSupportImg from "@/assets/achievements/mvpsupport.jpg";
import iesf2022Img from "@/assets/achievements/Iesf2022.jpg";
import iesf2022SupportImg from "@/assets/achievements/iesf2022support.jpg";

interface Achievement {
  title: string;
  subtitle: string;
  team: string;
  about: string;
  description: string;
  quote: string;
  learning: string[];
  banner: string;
  supportingImage: string;
  category: string;
  date: string;
}

interface AchievementDetailsProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function AchievementDetails({
  params,
}: AchievementDetailsProps) {
  const { slug } = use(params);
  const [achievement, setAchievement] = useState<Achievement | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAchievement = async () => {
      try {
        console.log("Fetching achievements for slug:", slug);
        const response = await fetch("/achievements.json");

        if (!response.ok) {
          throw new Error(`Failed to fetch achievements: ${response.status}`);
        }

        const achievements: Achievement[] = await response.json();

        // Find achievement by converting title to slug format
        const foundAchievement = achievements.find((a) => {
          const achievementSlug = a.title
            .toLowerCase()
            .replace(/[():\s]+/g, "-")
            .replace(/-+/g, "-")
            .replace(/^-|-$/g, "");
          return achievementSlug === slug;
        });

        if (!foundAchievement) {
          setError("Achievement not found");
          return;
        }

        setAchievement(foundAchievement);
      } catch (error) {
        console.error("Error fetching achievement:", error);
        setError("Failed to load achievement");
      } finally {
        setLoading(false);
      }
    };

    fetchAchievement();
  }, [slug]);

  // Helper function to get the correct image based on banner name
  const getAchievementImage = (bannerName: string) => {
    const imageMap: { [key: string]: typeof appshowcaseImg } = {
      "appshowcase.jpg": appshowcaseImg,
      "appshowcasingexternal.jpg": appshowcaseExternalImg,
      "mvp.jpg": mvpImg,
      "mvpsupport.jpg": mvpSupportImg,
      "iesf2022.jpg": iesf2022Img,
      "iesf2022support.jpg": iesf2022SupportImg,
    };
    return imageMap[bannerName] || appshowcaseImg;
  };

  // Helper function to format date
  const formatDate = (dateString: string): string => {
    return dateString;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background-dark flex items-center justify-center">
        <div className="text-white text-lg">Loading achievement details...</div>
      </div>
    );
  }

  if (error || !achievement) {
    return (
      <div className="min-h-screen bg-background-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-4 text-white">
            Achievement Not Found
          </h2>
          <p className="text-gray-400 mb-8">
            The achievement you&apos;re looking for doesn&apos;t exist or has
            been moved.
          </p>
          <Link
            href="/#achievements"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-bold rounded hover:bg-primary/90 transition-colors"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Achievements
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
              alt={`${achievement.title} Banner`}
              className="w-full h-full object-cover"
              src={getAchievementImage(achievement.banner)}
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
                  {achievement.category}
                </span>
                <span className="text-gray-500 text-sm font-medium">
                  <i className="far fa-calendar-alt mr-2"></i>
                  {formatDate(achievement.date)}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display leading-tight mb-4">
                {achievement.title}
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-400 font-light border-l-4 border-primary pl-4">
                {achievement.subtitle}
              </h2>
            </header>

            {/* Content Sections */}
            <div className="prose prose-lg prose-invert max-w-none text-gray-400 space-y-12">
              {/* About the Event */}
              <section>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <i className="fas fa-info-circle text-primary text-lg"></i>
                  About the Event
                </h3>
                <p className="leading-relaxed">{achievement.about}</p>
              </section>

              {/* Achievement Description */}
              <section>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <i className="fas fa-trophy text-primary text-lg"></i>
                  Achievement Details
                </h3>
                <p className="leading-relaxed mb-8">
                  {achievement.description}
                </p>

                {/* Supporting Image */}
                {achievement.supportingImage && (
                  <div className="relative rounded-xl overflow-hidden border border-gray-800 shadow-xl mt-8">
                    <Image
                      alt={`${achievement.title} Supporting Image`}
                      className="w-full h-auto object-cover"
                      src={getAchievementImage(achievement.supportingImage)}
                      width={800}
                      height={450}
                    />
                  </div>
                )}
              </section>

              {/* Quote Section */}
              <section className="relative">
                <div className="bg-surface-dark border-l-4 border-primary p-8 rounded-r-xl relative">
                  <i className="fas fa-quote-left text-primary text-3xl opacity-20 absolute top-4 left-4"></i>
                  <blockquote className="text-xl md:text-2xl text-gray-300 font-light italic leading-relaxed pl-8">
                    {achievement.quote}
                  </blockquote>
                  <i className="fas fa-quote-right text-primary text-3xl opacity-20 absolute bottom-4 right-4"></i>
                </div>
              </section>

              {/* Key Learnings */}
              <section>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <i className="fas fa-lightbulb text-primary text-lg"></i>
                  Key Learnings
                </h3>
                <div className="space-y-4">
                  {achievement.learning.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 bg-surface-dark p-5 rounded-xl border border-gray-800 hover:border-primary/30 transition-colors"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-gray-300 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-surface-dark p-8 rounded-2xl border border-gray-800 sticky top-28">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="w-1.5 h-6 bg-primary mr-3 rounded-full"></span>
                Details
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs uppercase text-gray-500 font-bold tracking-wider mb-2">
                    Team
                  </h4>
                  <p className="text-white font-semibold text-lg">
                    {achievement.team}
                  </p>
                </div>
                <div className="border-t border-gray-700 pt-6">
                  <h4 className="text-xs uppercase text-gray-500 font-bold tracking-wider mb-2">
                    Category
                  </h4>
                  <span className="inline-block px-3 py-1.5 bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider rounded">
                    {achievement.category}
                  </span>
                </div>
                <div className="border-t border-gray-700 pt-6">
                  <h4 className="text-xs uppercase text-gray-500 font-bold tracking-wider mb-2">
                    Date
                  </h4>
                  <p className="text-white font-medium flex items-center gap-2">
                    <i className="far fa-calendar-alt text-primary"></i>
                    {formatDate(achievement.date)}
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-700 my-8"></div>
              <Link
                href="/#achievements"
                className="flex items-center justify-center w-full px-6 py-4 bg-transparent border-2 border-gray-700 text-white font-bold rounded hover:border-primary hover:text-primary hover:bg-surface-dark transition-all duration-300 uppercase tracking-wide text-sm"
              >
                <i className="fas fa-arrow-left mr-2"></i>
                Back to Achievements
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
