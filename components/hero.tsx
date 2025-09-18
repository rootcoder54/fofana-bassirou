import { User } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-full px-4 md:px-12 py-8 md:py-14 flex items-center justify-between">
      <div className="flex flex-col items-start space-y-10 w-3xl">
        <div className="bg-zinc-800 rounded-full p-2 inline-block">
          <User className="text-white" />
        </div>
        <h2 className="text-5xl font-bold text-start">
          Developpeur fullstack & fondateur d&apos;agence
        </h2>
        <p className="text-zinc-600 dark:text-zinc-200 text-lg text-start">
          Je suis Bassirou Fofana, un développeur de logiciels passionné et le
          fondateur de ma propre agence. Avec une expertise en création de
          solutions numériques innovantes, je m&apos;efforce de transformer les
          idées en réalité.
        </p>
      </div>
    </div>
  );
};

export default Hero;
