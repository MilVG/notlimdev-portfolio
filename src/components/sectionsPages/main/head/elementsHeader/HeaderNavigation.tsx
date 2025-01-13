"use client"
import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import { Bars4Icon } from "@heroicons/react/24/outline"
import { useState } from "react";

export default function HeaderNavigation() {

  const [visible, setVisible] = useState(false)
  const handleShowPanel = () => {
    setVisible(true)
  }
  return (
    <div className="grid grid-cols-[20%,80%]  sm:grid sm:grid-cols-[25%,60%,15%] sm:justify-center items-center md:grid-cols-[12%,72%,16%] md:top-[90px]  z-10 lg:grid-cols-[12%,76%,12%] lg:justify-center lg:items-center lg:top-[100px] xl:top-[105px] max-sm:top-0  top-[90px] sm:top-[80px] relative h-20 max-sm:w-full w-[95%]  2xl:w-[90%]">
      <Link href="/" className="flex justify-center items-center max-sm:relative max-sm:top-5 max-sm:left-2" >
        <Image
          className="max-sm:w-9 max-sm:h-9 h-14 w-14 xl:h-20 xl:min-w-20"
          src="/logo/logo_portfolio.svg"
          alt="logo"
          width={80}
          height={80}
        />
      </Link>

      <Navigation visible={visible} setVisible={setVisible} />

      <div className="w-8 h-8 absolute right-4 text-white cursor-pointer top-10 sm:invisible"><Bars4Icon onClick={handleShowPanel} /></div>

      <div className="flex w-full max-sm:justify-end max-sm:fixed max-sm:top-[800px] max-sm:right-5  sm:relative sm:justify-center lg:h-full lg:justify-center lg:items-center">
        <div className='bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full max-sm:w-1/6 sm:h-8 p-1 h-14 sm:w-full lg:h-2/3  lg:flex lg:justify-center lg:items-center'>
          <button className=' p-2  w-full h-12 text-[10px]  bg-slate-800 rounded-full text-white sm:h-6 sm:text-[10px] sm:uppercase sm:font-bold lg:text-lg lg:h-[95%] md:flex md:justify-center md:items-center lg:flex lg:justify-center lg:items-center 2xl:h-[95%]'>Contact</button>
        </div>
      </div>
    </div>
  )
}

