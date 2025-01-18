import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls as ThreeOrbitControls } from "three-stdlib";
import { useModelStore } from "@/store/store";
import { useLabelsStore } from "@/store/store_Labels_Html";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useGSAP } from "@gsap/react";
import { ArrayAnimations } from "@/data/animations";

interface AnimationWrapperProps {
  children: React.ReactNode;
  controlsRef: React.MutableRefObject<ThreeOrbitControls | null>;
  containerSceneRef: React.MutableRefObject<HTMLDivElement | null>
}


export const AnimationModel = ({ children, controlsRef, containerSceneRef }: AnimationWrapperProps) => {

  const timeline = useRef<GSAPTimeline>();

  const { camera } = useThree<{ camera: THREE.PerspectiveCamera }>();
  const groupRef = useRef<THREE.Group>(null);
  const animatedTarget = useRef(new THREE.Vector3(0, 0, 0));
  const modelRef = useModelStore((state) => state.modelRef);
  const labelsrefs = useLabelsStore((state) => state.labelsRef);

  useGSAP(() => {

    gsap.registerPlugin(ScrollTrigger)

    if (!modelRef?.current || !containerSceneRef.current) return

    controlsRef.current?.target.set(0, 0, 0);
    controlsRef.current?.update();

    const containerRef = containerSceneRef.current

    timeline.current = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef,
        start: "top top",
        end: "+=1000%",
        scrub: true,
        pin: true,
      },
    });

    ArrayAnimations({
      modelRef: modelRef,
      timeline: timeline.current,
      camera: camera,
      labelsrefs: labelsrefs,
      animatedTarget: animatedTarget,
      controlsRef: controlsRef
    });

  }, { dependencies: [modelRef], scope: containerSceneRef })

  return <group ref={groupRef}>{children}</group>;
};
