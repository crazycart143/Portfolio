"use client";

import { Inter } from "next/font/google";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <section className="flex relative h-[820px]">
        <Hero />
      </section>
      <section className="w-full h-[100vh] bg-[#f2f2f4]">
        <TechStack />
      </section>
    </main>
  );
}
