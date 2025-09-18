import Image from "next/image";
import { FcAbout } from "react-icons/fc";
import { Button } from "./ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const About = () => {
  const image =
    "https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="w-full px-4 md:px-12 py-8 md:py-14 flex items-center justify-between">
      <div className="flex flex-col items-start w-3xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
          <div className="w-2/3 flex flex-col items-start space-y-6">
            <div className="flex flex-col-reverse md:flex-row md:items-center justify-between w-full gap-4">
              <div className="space-y-3">
                <FcAbout className="size-14" />
                <h2 className="text-3xl font-bold text-start">
                  À propos de moi
                </h2>
              </div>
            </div>
            <p className="text-zinc-600 dark:text-zinc-200 text-lg text-start">
              Je suis Bassirou FOFANA, un développeur web et mobile passionné
              avec nouvelles opportunités et défis. plus de 5 ans
              d&apos;expérience dans la création de solutions numériques
              innovantes. J&apos;ai travaillé sur une variété de projets, allant
              des applications mobiles aux plateformes web complexes, en
              utilisant des technologies modernes telles que React, Next.js,
              Node.js, et bien d&apos;autres.
            </p>
            <p className="text-zinc-600 dark:text-zinc-200 text-lg text-start">
              En tant que fondateur de mon agence de développement, je
              m&apos;engage à fournir des services de haute qualité qui
              répondent aux besoins spécifiques de mes clients. Mon objectif est
              de transformer vos idées en réalité grâce à des solutions
              technologiques efficaces et performantes.
            </p>
            <p className="text-zinc-600 dark:text-zinc-200 text-lg text-start">
              N&apos;hésitez pas à me contacter pour discuter de vos projets ou
              pour toute collaboration potentielle. Je suis toujours ouvert à de
              nouvelles opportunités et défis.
            </p>
          </div>
          <div className="w-1/3 space-y-6">
            <Image
              src={image}
              alt="photo de Bassirou FOFANA"
              width="500"
              height="500"
              className="rounded-lg object-cover w-full shrink-0 rotate-[8deg] hover:rotate-0 transition-all hidden md:block"
            />
            <div className="flex flex-col items-start space-y-4 mt-2">
              <Button variant="ghost" size={"lg"} className="px-4 py-2 text-lg w-full justify-start dark:hover:bg-zinc-500/10">
                <FaGithub className="size-6" /> Suivre sur Github
              </Button>
              <Button variant="ghost" size={"lg"} className="px-4 py-2 text-lg w-full justify-start dark:hover:bg-zinc-500/10">
                <FaFacebookSquare className="size-6 text-blue-500" /> Suivre sur Facebook
              </Button>
              <Button variant="ghost" size={"lg"} className="px-4 py-2 text-lg w-full justify-start dark:hover:bg-zinc-500/10">
                <FaLinkedin className="size-6 text-blue-500" /> Suivre sur Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
