"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <div
      className={`${
        isLoading ? "hidden" : "flex"
      } h-[600px] lg:h-[500px] bg-black flex-col gap-y-6 justify-start items-center pt-[100px] text-white`}
    >
      <div className="flex items-center justify-center">
        <Image
          width={56}
          height={56}
          src="/icon.png"
          alt="website icon"
          className="w-14"
        />
        <h1 className="text-[16px]">Keanu John Lariosa © 2023</h1>
      </div>
      <h1 className="text-center w-[400px] lg:w-[800px] leading-8">
        EN . This website was developed by Keanu John Lariosa. It cannot and
        should not be reproduced in any forms or by any means without the
        consent from him.
      </h1>
      <h1 className="text-center w-[400px] lg:w-[800px] leading-8">
        FIL . Ang website na ito ay ginawa ni Keanu John Lariosa. Ito ay hindi
        maaari at hindi dapat kopyahin sa anumang banhay o sa anumang paraan
        nang walang pahintulot galing sa kaniya.
      </h1>
      <Link href="https://github.com/crazycart143" passHref>
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="px-2 py-2 border-2 border-white rounded-full h-[70px] mt-[30px] bg-white relative"
        >
          <img
            src="/github-animation.gif"
            alt="github icon animated"
            className="w-12 cursor-pointer"
          />

          {isHovered && (
            <motion.div
              className="px-2 py-2 border-2  rounded-full h-[70px] bg-black absolute -top-[2px] -left-[1.5px] flex justify-center items-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
            >
              <p>Github</p>
            </motion.div>
          )}
        </button>
      </Link>
    </div>
  );
}
