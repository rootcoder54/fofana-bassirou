"use client";

import {
  SiHyperskill,
  SiLaravel,
  SiN8N,
  SiOpenai,
  SiPython
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { DiNodejs } from "react-icons/di";
import { SiSpring } from "react-icons/si";
import { IoLogoAngular } from "react-icons/io";

const Skill = () => {
  const skills = [
    {
      icon: <FaReact className="text-blue-500" />,
      name: "Reactjs",
      level: "Expert"
    },
    {
      icon: <BiLogoTypescript className="text-blue-500" />,
      name: "TypeScript",
      level: "Avancé"
    },
    {
      icon: <DiNodejs className="text-green-600" />,
      name: "Nodejs",
      level: "Expert"
    },
    {
      icon: <IoLogoAngular className="text-red-600" />,
      name: "Angular",
      level: "Avancé"
    },
    {
      icon: <SiSpring className="text-green-600" />,
      name: "SpingBoot",
      level: "Bon"
    },
    {
      icon: <SiLaravel className="text-red-600" />,
      name: "Laravel",
      level: "Moyen"
    },
    { icon: <SiN8N />, name: "N8N AgentIA", level: "Bon" },
    { icon: <SiOpenai />, name: "Api openIA", level: "Bon" },
    {
      icon: <SiPython className="text-yellow-500" />,
      name: "Python",
      level: "Bon"
    }
  ];
  return (
    <div id="competence" className="w-full px-4 md:px-12 py-8 md:py-14 flex items-center justify-between">
      <div className="flex flex-col items-start space-y-10 w-3xl">
        <h2 className="text-3xl font-bold text-start flex flex-row items-center gap-4">
          <SiHyperskill className="size-12" /> Compétences
        </h2>
        <p className="text-zinc-600 dark:text-zinc-200 text-lg text-start">
          Voici un aperçu de mes compétences techniques et des technologies que
          j&apos;utilise pour créer des solutions numériques innovantes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-5">
          {skills.map((skill, idx) => (
            <div
              key={"skill" + idx}
              className="flex flex-col items-center hover:scale-105 transition-transform p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-md"
            >
              <div className="bg-zinc-800 dark:bg-zinc-200 rounded-full p-4 inline-block mb-2">
                <span className="text-white dark:text-black text-4xl">
                  {skill.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <p className="text-zinc-500 dark:text-zinc-400">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
