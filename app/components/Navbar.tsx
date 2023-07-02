"use client";

import { navVariants, sideVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import HamburgerMenu from "./HamburgerMenu";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <div className="lg:flex lg:w-full lg:items-center lg:justify-center">
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "true", amount: 0.25 }}
        className="grid z-10 grid-cols-2 px-8 py-6 lg:grid-cols-3 lg:px-16 max-w-[1400px] "
      >
        <Link
          href="/"
          className="border-4 border-[#F2F2F4] rounded-xl w-10 px-6 flex justify-center items-center"
        >
          <h1 className="text-[30px] font-bold text-[#F2F2F4] tracking-tighter">
            Ke
          </h1>
        </Link>
        <div className="hidden lg:flex justify-center items-center gap-x-20 text-lg text-[#F2F2F4]">
          <a href="/">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="hidden lg:flex justify-end items-center text-[#4c4c4d]">
          <Link
            href="https://github.com/crazycart143"
            className="py-2 px-6 bg-[#F2F2F4] text-black rounded-lg font-bold"
          >
            Github
          </Link>
        </div>
        <div className="flex items-center justify-end">
          <HamburgerMenu setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
        <motion.div
          className={`${
            isOpen ? "translate-x-[0%]" : "translate-x-[100%]"
          } w-full block flex-grow bg-black h-[100vh] z-50 fixed top-0 left-0 py-[50px] lg:hidden transition-all`}
          initial="closed"
          animate="open"
          variants={sideVariants}
          transition={{ duration: 5 }}
        >
          <div className="flex items-end justify-end mr-[50px]">
            <HamburgerMenu setIsOpen={setIsOpen} isOpen={isOpen} />
          </div>
          <div className="flex flex-col text-white mt-[50px] w-full">
            <div className="pl-[50px] hover:bg-slate-300 py-4 cursor-pointer">
              <div className="border-4 border-[#F2F2F4] rounded-xl w-2 px-6 py-[4px] flex justify-center items-center">
                <h1 className="text-[24px] font-bold text-[#F2F2F4] tracking-tighter ">
                  Ke
                </h1>
              </div>
            </div>
            <Link
              className="py-[10px] text-[18px] pl-[50px] hover:bg-slate-300"
              href="/"
              onClick={() => setIsOpen(!isOpen)}
            >
              Home
            </Link>
            <a
              className="py-[10px] hover:bg-slate-300 text-[18px] pl-[50px]"
              href="#skills"
              onClick={() => setIsOpen(!isOpen)}
            >
              Skills
            </a>
            <a
              className="py-[10px] hover:bg-slate-300 text-[18px] pl-[50px]"
              href="#projects"
              onClick={() => setIsOpen(!isOpen)}
            >
              Projects
            </a>
            <a
              className="py-[10px] hover:bg-slate-300 text-[18px] pl-[50px]"
              href="#contact"
              onClick={() => setIsOpen(!isOpen)}
            >
              Contact
            </a>
          </div>
        </motion.div>
      </motion.nav>
    </div>
  );
}
