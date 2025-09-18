import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Skill from "@/components/skill";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full lg:w-4xl xl:w-5xl mx-auto">
      <div className="bg-white dark:bg-zinc-800 flex-grow shadow-lg">
        <Navbar />
        <Hero />
        <Skill />
      </div>
    </div>
  );
}
