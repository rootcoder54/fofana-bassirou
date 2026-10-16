import {
  ArrowUpRight,
  MessageSquare,
  Lightbulb,
  Handshake,
} from "lucide-react";
import { ContactForm } from "./contact-form";
export default function Contact() {
  return (
    <section
      id="contact"
      className="portfolio-container section-space contact-grid"
    >
      <div className="contact-copy">
        <span className="eyebrow">ET SI ON CONSTRUISAIT LA SUITE ?</span>
        <h2>
          Votre prochain
          <br />
          projet commence
          <br />
          <span>par un échange.</span>
        </h2>
        <p>
          Une idée déjà précise ou un besoin à clarifier ? Présentez-moi votre
          activité, vos objectifs et vos contraintes. Nous pourrons identifier
          la meilleure façon d’avancer.
        </p>
        <div className="contact-reasons">
          <span>
            <Lightbulb size={21} /> Une idée à transformer en produit
          </span>
          <span>
            <MessageSquare size={21} /> Un besoin technique à éclaircir
          </span>
          <span>
            <Handshake size={21} /> Une collaboration à imaginer
          </span>
        </div>
        <a
          className="text-link"
          href="https://www.linkedin.com/in/bassirou-fofana-5186b71bb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Retrouvez-moi aussi sur LinkedIn <ArrowUpRight size={18} />
        </a>
      </div>
      <ContactForm />
    </section>
  );
}
