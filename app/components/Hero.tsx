"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="flex w-full max-w-[1400px] flex-col h-full top-0 lg:top-[140px]  lg:absolute justify-start items-center text-center lg:justify-start lg:items-start z-10 text-[#F2F2F4] px-[50px] lg:px-[100px] xl:px-[150px] xs:py-[80px] sm:py-[120px] lg:py-[50px]">
        <motion.p
          variants={fadeIn("right", "tween", 0.5, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: "true", amount: 0.25 }}
        >
          Hello there,
        </motion.p>
        <motion.h1
          variants={fadeIn("right", "tween", 1, 1)}
          initial="hidden"
          whileInView="show"
          className="text-[60px] leading-tight"
          viewport={{ once: "true", amount: 0.25 }}
        >
          I&apos;m Keanu John
        </motion.h1>
        <motion.p
          variants={fadeIn("right", "tween", 1.5, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: "true", amount: 0.25 }}
        >
          a <span className="font-bold">full-stack web developer</span>
        </motion.p>
        <Link href="/projects">
          <motion.button
            variants={fadeIn("right", "tween", 2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: "true", amount: 0.25 }}
            className="cursor-pointer rounded-xl mt-[30px] py-3 px-4 font-semibold bg-[#F2F2F4] text-black"
          >
            View my projects
          </motion.button>
        </Link>
      </div>

      <motion.div
        variants={fadeIn("left", "tween", 2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "true", amount: 0.25 }}
        className="hidden lg:block h-[300px] w-[300px] absolute lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px] bottom-[250px] xl:bottom-[150px] right-0 lg:right-[40px] xl:right-auto ml-[720px] rounded-full border-2 border-white z-10 shadow-xl shadow-gray-100"
      ></motion.div>
      <motion.img
        variants={fadeIn("left", "tween", 2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "true", amount: 0.25 }}
        src="/profile-image.png"
        alt="profile image"
        className="w-[700px] absolute -right-[100px] z-50 hidden lg:block xl:right-auto ml-[720px] pointer-events-none "
      />
      <motion.h1
        variants={fadeIn("down", "tween", 2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "true", amount: 0.25 }}
        className="absolute bottom-[80px] text-white left-[48%] md:left-[50%] -ml-[50px] font-bold text-xl"
      >
        Scroll Down
      </motion.h1>

      <motion.div
        variants={fadeIn("right", "tween", 2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "true", amount: 0.25 }}
        className="rounded-full w-12 h-32 border-2 border-white absolute flex justify-center items-center -bottom-[60px] left-[44%] md:left-[48%] lg:left-[48.5%] xl:left-auto"
      >
        <motion.div
          initial={{ top: 0, opacity: 1 }}
          whileInView={{ top: 90, opacity: 1 }}
          viewport={{ once: "true", amount: 0.25 }}
          transition={{ duration: 2, repeat: Infinity }}
          animate={{
            backgroundColor: ["hsl(0, 0, 100)", "hsl(255, 0, 0)"],
          }}
          className="rounded-full w-[20px] h-[20px] bg-white absolute "
        ></motion.div>
      </motion.div>
    </>
  );
}
