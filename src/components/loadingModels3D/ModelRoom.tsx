
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { Group } from 'three';

interface GLTFResult {
  scene: Group; // Representa el objeto cargado
  nodes: any; // Puedes ajustar esto si sabes los nodos específicos
  materials: any; // Puedes ajustar esto si sabes los materiales específicos
}

export default function ModelRoom() {

  const { scene } = useGLTF('/assets/model_3d_room/scene.gltf') as GLTFResult
  scene.scale.set(20, 20, 20)
  scene.position.set(0.7, -0.5, 0)
  scene.rotation.set(0, 0.5, 0)

  return (<primitive object={scene} />)

}
useGLTF.preload('/assets/model_3d_room/scene.gltf')
