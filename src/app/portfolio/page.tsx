
import AboutScene from "@/components/sectionsPages/main/about/AboutScene";
import { Experience } from "@/components/sectionsPages/main/experience/Experience";
import Header from "@/components/sectionsPages/main/head/Header";
import { Projects } from "@/components/sectionsPages/main/projects/Projects";
import SkillsScene from "@/components/sectionsPages/main/skills/SkillsScene";

export default function RootPage() {

  return (
    <div className="w-full h-screen">
      <Header />
      <div className="relative w-full h-[500%]">
        <AboutScene />
      </div>
      <SkillsScene />
      <Experience />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
}
