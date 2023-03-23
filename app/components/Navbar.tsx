"use client";

import { navVariants } from "@/utils/motion";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="py-4 px-16 grid grid-cols-3"
    >
      <div>
        <h1 className="text-[30px] font-bold text-[#F2F2F4] tracking-tighter">
          Keanu
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
