import { Contact } from "@/components/features/home/Contact";
import { HeroBanner } from "@/components/features/home/HeroBanner";
import { Projects } from "@/components/features/home/Projects";
import { Skills } from "@/components/features/home/Skills";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}