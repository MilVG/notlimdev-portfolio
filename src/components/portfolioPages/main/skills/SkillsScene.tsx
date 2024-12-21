"use client";

import styles from "@/app/portfolio/root_portfolio.module.css";
import * as THREE from "three"
import { Decal, OrbitControls, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import DashedLineCurve from "./LineCurve";
import { dataPathTexture, dataPathTextureT } from "@/data/DataPathImageTexture";

interface textureMeshI extends Omit<dataPathTextureT, 'image' | 'id'> {
  texturePath: string
}
function TexturedMesh({ texturePath, positionMesh, positionDecal, rotation, scalemesh, scaleDecal }: textureMeshI) {
  const texture = useTexture(texturePath)

  return (
    <mesh scale={scalemesh} rotation={rotation} position={positionMesh}>
      <octahedronGeometry args={[1, 2]} />
      <meshStandardMaterial color="#ffffff" flatShading />
      <Decal
        map={texture}
        position={positionDecal}
        rotation={[0, 0, 0]}
        scale={scaleDecal}
      />
    </mesh>
  );
}

export default function SkillsScene() {
  const [DataPathTexture] = useState(dataPathTexture)

  return (
    <div className={styles.skills}>
      <Canvas>
        <directionalLight intensity={0.2} position={[1, 6, 10]} />
        <ambientLight intensity={0.1} position={[1, 4, 4]} />
        <Suspense fallback={null}>
          {
            DataPathTexture.map((texture) => (
              <TexturedMesh
                key={texture.id}
                texturePath={`/images/texturesGeometry/${texture.image}.png`}
                positionDecal={texture.positionDecal}
                positionMesh={texture.positionMesh}
                rotation={texture.rotation}
                scalemesh={texture.scalemesh}
                scaleDecal={texture.scaleDecal ? 1.2 : texture.scaleDecal}
              />
            ))
          }
          <group>
            <DashedLineCurve
              controlPoints={[
                new THREE.Vector2(-3, 0),
                new THREE.Vector2(-3, 4),
                new THREE.Vector2(3, 4),
                new THREE.Vector2(3, 0),

              ]}
              dashSize={1}
            />
            <DashedLineCurve
              controlPoints={[
                new THREE.Vector2(-3, 0),
                new THREE.Vector2(-3, -4),
                new THREE.Vector2(3, -4),
                new THREE.Vector2(3, 0)
              ]}
              dashSize={1}
            />
          </group>
          <group>
            <DashedLineCurve
              controlPoints={[
                new THREE.Vector2(-1.5, 0),
                new THREE.Vector2(-1.5, 2),
                new THREE.Vector2(1.5, 2),
                new THREE.Vector2(1.5, 0),

              ]}
              dashSize={0.2}
            />
            <DashedLineCurve
              controlPoints={[
                new THREE.Vector2(-1.5, 0),
                new THREE.Vector2(-1.5, -2),
                new THREE.Vector2(1.5, -2),
                new THREE.Vector2(1.5, 0)
              ]}
              dashSize={0.2}
            />
          </group>
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
