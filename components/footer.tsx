import { ArrowUpRight, Github, Linkedin } from "lucide-react";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="portfolio-container footer-inner">
        <div>
          <a href="#accueil" className="footer-brand">
            Bassirou Fofana<span>.</span>
          </a>
          <p>Du web, du mobile et des idées qui prennent vie.</p>
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/rootcoder54"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Bassirou Fofana"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/bassirou-fofana-5186b71bb/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Bassirou Fofana"
          >
            <Linkedin size={20} />
          </a>
          <a href="#accueil">
            Retour en haut <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
      <div className="portfolio-container copyright">
        © {new Date().getFullYear()} Bassirou Fofana. Tous droits réservés.
      </div>
    </footer>
  );
}
