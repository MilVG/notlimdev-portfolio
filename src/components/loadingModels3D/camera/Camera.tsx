import { PerspectiveCamera } from "@react-three/drei"

export const Camera = () => {
  return (

    <PerspectiveCamera
      makeDefault
      position={[0, 1.2, 1.5]}
      fov={60}
    />

  )
}

