import { useLabelsStore } from "@/store/store_Labels_Html";
//import { Html } from "@react-three/drei";
import { useLayoutEffect, useRef } from "react";

import localFont from "next/font/local";
const myFont = localFont({
  src: "../../app/fonts/Gilroy-ExtraBold.woff",
  display: 'swap'
})

//Estilos de labels
import { LabelsDataTypes } from "@/data/labeldata";

export default function LabelsHtml({ id, label }: { id: string, label: LabelsDataTypes }) {

  const ref = useRef<HTMLHeadingElement>(null)
  const addLabelRef = useLabelsStore((state) => state.addLabelRef)

  //Registrar referencia en el store
  useLayoutEffect(() => {
    if (ref.current) {
      addLabelRef(id, ref)
    }
  }, [id, addLabelRef])
  return (
    <div ref={ref} className={`${label.id} w-1/2 h-20`}>
      <h1 className={`text-white font-extrabold ${myFont.className}`}>{label.title}</h1>
      <p className="text-white font-bold">{label.description}</p>
    </div>
  )
}

