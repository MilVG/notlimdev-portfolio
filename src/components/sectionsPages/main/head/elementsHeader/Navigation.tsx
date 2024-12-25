"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


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

const Navigation = () => {
  const pathname = usePathname()
  return (
    <div
      className={`flex flex-wrap text-white text-2xl font-bold  gap-10 relative lg:left-56`}
    >
      {pages.map(page => (
        <ul key={page.id} property="list" className={pathname === page.href ? 'border-b-2 border-b-blue-800' : ''}>
          <Link
            key={page.id}
            href={page.href}
            className={pathname === page.href ? `text-white` : 'text-white  hover:text-cyan-600'}
          >
            {page.name}
          </Link>
        </ul>
      ))}
    </div>
  )
}
export default Navigation
