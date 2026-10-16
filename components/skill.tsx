import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiAngular,
  SiSpringboot,
  SiLaravel,
  SiPython,
  SiPostgresql,
  SiFlutter,
  SiN8N,
  SiOpenai,
} from "react-icons/si";
import { Database, Monitor, Server, Workflow } from "lucide-react";
const groups = [
  {
    icon: Monitor,
    title: "Interfaces & mobile",
    text: "Des parcours fluides, accessibles et agréables à utiliser.",
    tools: [
      { icon: SiReact, name: "React", color: "#087ea4" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiAngular, name: "Angular", color: "#dd2859" },
      { icon: SiFlutter, name: "Flutter", color: "#1685b5" },
    ],
  },
  {
    icon: Server,
    title: "Backend & API",
    text: "Une logique métier solide et des services bien connectés.",
    tools: [
      { icon: SiNodedotjs, name: "Node.js", color: "#50913d" },
      { icon: SiTypescript, name: "TypeScript", color: "#3178c6" },
      { icon: SiSpringboot, name: "Spring Boot", color: "#589832" },
      { icon: SiLaravel, name: "Laravel", color: "#e74637" },
    ],
  },
  {
    icon: Database,
    title: "Données & intelligence",
    text: "Des données structurées et des automatisations utiles.",
    tools: [
      { icon: SiPostgresql, name: "PostgreSQL", color: "#477a9c" },
      { icon: SiPython, name: "Python", color: "#b18516" },
      { icon: SiN8N, name: "n8n", color: "#d94c75" },
      { icon: SiOpenai, name: "OpenAI" },
    ],
  },
];
export default function Skill() {
  return (
    <section id="competence" className="skills-section">
      <div className="portfolio-container section-space">
        <div className="section-heading">
          <div>
            <span className="eyebrow">MA BOÎTE À OUTILS</span>
            <h2>
              La technique,
              <br />
              <span>au service de l’usage.</span>
            </h2>
          </div>
          <p>
            Je choisis les technologies selon les objectifs de votre projet :
            expérience utilisateur, évolutivité, maintenance et intégration à
            votre environnement.
          </p>
        </div>
        <div className="skills-grid">
          {groups.map(({ icon: Icon, title, text, tools }) => (
            <article className="skill-group" key={title}>
              <Icon className="group-icon" size={28} />
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="tool-grid">
                {tools.map(({ icon: Tool, name, ...tool }) => (
                  <div className="tool" key={name}>
                    <Tool
                      size={24}
                      style={{
                        color: "color" in tool ? tool.color : undefined,
                      }}
                    />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="stack-note">
          <Workflow size={18} /> Une vision complète : de l’interface à la base
          de données, jusqu’au déploiement.
        </p>
      </div>
    </section>
  );
}
