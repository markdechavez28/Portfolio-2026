import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatCards from "@/components/StatCards";
import About from "@/components/About";
import ExperienceAccordion from "@/components/ExperienceAccordion";
import ProjectSpotlight from "@/components/ProjectSpotlight";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Highlights from "@/components/Highlights";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <StatCards />
        <About />
        <ExperienceAccordion />
        <ProjectSpotlight />
        <Skills />
        <Projects />
        <Highlights />
      </main>
      <Footer />
    </>
  );
}
