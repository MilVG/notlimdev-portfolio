import BannerBackground from './BannerBackground';
import styles from "@/components/portfolioPages/elementsHeader/header.module.css"

export default function Banner() {
  return (
    <div className={`${styles.banner_bg} ${styles.banner_queries} -z-10 bg-slate-800 absolute h-full w-full left-0 top-0`}>
      <BannerBackground />
      <div className="absolute top-[100px] right-[100px] bg-[#1D6750] w-5/12 h-[200px] rounded "></div>
      <div className="absolute top-[200px] left-[0px] bg-[#1371A7] w-48 h-[200px] rounded"></div>
      <div className="absolute top-[350px] left-[0px] bg-[#915DFF] w-5/12 h-[200px] rounded "></div>
    </div>
  )
}

