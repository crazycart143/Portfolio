"use client";

import { Canvas } from "@react-three/fiber";
import GLTFLoader from "@/utils/gltfLoader";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col h-full top-[140px] justify-start items-start text-[#F2F2F4] p-[150px] absolute">
        <motion.p
          variants={fadeIn("right", "tween", 0.5, 1)}
          initial="hidden"
          whileInView="show"
        >
          Hello there,
        </motion.p>
        <motion.h1
          variants={fadeIn("right", "tween", 1, 1)}
          initial="hidden"
          whileInView="show"
          className="text-[60px]"
        >
          I'm Keanu John
        </motion.h1>
        <motion.p
          variants={fadeIn("right", "tween", 1.5, 1)}
          initial="hidden"
          whileInView="show"
        >
          a <span className="font-bold">front-end web developer</span>
        </motion.p>
        <motion.button
          variants={fadeIn("right", "tween", 2, 1)}
          initial="hidden"
          whileInView="show"
          className="cursor-pointer rounded-xl mt-[30px] py-3 px-4 font-semibold bg-[#F2F2F4] text-black"
        >
          View my projects
        </motion.button>
      </div>
      <Canvas>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
        />
        <ambientLight />
        <spotLight
          castShadow
          intensity={10}
          angle={Math.PI / 10}
          position={[4, 10, 3]}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        {/* <pointLight position={[20, 0, 3]} intensity={3} /> */}
        <GLTFLoader url="Sketchfab_Scene.gltf" scale={0.15} />
        {/* <ambientLight intensity={0.1} /> */}
        {/* <directionalLight color="white" position={[0, 0, 5]} /> */}
        {/* <pointLight position={[10, 10, 10]} /> */}
      </Canvas>
      <h1 className="absolute bottom-[80px] text-white right-[45%] font-bold text-xl">
        Scroll Down
      </h1>
      <div className="rounded-full w-12 h-32 border-2 border-white absolute -bottom-[60px] right-[47.5%]"></div>
    </>
  );
}
