import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Achievements />
      <Contact />
      <ScrollToTop />
    </>
  );
}
