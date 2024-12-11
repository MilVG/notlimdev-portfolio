"use client"
import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";

export default function HeaderNavigation() {
  return (
    <>
      <div className=" flex items-center top-2 relative h-20">
        <Link href="/" className="flex items-center relative left-16 top-2">
          <Image
            src="/logo/logo_portfolio.svg"
            alt="logo"
            width={80}
            height={80}
          />
        </Link>

        <Navigation />

        <div className='flex justify-center absolute w-48  right-0'>
          <div className='bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl w-full p-1'>
            <button className='font-extrabold  text-2xl p-2  w-full  bg-slate-800 rounded-3xl text-white'>Contact</button>
          </div>
        </div>
      </div>
    </>
  )
}

