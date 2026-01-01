"use client";
import Image from "next/image";
import logo from "@/app/assets/logo.png";
import Link from "next/link";
import GlareHover from "./GlareHover";

export default function Navbar() {
  return (
    <nav className="h-20 w-full bg-[#111111] flex items-center justify-between px-10">
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
    </nav>
  );
}
