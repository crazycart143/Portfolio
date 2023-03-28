"use client";

import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Loading from "./components/Loading";
import { AnimatePresence } from "framer-motion";
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
        <div className="flex items-center justify-center w-full h-screen text-white bg-cover bg-no-repeat bg-center">
          <Loading />
        </div>
      ) : (
        <>
          <section id="hero" className="flex relative w-full h-[800px]">
            <Hero />
          </section>
          <section id="aboutMe" className="w-full h-[800px] bg-[#F2F2F4]">
            <AboutMe />
          </section>
          <section className="bg-black w-full h-[800px]"></section>
          <section className="w-full h-[800px] bg-techstack bg-cover bg-center bg-no-repeat">
            <TechStack />
          </section>
        </>
      )}
    </main>
  );
}
