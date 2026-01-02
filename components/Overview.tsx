"use client";
import Link from "next/link";
import AnimatedContent from "./AnimatedContent";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Overview() {
  return (
    <AnimatedContent duration={2} distance={50} className="relative z-20 mb-20">
      <section className="bg-[#1B1B1B]/20  max-w-full p-20">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-medium mb-2  text-white">
            Things I&apos;ve been exploring
          </h2>
          <Link
            className="text-xs text-white/50 flex items-center gap-0.5 underline hover:text-white/80 hover:no-underline"
            href=""
          >
            <span>More about me</span>
            <MdKeyboardArrowRight className="text-sm" />
          </Link>
        </div>
        <p className="mb-5 text-base font-light text-white/60 max-w-2xl">
          I&apos;m enthusiastic in creating clean, reusable & maintainable code.
          Expert in full stack web application development with intuitive UIs
          and meaningful UX.
        </p>
        <div className=" grid grid-cols-2 gap-3">
          <AnimatedContent
            duration={2}
            distance={50}
            className="border border-white/40 p-7"
          >
            <h3 className="text-2xl font-normal mb-2">
              Full Stack Development
            </h3>
            <p className="text-base text-white/50 font-light  mb-4">
              Expertise in building end-to-end web applicaions.
            </p>
            <div className=" border-l border-l-white/20 ml-2 pl-4 text-base text-white/50 font-light">
              <p className="mb-3">1+ year of hands on experience.</p>
              <p className="mb-3">15+ projects in hand.</p>
              <p className="mb-3">Building end-to-end solutions.</p>
              <p className="mb-3">Testing, debugging & deployment.</p>
            </div>
          </AnimatedContent>
          <AnimatedContent
            duration={2}
            distance={90}
            className="border border-white/40 p-7"
          >
            <h3 className="text-2xl font-normal mb-2">Machine Learning</h3>
            <p className="text-base text-white/50 font-light  mb-4">
              Integrating machine learning in prediction related tasks
            </p>
            <div className=" border-l border-l-white/20 ml-2 pl-4 text-base text-white/50 font-light">
              <p className="mb-3">Application of Tree based models.</p>
              <p className="mb-3">
                Computer Vision tasks using Neural Networks.
              </p>
              <p className="mb-3">
                Finding hidden topics using Topic Modeling.
              </p>
            </div>
          </AnimatedContent>
          <AnimatedContent
            duration={2}
            distance={50}
            className="border border-white/40 p-7 col-span-2"
          >
            <h3 className="text-2xl font-normal mb-2">
              Desktop App Development
            </h3>
            <p className="text-base text-white/50 font-light  mb-4">
              Expertise in building desktop applcations using .NET.
            </p>
            <div className=" border-l border-l-white/20 ml-2 pl-4 text-base text-white/50 font-light">
              <p className="mb-3">Integrating MySQL database.</p>
              <p className="mb-3">
                Creating interactive UI using Visual Studio.
              </p>
              <p className="mb-3">Testing, debugging and deployment.</p>
            </div>
          </AnimatedContent>
        </div>
      </section>
    </AnimatedContent>
  );
}
