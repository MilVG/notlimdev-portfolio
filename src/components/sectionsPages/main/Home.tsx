import AboutScene from "@/components/sectionsPages/main/about/AboutScene";
import { Experience } from "@/components/sectionsPages/main/experience/Experience";
import Header from "@/components/sectionsPages/main/head/Header";
import { Projects } from "@/components/sectionsPages/main/projects/Projects";
import SkillsScene from "@/components/sectionsPages/main/skills/SkillsScene";
import { Contact } from "./contact/Contact";

export default function Home() {

  return (
    <div className="w-full h-screen">
      <Header />
      <AboutScene />
      <SkillsScene />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
