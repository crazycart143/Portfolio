import { staggerContainer, TypingText } from "@/utils/motion";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className="flex items-center justify-center w-full h-[100vh]"
    >
      <div className="border-4 border-[#F2F2F4] rounded-xl w-[100px] h-[100px] flex justify-center items-center ">
        <h1 className="font-bold text-[#F2F2F4] tracking-tighter text-[50px] ">
          <TypingText title="Ke" textStyles="text-center" />
        </h1>
      </div>
    </motion.div>
  );
}
