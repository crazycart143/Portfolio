"use client";

import { navVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "true", amount: 0.25 }}
      className="z-10 grid grid-cols-2 px-8 py-6 lg:grid-cols-3 lg:px-16"
    >
      <div className="border-4 border-[#F2F2F4] rounded-xl w-10 px-6 flex justify-center items-center">
        <h1 className="text-[30px] font-bold text-[#F2F2F4] tracking-tighter">
          Ke
        </h1>
      </div>
      <div className="hidden lg:flex justify-center items-center gap-x-20 text-lg text-[#F2F2F4]">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Skills</a>
        <a href="">Contact</a>
      </div>
      <div className="hidden lg:flex justify-end items-center text-[#4c4c4d]">
        <button className="py-2 px-6 bg-[#F2F2F4] text-black rounded-lg font-bold">
          Github
        </button>
      </div>
      <div className="flex items-center justify-end">
        <HamburgerMenu />
      </div>
    </motion.nav>
  );
}
