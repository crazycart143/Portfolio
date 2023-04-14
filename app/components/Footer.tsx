"use client";

import { footerVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.div
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "true", amount: 0.25 }}
      className="h-[500px] bg-black flex flex-col gap-y-6 justify-start items-center pt-[100px] text-white"
    >
      <div className="flex items-center justify-center">
        <img src="/icon.png" alt="website icon" className="w-14" />
        <h1 className="text-[16px]">Keanu John Lariosa © 2023</h1>
      </div>
      <h1 className="text-center w-[800px] leading-8">
        EN . This website was developed by Keanu John Lariosa. It cannot and
        should not be reproduced in any forms or by any means without the
        consent from him.
      </h1>
      <h1 className="text-center w-[800px] leading-8">
        FIL . Ang website na ito ay ginawa ni Keanu John Lariosa. Ito ay hindi
        maaari at hindi dapat kopyahin sa anumang banhay o sa anumang paraan
        nang walang pahintulot galing sa kaniya.
      </h1>
      <Link href="https://github.com/crazycart143" passHref>
        <button className="px-2 py-2 border-2 border-white rounded-full h-[70px] mt-[30px] bg-white">
          <img
            src="/github-animation.gif"
            alt="github icon animated"
            className="w-12 cursor-pointer"
          />
        </button>
      </Link>
    </motion.div>
  );
}
