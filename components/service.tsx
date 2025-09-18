import { FaMobile } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";
import { SiWebmoney } from "react-icons/si";
import { SiPaloaltosoftware } from "react-icons/si";

const Service = () => {
  const services = [
    {
      icon: <SiWebmoney className="size-12 text-blue-500" />,
      title: "Développement Web",
      description:
        "Création de sites web modernes et réactifs utilisant les dernières technologies front-end et back-end."
    },
    {
      icon: <FaMobile className="size-12" />,
      title: "Développement Mobile",
      description:
        "Conception et développement d'applications mobiles performantes pour iOS et Android."
    },
    {
      icon: <SiPaloaltosoftware className="size-12 text-green-700" />,
      title: "Solutions sur mesure",
      description:
        "Développement de solutions logicielles personnalisées pour répondre aux besoins spécifiques de votre entreprise."
    }
  ];
  return (
    <div id="services" className="w-full px-4 md:px-12 py-8 md:py-14 flex items-center justify-between">
      <div className="flex flex-col items-start space-y-10 w-3xl">
        <h2 className="text-3xl font-bold text-start flex flex-row items-center gap-4">
          <RiServiceLine className="size-12" /> Prestation de services
        </h2>
        <p className="text-zinc-600 dark:text-zinc-200 text-lg text-start">
          En tant que développeur fullstack et fondateur d&apos;agence, je
          propose une gamme complète de services pour répondre à vos besoins
          numériques.
        </p>
        <div className="flex flex-col space-y-3 w-full border-l-2 px-5">
          {services.map((service, idx) => (
            <div
              key={"service" + idx}
              className="flex flex-row items-start space-x-3 dark:hover:bg-zinc-900/65 hover:bg-zinc-300/40 dark:border-zinc-700 rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <div>{service.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
