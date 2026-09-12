import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Profile } from "@/components/Profile";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { CertsAndLanguages } from "@/components/CertsAndLanguages";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Profile />
        <Experience />
        <Projects />
        <Skills />
        <CertsAndLanguages />
      </main>
      <Footer />
    </>
  );
}
