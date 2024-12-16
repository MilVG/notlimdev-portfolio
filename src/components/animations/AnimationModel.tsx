import * as THREE from "three";
import { useScroll } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import { OrbitControls as ThreeOrbitControls } from "three-stdlib";
import gsap from "gsap";
import { useModelStore } from "@/store/store";
import { useLabelsStore } from "@/store/store_Labels_Html";

interface AnimationWrapperProps {
  children: React.ReactNode;
  controlsRef: React.MutableRefObject<ThreeOrbitControls | null>;
}

export const AnimationModel = ({
  children,
  controlsRef,
}: AnimationWrapperProps) => {
  //Animaciones scrollControl
  const scrollControl = useScroll();
  const timeline = useRef<GSAPTimeline>();

  //Referencias componentes
  const { camera } = useThree();

  // Referencia para el grupo
  const groupRef = useRef<THREE.Group>(null);

  // Crear un Vector3 para animar el target
  const animatedTarget = useRef(new THREE.Vector3(0, 0, 0));

  //refrencia del modelo context zustand store
  const modelRef = useModelStore((state) => state.modelRef);

  //referencia de labels html
  const labelsrefs = useLabelsStore((state) => state.labelsRef);

  useLayoutEffect(() => {
    if (
      !controlsRef.current ||
      !modelRef?.current ||
      !labelsrefs["label_01"]?.current
    )
      return;
    controlsRef.current?.target.set(0, 0, 0);
    controlsRef.current?.update();
    timeline.current = gsap.timeline();

    timeline.current.to(
      modelRef.current?.rotation as THREE.Euler,
      {
        x: Math.PI * -0.001,
        y: 0,
        z: 0,
        duration: 0.4,
        ease: "power3.inOut",
      },
      0.625,
    );
    timeline.current.to(
      camera,
      {
        zoom: 4.3,
        duration: 0.4,
        ease: "power3.inOut",
        onUpdate: () => {
          camera.updateProjectionMatrix();
        },
      },
      1.25,
    )
    timeline.current
      .to(
        labelsrefs["label_01"]?.current,
        {
          opacity: 1,
          duration: 0.1,
          y: 0,
          ease: "power3.in",
        },
        1.875,
      )
    timeline.current
      .to(
        labelsrefs["label_01"]?.current,
        {
          opacity: 0,
          duration: 0.1,
          y: 0,
          ease: "power3.in",
        },
        2.5,
      )
    timeline.current.to(
      animatedTarget.current,
      {
        x: 0,
        y: 0.8,
        z: 0,
        duration: 0.4,
        ease: "power2.in",
        onUpdate: () => {
          controlsRef.current?.target.copy(animatedTarget.current);
          controlsRef.current?.update();
        },
      },
      3.125,
    ).to(
      camera,
      {
        zoom: 6.0,
        duration: 0.4,
        ease: "power3.inOut",
        onUpdate: () => {
          camera.updateProjectionMatrix();
        },
      },
      3.75,
    );

    timeline.current
      .to(
        labelsrefs["label_02"]?.current,
        {
          opacity: 1,
          duration: 0.1,
          y: 0,
          ease: "power3.in",
        },
        4.375,
      )

      .to(
        modelRef.current?.rotation as THREE.Euler,
        {
          x: 0,
          y: Math.PI * 0.6,
          z: 0,
          duration: 0.4,
          ease: "power3.inOut",
        },
        5,
      )
  }, [camera, controlsRef, modelRef, labelsrefs]);
  useFrame(() => {
    const progress = THREE.MathUtils.clamp(scrollControl.offset, 0, 1); // Desplazamiento normalizado entre 0 y 1
    timeline.current?.progress(progress); // Ajusta el progreso del timeline según el scroll
  });

  return <group ref={groupRef}>{children}</group>;
};
