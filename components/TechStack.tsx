"use client";
import AnimatedContent from "./AnimatedContent";
import { GoDotFill } from "react-icons/go";
import js from "@/assets/Tech Icons/js.png";
import cpp from "@/assets/Tech Icons/c-.png";
import csharp from "@/assets/Tech Icons/c-sharp.png";
import java from "@/assets/Tech Icons/java.png";
import python from "@/assets/Tech Icons/python.png";
import ts from "@/assets/Tech Icons/typescript.png";
import next from "@/assets/Tech Icons/Next.js.png";
import react from "@/assets/Tech Icons/React (1).png";
import html from "@/assets/Tech Icons/HTML5.png";
import css from "@/assets/Tech Icons/CSS3.png";
import tailwind from "@/assets/Tech Icons/tailwind.png";
import mui from "@/assets/Tech Icons/Material UI.png";
import axios from "@/assets/Tech Icons/Azios.png";
import tanstack from "@/assets/Tech Icons/tanstack.png";
import node from "@/assets/Tech Icons/Node.js.png";
import express from "@/assets/Tech Icons/Express.png";
import mongo from "@/assets/Tech Icons/MongoDB.png";
import mongoose from "@/assets/Tech Icons/Mongoose.js.png";
import mysql from "@/assets/Tech Icons/MySQL.png";
import jwt from "@/assets/Tech Icons/Jwt.png";
import stripe from "@/assets/Tech Icons/stripe.png";
import firebase from "@/assets/Tech Icons/Firebase.png";
import clerk from "@/assets/Tech Icons/clerk.png";

import Image from "next/image";

export default function TechStack() {
  return (
    <AnimatedContent duration={2} distance={50} className="relative z-20 mb-20">
      <section className="bg-[#1B1B1B]/20  max-w-full p-20">
        <h2 className="text-5xl font-medium mb-10 text-white">
          Technical Expertise
        </h2>
        <div className="pl-10">
          {/* Languages */}
          <div>
            <div className="flex items-center gap-3 mb-7">
              <GoDotFill className="h-3.5 w-3.5" opacity={0.8} />
              <span className="text-xl font-normal opacity-80">Languages</span>
            </div>
            <div className="pl-20 flex items-center mb-15 text-[#D5D5D5]">
              <div className="flex flex-col items-center gap-2 w-22">
                <Image
                  src={ts}
                  alt="JavaScript Icon"
                  className="w-10 h-10"
                ></Image>
                <span className="text-xs font-light">TypeScript</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-22">
                <Image
                  src={js}
                  alt="JavaScript Icon"
                  className="w-10 h-10"
                ></Image>
                <span className="text-xs font-light">JavaScript</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-22">
                <Image
                  src={csharp}
                  alt="JavaScript Icon"
                  className="w-10 h-10"
                ></Image>
                <span className="text-xs font-light">C#</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-22">
                <Image
                  src={cpp}
                  alt="JavaScript Icon"
                  className="w-10 h-10"
                ></Image>
                <span className="text-xs font-light">C++</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-22">
                <Image
                  src={java}
                  alt="JavaScript Icon"
                  className="w-10 h-10"
                ></Image>
                <span className="text-xs font-light">Java</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-22">
                <Image
                  src={python}
                  alt="JavaScript Icon"
                  className="w-10 h-10"
                ></Image>
                <span className="text-xs font-light">Python</span>
              </div>
            </div>
          </div>

          {/* Frontend */}
          <AnimatedContent duration={2} distance={50}>
            <div className="flex items-center gap-3 mb-7">
              <GoDotFill className="h-3.5 w-3.5" opacity={0.8} />
              <span className="text-xl font-normal opacity-80">
                Frontend Development
              </span>
            </div>
            <div className="pl-20 flex items-center mb-15 text-[#D5D5D5]">
              <div className="flex flex-col items-center gap-2 w-22">
                <Image
                  src={next}
                  alt="JavaScript Icon"
                  className="w-10 h-10"
                ></Image>
                <span className="text-xs font-light">Next.js</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-22">
                <Image
                  src={react}
                  alt="JavaScript Icon"
                  className="w-10 h-10"
                ></Image>
                <span className="text-xs font-light">React</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-22">
                <Image
                  src={html}
                  alt="JavaScript Icon"
                  className="w-10 h-10"
                ></Image>
                <span className="text-xs font-light">HTML5</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-22">
                <Image
                  src={css}
                  alt="JavaScript Icon"
                  className="w-10 h-10"
                ></Image>
                <span className="text-xs font-light">CSS3</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-22">
                <Image
                  src={tailwind}
                  alt="JavaScript Icon"
                  className="w-10 h-10"
                ></Image>
                <span className="text-xs font-light">Tailwind</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-22">
                <Image
                  src={mui}
                  alt="JavaScript Icon"
                  className="w-10 h-10"
                ></Image>
                <span className="text-xs font-light">Material UI</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-22">
                <Image
                  src={axios}
                  alt="JavaScript Icon"
                  className="w-10 h-10"
                ></Image>
                <span className="text-xs font-light">Axios</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-22">
                <Image
                  src={tanstack}
                  alt="JavaScript Icon"
                  className="w-10 h-10"
                ></Image>
                <span className="text-xs font-light">TanStack Query</span>
              </div>
            </div>
          </AnimatedContent>

          {/* Backend */}
          <AnimatedContent duration={2} distance={50}>
            <div className="flex items-center gap-3 mb-7">
              <GoDotFill className="h-3.5 w-3.5" opacity={0.8} />
              <span className="text-xl font-normal opacity-80">
                Backend Development
              </span>
            </div>
            <div className="pl-20 flex items-center text-[#D5D5D5]">
              <div className="flex flex-col items-center gap-2 w-22">
                <Image
                  src={node}
                  alt="JavaScript Icon"
                  className="w-10 h-10"
                ></Image>
                <span className="text-xs font-light">Node.js</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-22">
                <Image
                  src={express}
                  alt="JavaScript Icon"
                  className="w-10 h-10"
                ></Image>
                <span className="text-xs font-light">Express.js</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-22">
                <Image
                  src={mongo}
                  alt="JavaScript Icon"
                  className="w-10 h-10"
                ></Image>
                <span className="text-xs font-light">MongoDB</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-22">
                <Image
                  src={mongoose}
                  alt="JavaScript Icon"
                  className="w-10 h-10"
                ></Image>
                <span className="text-xs font-light">Mongoose</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-22">
                <Image
                  src={mysql}
                  alt="JavaScript Icon"
                  className="w-10 h-10"
                ></Image>
                <span className="text-xs font-light">MySQL</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-22">
                <Image
                  src={jwt}
                  alt="JavaScript Icon"
                  className="w-10 h-10"
                ></Image>
                <span className="text-xs font-light">JWT</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-22">
                <Image
                  src={stripe}
                  alt="JavaScript Icon"
                  className="w-10 h-10"
                ></Image>
                <span className="text-xs font-light">Stripe</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-22">
                <Image
                  src={firebase}
                  alt="JavaScript Icon"
                  className="w-10 h-10"
                ></Image>
                <span className="text-xs font-light">Firebase</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-22">
                <Image
                  src={clerk}
                  alt="JavaScript Icon"
                  className="w-10 h-10"
                ></Image>
                <span className="text-xs font-light">Clerk</span>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>
    </AnimatedContent>
  );
}
