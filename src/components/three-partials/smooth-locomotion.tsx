// VrPlayer.tsx
import { useFrame } from "@react-three/fiber";
import { useXRInputSourceState, XROrigin } from "@react-three/xr";
import {
  RigidBody,
  RapierRigidBody,
  CapsuleCollider,
} from "@react-three/rapier";
import { useRef } from "react";
import * as THREE from "three";
import type { Group } from "three";

const tmpVec3 = new THREE.Vector3();
const UP = new THREE.Vector3(0, 1, 0);

function VrPlayer() {
  const bodyRef = useRef<RapierRigidBody | null>(null);
  const yawGroupRef = useRef<Group | null>(null);

  // правий контролер – ходьба, стрибок
  const right = useXRInputSourceState("controller", "right");
  // лівий контролер – поворот (yaw)
  const left = useXRInputSourceState("controller", "left");

  const yawRef = useRef(0); // поточний кут повороту персонажа (рад)
  const isGrounded = useRef(true); // дуже простий прапор для стрибка

  useFrame((_, delta) => {
    const body = bodyRef.current;
    if (!body) return;

    // ---------- 1. Поворот лівим стиком ----------
    if (left) {
      const stick = left.gamepad["xr-standard-thumbstick"];
      const turnX = stick?.xAxis ?? 0; // вправо/вліво на стику

      const turnSpeed = 2.5; // рад/сек
      yawRef.current -= turnX * turnSpeed * delta;

      if (yawGroupRef.current) {
        yawGroupRef.current.rotation.y = yawRef.current;
      }
    }

    // ---------- 2. Рух правим стиком ----------
    const moveDir = tmpVec3.set(0, 0, 0);

    if (right) {
      const stick = right.gamepad["xr-standard-thumbstick"];
      const x = stick?.xAxis ?? 0; // strafe
      const y = stick?.yAxis ?? 0; // вперед/назад

      if (Math.abs(x) > 0.01 || Math.abs(y) > 0.01) {
        // напрямки "вперед" і "вправо" відносно yaw
        const forward = new THREE.Vector3(0, 0, -1).applyAxisAngle(
          UP,
          yawRef.current
        );
        const rightVec = new THREE.Vector3(1, 0, 0).applyAxisAngle(
          UP,
          yawRef.current
        );

        moveDir
          .copy(forward)
          .multiplyScalar(-y) // yAxis: вперед = -1
          .add(rightVec.multiplyScalar(x));

        if (moveDir.lengthSq() > 0.001) {
          moveDir.normalize();
        }
      }
    }

    const speed = 4; // м/с
    const vel = body.linvel(); // поточна швидкість

    // ---------- 3. Стрибок (кнопка на правому контролері) ----------
    let jumpPressed = false;
    if (right) {
      // тут залежить від девайсу:
      // подивись в консоль, які є ключі у right.gamepad (trigger, primary, a, x, etc)
      const aButton = right.gamepad["xr-standard-primary-button"];
      jumpPressed = aButton?.state === "pressed";
    }

    let vy = vel.y;
    if (jumpPressed && isGrounded.current) {
      vy = 5; // стартова вертикальна швидкість
      isGrounded.current = false;
    }

    // ---------- 4. Застосувати швидкість до тіла ----------
    body.setLinvel(
      {
        x: moveDir.x * speed,
        y: vy,
        z: moveDir.z * speed,
      },
      true
    );
  });

  return (
    <RigidBody
      ref={bodyRef}
      type="dynamic"
      position={[0, 0, 0]} // 🔹 важливо: старт з підлоги
      colliders={false} // 🔹 свій колайдер нижче
      lockRotations
      canSleep={false}
      linearDamping={0.9}
    >
      {/* КОЛАЙДЕР-КАПСУЛА */}
      {/* args: [radius, halfHeight] */}
      {/* Повна висота = 2 * halfHeight + 2 * radius */}
      {/* Напр., radius = 0.3, halfHeight = 0.9 → висота ~ 2.4 м */}
      {/* position по Y = halfHeight + radius, щоб низ був на y=0 */}
      <CapsuleCollider args={[0.3, 0.9]} position={[0, 0.9 + 0.3, 0]} />

      {/* Група, яка крутиться по yaw (лівий джойстик) */}
      <group ref={yawGroupRef}>
        {/* XROrigin – "ногами" на підлозі (y=0) */}
        <XROrigin />

        {/* 🔸 Якщо хочеш бачити модель капсули (для дебагу) */}
        {/* Вона має збігатися з колайдером */}
        {/* <mesh position={[0, 0.9 + 0.3, 0]}>
          <capsuleGeometry args={[0.3, 1.8]} />
          <meshStandardMaterial color="orange" wireframe />
        </mesh> */}
      </group>
    </RigidBody>
  );
}

export default VrPlayer;
