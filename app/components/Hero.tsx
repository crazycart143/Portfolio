"use client";

import { useGLTF, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col h-full top-[140px] absolute justify-start items-start z-10 text-[#F2F2F4] px-[150px] py-[50px]">
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
          className="text-[60px]"
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
          a <span className="font-bold">front-end web developer</span>
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
        className="absolute h-[500px] w-[500px] bottom-[150px] right-[150px] rounded-full border-2 border-white z-10 shadow-xl shadow-gray-100"
      ></motion.div>
      <motion.img
        variants={fadeIn("left", "tween", 2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "true", amount: 0.25 }}
        src="/profile-image.png"
        alt="profile image"
        className="w-[700px] absolute right-[50px] z-50  "
      />
      <motion.h1
        variants={fadeIn("down", "tween", 2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.25 }}
        className="absolute bottom-[80px] text-white right-[45%] font-bold text-xl"
      >
        Scroll Down
      </motion.h1>
      <motion.div
        className="rounded-full w-12 h-32 border-2 border-white absolute flex justify-center items-center -bottom-[60px] right-[47.5%]"
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
