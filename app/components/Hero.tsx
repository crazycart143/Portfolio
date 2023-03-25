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
          viewport={{ once: "false", amount: 0.25 }}
        >
          Hello there,
        </motion.p>
        <motion.h1
          variants={fadeIn("right", "tween", 1, 1)}
          initial="hidden"
          whileInView="show"
          className="text-[60px]"
          viewport={{ once: "false", amount: 0.25 }}
        >
          I'm Keanu John
        </motion.h1>
        <motion.p
          variants={fadeIn("right", "tween", 1.5, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: "false", amount: 0.25 }}
        >
          a <span className="font-bold">front-end web developer</span>
        </motion.p>
        <motion.button
          variants={fadeIn("right", "tween", 2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: "false", amount: 0.25 }}
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
          enableDamping={false}
          // maxAzimuthAngle={Math.PI / 30}
          // maxPolarAngle={Math.PI}
          // minAzimuthAngle={-Math.PI / 4}
          // minPolarAngle={0}
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
        <motion.div className="rounded-full w-[20px] h-[20px] bg-white"></motion.div>
      </motion.div>
    </>
  );
}
