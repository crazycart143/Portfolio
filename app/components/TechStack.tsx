// import React from "react";
// import { Canvas } from "react-three-fiber";
// import { OrbitControls } from "@react-three/drei";
// import { useGLTF } from "@react-three/drei";
// import { useState } from "react";
// import { useFrame, useThree } from "@react-three/fiber";

// function GLTFLoader(props) {
//   const { url, scale, position, rotation } = props;
//   const gltf = useGLTF(url, true);
//   const { viewport } = useThree();

//   // gltf.scene.scale.set(scale, scale, scale);
//   // gltf.scene.rotation.x = 2;
//   // gltf.scene.rotation.y = 13;
//   // gltf.scene.rotation.z = 0;
//   // gltf.scene.position.x = -viewport.width / 5;
//   // gltf.scene.position.y = -viewport.height / 12;

//   gltf.scene.scale.set(scale, scale, scale);
//   gltf.scene.rotation.x = rotation.x;
//   gltf.scene.rotation.y = rotation.y;
//   gltf.scene.rotation.z = rotation.z;
//   gltf.scene.position.x = position.x - viewport.width / 2;
//   gltf.scene.position.y = position.y;
//   -viewport.height / 2;
//   gltf.scene.position.z = position.z;

//   return (
//     <>
//       <primitive object={gltf.scene} dispose={null} />
//     </>
//   );
// }

export default function TechStack() {
  return <div></div>;
}
