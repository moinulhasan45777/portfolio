"use client";
import Image from "next/image";
import logo from "@/app/assets/logo.png";
import Link from "next/link";
import GlareHover from "./GlareHover";
import AnimatedContent from "./AnimatedContent";

export default function Navbar() {
  return (
    <AnimatedContent reverse duration={2} className="relative z-20">
      <nav className=" fixed top-0  w-full bg-[#111111] px-10 z-20">
        <div className="h-20 max-w-7xl flex items-center justify-between mx-auto">
          <Image src={logo} alt="Logo" className="w-25"></Image>
          <ul className="flex items-center gap-9 text-sm font-semibold">
            <li className="navlink">
              <Link href="">About</Link>
            </li>
            <li className="navlink">
              <Link href="">Achievements</Link>
            </li>
            <li className="navlink">
              <Link href="">Projects</Link>
            </li>
            <li className="navlink">
              <Link href="">Research</Link>
            </li>
            <li className="navlink">
              <Link href="">Resume</Link>
            </li>
            <li>
              <button>
                <GlareHover
                  className="px-7 py-4 rounded-none text-[#111111]"
                  style={{
                    width: "auto",
                    height: "auto",
                    borderRadius: "0px",
                    backgroundColor: "#ffffff",
                  }}
                  glareColor="#111111"
                  glareOpacity={0.4}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={700}
                  playOnce={false}
                >
                  Get in Touch
                </GlareHover>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </AnimatedContent>
  );
}
