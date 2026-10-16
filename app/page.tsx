import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Process from "@/components/process";
import Service from "@/components/service";
import Skill from "@/components/skill";
export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Aller au contenu
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Service />
        <Skill />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
