
import React, { useEffect, useRef } from "react";
import { GUI } from "dat.gui";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

interface Transform {
  position: { x: number; y: number; z: number };
  rotation: { x: number; y: number; z: number };
  scale: { x: number; y: number; z: number };
}

interface DebugTransformProps {
  initialTransform?: Transform;
  children?: React.ReactNode;
}

export const DebugTransformDatGui: React.FC<DebugTransformProps> = ({
  initialTransform = {
    position: { x: 0, y: 1, z: 0 },
    rotation: { x: 0, y: 1, z: 0 },
    scale: { x: 0.1, y: 0.1, z: 0.1 },
  },
  children,
}) => {
  const groupRef = useRef<Group>(null);
  const transform = useRef<Transform>(initialTransform);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const gui = new GUI();
    const folder = gui.addFolder("Transformations");

    // Posición
    folder
      .add(transform.current.position, "x", -10, 10, 0.01)
      .name("Pos X");
    folder
      .add(transform.current.position, "y", -10, 10, 0.01)
      .name("Pos Y");
    folder
      .add(transform.current.position, "z", -10, 10, 0.01)
      .name("Pos Z");

    // Rotación
    folder
      .add(transform.current.rotation, "x", -Math.PI, Math.PI, 0.01)
      .name("Rot X");
    folder
      .add(transform.current.rotation, "y", -Math.PI, Math.PI, 0.01)
      .name("Rot Y");
    folder
      .add(transform.current.rotation, "z", -Math.PI, Math.PI, 0.01)
      .name("Rot Z");

    // Escala
    folder
      .add(transform.current.scale, "x", 0.01, 10, 0.01)
      .name("Scale X");
    folder
      .add(transform.current.scale, "y", 0.01, 10, 0.01)
      .name("Scale Y");
    folder
      .add(transform.current.scale, "z", 0.01, 10, 0.01)
      .name("Scale Z");

    folder.open();

    return () => gui.destroy();
  }, []);

  // Sincronizar el grupo 3D con los valores de transformación
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.set(
        transform.current.position.x,
        transform.current.position.y,
        transform.current.position.z
      );
      groupRef.current.rotation.set(
        transform.current.rotation.x,
        transform.current.rotation.y,
        transform.current.rotation.z
      );
      groupRef.current.scale.set(
        transform.current.scale.x,
        transform.current.scale.y,
        transform.current.scale.z
      );
    }
  });

  return <group ref={groupRef}>{children}</group>;
};
