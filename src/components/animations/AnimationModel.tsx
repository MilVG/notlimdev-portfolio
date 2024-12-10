import * as THREE from "three";
import { useScroll } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import { OrbitControls as ThreeOrbitControls } from 'three-stdlib';
import gsap from "gsap";
import { useModelStore } from "@/store/store";

interface AnimationWrapperProps {
  children: React.ReactNode;
  controlsRef: React.MutableRefObject<ThreeOrbitControls | null>; // Tipo de la referencia de OrbitControls

}

export const AnimationModel = ({ children, controlsRef }: AnimationWrapperProps) => {

  //Animaciones scrollControl
  const scrollControl = useScroll();
  const timeline = useRef<GSAPTimeline>();

  //Referencias componentes
  const { camera } = useThree()

  // Referencia para el grupo
  const groupRef = useRef<THREE.Group>(null);

  // Crear un Vector3 para animar el target
  const animatedTarget = useRef(new THREE.Vector3(0, 0, 0));

  //refrencia del modelo context zustand store
  const modelRef = useModelStore((state) => state.modelRef)

  useLayoutEffect(() => {
    if (!controlsRef.current) return;
    if (!modelRef?.current) return
    controlsRef.current?.target.set(0, 0, 0); // Valor inicial del target
    controlsRef.current?.update(); // Actualiza el controlsRef

    timeline.current = gsap.timeline();

    timeline.current.to(
      modelRef.current?.rotation as THREE.Euler,
      {
        x: Math.PI * -0.001,
        y: 0,
        z: 0,
        duration: 0.5,
        ease: 'power2.in',
      },
      0.5,
    )
    timeline.current.to(
      camera,
      {
        zoom: 3.5,
        duration: 0.5,
        ease: 'power2.in',
        onUpdate: () => {
          camera.updateProjectionMatrix();
        }
      },
      0.8,
    )
      .to(
        modelRef.current?.rotation as THREE.Euler,
        {
          x: 0,
          y: Math.PI * 0.6,
          z: 0,
          duration: 0.8,
          ease: 'power2.in',
        },
        1,
      )
      .to(
        animatedTarget.current,
        {
          x: 0,
          y: 0.8,
          z: 0,
          duration: 0.8,
          ease: 'power2.in',
          onUpdate: () => {
            // Actualizar el target en tiempo real
            controlsRef.current?.target.copy(animatedTarget.current);
            controlsRef.current?.update();
          },
        },
        1,
      )
  }, [
    camera,
    controlsRef,
    modelRef
  ]);
  useFrame(() => {
    //timeline.current?.seek(scrollControl.offset * timeline.current.duration());
    const progress = scrollControl.offset; // Desplazamiento normalizado entre 0 y 1
    timeline.current?.progress(progress); // Ajusta el progreso del timeline según el scroll
  });

  return (

    <group ref={groupRef}>
      {children}
    </group>

  )
}
