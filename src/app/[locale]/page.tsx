import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ProjectSpotlight } from "@/components/sections/ProjectSpotlight";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { About } from "@/components/sections/About";
import { ImpactBand } from "@/components/sections/ImpactBand";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <FeaturedProjects />
        <ProjectSpotlight />
        <HowItWorks />
        <About />
        <ImpactBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
