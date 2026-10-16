import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Github,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section id="accueil" className="portfolio-container hero-grid">
      <div className="hero-copy">
        <span className="eyebrow">
          <span className="status-dot" /> Développeur indépendant · Fondateur
          d’Agence One
        </span>
        <h1>
          Vos idées.
          <br />
          Mon code.
          <br />
          <span>Du concret.</span>
        </h1>
        <p className="hero-intro">
          Moi, c’est <strong>Bassirou Fofana.</strong> Je conçois des
          expériences web, des applications mobiles et des solutions IA qui
          simplifient le quotidien de votre entreprise.
        </p>
        <div className="button-row">
          <a className="action-button" href="#services">
            Découvrir mon expertise <ArrowUpRight size={19} />
          </a>
          <a className="text-link" href="#contact">
            Parlons de votre projet <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="hero-meta">
          <span>
            <MapPin size={16} /> Basé au Mali, ouvert sur le monde
          </span>
          <a
            href="https://github.com/rootcoder54"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} /> Mon GitHub <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="photo-label">
          <span className="status-dot" /> De l’idée à la mise en ligne
        </div>
        <Image
          src="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?auto=format&fit=crop&w=1100&q=85"
          alt="Espace de développement avec écrans et poste de travail"
          fill
          priority
          sizes="(max-width: 800px) 100vw, 48vw"
          className="hero-photo"
        />
        <div className="visual-caption">
          <span>CRÉER. CONNECTER. SIMPLIFIER.</span>
          <p>
            La technologie au service
            <br />
            de vos ambitions.
          </p>
        </div>
        <div className="floating-note">
          <Braces size={30} />
          <div>
            <strong>Full-stack, de A à Z</strong>
            <span>Design · Développement · Déploiement</span>
          </div>
          <Sparkles size={19} />
        </div>
      </div>
      <a className="scroll-cue" href="#services">
        <ArrowDown size={16} /> Explorer le portfolio
      </a>
    </section>
  );
}
