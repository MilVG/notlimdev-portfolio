"use client"
import { Camera } from "@/components/loadingModels3D/camera/Camera";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import styles from "@/app/portfolio/root_portfolio.module.css"
import ModelRoom from "@/components/loadingModels3D/ModelRoom";

export default function MainPage() {
  return (

    <div className={styles.scene}>
      <Canvas>
        <Camera />
        <ambientLight intensity={1.7} color={'#ffffff'} position={[0, 6, 5]} />
        <directionalLight intensity={3} color={'#ffffff'} position={[1, 6, 10]} />
        <Suspense fallback={null}>
          {ModelRoom !== null ? (
            <ModelRoom

            />
          ) : (
            <p className="text-purple-900">cargando...</p>
          )}
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>

  )
}

