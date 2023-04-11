import { motion } from "framer-motion";
import { fadeIn, zoomIn, staggerContainer, TypingText } from "@/utils/motion";

export default function AboutMe() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "true", amount: 0.25 }}
      className="flex pt-48 px-28"
    >
      <img src="/about_me.png" alt="about me image" />
      <div className="flex flex-col items-start justify-start w-full text-black gap-y-5">
        <h1 className="text-[18px] font-bold text-black mt-[30px]">
          <TypingText title="| About Me" textStyles="text-start" />
        </h1>
        <div className="flex flex-col gap-y-5">
          <motion.h1
            variants={fadeIn("right", "tween", 1, 2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: "true", amount: 0.25 }}
            className="text-[30px]"
          >
            ASPIRING WEB DEVELOPER
          </motion.h1>
          <motion.p
            variants={fadeIn("right", "tween", 1.25, 2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: "true", amount: 0.25 }}
          >
            I am <span className="font-bold">Keanu John Lariosa</span>, 2nd year
            BSIT student with a{" "}
            <span className="font-bold">strong passion</span> for web
            development and a thirst for{" "}
            <span className="font-bold">continuous learning.</span>
          </motion.p>
          <motion.p
            variants={fadeIn("right", "tween", 1.25, 2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: "true", amount: 0.25 }}
          >
            As a student, I am constantly seeking out opportunities to expand my
            knowledge and hone my skills in web development. My commitment to
            quality and attention to detail ensure that the websites and
            applications I develop are always user-friendly, responsive, and
            visually appealing.
          </motion.p>
          <div className="flex gap-x-5 justify-start items-center">
            <motion.button
              variants={fadeIn("right", "tween", 1.25, 2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: "true", amount: 0.25 }}
              className="w-[30%] border-2 border-black py-2 font-bold hover:text-[#f2f2f4] hover:bg-black hover:border-white"
            >
              DOWNLOAD CV
            </motion.button>
            <motion.div variants={zoomIn(2, 2)} className="flex gap-x-2">
              <a href="">
                <img src="/fb-icon.svg" alt="fb-icon" className="w-[40px]" />
              </a>

              <a href="">
                <img
                  src="/github-icon.svg"
                  alt="github-icon"
                  className="w-[38px]"
                />
              </a>
              <a href="">
                <img
                  src="/tiktok-icon.svg"
                  alt="tiktok-icon"
                  className="w-[38px]"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
