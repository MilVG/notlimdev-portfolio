"use client"
import { useState } from 'react';

import { TimelineLogo } from "./elements/TimelineLogo";
import styles from "@/components/sectionsPages/main/experience/elements/styles-experience.module.css"


export const Experience = () => {

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
  return (
    <div className={styles.experience}>
      <div className={styles.divexperience}>
        <div className="absolute h-full w-full flex flex-col justify-center items-center">
          <div className={`w-1 h-full ${styles.linediv}`}></div>
        </div>
        <div className="absolute w-full h-full p-2 flex flex-col justify-around items-center gap-4">
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

