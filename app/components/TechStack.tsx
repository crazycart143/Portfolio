import React, { useLayoutEffect } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";

function GLTFLoader(props) {
  const { url, scale: initialScale } = props;
  const gltf = useGLTF(url, true);
  const [rotation, setRotation] = useState(0);
  const { viewport } = useThree();

  useFrame(() => {
    setRotation((rotation) => rotation + 0.01);
  });

  useLayoutEffect(() => {
    const onResize = () => {
      const width = viewport.width;
      const height = viewport.height;
      const aspect = width / height / 1.8;
      const scale = Math.min(width / 0.2, height) / 10;

      gltf.scene.scale.set(scale * aspect, scale, scale);
    };

    onResize();

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [viewport.width, viewport.height, gltf.scene]);

  gltf.scene.rotation.x = 10;
  gltf.scene.rotation.y = rotation;
  gltf.scene.rotation.z = 23;
  gltf.scene.position.z = -2;
  gltf.scene.position.x = -viewport.width / 30;
  gltf.scene.position.y = -viewport.height / 20;

  return (
    <>
      <primitive object={gltf.scene} dispose={null} />
    </>
  );
}

export default function TechStack() {
  return (
    <div className="w-full h-full">
      <div className="absolute flex flex-col items-center justify-center text-center left-[38%] top-[6%]">
        <h1 className="font-bold text-[40px]">My Tech Stacks</h1>
        <p className="font-light text-[20px]">
          Technology stacks that I am currently working on.
        </p>
      </div>

      <Canvas>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
          enableDamping={false}
          // // maxAzimuthAngle={Math.PI / 30}
          // maxPolarAngle={Math.PI}
          // // minAzimuthAngle={-Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          minDistance={0}
          maxDistance={200}
        />
        <ambientLight />
        <spotLight
          castShadow
          intensity={10}
          angle={Math.PI / 10}
          position={[18, 15, 3]}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        {/* <pointLight position={[20, 0, 3]} intensity={3} /> */}
        <GLTFLoader url="techstack-keyboard-2.gltf" />
        {/* <ambientLight intensity={0.1} /> */}
        {/* <directionalLight color="white" position={[0, 0, 5]} /> */}
        {/* <pointLight position={[10, 10, 10]} /> */}
      </Canvas>
      <div className="absolute bottom-[10%] left-[22%] flex flex-col w-[500px]">
        <div className="flex gap-x-8">
          <img src="/html.png" alt="html" className="w-[54px]" />
          <img src="/css.png" alt="css" className="w-[54px]" />
          <img src="/js.png" alt="js" className="w-[54px]" />
          <img src="/react.png" alt="react" className="w-[68px]" />
          <img src="/nextjs.png" alt="nextjs" className="w-[54px]" />
          <img src="/mongodb.png" alt="mongodb" className="w-[54px]" />
          <img src="/firebase.png" alt="firebase" className="w-[46px]" />
          <img src="/typescript.png" alt="typescript" className="w-[50px]" />
          <img src="/github.png" alt="github" className="w-[54px]" />
          <img src="/nodejs.png" alt="github" className="w-[46px]" />
        </div>
      </div>
    </div>
  );
}
