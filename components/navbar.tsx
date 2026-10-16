"use client";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Mode } from "./theme";
const links = [
  { href: "#services", label: "Services" },
  { href: "#competence", label: "Expertises" },
  { href: "#about", label: "À propos" },
  { href: "#methode", label: "Méthode" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="portfolio-container nav-inner">
        <a
          href="#accueil"
          className="brand"
          aria-label="Bassirou Fofana, accueil"
        >
          <span className="brand-mark">
            bf<span>.</span>
          </span>
          <span className="brand-name">
            BASSIROU
            <br />
            FOFANA
          </span>
        </a>
        <nav aria-label="Navigation principale" className="desktop-nav">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="nav-contact" href="#contact">
            Un projet ? <ArrowUpRight size={17} />
          </a>
          <Mode />
          <button
            className="mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Navigation mobile"
        >
          {[...links, { href: "#contact", label: "Contact" }].map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
              <ArrowUpRight size={16} />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
