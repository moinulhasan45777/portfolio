"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

// Import achievement images
import appshowcaseImg from "@/assets/achievements/appshowcase.jpg";
import mvpImg from "@/assets/achievements/mvp.jpg";
import iesf2022Img from "@/assets/achievements/Iesf2022.jpg";

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

export default function Achievements() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);

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
    };
    return imageMap[bannerName] || appshowcaseImg; // fallback to first image
  };

  // Helper function to format date to short format (e.g., "Sep 2023")
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
    maxLength: number = 150
  ): string => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  if (loading) {
    return (
      <section
        className="w-full bg-surface-dark py-20 lg:py-28 relative border-t border-gray-800"
        id="achievements"
      >
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex justify-center items-center">
            <div className="text-white text-lg">Loading achievements...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="w-full bg-surface-dark py-20 lg:py-28 relative border-t border-gray-800"
      id="achievements"
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
              Achievements
            </span>
            <span className="h-px w-8 bg-primary"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-display leading-tight mb-4">
            Key <span className="text-gray-600">Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            All of my notable achievements. These achievements represent moments
            where passion, discipline, and continuous learning came together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {achievements.map((achievement, index) => (
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
              className="relative group h-[580px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-200 ease-out hover:border-primary/50 flex flex-col bg-background-dark"
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
                  <a
                    className="text-primary font-bold text-sm tracking-wide uppercase hover:text-white transition-colors group/link"
                    href="#"
                  >
                    VIEW DETAILS
                    <i className="fas fa-arrow-right ml-2 transform group-hover/link:translate-x-1 transition-transform"></i>
                  </a>
                </div>
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
            href="#"
          >
            View All Achievements
            <i className="fas fa-trophy ml-2 text-lg"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
