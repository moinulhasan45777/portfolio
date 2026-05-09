"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Import achievement images
import appshowcaseImg from "@/assets/achievements/appshowcase.jpg";
import mvpImg from "@/assets/achievements/mvp.jpg";
import iesf2022Img from "@/assets/achievements/Iesf2022.jpg";
import aiubCyberGamesImg from "@/assets/achievements/aiubcybergames.jpg";
import highestPointsImg from "@/assets/achievements/highestpoints.jpg";
import qualifier2022Img from "@/assets/achievements/2022NationalQualifier.jpg";
import qualifier2023Img from "@/assets/achievements/2023NationalQualifier.jpg";
import qualifier2025Img from "@/assets/achievements/2025NationalQualifier.jpg";
import d1ChampImg from "@/assets/achievements/d1champ.jpg";
import yunetChampionImg from "@/assets/achievements/yunetchampion.jpg";
import yunetMvpImg from "@/assets/achievements/yunetmvp.jpg";

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

export default function AllAchievements() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reset scroll position to top when component mounts
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await fetch("/achievements.json");
        const data = await response.json();
        setAchievements(data);
      } catch (error) {
        console.error("Error fetching achievements:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  // Helper function to get the correct image based on banner name
  const getAchievementImage = (bannerName: string) => {
    const imageMap: { [key: string]: typeof appshowcaseImg } = {
      "appshowcase.jpg": appshowcaseImg,
      "mvp.jpg": mvpImg,
      "iesf2022.jpg": iesf2022Img,
      "aiubcybergames.jpg": aiubCyberGamesImg,
      "highestpoints.jpg": highestPointsImg,
      "2022NationalQualifier.jpg": qualifier2022Img,
      "2023NationalQualifier.jpg": qualifier2023Img,
      "2025NationalQualifier.jpg": qualifier2025Img,
      "d1champ.jpg": d1ChampImg,
      "yunetchampion.jpg": yunetChampionImg,
      "yunetmvp.jpg": yunetMvpImg,
    };
    return imageMap[bannerName] || appshowcaseImg;
  };

  // Helper function to format date to short format
  const formatDate = (dateString: string): string => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const parts = dateString.split(" ");
    if (parts.length === 2) {
      const month = parts[0];
      const year = parts[1];
      const monthIndex = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ].indexOf(month);

      if (monthIndex !== -1) {
        return `${months[monthIndex]} ${year}`;
      }
    }
    return dateString;
  };

  // Helper function to truncate description
  const truncateDescription = (
    text: string,
    maxLength: number = 150,
  ): string => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background-dark flex items-center justify-center">
        <div className="text-white text-lg">Loading achievements...</div>
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
              All Achievements
            </span>
            <span className="h-px w-8 bg-primary"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-display leading-tight mb-4">
            My <span className="text-primary">Journey</span> of{" "}
            <span className="text-gray-600">Excellence</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            A comprehensive collection of milestones, awards, and recognitions
            that represent moments where passion, discipline, and continuous
            learning came together to create meaningful impact.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link
              href="/#achievements"
              className="inline-flex items-center px-6 py-3 border border-gray-700 text-white font-bold transition-all duration-300 rounded hover:border-primary hover:text-primary"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Home
            </Link>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <i className="fas fa-trophy text-primary"></i>
              <span className="font-bold">{achievements.length}</span>{" "}
              Achievements
            </div>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {achievements.map((achievement, index) => {
            const achievementSlug = achievement.title
              .toLowerCase()
              .replace(/[():\s]+/g, "-")
              .replace(/-+/g, "-")
              .replace(/^-|-$/g, "");

            return (
              <Link key={index} href={`/achievements/${achievementSlug}`}>
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
                  className="relative group h-[580px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-200 ease-out hover:border-primary/50 flex flex-col bg-background-dark cursor-pointer"
                >
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <Image
                      alt={achievement.title}
                      src={getAchievementImage(achievement.banner)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 -translate-y-16"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-transparent group-hover:via-black/90 transition-colors duration-200"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                    <h4 className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                      {achievement.subtitle}
                    </h4>
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-primary transition-colors duration-200">
                      {achievement.title}
                    </h3>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                        {achievement.team}
                      </span>
                      <span className="text-[11px] text-white/40 font-bold uppercase tracking-[0.25em]">
                        {formatDate(achievement.date)}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-8">
                      {truncateDescription(achievement.description)}
                    </p>
                    <div className="pt-4 border-t border-white/5">
                      <span className="text-primary font-bold text-sm tracking-wide uppercase group-hover:text-white transition-colors">
                        VIEW DETAILS
                        <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                      </span>
                    </div>
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
              Every achievement is a stepping stone, not a destination. The real
              victory lies in the growth, resilience, and lessons learned along
              the way.
            </p>
            <div className="flex items-center justify-center gap-6 mt-8">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold transition-all duration-300 rounded shadow-[0_0_15px_rgba(255,87,51,0.3)] hover:shadow-[0_0_25px_rgba(255,87,51,0.6)] hover:scale-105 uppercase tracking-wide text-sm"
              >
                Get In Touch
                <i className="fas fa-paper-plane ml-2"></i>
              </Link>
              <Link
                href="/#projects"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-700 text-white font-bold transition-all duration-300 rounded hover:border-primary hover:text-primary uppercase tracking-wide text-sm"
              >
                View Projects
                <i className="fas fa-code ml-2"></i>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
