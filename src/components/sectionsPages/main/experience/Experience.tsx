"use client"

import { useEffect, useRef, useState } from 'react';
import { TimelineLogo } from "./elements/TimelineLogo";
import { useDivRefsStore } from '@/store/store-sections';

export const Experience = () => {

  const sectionExperience = useRef<HTMLDivElement>(null)
  const setDivRef = useDivRefsStore((state) => state.setDivRef)

  const [fechas] = useState([
    "Febrero-2022",
    "Julio-2022",
    "Diciembre-2022",
    "Mazro-2023",
  ])

  // Función para convertir y ordenar las fechas
  const getSortedDates = () => {
    return fechas
      .map(date => {
        const [month, year] = date.split("-");
        return {
          dateString: date,
          dateObj: new Date(`${year}-${month}-01`),
        };
      })
      .sort((a, b) => {
        // Comparar primero por año y luego por mes
        const yearA = a.dateObj.getFullYear();
        const yearB = b.dateObj.getFullYear();
        const monthA = a.dateObj.getMonth();
        const monthB = b.dateObj.getMonth();

        // Ordenar por año descendente primero, luego por mes descendente
        return yearB - yearA || monthB - monthA;
      });
  }
  const dates = getSortedDates()

  useEffect(() => {
    if (sectionExperience.current) {
      setDivRef('Experience', sectionExperience)
    }
  }, [sectionExperience, setDivRef])
  return (
    <div id='Experience' className="w-full h-[220%] relative max-sm:h-[160%] top-10" ref={sectionExperience}>
      <div>
        <div className="absolute max-sm:h-[89%] h-[90%] w-full max-sm:top-0 sm:top-28 flex flex-row justify-center items-center max-sm:justify-end max-sm:p-10">
          <div className={`w-1 h-full border-2 border-slate-600 `}></div>
        </div>
        <div className="w-full h-full p-2 flex flex-col justify-normal items-center max-sm:justify-normal max-sm:gap-4">
          {
            dates.map((date, index) => (
              <TimelineLogo key={index} date={date} index={index} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

