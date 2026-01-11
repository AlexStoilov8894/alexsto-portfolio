// app/lib/projects.ts

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  year?: string;
  role?: string;
  services?: string[];
  cover: string;      // used on /projects grid
  gallery: string[];  // vertical gallery on /projects/[slug]
};

export const projects: Project[] = [
  {
    slug: "zdravec-protein",
    title: "Zdravec High Protein",
    subtitle: "Packaging + Marketing Campaign",
    description:
      "Modern, performance-driven packaging system that blends Zdravec’s heritage with a bold, fitness-inspired visual language.",
    year: "2024",
    role: "Graphic Designer",
    services: ["Packaging", "Art Direction", "Marketing Campaign"],
    cover: "/projects/zdravec-protein/cover.png",
    gallery: [
      "/projects/zdravec-protein/01.png",
      "/projects/zdravec-protein/02.png",
      "/projects/zdravec-protein/03.png",
      "/projects/zdravec-protein/04.png",
      "/projects/zdravec-protein/05.gif",
      "/projects/zdravec-protein/06.png",
      "/projects/zdravec-protein/07.png",
      "/projects/zdravec-protein/08.gif",
      "/projects/zdravec-protein/09.png",
      "/projects/zdravec-protein/10.png",
      "/projects/zdravec-protein/11.png",
    ],
  },
  {
    slug: "bulverde-brewing",
    title: " Bulverde Brewing Co",
    subtitle: "Brand Identity",
    description:
      "Bold brand identity blending craft brewing culture with authentic Texas character. Inspired by local heritage, designed to stand out across packaging, merchandise, and brand touchpoints.",
    year: "2023",
    role: "Graphic Designer",
    services: ["Brand Identity", "Packaging", "Art Direction"],
    cover: "/projects/bulverde/cover.png",
    gallery: [
      "/projects/bulverde/01.gif",
      "/projects/bulverde/02.png",
      "/projects/bulverde/03.png",
      "/projects/bulverde/04.png",
      "/projects/bulverde/05.png",
      "/projects/bulverde/06.png",
      "/projects/bulverde/07.png",
      "/projects/bulverde/08.png",
      "/projects/bulverde/09.png",
      "/projects/bulverde/15.png",
      "/projects/bulverde/10.png",
      "/projects/bulverde/11.png",
      "/projects/bulverde/12.png",
      "/projects/bulverde/13.png",
      "/projects/bulverde/14.png",
    ],
  },
  {
    slug: "gavrailovstudio",
    title: "Gavrailov Studio",
    subtitle: "Brand Identity",
    description:
      "As the company expanded its portfolio and services, strong visual identity designed to position Gavrailov Studio as a confident and versatile marketing studio.",
    year: "2023",
    role: "Graphic Designer",
    services: ["Brand Identity", "Packaging", "Art Direction"],
    cover: "/projects/gavrailovstudio/cover.png",
    gallery: [
      "/projects/gavrailovstudio/01.gif",
      "/projects/gavrailovstudio/02.png",
      "/projects/gavrailovstudio/03.png",
      "/projects/gavrailovstudio/04.png",
      "/projects/gavrailovstudio/05.png",
      "/projects/gavrailovstudio/06.png",
      "/projects/gavrailovstudio/07.png",
      "/projects/gavrailovstudio/08.png",
      "/projects/gavrailovstudio/09.gif",
      "/projects/gavrailovstudio/10.gif",
      "/projects/gavrailovstudio/11.png",
      "/projects/gavrailovstudio/12.png",
      "/projects/gavrailovstudio/13.png",
      "/projects/gavrailovstudio/14.png",
      "/projects/gavrailovstudio/15.png",
      "/projects/gavrailovstudio/16.png",
      "/projects/gavrailovstudio/17.png",
    ],
  },
    {
    slug: "dzdetailing",
    title: "DZ Detailing",
    subtitle: "Brand Identity",
    description:
      "Bold and modern brand identity for an automotive detailing studio, built around precision, performance, and a strong visual presence.",
    year: "2024",
    role: "Graphic Designer",
    services: ["Brand Identity", "Art Direction"],
    cover: "/projects/dzdetailing/cover.png",
    gallery: [
      "/projects/dzdetailing/01.gif",
      "/projects/dzdetailing/02.png",
      "/projects/dzdetailing/03.png",
      "/projects/dzdetailing/04.png",
      "/projects/dzdetailing/05.png",
      "/projects/dzdetailing/06.png",
      "/projects/dzdetailing/07.png",
      "/projects/dzdetailing/08.png",
      "/projects/dzdetailing/09.png",
      "/projects/dzdetailing/10.png",
      "/projects/dzdetailing/11.png",
      "/projects/dzdetailing/12.png",
      "/projects/dzdetailing/13.png",
      "/projects/dzdetailing/14.png",
      "/projects/dzdetailing/15.png",
    ],
  },
  {
    slug: "quantum-freight",
    title: "Quantum Freight",
    subtitle: "Brand Identity",
    description:
      "Clean, modern brand identity designed to communicate speed, reliability, and precision to position Quantum Freight as a forward-thinking logistics partner.",
    year: "2023",
    role: "Designer",
    services: ["Brand Identity", "Art Direction"],
    cover: "/projects/quantumfreight/cover.png",
    gallery: [
      "/projects/quantumfreight/01.gif",
      "/projects/quantumfreight/02.png",
      "/projects/quantumfreight/03.png",
      "/projects/quantumfreight/04.png",
      "/projects/quantumfreight/05.png",
      "/projects/quantumfreight/06.png",
      "/projects/quantumfreight/07.png",
      "/projects/quantumfreight/08.png",
      "/projects/quantumfreight/09.png",
      "/projects/quantumfreight/10.png",
      "/projects/quantumfreight/11.png",
      "/projects/quantumfreight/12.png",
      "/projects/quantumfreight/13.png",
      "/projects/quantumfreight/14.png",
      "/projects/quantumfreight/15.png",
    ],
  },
  {
    slug: "chervenatastena",
    title: "Chervenata Stena",
    subtitle: "Brand Identity",
    description:
      "Visual identity inspired by nature, biodiversity, and cultural heritage, designed to represent Chervenata Stena as a protected natural destination with strong local character.",
    year: "2025",
    role: "Designer",
    services: ["Brand Identity", "Art Direction"],
    cover: "/projects/chervenatastena/cover.png",
    gallery: [
      "/projects/chervenatastena/01.gif",
      "/projects/chervenatastena/02.png",
      "/projects/chervenatastena/03.png",
      "/projects/chervenatastena/04.png",
      "/projects/chervenatastena/05.gif",
      "/projects/chervenatastena/06.png",
      "/projects/chervenatastena/07.png",
      "/projects/chervenatastena/08.png",
      "/projects/chervenatastena/09.png",
      "/projects/chervenatastena/10.png",
      "/projects/chervenatastena/11.png",
      "/projects/chervenatastena/12.png",
      "/projects/chervenatastena/13.png",
      "/projects/chervenatastena/14.png",
      "/projects/chervenatastena/15.png",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
