import React, { useLayoutEffect, useRef } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, CameraControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function GLTFLoader(props) {
  const { url, scale: initialScale } = props;
  const gltf = useGLTF(url, true);
  const [rotation, setRotation] = useState(0);
  const { viewport } = useThree();
  const width = viewport.width;
  const height = viewport.height;

  const scale = Math.min(width / 0.2, height) / 10;
  const aspect = width / height / 1.8;

  const lodRef = useRef();

  gltf.scene.scale.set(scale * aspect, scale, scale);
  gltf.scene.position.x = -viewport.width / 20;
  gltf.scene.position.y = -viewport.height / 20;

  useFrame(() => {
    setRotation((rotation) => rotation + 0.01);
  });

  const LODLevels = [0.5, 1, 2, 4];
  const LODMeshes = LODLevels.map((level) => {
    const mesh = gltf.scene.clone();
    mesh.scale.set(level, level, level);
    return mesh;
  });

  const lod = new THREE.LOD();
  lodRef.current = lod;
  lodRef.current.addLevel(gltf.scene, 0);
  for (let i = 0; i < LODLevels.length; i++) {
    lodRef.current.addLevel(LODMeshes[i], LODLevels[i]);
  }

  lodRef.current.rotation.x = 2.6;
  lodRef.current.rotation.y = rotation;
  lodRef.current.rotation.z = 3.1;
  lodRef.current.position.z = 0;

  return <primitive object={lodRef.current} dispose={null} />;
}

export default function TechStack() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ fov: 75, position: [0, 0, -30] }}>
        <OrbitControls
          enableZoom={false}
          enableRotate={true}
          enablePan={true}
          enableDamping={true}
        />
        <ambientLight intensity={0.1} />
        <spotLight
          intensity={0.5}
          angle={Math.PI / 50}
          position={[10, 120, -250]}
        />
        <pointLight position={[20, 5, -100]} />
        {/* <pointLight position={[20, 0, 3]} intensity={3} /> */}
        <GLTFLoader url="techstack-keyboard.gltf" />
        {/* <ambientLight intensity={0.1} /> */}
        {/* <directionalLight color="white" position={[0, 0, 5]} /> */}
        {/* <pointLight position={[10, 10, 10]} /> */}
      </Canvas>
    </div>
  );
}
