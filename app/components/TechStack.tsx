import React, { useLayoutEffect, useRef } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function GLTFLoader(props) {
  const { url, scale: initialScale } = props;
  const gltf = useGLTF(url, true);
  const [rotation, setRotation] = useState(0);
  const { viewport, gl } = useThree();

  useFrame(() => {
    setRotation((rotation) => rotation + 0.01);
  });

  const lodRef = useRef();

  useLayoutEffect(() => {
    const onResize = () => {
      const width = viewport.width;
      const height = viewport.height;
      const aspect = width / height / 1.8;
      const scale = Math.min(width / 0.2, height) / 10;

      gltf.scene.scale.set(scale * aspect, scale, scale);
      gltf.scene.position.x = -viewport.width / 30;
      gltf.scene.position.y = -viewport.height / 20;

      // Increase pixel density for better quality
      const pixelRatio = window.devicePixelRatio;
      gl.setPixelRatio(pixelRatio);

      // Update LOD distances based on new scale
      lodRef.current.children.forEach((child, i) => {
        child.distance = 50 * (i + 1) * scale;
      });
    };

    onResize();

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [viewport.width, viewport.height, gltf.scene, gl, lodRef]);

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

  useFrame(({ camera }) => {
    lodRef.current.update(camera);
  });

  lodRef.current.rotation.x = 10;
  lodRef.current.rotation.y = rotation;
  lodRef.current.rotation.z = 23;
  lodRef.current.position.z = -30;

  return <primitive object={lodRef.current} dispose={null} />;
}

export default function TechStack() {
  return (
    <div className="w-full h-[90vh]">
      <Canvas>
        <OrbitControls
          enablePan={true}
          enableZoom={false}
          enableRotate={true}
          enableDamping={true}
          position={(0, 0, 0)}
          // // maxAzimuthAngle={Math.PI / 30}
          maxPolarAngle={Math.PI}
          // // minAzimuthAngle={-Math.PI / 4}
        />
        <ambientLight intensity={0.5} />
        <spotLight
          intensity={10}
          angle={Math.PI / 10}
          position={[10, 120, 40]}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        {/* <pointLight position={[20, 0, 3]} intensity={3} /> */}
        <GLTFLoader url="techstack-keyboard-2.gltf" />
        {/* <ambientLight intensity={0.1} /> */}
        {/* <directionalLight color="white" position={[0, 0, 5]} /> */}
        {/* <pointLight position={[10, 10, 10]} /> */}
      </Canvas>
    </div>
  );
}
