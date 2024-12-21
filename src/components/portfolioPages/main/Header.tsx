
import React from 'react'
import styles from "@/components/portfolioPages/elementsHeader/header.module.css"
import Banner from '../elementsHeader/Banner';
import Presentation from '../elementsHeader/Presentation';
import AccessDownloadCv from '../elementsHeader/AccessDownloadCv';
import HeaderNavigation from '../elementsHeader/HeaderNavigation';

import stylesRoot from "@/app/portfolio/root_portfolio.module.css";
export default function Header() {


  return (
    <div className={stylesRoot.headdiv}>
      <div className={styles.header_container}>
        <div className={`relative h-full`}>

          {/*header Navigation*/}
          <HeaderNavigation />

          {/*Banner_Background*/}
          <Banner />

          {/*Text - Presentation*/}
          <Presentation />

          {/*Text - CV -Download*/}
          <AccessDownloadCv />
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

