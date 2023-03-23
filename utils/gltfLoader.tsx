"use client";

import { useGLTF } from "@react-three/drei";
import { useState, useRef } from "react";
import { useFrame } from "react-three-fiber";
import { useThree } from "react-three-fiber";
import { useDrag } from "@react-three/drei";

function GLTFLoader(props) {
  const { url, scale } = props;
  const gltf = useGLTF(url, true);
  const [rotation, setRotation] = useState(0);
  const { viewport } = useThree();

  const leftSpotlightRef = useRef();
  const rightSpotlightRef = useRef();

  const spotlightSettings = {
    angle: Math.PI / 8,
    penumbra: 0.5,
    intensity: 1,
    distance: 10,
    decay: 1,
  };

  useFrame(() => {
    const { x, y, z } = gltf.scene.position;

    leftSpotlightRef.current.position.set(x - 2, y + 2, z);
    rightSpotlightRef.current.position.set(x + 2, y + 2, z);
  });

  useFrame(() => {
    setRotation((rotation) => rotation + 0.01);
  });

  gltf.scene.scale.set(scale, scale, scale);
  gltf.scene.rotation.y = rotation;
  gltf.scene.position.x = -viewport.width / 100;
  gltf.scene.position.y = -viewport.height / 3;

  return (
    <>
      <primitive object={gltf.scene} dispose={null} />
      <spotLight
        ref={leftSpotlightRef}
        color="white"
        {...spotlightSettings}
        position={[0, 0, 0]}
        target={gltf.scene}
      />
      <spotLight
        ref={rightSpotlightRef}
        color="white"
        {...spotlightSettings}
        position={[0, 0, 0]}
        target={gltf.scene}
      />
    </>
  );
}

export default GLTFLoader;
