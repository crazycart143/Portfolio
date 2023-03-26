"use client";

import { Inter } from "next/font/google";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <section className="flex relative w-full h-[800px]">
        <Hero />
      </section>
      <section className="w-full h-[800px] bg-[#F2F2F4]"></section>
      <section className="bg-black w-full h-[800px]"></section>
      <section className="w-full h-[800px] bg-techstack bg-cover bg-center bg-no-repeat">
        <TechStack />
      </section>
    </main>
  );
}
