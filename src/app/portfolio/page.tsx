"use client"
import dynamic from "next/dynamic";
import { Camera } from "@/components/loadingModels3D/camera/Camera";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import styles from "@/app/portfolio/root_portfolio.module.css"
import Header from "@/components/portfolioPages/main/Header";

//Importacion de modelo y debug Dat.Gui
const ModelGamerRoom = dynamic(() =>
  import("@/components/loadingModels3D/Scene001").then(mod => mod.ModelGamerRoom), { ssr: false });

const DebugTransformDatGui = dynamic(() =>
  import('@/components/loadingModels3D/startmodel/DebugDatGui').then(mod => mod.DebugTransformDatGui), { ssr: false });
//Inciiacion de parametros para dat.gui

const initialTransformModel2 = {
  position: { x: 0, y: 0.56, z: 3.30 },
  rotation: { x: 1.32, y: 0, z: 0 },
  scale: { x: 1, y: 1, z: 1 },
}



export default function MainPage() {

  setTimeout(() => {

  }, 1000)
  return (
    <div>
      <Header />
      <div className={styles.scene}>
        <Canvas>
          <Camera />
          <ambientLight intensity={1.7} color={'#9288FF'} position={[0, 6, 5]} />
          <directionalLight intensity={3} color={'#9288FF'} position={[1, 6, 10]} />
          <Suspense fallback={null}>
            <DebugTransformDatGui initialTransform={initialTransformModel2}>
              <ModelGamerRoom />
            </DebugTransformDatGui>
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
      <div className={styles.nueva_section}>
        <h1>Seccion nueva</h1>
      </div>
    </div>

  )
}

