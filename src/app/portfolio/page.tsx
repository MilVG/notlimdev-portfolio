
import AboutScene from "@/components/sectionsPages/main/about/AboutScene";
import Header from "@/components/sectionsPages/main/head/Header";
import SkillsScene from "@/components/sectionsPages/main/skills/SkillsScene";

export default function RootPage() {

  return (
    <div className="w-full h-screen">
      <Header />
      <AboutScene />
      <SkillsScene />
      {/* <Experience /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
    </div>
  );
}
