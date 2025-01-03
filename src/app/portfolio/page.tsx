
import styles from "@/app/portfolio/root_portfolio.module.css";
import AboutScene from "@/components/sectionsPages/main/about/AboutScene";
import { Experience } from "@/components/sectionsPages/main/experience/Experience";
import Header from "@/components/sectionsPages/main/head/Header";
import { Projects } from "@/components/sectionsPages/main/projects/Projects";
import SkillsScene from "@/components/sectionsPages/main/skills/SkillsScene";

export default function RootPage() {

  return (
    <div className={styles.rootpage}>
      <Header />
      <AboutScene />
      <SkillsScene />
      <Experience />
      <Projects />
      <div className="relative h-screen w-full bg-purple-600"></div>
    </div>
  );
}
