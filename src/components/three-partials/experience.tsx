import { Gltf } from "@react-three/drei";

const Experience = () => {
  return (
    <>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <Gltf src="/3d/uploads_files_4381654_LightBlueSky.glb" />
    </>
  );
};

export default Experience;
