"use client";

import { navVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [viewport, setViewport] = useState(0);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setViewport(window.pageYOffset);
    }, 1000);
  }, [viewport]);

  console.log(viewport);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="fixed top-0 z-10 grid grid-cols-3 px-16 py-6"
    >
      <div className="border-4 border-[#F2F2F4] rounded-xl w-10 px-6 flex justify-center items-center">
        <h1 className="text-[30px] font-bold text-[#F2F2F4] tracking-tighter">
          Ke
        </h1>
      </div>
      <div className="flex justify-center items-center gap-x-20 text-lg text-[#F2F2F4]">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Skills</a>
        <a href="">Contact</a>
      </div>
      <div className="flex justify-end items-center text-[#F2F2F4]">
        <button className="py-2 px-6 bg-[#F2F2F4] text-black rounded-lg font-bold">
          Github
        </button>
      </div>
    </motion.nav>
  );
}
