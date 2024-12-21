
import Header from "@/components/portfolioPages/main/Header";
import styles from "@/app/portfolio/root_portfolio.module.css";
import AboutScene from "@/components/portfolioPages/main/AboutScene";
import SkillsScene from "@/components/portfolioPages/main/skills/SkillsScene";

export default function RootPage() {

  return (
    <div className={styles.rootpage}>
      <Header />
      <AboutScene />
      <SkillsScene />
    </div>
  );
}
