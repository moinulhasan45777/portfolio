"use client";
import dp from "@/assets/portfoliodp.png";
import Image from "next/image";
import AnimatedContent from "./AnimatedContent";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaResearchgate } from "react-icons/fa";

export default function HomeHero() {
  return (
    <AnimatedContent
      duration={2}
      distance={50}
      className="relative z-20 mt-30 mb-20"
    >
      <section className="bg-[#1B1B1B]/20  max-w-full flex items-center justify-between gap-60">
        <div className="ml-20">
          <h1 className="text-6xl text-white font-medium mb-1">Moinul Hasan</h1>
          <h3 className="text-2xl text-white opacity-80 font-light mb-4">
            Full Stack Developer
          </h3>
          <p className="text-base font-light opacity-70 mb-6">
            I&apos;m a Full stack developer from Bangladesh. I specialize in
            creating AI driven end-to-end solutions from system design to
            deployment. I enjoy working across the entire development lifecycle.
            I&apos;m passionate about creating scalable and efficient products
            that solve meaningful problems.
          </p>
          <div className="flex items-center gap-2">
            <Link
              href="https://www.linkedin.com/in/moinulhasan45777/"
              className="flex items-center gap-1 px-2 py-1.5 border-[#E5E4E2] ring-[0.5px] hover:bg-[#343434]  transition-all duration-150 ease-in-out"
            >
              <FaLinkedin className="text-xl" />
              <span className="font-light text-sm">LinkedIn</span>
            </Link>

            <Link
              href="https://github.com/moinulhasan45777"
              className="flex items-center gap-1 px-2 py-1.5 border-[#E5E4E2] ring-[0.5px] hover:bg-[#343434] transition-all duration-150 ease-in-out"
            >
              <FaGithubSquare className="text-xl" />
              <span className="font-light text-sm">GitHub</span>
            </Link>
            <Link
              href="https://www.researchgate.net/profile/Moinul-Hasan-7"
              className="flex items-center gap-1 px-2 py-1.5 border-[#E5E4E2] ring-[0.5px] hover:bg-[#343434]  transition-all duration-150 ease-in-out"
            >
              <FaResearchgate className="text-xl" />
              <span className="font-light text-sm">Research Gate</span>
            </Link>
          </div>
        </div>
        <Image src={dp} alt="Profile Picture" className="w-100 h-100"></Image>
      </section>
    </AnimatedContent>
  );
}
