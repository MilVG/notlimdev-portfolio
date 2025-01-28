"use client";
import { useDivRefsStore } from "@/store/store-sections";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useRef, useState } from "react";

//Importacion de modelo
const Earth = dynamic(
  () =>
    import("@/components/loadingModels3D/SceneEarth").then(
      (mod) => mod.SceneEarth,
    ),
  { ssr: false },
);

const Camera = dynamic(
  () =>
    import("@/components/loadingModels3D/camera/Camera").then(
      (mod) => mod.Camera,
    ),
  { ssr: false },
);


export const Contact = () => {

  const sectionContact = useRef<HTMLDivElement>(null)
  const setRefDivs = useDivRefsStore((state) => state.setDivRef)

  const [namesButtons, setNameButtons] = useState([
    { name: "Depveloment", isActive: false },
    { name: "App Scratech", isActive: false },
    { name: "UX/UI Desing", isActive: false },
    { name: "Branding", isActive: false },
  ]);

  const handleSelectButton = (index: number) => {
    setNameButtons((prevButtons) =>
      prevButtons.map((button, i) => ({
        ...button,
        isActive: i === index,
      })),
    );
  };

  useEffect(() => {

    if (sectionContact.current) {
      setRefDivs("Contact", sectionContact)
    }
  }, [sectionContact, setRefDivs])
  return (
    <div id="Contact" ref={sectionContact} className="relative sm:h-4/5 h-full w-full flex flex-col justify-center items-center">
      <div className="relative z-1 w-full xl:w-3/4 h-full">

        {/* Iterfaz Formulario*/}
        <div className="space-y-5 ">
          <div className="absolute bottom-20 left-0 xl:top-40 xl:left-20 p-8 space-y-10 
            lg:left-40 lg:top-30 lg:h-[500px]
            md:left-40 md:top-24 md:h-[450px]
            sm:left-20 sm:top-24 sm:h-[450px] 
            max-sm:left-2 max-sm:bottom-20 max-sm:h-[450px] max-sm:w-[94%]">
            <div>
              <h1 className="text-3xl xl:text-5xl font-bold text-white">{`Let' get in touch`}</h1>
            </div>
            <div className="space-y-2 flex flex-col justify-start items-start">
              <h5 className="font-bold text-lg text-white"> {`I'm interested in`}</h5>
              <form className="flex flex-col justify-start space-y-10">
                <div className="flex flex-wrap justify-start items-start gap-2">
                  {namesButtons.map((btn, index) => (
                    <input
                      key={index}
                      className={`rounded-md text-white p-2 ${btn.isActive ? 'bg-gradient-to-r from-indigo-500 to-cyan-500' : 'bg-slate-700'}   cursor-pointer`}
                      type="button"
                      value={`${btn.name}`}
                      onClick={() => handleSelectButton(index)}
                    />
                  ))}
                </div>
                <div className="space-y-5">
                  <input
                    className="w-full border-b-2 border-slate-400 bg-transparent focus:outline-none focus:border-b-cyan-300 text-white p-2"
                    type="text"
                    placeholder="message"
                  />
                  <input
                    className="w-full border-b-2 border-slate-400 bg-transparent focus:outline-none focus:border-b-cyan-300 text-white p-2"
                    type="email"
                    placeholder="email"
                  />
                </div>
                <div className="flex flex-row justify-center items-center">
                  <button className=" font-bold rounded-lg w-1/2 text-white uppercase bg-slate-700 p-2 hover:bg-gradient-to-r from-indigo-500 to-cyan-500">
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="relative -z-10 h-1/3 max-sm:top-24 max-sm:h-1/4 sm:h-3/6 md:h-3/5 lg:h-4/5 xl:h-full top-8">
          <Canvas>
            <Camera />
            <ambientLight intensity={5} color={"#ffffff"} position={[0, 3, 0]} />
            <directionalLight
              intensity={3}
              color={"#7ab4ff"}
              position={[0, 1, 0]}
            />
            <Suspense fallback={null}>
              <Earth
                position={[0, 0, 0]}
                rotation={[0, 0, 0]}
                scale={[0.14, 0.14, 0.14]}
              />
            </Suspense>
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate={true}
            />
          </Canvas>
        </div>
      </div>
    </div>
  );
};
