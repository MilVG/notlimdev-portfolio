import * as THREE from 'three'
import React from 'react'
import {
  useGLTF,
  //useAnimations 
} from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type ActionName = 'Take 001'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    ['Earth_Material_#50_0']: THREE.Mesh
    ['EarthClouds_Material_#62_0']: THREE.Mesh
  }
  materials: {
    Material_50: THREE.MeshStandardMaterial
    Material_62: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function SceneEarth(props: JSX.IntrinsicElements['group']) {
  const group = React.useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF('assets/earth/model_earth.glb') as GLTFResult
  //const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="RootNode">
          <group name="Earth" rotation={[-Math.PI / 2, 0, 0]} >
            <mesh name="Earth_Material_#50_0" geometry={nodes['Earth_Material_#50_0'].geometry} material={materials.Material_50} />
          </group>
          <group name="EarthClouds" rotation={[-Math.PI / 2, -Math.PI / 9, 0]} scale={1.01} >
            <mesh name="EarthClouds_Material_#62_0" geometry={nodes['EarthClouds_Material_#62_0'].geometry} material={materials.Material_62} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('assets/earth/model_earth.glb')
