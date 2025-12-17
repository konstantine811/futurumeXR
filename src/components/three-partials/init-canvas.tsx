import { Canvas } from "@react-three/fiber";
import { XR, createXRStore } from "@react-three/xr";
import { CameraControls, Environment, Gltf } from "@react-three/drei";
import { useRef, useState } from "react";
import WorldLocomotion from "./smooth-locomotion";
import { DoubleSide, type Group } from "three";
import { Physics, RigidBody } from "@react-three/rapier";

const store = createXRStore({});

const InitCanvas = ({ children }: { children: React.ReactNode }) => {
  const [red, setRed] = useState(false);
  const worldRef = useRef<Group>(null);
  return (
    <div className="h-screen w-full bg-black">
      <Canvas
        shadows
        camera={{ position: [7, 6, 8], fov: 45, near: 0.1, far: 2000 }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={0.9} castShadow />
        <Environment preset="sunset" />
        <CameraControls makeDefault />

        <XR store={store}>
          <Physics gravity={[0, -9.81, 0]}>
            <WorldLocomotion />
            {/* усе, що має “рухатись” відносно гравця, всередині worldRef */}
            <group ref={worldRef}>
              {/* ПІДЛОГА */}
              <RigidBody type="fixed" position={[0, 0, 0]}>
                <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow castShadow>
                  <planeGeometry args={[20, 20]} />
                  <meshStandardMaterial color="white" side={DoubleSide} />
                </mesh>
              </RigidBody>

              {/* СТІНИ ПО ПЕРИМЕТРУ ПІДЛОГИ (20 x 20) */}
              {/* Стіна +X (праворуч) */}
              <RigidBody type="fixed" position={[10, 1, 0]}>
                <mesh castShadow receiveShadow>
                  {/* товщина 0.5, висота 2, довжина 20 */}
                  <boxGeometry args={[0.5, 2, 20]} />
                  <meshStandardMaterial color="#aaaaaa" />
                </mesh>
              </RigidBody>

              {/* Стіна -X (ліворуч) */}
              <RigidBody type="fixed" position={[-10, 1, 0]}>
                <mesh castShadow receiveShadow>
                  <boxGeometry args={[0.5, 2, 20]} />
                  <meshStandardMaterial color="#aaaaaa" />
                </mesh>
              </RigidBody>

              {/* Стіна +Z (попереду) */}
              <RigidBody type="fixed" position={[0, 1, 10]}>
                <mesh castShadow receiveShadow>
                  {/* довжина по X 20, товщина по Z 0.5 */}
                  <boxGeometry args={[20, 2, 0.5]} />
                  <meshStandardMaterial color="#aaaaaa" />
                </mesh>
              </RigidBody>

              {/* Стіна -Z (позаду) */}
              <RigidBody type="fixed" position={[0, 1, -10]}>
                <mesh castShadow receiveShadow>
                  <boxGeometry args={[20, 2, 0.5]} />
                  <meshStandardMaterial color="#aaaaaa" />
                </mesh>
              </RigidBody>

              {/* ТВОЇ ОБ'ЄКТИ */}
              <RigidBody type="dynamic" position={[0, 1, -1]}>
                <mesh
                  onClick={() => setRed(!red)}
                  position={[0, 1, -1]}
                  castShadow
                  receiveShadow
                >
                  <boxGeometry args={[0.5, 0.5, 0.5]} />
                  <meshBasicMaterial color={red ? "red" : "blue"} />
                </mesh>
              </RigidBody>

              {Array.from({ length: 50 }).map((_, index) => (
                <RigidBody
                  key={index}
                  type="dynamic"
                  position={[0, index * 10, 0]}
                >
                  <mesh castShadow receiveShadow>
                    <boxGeometry args={[0.5, 0.5, 0.5]} />
                    <meshBasicMaterial color="red" />
                  </mesh>
                </RigidBody>
              ))}

              <Gltf src="/3d/uploads_files_4381654_LightBlueSky.glb" />
              {children}
            </group>
          </Physics>
        </XR>
      </Canvas>
    </div>
  );
};

export default InitCanvas;
