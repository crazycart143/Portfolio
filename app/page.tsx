"use client";

import { Inter } from "next/font/google";
import Hero from "./components/Hero";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <section className="flex relative h-[820px]">
        <Hero />
      </section>
      <section className="w-full h-[100vh] bg-red-500">asd</section>
    </main>
  );
}
