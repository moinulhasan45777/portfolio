"use client";
import Link from "next/link";
import AnimatedContent from "./AnimatedContent";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function MyAchievements() {
  return (
    <AnimatedContent duration={2} distance={50} className="relative z-20 mb-20">
      <section className="bg-[#1B1B1B]/20  max-w-full p-20">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-medium mb-2  text-white">
            My Achievements
          </h2>
          <Link
            className="text-xs text-white/50 flex items-center gap-0.5 underline hover:text-white/80 group hover:gap-1"
            href=""
          >
            <span>All Achievements</span>
            <MdKeyboardArrowRight className="text-sm group-hover:-mr-0.5" />
          </Link>
        </div>
      </section>
    </AnimatedContent>
  );
}
