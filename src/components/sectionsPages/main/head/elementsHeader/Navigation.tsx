"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { Dispatch, SetStateAction } from 'react'
import { XMarkIcon } from "@heroicons/react/24/outline"


type RutesPage = {
  id: number
  name: string
  href: string
}
const pages: RutesPage[] = [
  { id: 1, name: 'Home', href: '/portfolio' },
  { id: 2, name: 'About-Me', href: '/portfolio/about-me' },
  { id: 3, name: 'Skills', href: '/portfolio/skills' },
  { id: 4, name: 'formation', href: '/portfolio/formation' },
  { id: 5, name: 'Projects', href: '/portfolio/projects' },
]


const Navigation = ({ visible, setVisible }: { visible: boolean, setVisible: Dispatch<SetStateAction<boolean>> }) => {
  const pathname = usePathname()

  const handleCloseMenu = () => {
    setVisible(false)
  }
  return (
    <div
      className={`${visible === true ? 'max-sm:visible' : 'max-sm:invisible'} navigation_links flex flex-row justify-start items-center lg:gap-4 lg:left-8 lg:justify-center 2xl:justify-start sm:gap-2 w-4/6 relative  sm:left-0 sm:w-full sm:justify-center sm:uppercase xl:left-0`}
    >
      <div className={` w-full flex flex-row justify-end mt-4 p-4 cursor-pointer sm:invisible sm:absolute`}><XMarkIcon className='w-8 h-8' onClick={handleCloseMenu} /></div>
      {pages.map(page => (
        <ul key={page.id} property="list" className={`${pathname === page.href ? 'border-b-2 max-sm:bg-gradient-to-r from-cyan-600 to-purple-300  max-sm:border-l-4 max-sm:border-l-cyan-200  border-b-purple-400' : ''} max-sm:p-3 max-sm:w-full 2xl:relative 2xl:left-[80px]`}>
          <Link
            key={page.id}
            href={page.href}
            className={`${pathname === page.href ? `text-white` : 'text-white  hover:text-cyan-600'} sm:text-[12px]  font-bold lg:text-2xl md:text-lg xl:text-3xl`}
          >
            {page.name}
          </Link>
        </ul>
      ))}
    </div>
  )
}
export default Navigation
