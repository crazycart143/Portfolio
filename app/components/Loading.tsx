import { staggerContainer, TypingText } from "@/utils/motion";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className="flex items-center justify-center w-full h-full"
    >
      <div className="border-4 border-[#F2F2F4] rounded-xl w-[100px] pr-1 flex justify-center items-center">
        <h1 className="text-[60px] font-bold text-[#F2F2F4] tracking-tighter">
          <TypingText title="Ke" textStyles="text-center" />
        </h1>
      </div>
    </motion.div>
  );
}
