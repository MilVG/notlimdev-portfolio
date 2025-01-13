
import styles from "@/app/portfolio/root_portfolio.module.css";
import AboutScene from "@/components/sectionsPages/main/about/AboutScene";
import Header from "@/components/sectionsPages/main/head/Header";

export default function RootPage() {

  return (
    <div className={styles.rootpage}>
      <Header />
      <AboutScene />
      {/* <SkillsScene /> */}
      {/* <Experience /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
    </div>
  );
}
