import Image from "next/image";
import {
  ArrowUpRight,
  CheckCheck,
  Github,
  Linkedin,
  MapPin,
} from "lucide-react";
export default function About() {
  return (
    <section
      id="about"
      className="portfolio-container section-space about-grid"
    >
      <div className="about-visual">
        <Image
          src="https://images.unsplash.com/photo-1607799632518-da91dd151b38?auto=format&fit=crop&w=900&q=85"
          alt="Écrans de développement dans un espace de travail, illustration de mon métier"
          fill
          sizes="(max-width: 800px) 100vw, 42vw"
        />
        <div className="about-photo-note">
          <span>LE GOÛT DE CONSTRUIRE</span>
          <strong>
            Du code.
            <br />
            Et du sens.
          </strong>
        </div>
        <span className="photo-credit">
          Illustration · environnement de développement
        </span>
      </div>
      <div className="about-copy">
        <span className="eyebrow">LE DÉVELOPPEUR DERRIÈRE L’ÉCRAN</span>
        <h2>
          Bassirou Fofana.
          <br />
          <span>Enchanté.</span>
        </h2>
        <p>
          Développeur full-stack et fondateur d’Agence One, j’accompagne les
          entrepreneurs et les entreprises dans la création de leurs outils
          numériques.
        </p>
        <p>
          Ce qui m’intéresse : comprendre votre métier, résoudre un problème
          concret et concevoir une solution que vous aurez plaisir à utiliser.
          Mon travail relie le web, le mobile et l’intelligence artificielle
          pour rendre vos idées opérationnelles.
        </p>
        <div className="about-values">
          <span>
            <CheckCheck size={19} /> Un interlocuteur de la conception au
            déploiement
          </span>
          <span>
            <CheckCheck size={19} /> Des échanges clairs et des étapes visibles
          </span>
          <span>
            <CheckCheck size={19} /> Du code maintenable, pensé pour évoluer
          </span>
        </div>
        <span className="location">
          <MapPin size={17} /> Mali · Collaboration à distance
        </span>
        <div className="social-row">
          <a
            href="https://github.com/rootcoder54"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={19} /> GitHub <ArrowUpRight size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/bassirou-fofana-5186b71bb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={19} /> LinkedIn <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
