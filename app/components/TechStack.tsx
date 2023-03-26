import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";

function GLTFLoader(props) {
  const { url, scale, position, rotation } = props;
  const gltf = useGLTF(url, true);
  const { viewport } = useThree();

  // gltf.scene.scale.set(scale, scale, scale);
  // gltf.scene.rotation.x = 2;
  // gltf.scene.rotation.y = 13;
  // gltf.scene.rotation.z = 0;
  // gltf.scene.position.x = -viewport.width / 5;
  // gltf.scene.position.y = -viewport.height / 12;

  gltf.scene.scale.set(scale, scale, scale);
  gltf.scene.rotation.x = rotation.x;
  gltf.scene.rotation.y = rotation.y;
  gltf.scene.rotation.z = rotation.z;
  gltf.scene.position.x = position.x - viewport.width / 2;
  gltf.scene.position.y = position.y;
  -viewport.height / 2;
  gltf.scene.position.z = position.z;

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
        {/* <ambientLight intensity={0.1} /> */}
        {/* <directionalLight color="white" position={[0, 0, 5]} /> */}
        {/* <pointLight position={[10, 10, 10]} /> */}
        <GLTFLoader
          url="tailwind-keycaps.gltf"
          scale={20}
          position={{ x: 4, y: 0, z: 0 }}
          rotation={{ x: 2, y: -13, z: 0 }}
        />
        <GLTFLoader
          url="tailwind-keycaps2.gltf"
          scale={20}
          position={{ x: 10, y: 0, z: 0 }}
          rotation={{ x: 2, y: -13, z: 0 }}
        />
      </Canvas>
    </div>
  );
}
