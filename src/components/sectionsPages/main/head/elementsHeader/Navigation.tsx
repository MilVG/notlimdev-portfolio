"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { XMarkIcon } from "@heroicons/react/24/outline"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import { useDivRefsStore } from '@/store/store-sections'
import { useTimelineStore } from '@/store/store-timeline-scrollTrigger'


type RutesPage = {
  id: number
  name: string
}
const pages: RutesPage[] = [
  { id: 1, name: 'About-Me' },
  { id: 2, name: 'Skills' },
  { id: 3, name: 'formation' },
  { id: 4, name: 'Projects' },
]


const Navigation = ({ visible, setVisible }: { visible: boolean, setVisible: Dispatch<SetStateAction<boolean>> }) => {
  const sectionsDivRef = useDivRefsStore((state) => state.divRefs)
  const timelineAboutSection = useTimelineStore((state) => state.timelineAboutSection)

  const handleCloseMenu = () => {
    setVisible(false)
  }

  useGSAP(() => {
    gsap.registerPlugin(ScrollToPlugin)
  })
  const handleToSection = (name: string) => {


    const aboutRef = sectionsDivRef['About-Me']
    const skillRef = sectionsDivRef['Skills']


    if (!aboutRef?.current || !skillRef.current) return

    const hrefsection = gsap.timeline();
    const aboutMeSection = document.getElementById("About-Me");

    if (aboutRef.current.id === name) {
      hrefsection.to(window, { duration: 2, scrollTo: aboutRef.current })
      if (timelineAboutSection && aboutMeSection) {
        timelineAboutSection.scrollTrigger?.enable(); // Desactiva el ScrollTrigger
        aboutMeSection.classList.remove("h-[100vh]");
        aboutMeSection.classList.add("h-[500%]");
      }
    }
    if (skillRef.current.id === name) {
      if (timelineAboutSection && aboutMeSection) {
        timelineAboutSection.scrollTrigger?.disable(); // Desactiva el ScrollTrigger
        timelineAboutSection.pause(); // Pausa el timeline
        aboutMeSection.classList.remove("h-[500%]");
        aboutMeSection.classList.add("h-[100vh]");
      }

      hrefsection.to(window, { duration: 2, scrollTo: skillRef.current })
    }
    setVisible(false)
  }
  return (
    <div
      className={`${visible === true ? 'max-sm:visible' : 'max-sm:invisible'} 
      navigation_links flex flex-row justify-start items-center lg:gap-4 lg:left-8 
      lg:justify-center 2xl:justify-start sm:gap-2 w-4/6 relative  sm:left-0 sm:w-full 
      sm:justify-center sm:uppercase xl:left-0 max-sm:gap-4`}
    >
      <div className={` w-full flex flex-row justify-end mt-4 p-4 cursor-pointer sm:invisible 
        sm:absolute`}>
        <XMarkIcon className='w-8 h-8' onClick={handleCloseMenu} />
      </div>

      {pages.map(page => (
        <ul
          key={page.id}
          property="list"
          className=" max-sm:bg-slate-700 max-sm:border-l-4 max-sm:border-l-cyan-200 
          max-sm:p-3 max-sm:w-full 2xl:relative 2xl:left-[80px]">
          <button
            key={page.id}
            className="text-white  hover:text-cyan-600' sm:text-[12px]  
            font-bold lg:text-2xl md:text-lg xl:text-3xl hover:text-slate-300 
            hover:sm:border-b-2 hover:sm:border-b-slate-600 uppercase"
            onClick={() => handleToSection(page.name)}
          >
            {page.name}
          </button>
        </ul>
      ))}
    </div>
  )
}
export default Navigation
