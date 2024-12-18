import * as THREE from "three";
import { useScroll } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import { OrbitControls as ThreeOrbitControls } from "three-stdlib";
import gsap from "gsap";
import { useModelStore } from "@/store/store";
import { useLabelsStore } from "@/store/store_Labels_Html";
import { ArrayAnimationLabel01 } from "@/data/animations";

interface AnimationWrapperProps {
  children: React.ReactNode;
  controlsRef: React.MutableRefObject<ThreeOrbitControls | null>;
}

export const AnimationModel = ({ children, controlsRef }: AnimationWrapperProps) => {

  const scrollControl = useScroll();
  const timeline = useRef<GSAPTimeline>();

  const { camera } = useThree<{ camera: THREE.PerspectiveCamera }>();
  const groupRef = useRef<THREE.Group>(null);
  const animatedTarget = useRef(new THREE.Vector3(0, 0, 0));
  const modelRef = useModelStore((state) => state.modelRef);
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

    ArrayAnimationLabel01({
      modelRef: modelRef,
      timeline: timeline.current,
      camera: camera,
      labelsrefs: labelsrefs,
      animatedTarget: animatedTarget,
      controlsRef: controlsRef
    });

  }, [modelRef, camera, labelsrefs, controlsRef]);

  useFrame(() => {
    const progress = THREE.MathUtils.clamp(scrollControl.offset, 0, 1); // Desplazamiento normalizado entre 0 y 1
    timeline.current?.progress(progress); // Ajusta el progreso del timeline según el scroll
  });

  return <group ref={groupRef}>{children}</group>;
};
