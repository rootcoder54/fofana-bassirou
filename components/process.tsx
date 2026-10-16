import { MessagesSquare, PenTool, CodeXml, Rocket } from "lucide-react";
const steps = [
  {
    icon: MessagesSquare,
    title: "On échange",
    text: "Votre activité, vos utilisateurs et vos priorités. Nous définissons ensemble le périmètre et les objectifs du projet.",
  },
  {
    icon: PenTool,
    title: "On dessine",
    text: "Parcours, maquettes et choix techniques : vous visualisez la solution avant le développement.",
  },
  {
    icon: CodeXml,
    title: "Je construis",
    text: "Le produit prend forme par étapes, avec des démonstrations pour recueillir vos retours et ajuster les détails.",
  },
  {
    icon: Rocket,
    title: "On lance",
    text: "Tests, mise en ligne et prise en main. Nous préparons le lancement et les prochaines évolutions.",
  },
];
export default function Process() {
  return (
    <section id="methode" className="process-section">
      <div className="portfolio-container section-space">
        <div className="section-heading">
          <div>
            <span className="eyebrow">COMMENT ON TRAVAILLE ENSEMBLE</span>
            <h2>
              Une idée au départ.
              <br />
              <span>Un vrai produit à l’arrivée.</span>
            </h2>
          </div>
          <p>
            Un accompagnement à chaque étape pour avancer avec une vision claire
            du projet.
          </p>
        </div>
        <div className="process-grid">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <article key={title}>
              <div className="step-top">
                <Icon size={25} />
                <span>0{i + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
