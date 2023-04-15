"use client";

import { useGLTF, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col h-full top-0 lg:top-[140px] lg:absolute justify-start items-center text-center lg:justify-start lg:items-start z-10 text-[#F2F2F4] px-[50px] lg:px-[150px] py-[120px] lg:py-[50px]">
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
          I'm Keanu John
        </motion.h1>
        <motion.p
          variants={fadeIn("right", "tween", 1.5, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: "true", amount: 0.25 }}
        >
          a <span className="font-bold">full-stack web developer</span>
        </motion.p>
        <motion.button
          variants={fadeIn("right", "tween", 2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: "true", amount: 0.25 }}
          className="cursor-pointer rounded-xl mt-[30px] py-3 px-4 font-semibold bg-[#F2F2F4] text-black"
        >
          View my projects
        </motion.button>
      </div>
      <motion.div
        variants={fadeIn("left", "tween", 2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "true", amount: 0.25 }}
        className="hidden lg:block h-[300px] w-[300px] absolute lg:h-[500px] lg:w-[500px] bottom-[150px] right-0  lg:right-[150px] rounded-full border-2 border-white z-10 shadow-xl shadow-gray-100"
      ></motion.div>
      <motion.img
        variants={fadeIn("left", "tween", 2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "true", amount: 0.25 }}
        src="/profile-image.png"
        alt="profile image"
        className="w-[700px] absolute right-[50px] z-50 hidden lg:block"
      />
      <motion.h1
        variants={fadeIn("down", "tween", 2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.25 }}
        className="absolute bottom-[80px] text-white right-[38%] lg:right-[45%] font-bold text-xl"
      >
        Scroll Down
      </motion.h1>
      <motion.div
        className="rounded-full w-12 h-32 border-2 border-white absolute flex justify-center items-center -bottom-[60px] right-[45%] lg:right-[47.5%]"
        variants={fadeIn("right", "tween", 2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.25 }}
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
