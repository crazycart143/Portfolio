"use client";

import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import TechStackDetails from "./components/TechStackDetails";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <section
        id="hero"
        className="flex justify-center items-start relative w-full h-[660px] lg:h-[700px] lg:overflow-hidden xl:overflow-visible "
      >
        <Hero />
      </section>
      <section
        id="aboutMe"
        className="flex justify-center items-start w-full xs:h-full sm:h-[1000px] lg:h-[800px] bg-[#F2F2F4]"
      >
        <AboutMe />
      </section>
      <section
        id="skills"
        className="flex items-start justify-center w-full h-full bg-black"
      >
        <Services />
      </section>
      <section className="w-full h-[800px] bg-techstack bg-cover bg-center bg-no-repeat"></section>
      <section className=" w-full h-[550px] bg-[#F2F2F4] relative">
        <TechStack />
      </section>
      <section>
        <TechStackDetails />
      </section>
      <section
        id="projects"
        className="flex items-start justify-center w-full h-full bg-black "
      >
        <Projects />
      </section>
      <section id="contact" className="w-full h-full md:h-[800px] bg-[#F2F2F4]">
        <Contact />
      </section>
    </main>
  );
}
