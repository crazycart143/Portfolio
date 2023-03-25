import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";

function GLTFLoader(props) {
  const { url, scale } = props;
  const gltf = useGLTF(url, true);
  const [rotation, setRotation] = useState(0);
  const { viewport } = useThree();

  useFrame(() => {
    setRotation((rotation) => rotation + 0.01);
  });

  gltf.scene.scale.set(scale, scale, scale);
  gltf.scene.rotation.x = 2;
  gltf.scene.rotation.y = 13;
  gltf.scene.rotation.z = 0;
  gltf.scene.position.x = -viewport.width / 5;
  gltf.scene.position.y = -viewport.height / 12;

  return (
    <>
      <primitive object={gltf.scene} dispose={null} />
    </>
  );
}

export default function TechStack() {
  return (
    <div>
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
          angle={306}
          position={[4, 10, 3]}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        {/* <pointLight position={[20, 0, 3]} intensity={3} /> */}
        <GLTFLoader url="tailwind-keycaps.gltf" scale={20} />
        {/* <ambientLight intensity={0.1} /> */}
        {/* <directionalLight color="white" position={[0, 0, 5]} /> */}
        {/* <pointLight position={[10, 10, 10]} /> */}
      </Canvas>
    </div>
  );
}
