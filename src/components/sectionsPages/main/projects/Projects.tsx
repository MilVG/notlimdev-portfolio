"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from "lenis";
import Card from "./elementsProjects/Card";


export const Projects = () => {

  const horizotalPanelsRef = useRef<HTMLDivElement>(null)
  const container = useRef<HTMLDivElement>(null)

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

    if (!horizotalPanelsRef || sections.length === 0) return

    const totalWidth = horizotalPanelsRef.current?.scrollWidth
    const newtimeline = gsap.timeline()
    newtimeline.to(sections, {
      xPercent: -(100 * (sections.length - 1)),
      ease: "none",
      scrollTrigger: {
        trigger: horizotalPanelsRef.current,
        scrub: 1,
        pin: true,
        start: "top top",
        end: () => `+=${totalWidth}`,
      }
    })

  }, { dependencies: [horizotalPanelsRef], scope: container })

  return (
    <div className="w-full relative overflow-x-hidden" ref={container}>
      <section
        ref={horizotalPanelsRef}
        className="h-screen flex flex-nowrap items-center 
        space-x-10 px-10 max-sm:px-3 max-sm:space-x-2"
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </section>

    </div>
  )
}

