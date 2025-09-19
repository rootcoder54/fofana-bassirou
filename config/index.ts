import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "FOFANA Bassirou - Développeur fullstack",
  description: "Portfolio de FOFANA Bassirou, développeur web et mobile",
  icons: {
    icon: "/favicon.svg"
  },
  keywords: [
    // Tech stack
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Shadcn UI",
    "Radix UI",
    "Zustand",
    "Zod",
    "Prisma",
    "PostgreSQL",
    "SQL",
    "Convex",
    "Blocknote",
    "Edge Store",
    "Lucide React",
    "Next Themes",
    "Sonner",
    "PostCSS",
    "Prettier",
    "ESLint",
    "React DOM",
    "Tailwindcss Animate",

    // Services
    "développement web",
    "développement mobile",
    "développement d'application",
    "développement SaaS",
    "agence de développement",
    "digitalisation",
    "création de site web",
    "création d'application mobile",
    "agence digitale",

    // Profils
    "développeur freelance",
    "freelance web",
    "freelance mobile",

    // IA et automatisation
    "intelligence artificielle",
    "IA",
    "agent IA",
    "automatisation",
    "n8n",

    // Bonus SEO
    "site vitrine",
    "application métier",
    "notion clone",
    "UI/UX",
    "front-end",
    "back-end",
    "full-stack"
  ],
  authors: {
    name: "Fofana Bassirou",
    url: "https://github.com/rootcoder54"
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://fofanabassirou.vercel.app", // remplace par ton domaine
    siteName: "Fofana Bassirou",
    title: "Agence-one | Agence de développement web, mobile et logiciel",
    description:
      "Portfolio de FOFANA Bassirou, développeur web et mobile",
    images: [
      {
        url: "https://fofanabassirou.vercel.app/ia.png", // remplace par ton image OG
        width: 1200,
        height: 630,
        alt: "Aperçu du site de FOFANA Bassirou - développeur web et mobile"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@agenceone", // si tu as un compte Twitter pro
    creator: "@rootcoder54", // ton compte perso si souhaité
    title: "Agence-one | Développement web et mobile",
    description:
      "Agence-one est une agence digitale spécialisée dans le développement sur mesure d'applications web, mobiles et desktop.",
    images: ["https://agence-one.vercel.app/ia.png"] // même image que OpenGraph
  },
  facebook: {
    appId: "54dsqfd78sdffs"
  }
} as const;

export const links = {
  sourceCode: "https://github.com/rootcoder54"
} as const;
