"use client";

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
  gltf.scene.rotation.y = rotation;
  gltf.scene.position.x = -viewport.width / -6;
  gltf.scene.position.y = -viewport.height / 12;

  return (
    <>
      <primitive object={gltf.scene} dispose={null} />
    </>
  );
}

export default GLTFLoader;
