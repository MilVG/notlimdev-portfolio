"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from "lenis";


export const Projects = () => {

  const horizotalPanelsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const lenis = new Lenis();
    lenis.on('scroll', () => { });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Limpiar cuando el componente se desmonta
    };
  }, []);



  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sections = gsap.utils.toArray(".panel")

    gsap.config({ force3D: true })
    gsap.to('.panel', {
      xPercent: -(100 * (sections.length - 1)),
      ease: "none",
      scrollTrigger: {
        trigger: horizotalPanelsRef.current,
        scrub: 1,
        end: () => "+=" + horizotalPanelsRef.current?.offsetWidth,
        pin: true,
        snap: 1 / (sections.length - 1),
      }
    })

  }, { scope: horizotalPanelsRef })
  return (
    <>
      <section ref={horizotalPanelsRef} className="min-h-screen flex flex-nowrap items-center space-x-10 px-10">
        <div className="w-1/2  h-[50vh] shrink-0 rounded-3xl bg-slate-600 panel will-change-transform"></div>
        <div className="w-1/2 h-[50vh] shrink-0 rounded-3xl bg-purple-400 panel will-change-transform" ></div>
        <div className="w-1/2 h-[50vh] shrink-0 rounded-3xl bg-green-600  panel will-change-transform" ></div>
        <div className="w-1/2 h-[50vh] shrink-0 rounded-3xl bg-yellow-500 panel will-change-transform" ></div>
      </section>

    </>
  )
}

