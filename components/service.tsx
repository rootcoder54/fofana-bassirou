import Image from "next/image";
import {
  ArrowUpRight,
  Bot,
  Check,
  Code2,
  Layers3,
  Smartphone,
} from "lucide-react";
const services = [
  {
    icon: Code2,
    title: "Des sites qui vous ressemblent.",
    category: "01 / WEB & EXPÉRIENCE",
    text: "Un site vitrine pour présenter votre activité, une boutique pour vendre en ligne ou une plateforme pour vos utilisateurs. Je crée des interfaces claires, rapides et adaptées à tous les écrans.",
    items: [
      "Sites vitrines & e-commerce",
      "Interfaces React, Next.js & Angular",
      "Performance & référencement technique",
    ],
    image: "photo-1498050108023-c5249f4df085",
    alt: "Ordinateur portable affichant du code sur un bureau",
  },
  {
    icon: Smartphone,
    title: "Votre activité, dans la poche.",
    category: "02 / APPLICATIONS MOBILES",
    text: "Prolongez vos services sur mobile avec une application pensée pour les usages de vos clients. Du parcours utilisateur à la connexion avec votre système, chaque détail compte.",
    items: [
      "Applications Android & iOS",
      "Flutter & React Native",
      "API & synchronisation des données",
    ],
    image: "photo-1512941937669-90a1b58e7e9c",
    alt: "Téléphone mobile et son interface tactile",
  },
  {
    icon: Bot,
    title: "Moins de tâches. Plus d’impact.",
    category: "03 / IA & AUTOMATISATION",
    text: "Faites gagner du temps à vos équipes grâce à des assistants conversationnels et des automatisations reliés à vos outils. Des usages ciblés, intégrés à vos processus métier.",
    items: [
      "Chatbots & assistants internes",
      "Automatisations avec n8n",
      "Intégration d’API d’intelligence artificielle",
    ],
    image: "photo-1551288049-bebda4e38f71",
    alt: "Tableau de bord et visualisation de données",
  },
];
export default function Service() {
  return (
    <section id="services" className="portfolio-container section-space">
      <div className="section-heading">
        <div>
          <span className="eyebrow">CE QUE JE PEUX FAIRE POUR VOUS</span>
          <h2>
            Le bon outil.
            <br />
            <span>Pour le bon besoin.</span>
          </h2>
        </div>
        <p>
          Vous avez une idée, un problème à résoudre ou un processus à améliorer
          ? Je vous accompagne pour en faire une solution utile et durable.
        </p>
      </div>
      <div className="service-grid">
        {services.map(({ icon: Icon, ...s }) => (
          <article className="service-card" key={s.category}>
            <div className="service-image">
              <Image
                src={`https://images.unsplash.com/${s.image}?auto=format&fit=crop&w=800&q=80`}
                alt={s.alt}
                fill
                sizes="(max-width: 800px) 100vw, 33vw"
              />
              <span className="image-icon">
                <Icon size={25} />
              </span>
            </div>
            <div className="service-body">
              <span className="eyebrow">{s.category}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>
                    <Check size={15} />
                    {item}
                  </li>
                ))}
              </ul>
              <a className="text-link" href="#contact">
                Discutons de votre besoin <ArrowUpRight size={17} />
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="bespoke-banner">
        <Layers3 size={34} />
        <div>
          <h3>Un logiciel métier sur mesure ?</h3>
          <p>
            CRM, facturation, gestion locative ou outils internes : centralisons
            vos données et simplifions vos opérations avec une application
            adaptée à votre façon de travailler.
          </p>
        </div>
        <a href="#contact" aria-label="Discuter d’un logiciel métier">
          <ArrowUpRight size={28} />
        </a>
      </div>
    </section>
  );
}
