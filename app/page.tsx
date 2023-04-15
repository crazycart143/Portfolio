"use client";

import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Loading from "./components/Loading";
import { AnimatePresence } from "framer-motion";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <main>
      {isLoading ? (
        <div className="flex items-center justify-center w-full h-full text-white bg-center bg-no-repeat bg-cover">
          <Loading />
        </div>
      ) : (
        <>
          <section
            id="hero"
            className="flex relative w-full h-[660px] lg:h-[700px]"
          >
            <Hero />
          </section>
          <section
            id="aboutMe"
            className="w-full h-[1000px] lg:h-[800px] bg-[#F2F2F4]"
          >
            <AboutMe />
          </section>
          <section className="bg-black w-full h-[1200px] lg:h-[1000px]">
            <Services />
          </section>
          <section className="w-full h-[800px] bg-techstack bg-cover bg-center bg-no-repeat"></section>
          <section className="w-full h-[600px] lg:h-[800px] bg-[#F2F2F4] relative">
            <TechStack />
          </section>
          <div className="flex px-[50px] bg-[#f2f2f4] flex-col justify-center items-center gap-y-8 w-full h-[350px]">
            <div className="flex flex-col items-center justify-center text-center text-black">
              <h1 className="font-bold text-[40px]">My Tech Stacks</h1>
              <p className="font-light text-[20px]">
                Technology stacks that I am currently working on.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-2 lg:gap-x-8">
              <img src="/html.png" alt="html" className="w-[54px]" />
              <img src="/css.png" alt="css" className="w-[54px]" />
              <img src="/js.png" alt="js" className="w-[54px]" />
              <img src="/react.png" alt="react" className="w-[68px]" />
              <img src="/nextjs.png" alt="nextjs" className="w-[54px]" />
              <img src="/mongodb.png" alt="mongodb" className="w-[54px]" />
              <img src="/firebase.png" alt="firebase" className="w-[46px]" />
              <img
                src="/typescript.png"
                alt="typescript"
                className="w-[50px]"
              />
              <img src="/github.png" alt="github" className="w-[54px]" />
              <img src="/nodejs.png" alt="github" className="w-[46px]" />
            </div>
          </div>
          <section className="w-full h-[1800px] lg:h-[940px] bg-black ">
            <Projects />
          </section>
          <section className="w-full h-[800px] bg-[#F2F2F4]">
            <Contact />
          </section>
        </>
      )}
    </main>
  );
}
