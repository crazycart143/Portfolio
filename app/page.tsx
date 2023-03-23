"use client";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { Canvas } from "@react-three/fiber";
import GLTFLoader from "@/utils/gltfLoader";
import { OrbitControls } from "@react-three/drei";

export default function Home() {
  return (
    <main>
      <section className="flex relative">
        <div className="flex flex-col justify-start items-start text-[#F2F2F4] p-[150px] absolute">
          <p>Hello there,</p>
          <h1 className="text-[60px]">I'm Keanu John</h1>
          <p>
            a <span className="font-bold">front-end web developer</span>
          </p>
          <button className="rounded-xl mt-[30px] py-3 px-4 font-semibold bg-[#F2F2F4] text-black">
            View my projects
          </button>
        </div>
        <Canvas>
          <OrbitControls enablePan={false} enableRotate={true} />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <GLTFLoader url="scene.gltf" scale={30} />{" "}
          {/* <ambientLight intensity={0.1} /> */}
          {/* <directionalLight color="red" position={[0, 0, 5]} /> */}
          {/* <pointLight position={[10, 10, 10]} /> */}
        </Canvas>
      </section>
    </main>
  );
}
