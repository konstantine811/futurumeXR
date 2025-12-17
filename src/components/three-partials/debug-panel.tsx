// VrDebugHud.tsx
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useVrDebugStore } from "@/storage/vr-debug-state";

const VrDebugHud = () => {
  const lastPress = useVrDebugStore((s) => s.lastPress);
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const camera = state.camera;
    if (!group.current) return;

    // позиція HUD перед камерою
    const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);

    group.current.position.copy(camera.position);
    group.current.position.addScaledVector(dir, 1.2); // 1.2м перед очима
    group.current.position.y += 0.1; // трохи вище центру

    // щоб HUD завжди "дивився" в ту ж сторону, що й камера
    group.current.quaternion.copy(camera.quaternion);
  });

  const text = lastPress
    ? `Hand: ${lastPress.hand}\nButtons: ${lastPress.buttons.join(", ")}`
    : "Натисни кнопку на контролері…";

  return (
    <group ref={group}>
      {/* фон-плашка */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[0.7, 0.3]} />
        <meshBasicMaterial transparent opacity={0.6} color="black" />
      </mesh>

      {/* заголовок */}
      <Text
        position={[0, 0.07, 0.001]}
        fontSize={0.05}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        VR Debug
      </Text>

      {/* контент */}
      <Text
        position={[0, -0.03, 0.001]}
        fontSize={0.035}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
};

export default VrDebugHud;
