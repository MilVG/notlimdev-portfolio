"use client";
import dynamic from "next/dynamic";
import {
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";

import { OrbitControls as ThreeOrbitControls } from "three-stdlib";
import { AnimationModel } from "@/components/animations/AnimationModel";
import { labelsData } from "@/data/labeldata";
import LabelsHtml from "@/components/elementsHtml/LabelsHtml";
import { useDivRefsStore } from "@/store/store-sections";

//Importacion de modelo
const ModelGamerRoom = dynamic(
  () =>
    import("@/components/loadingModels3D/Scene001").then(
      (mod) => mod.ModelGamerRoom,
    ),
  { ssr: false },
);

//Inciiacion de parametros para dat.gui
const Camera = dynamic(
  () =>
    import("@/components/loadingModels3D/camera/Camera").then(
      (mod) => mod.Camera,
    ),
  { ssr: false },
);

export default function AboutScene() {

  const controlsRef = useRef<ThreeOrbitControls | null>(null);
  const containerSceneRef = useRef<HTMLDivElement | null>(null)

  const sectionHeadRef = useRef<HTMLDivElement>(null)
  const setDivRef = useDivRefsStore((state) => state.setDivRef)

  useEffect(() => {
    if (sectionHeadRef.current) {
      setDivRef('About-Me', sectionHeadRef)
    }
  }, [sectionHeadRef, setDivRef])
  return (
    <div id="About-Me" className="relative w-full h-[500%]" ref={sectionHeadRef}>
      <div className="absolute left-3 w-[95%] border-b-2 border-t-2">
        <h1 className="ml-4 text-white text-4xl 
          font-bold  ">About-Me</h1>
      </div>
      <div ref={containerSceneRef} className="w-full h-screen">
        <Canvas>
          <Camera />
          <ambientLight
            intensity={1.7}
            color={"#9288FF"}
            position={[0, 6, 5]}
          />
          <directionalLight
            intensity={3}
            color={"#9288FF"}
            position={[1, 6, 10]}
          />
          <Suspense fallback={null}>
            <AnimationModel
              containerSceneRef={containerSceneRef}
              controlsRef={controlsRef}
            >
              <ModelGamerRoom
                position={[0, 0, 0]}
                rotation={[1.25, 0, 0]}
                scale={[10, 10, 10]}
              />
            </AnimationModel>
          </Suspense>
          <OrbitControls
            ref={controlsRef}
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            minAzimuthAngle={-Math.PI / 12}
            maxAzimuthAngle={Math.PI / 12}
            minPolarAngle={Math.PI * 0.3}
            maxPolarAngle={Math.PI * 0.35}
          />
        </Canvas>
        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden z-10"
        >
          {labelsData.map((label) => (
            <LabelsHtml id={label.id} label={label} key={label.id} />
          ))}
        </div>
      </div>
    </div>
  );
} 
