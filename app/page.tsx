"use client";

import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import GradientBlinds from "./blinds";
import { usePathname } from "next/navigation";

type FeaturedProject = {
  slug: string;
  title: string;
  subtitle: string;
  mediaUrl: string;      // background
};

type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
};

const featuredProjects: FeaturedProject[] = [
  {
    slug: "dzdetailing",
    title: "DZ Detailing",
    subtitle: "Brand Identity",
    mediaUrl: "/projects/hero/dzdetailing.png",
  },
  {
    slug: "zdravec-protein",
    title: "Zdravec High Protein",
    subtitle: "Packaging + Marketing Campaign",
    mediaUrl: "/projects/hero/zdravec-hero.png",
  },
  {
    slug: "bulverde-brewing",
    title: "Bulverde Brewing Co.",
    subtitle: "Brand Identity",
    mediaUrl: "/projects/hero/bulverde-hero.png",
  },
  {
    slug: "quantum-freight",
    title: "Quantim Freight",
    subtitle: "Brand Identity",
    mediaUrl: "/projects/hero/quantumfreight-hero.png",
  },
  {
    slug: "chervenatastena",
    title: "Chervenata Stena",
    subtitle: "Brand Identity",
    mediaUrl: "/projects/hero/chervenatastena-hero.png",
  },
];



const testimonials: Testimonial[] = [
  {
    name: "Sylvia Gavrailova",
    role: "Marketing Manager",
    company: "Gavrailov Studio",
    quote:
      "I have been working with Alex for years on various projects. I have always enjoyed his professional attitude, attention to detail, and ability to find the best possible solution. Working with him is smooth and easy, and things happen intuitively—just as they should.",
  },
  {
    name: "Galina Spiridonova",
    role: "Marketing Lead",
    company: "Bel Groups",
    quote:
      "Working with Alexander has been both easy and highly effective. He understands the brands we manage and consistently translates marketing goals into clear, well-crafted visual solutions. Whether it’s packaging, print materials, or campaign visuals, we can always rely on his professionalism, attention to detail, and ability to meet deadlines.",
  },
  {
    name: "Gal Nikolova",
    role: "Founder",
    company: "Give it Socks",
    quote:
      "One of the greatest designers I have worked with in the last 6 years! I know good design when I see one. Bravo, Alex! ",
  },
  {
    name: "Harry Solanki",
    role: "Product Owner",
    company: "ArtBroods",
    quote:
      "Alex, I would personally like to thank you for delivering such quality logo's for my startup. You've made great commitment to complete project on time as well. Thank you from @artbroods team.",
  },
  {
    name: "Tsvetelina Ilcheva",
    role: "Owner",
    company: "LaFlor Hair Salon",
    quote:
      "With flair and attention to detail! Thank you for your professionalism and creativity!",
  },
  {
    name: "Alexander Danchev",
    role: "CEO",
    company: "Shondy's Garage",
    quote:
      "Alexander perfectly captured the energy and spirit of the M Weekend event. From the branding to all visual materials, everything was executed at a very high level. His work helped make the event visually strong, recognizable, and memorable for both participants and the audience.",
  },
];

const clientLogos = [
  { name: "Car Profi", src: "/logos/car-profi.png" },
  { name: "Andonovo", src: "/logos/andonovo.png" },
  { name: "Lumibee", src: "/logos/lumibee.png" },
  { name: "Gavrailov Studio", src: "/logos/gavrailov-studio.png" },
  { name: "Shondy's Garage", src: "/logos/shondy-garage.png" },
  { name: "Artbroods", src: "/logos/artbroods.png" },
  { name: "EGE Group", src: "/logos/ege-group.png" },
  { name: "Sweet & Salty Shop", src: "/logos/sweet-and-salty.png" },
  { name: "EDEA", src: "/logos/edea.png" },
  { name: "Bel Groups", src: "/logos/bel-groups.png" },
  { name: "Zdravets", src: "/logos/zdravets.png" },
  { name: "Elena", src: "/logos/elena.png" },
  { name: "Sibila 2000", src: "/logos/sibila-2000.png" },
  { name: "Systematics", src: "/logos/systematics.png" },
  { name: "Mart Export", src: "/logos/mart-export.png" },
  { name: "Scubajet", src: "/logos/scubajet.png" },
  { name: "Paolla", src: "/logos/paolla.png" },
  { name: "Tsiron", src: "/logos/tsiron.png" },
  { name: "Velchev Studio", src: "/logos/velchev-studio.png" },
  { name: "HM by Megaclean", src: "/logos/megaclean.png" },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-black text-white font-body">

      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#0b0b0b]" />
        
        <div className="absolute inset-0 opacity-75">
                  <GradientBlinds
                    gradientColors={['#FF0303', '#ff7a7a']}
                    angle={40}
                    noise={0.4}
                    blindCount={8}
                    blindMinWidth={30}
                    spotlightRadius={0.3}
                    spotlightSoftness={.75}
                    spotlightOpacity={1}
                    mouseDampening={0.05}
                    distortAmount={60}
                    shineDirection="left"
                    mixBlendMode="lighten"
                  />
                </div>
        <div className="relative w-full max-w-4xl text-center">

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-heading text-7xl sm:text-8xl leading-[0.9] tracking-tight"
          >
            NICHE DIGITAL SOLUTIONS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-white/70"
          >
          Alexsto creates niche digital solutions for brands that want more than just good design. 
          By combining precision, creativity, and strategy, I build distinctive identities that stand 
          out and leave a lasting impression.

          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex justify-center gap-4"
          >
            <Link
              href="/projects"
              className="rounded-full bg-brand-red px-6 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              Contact
            </Link>
          </motion.div>
        </div>
      </section>
{/* HOW CAN I HELP YOU (scroll-driven horizontal slider) */}
<section className="relative py-24 border-b border-white/10">
  <div className="mx-auto max-w-5xl px-6 text-center">
    <p className="mx-auto w-fit text-xs uppercase tracking-[0.25em] text-white/50">
      Services
    </p>
    <h2 className="mt-4 font-heading text-5xl sm:text-6xl leading-[0.9] tracking-tight">
      How can I help you?
    </h2>
    <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-white/70">
      Turn ideas into clear, impactful design solutions. My work focuses on building strong 
      identities and digital experiences that feel intentional, consistent, and easy to use.
    </p>
  </div>

  <div className="mt-12">
    <ServicesSlider />
  </div>

  <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-brand-black to-transparent" />
  <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-brand-black to-transparent" />
</section>



      {/* FEATURED PROJECTS */}
      <FeaturedAppleStage projects={featuredProjects} />

      {/* TESTIMONIALS */}
      <TestimonialsSection testimonials={testimonials} />

      {/* CLIENT LOGOS */}
      <ClientLogosSection logos={clientLogos} />

      {/* CONTACT */}
      <ContactSection />
    </main>
  );
}

/* --------------------------- Nav + small components --------------------------- */

function TopNav() {
  const [open, setOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
  document.body.style.overflow = open ? "hidden" : "";
  return () => {
    document.body.style.overflow = "";
  };
}, [open]);


  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Full-width blur/backdrop */}
      <div className="absolute inset-0 bg-brand-black/55 backdrop-blur border-b border-white/10" />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/brand/logo-red.svg"
              alt="Alexsto"
              className="h-12 sm:h-14 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-2 text-sm">
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          {/* Mobile burger */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-full bg-white/5 px-6 py-3 text-sm text-white hover:bg-white/10"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-4 w-5">
              <span
                className={[
                  "absolute left-0 top-0 h-[2px] w-5 bg-white transition",
                  open ? "translate-y-[7px] rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-[7px] h-[2px] w-5 bg-white transition",
                  open ? "opacity-0" : "opacity-100",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-[14px] h-[2px] w-5 bg-white transition",
                  open ? "-translate-y-[7px] -rotate-45" : "",
                ].join(" ")}
              />
            </span>
          </button>
        </div>
      </div>

    {/* Fullscreen mobile menu */}
<div
  className={[
    "fixed inset-0 z-40 lg:hidden transition",
    open ? "pointer-events-auto" : "pointer-events-none",
  ].join(" ")}
>
  {/* Background */}
  <div
    className={[
      "absolute inset-0 bg-brand-black/95 backdrop-blur transition-opacity duration-300",
      open ? "opacity-100" : "opacity-0",
    ].join(" ")}
  />

  {/* Close button (now also fades/disables) */}
  <button
    type="button"
    aria-label="Close menu"
    onClick={() => setOpen(false)}
    className={[
      "absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 transition",
      open ? "opacity-100" : "opacity-0",
    ].join(" ")}
  >
    <span className="relative block h-5 w-5">
      <span className="absolute left-0 top-1/2 h-[2px] w-5 -translate-y-1/2 rotate-45 bg-white" />
      <span className="absolute left-0 top-1/2 h-[2px] w-5 -translate-y-1/2 -rotate-45 bg-white" />
    </span>
  </button>

  {/* Logo */}
<div
  className={[
    "absolute left-1/2 top-10 -translate-x-1/2 transition-opacity duration-300",
    open ? "opacity-100" : "opacity-0",
  ].join(" ")}
>
  <img
    src="/brand/logo-red.svg"
    alt="Alexsto"
    className="h-8 w-auto"
  />
</div>


  {/* Menu content */}
  <div
    className={[
      "relative flex h-full flex-col items-center justify-center text-center transition-all duration-300",
      open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
    ].join(" ")}
  >
    <nav className="flex flex-col gap-8">
      <MobileNavLink href="/projects" onClick={() => setOpen(false)}>
        Projects
      </MobileNavLink>
      <MobileNavLink href="/about" onClick={() => setOpen(false)}>
        About
      </MobileNavLink>
      <MobileNavLink href="#contact" onClick={() => setOpen(false)}>
        Contact
      </MobileNavLink>
    </nav>

    <div className="mt-12">
      <Link
        href="/projects"
        onClick={() => setOpen(false)}
        className="inline-flex items-center justify-center rounded-full bg-brand-red px-8 py-4 text-sm font-medium text-white hover:bg-brand-red/90 transition"
      >
        View Projects
      </Link>
    </div>
  </div>
</div>

    </header>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="font-heading text-4xl sm:text-5xl tracking-tight text-white/85 hover:text-brand-red transition"
    >
      {children}
    </Link>
  );
}


function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const [activeAnchor, setActiveAnchor] = useState(false);

  useEffect(() => {
    if (href !== "#contact") return;

    const update = () => {
      const el = document.getElementById("contact");
      if (!el) return setActiveAnchor(false);
      const r = el.getBoundingClientRect();
      const inView =
        r.top < window.innerHeight * 0.5 && r.bottom > window.innerHeight * 0.25;
      setActiveAnchor(inView);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [href]);

  const isActive =
    href === "#contact" ? activeAnchor : pathname === href;

  return (
    <Link
      href={href}
      className={[
        "rounded-full px-3 py-1.5 transition hover:bg-white/10",
        isActive ? "text-brand-red" : "text-white/70 hover:text-white",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

function ServiceCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7 text-left">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,3,3,0.14),transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/30">
            {icon}
          </div>
          <p className="font-heading text-2xl leading-none">{title}</p>
        </div>

        <p className="mt-4 text-sm text-white/70 leading-relaxed">{text}</p>

        <div className="mt-6 h-px w-full bg-white/10" />

        <p className="mt-4 text-xs uppercase tracking-[0.25em] text-white/55">
          Learn more →
        </p>
      </div>
    </div>
  );
}

function IconBrand() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 7h10v10H7V7Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 4h16v16H4V4Z" stroke="currentColor" strokeWidth="1.6" opacity="0.6" />
    </svg>
  );
}
function IconPrint() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 8V4h10v4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 17v3h10v-3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M6 10h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        opacity="0.8"
      />
    </svg>
  );
}
function IconUI() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10h8" stroke="currentColor" strokeWidth="1.6" opacity="0.8" />
      <path d="M8 14h5" stroke="currentColor" strokeWidth="1.6" opacity="0.6" />
    </svg>
  );
}
function IconWeb() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 5h16v14H4V5Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 8h16" stroke="currentColor" strokeWidth="1.6" opacity="0.7" />
      <path
        d="M7 6.5h.01M9 6.5h.01M11 6.5h.01"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* --------------------------- Featured Projects (vertical, full-screen) --------------------------- */

/* =========================
   APPLE SCROLL — Featured Projects (refined)
   - No black buffer screens
   - Projects last longer (slower)
   ========================= */

function FeaturedAppleStage({ projects }: { projects: FeaturedProject[] }) {
  const stageRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  // ✅ TUNE HERE (higher = slower projects)
  const projectScreens = 1.9; // try 1.6–2.4 depending on taste/trackpad

  const totalScreens = projects.length * projectScreens;

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const el = stageRef.current;
      if (!el) return;

      const vh = window.innerHeight;
      const rect = el.getBoundingClientRect();
      const total = Math.max(1, el.offsetHeight - vh);
      const scrolled = clamp(-rect.top, 0, total);

      setProgress(scrolled / total);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollToProject = (i: number) => {
    const el = stageRef.current;
    if (!el) return;

    const vh = window.innerHeight;
    const total = Math.max(1, el.offsetHeight - vh);

    const startScreens = i * projectScreens;
    const targetProgress = startScreens / totalScreens;
    const targetInside = targetProgress * total;

    const stageTop = window.scrollY + el.getBoundingClientRect().top;
    window.scrollTo({ top: stageTop + targetInside, behavior: "smooth" });
  };

  return (
    <section
      ref={stageRef as any}
      className="relative bg-brand-black border-y border-white/10"
      style={{ height: `${totalScreens * 100}svh` }}
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <AppleFeaturedHeader progress={progress} />

        <div className="absolute inset-0">
          {projects.map((p, i) => (
            <AppleFeaturedSlide
              key={p.slug}
              project={p}
              index={i}
              progress={progress}
              projectScreens={projectScreens}
              totalScreens={totalScreens}
            />
          ))}
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {projects.map((_, i) => {
            const isActive = isProjectActive(progress, projectScreens, totalScreens, i);
            return (
              <button
                key={i}
                onClick={() => scrollToProject(i)}
                className={[
                  "h-2 rounded-full transition",
                  isActive ? "w-8 bg-brand-red" : "w-2 bg-white/35 hover:bg-white/55",
                ].join(" ")}
                aria-label={`Go to project ${i + 1}`}
              />
            );
          })}
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 text-xs text-white/55">
          Scroll ↓
        </div>
      </div>
    </section>
  );
}

function AppleFeaturedHeader({ progress }: { progress: number }) {
  // Fade header during the first ~20% of the whole section
  const t = clamp01(progress / 0.2);
  const eased = smoothstep(0, 1, t);

  return (
    <div
      className="pointer-events-none absolute left-0 right-0 top-0 z-30"
      style={{
        opacity: 1 - eased,
        transform: `translate3d(0, ${lerp(0, -10, eased)}px, 0)`,
      }}
    >
    
    </div>
  );
}

function AppleFeaturedSlide({
  project,
  index,
  progress,
  projectScreens,
  totalScreens,
}: {
  project: FeaturedProject;
  index: number;
  progress: number;
  projectScreens: number;
  totalScreens: number;
}) {
  const startScreens = index * projectScreens;
  const endScreens = (index + 1) * projectScreens;

  const start = startScreens / totalScreens;
  const end = endScreens / totalScreens;

  const local = clamp01((progress - start) / Math.max(1e-6, end - start));

  // ✅ slower fade: longer “hold” so it doesn’t disappear fast
  const fadeIn = smoothstep(0.0, 0.22, local);
  const fadeOut = 1 - smoothstep(0.78, 1.0, local);
  const strength = fadeIn * fadeOut;

  const opacity = lerp(0.0, 1.0, strength);
  const y = lerp(18, 0, strength);
  const scale = lerp(0.985, 1.0, strength);

  const isClickable = opacity > 0.8;

  return (
    <div
      className="absolute inset-0"
      style={{
        opacity,
        transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
        zIndex: Math.round(opacity * 100) + index,
        pointerEvents: isClickable ? "auto" : "none",
      }}
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#0b0b0b]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,3,3,0.10),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] topo" />

      {/* Hero image (mediaUrl) */}
     {/* Fullscreen hero image */}
<div className="absolute inset-0">
  <img
    src={project.mediaUrl}
    alt={project.title}
    className="h-full w-full object-cover"
    loading="lazy"
  />
</div>

      {/* Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />

      {/* Text */}
      <div className="relative mx-auto flex h-[100svh] max-w-5xl flex-col items-center justify-end px-6 pb-16 text-center">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-white/70">
            Featured Project
          </p>
          <h3 className="mt-4 font-heading text-6xl sm:text-7xl leading-[0.9]">
            {project.title}
          </h3>
          <p className="mt-4 text-sm sm:text-base text-white/80">
            {project.subtitle}
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href={`/projects/${project.slug}`}
              className="rounded-full bg-brand-red px-6 py-3 text-sm font-medium text-white hover:bg-brand-red/90 transition"
            >
              See more
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
            >
              All projects
            </Link>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-0 right-0 top-0 h-16 bg-gradient-to-b from-brand-black to-transparent" />
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-16 bg-gradient-to-t from-brand-black to-transparent" />
    </div>
  );
}

function isProjectActive(
  progress: number,
  projectScreens: number,
  totalScreens: number,
  i: number
) {
  const start = (i * projectScreens) / totalScreens;
  const end = ((i + 1) * projectScreens) / totalScreens;
  return progress >= start && progress < end;
}

/* helpers */
function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}
function clamp01(v: number) {
  return clamp(v, 0, 1);
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
function smoothstep(edge0: number, edge1: number, x: number) {
  const t = clamp01((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}



/* --------------------------- Testimonials --------------------------- */

function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="relative py-24 border-b border-white/10">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="mx-auto w-fit text-xs uppercase tracking-[0.25em] text-white/50">
          Testimonials
        </p>
        <h2 className="mt-4 font-heading text-5xl sm:text-6xl leading-[0.9] tracking-tight">
          What clients say about me
        </h2>

      </div>

      <div className="mt-12">
        <TestimonialsSlider items={testimonials} />
      </div>

      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-brand-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-brand-black to-transparent" />
    </section>
  );
}

function TestimonialsSlider({ items }: { items: Testimonial[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "x",
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  const [selected, setSelected] = useState(0);
  const wheelAcc = useRef(0);
  const lastWheelTs = useRef(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;

    const viewport = emblaApi.rootNode();
    const threshold = 110;
    const idleResetMs = 140;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
      e.preventDefault();

      const now = performance.now();
      if (now - lastWheelTs.current > idleResetMs) wheelAcc.current = 0;
      lastWheelTs.current = now;

      wheelAcc.current += e.deltaY;

      if (wheelAcc.current > threshold) {
        wheelAcc.current = 0;
        emblaApi.scrollNext();
      } else if (wheelAcc.current < -threshold) {
        wheelAcc.current = 0;
        emblaApi.scrollPrev();
      }
    };

    viewport.addEventListener("wheel", onWheel, { passive: false });
    return () => viewport.removeEventListener("wheel", onWheel);
  }, [emblaApi]);

  const loopItems = useMemo(() => items, [items]);

  return (
    <div className="relative">
      <div className="mx-auto max-w-6xl px-6">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {loopItems.map((t, i) => {
              const isActive = i === selected;
              return (
                <div
                  key={`${t.name}-${i}`}
                  className="flex-[0_0_85%] sm:flex-[0_0_60%] lg:flex-[0_0_45%] px-3"
                >
                  <motion.div
                    initial={false}
                    animate={{
                      scale: isActive ? 1 : 0.94,
                      opacity: isActive ? 1 : 0.55,
                    }}
                    transition={{ duration: 0.25 }}
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,3,3,0.14),transparent_55%)]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

                    <div className="relative p-8 sm:p-10">
                      <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                        Client testimonial
                      </p>

                      <p className="mt-5 text-xl sm:text-2xl leading-snug text-white">
                        “{t.quote}”
                      </p>

                      <div className="mt-8 h-px w-full bg-white/10" />

                      <div className="mt-6">
                        <p className="text-sm font-medium text-white/90">
                          {t.name}
                        </p>
                        <p className="text-sm text-white/60">
                          {t.role} · {t.company}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ✅ Active dot is brand red (already) */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {items.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => emblaApi?.scrollTo(dotIndex)}
              className={[
                "h-2 rounded-full transition",
                selected === dotIndex
                  ? "w-8 bg-brand-red"
                  : "w-2 bg-white/35 hover:bg-white/55",
              ].join(" ")}
              aria-label={`Go to testimonial ${dotIndex + 1}`}
            />
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-white/55">
          Scroll to change testimonial
        </p>
      </div>
    </div>
  );
}

function ServicesSlider() {
  const services = useMemo(
    () => [
      {
        title: "Brand Identity",
        text: "Logo systems, typography, color, and guidelines—built for consistency across every touchpoint.",
        icon: <IconBrand />,
      },
      
      {
        title: "Print & Packaging",
        text: "Shelf-ready packaging, print collateral, and production-friendly layouts with strong hierarchy.",
        icon: <IconPrint />,
      },
      
      {
        title: "Social Media Design",
        text: "Engaging social media visuals that strengthen brand presence and communication across platforms.",
        icon: <IconWeb />,
      },
      
      {
        title: "UI & Web Design",
        text: "Modern user interfaces and websites that combine visual clarity with seamless user experience.",
        icon: <IconUI />,
      },
    
    ],
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "x",
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  const [selected, setSelected] = useState(0);
  const wheelAcc = useRef(0);
  const lastWheelTs = useRef(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Scroll wheel drives horizontal movement (same pattern as testimonials)
  useEffect(() => {
    if (!emblaApi) return;

    const viewport = emblaApi.rootNode();
    const threshold = 110; // bigger = slower
    const idleResetMs = 140;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
      e.preventDefault();

      const now = performance.now();
      if (now - lastWheelTs.current > idleResetMs) wheelAcc.current = 0;
      lastWheelTs.current = now;

      wheelAcc.current += e.deltaY;

      if (wheelAcc.current > threshold) {
        wheelAcc.current = 0;
        emblaApi.scrollNext();
      } else if (wheelAcc.current < -threshold) {
        wheelAcc.current = 0;
        emblaApi.scrollPrev();
      }
    };

    viewport.addEventListener("wheel", onWheel, { passive: false });
    return () => viewport.removeEventListener("wheel", onWheel);
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="mx-auto max-w-6xl px-6">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {services.map((s, i) => {
              const isActive = i === selected;
              return (
                <div
                  key={s.title}
                  className="flex-[0_0_88%] sm:flex-[0_0_62%] lg:flex-[0_0_40%] px-3"
                >
                  <motion.div
                    initial={false}
                    animate={{
                      scale: isActive ? 1 : 0.94,
                      opacity: isActive ? 1 : 0.55,
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <ServiceCard icon={s.icon} title={s.title} text={s.text} />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {services.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => emblaApi?.scrollTo(dotIndex)}
              className={[
                "h-2 rounded-full transition",
                selected === dotIndex
                  ? "w-8 bg-brand-red"
                  : "w-2 bg-white/35 hover:bg-white/55",
              ].join(" ")}
              aria-label={`Go to service ${dotIndex + 1}`}
            />
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-white/55">
          Explore my core services above.
        </p>
      </div>
    </div>
  );
}


/* --------------------------- Client logos / Contact / Footer (unchanged) --------------------------- */

function ClientLogosSection({
  logos,
}: {
  logos: { name: string; src: string }[];
}) {
  // duplicate for seamless loop
  const loop = [...logos, ...logos];

  return (
    <section className="relative py-20 border-b border-white/10 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="mx-auto w-fit text-xs uppercase tracking-[0.25em] text-white/50">
          Clients
        </p>
        <h2 className="mt-4 font-heading text-4xl sm:text-5xl leading-[0.9] tracking-tight">
          Brands I’ve worked with
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base text-white/70">
          A selection of brands I’ve collaborated with.
        </p>
      </div>

      <div className="mt-12 relative">
        {/* side fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-brand-black to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-brand-black to-transparent z-10" />

        {/* marquee */}
        <div className="overflow-hidden">
          <div className="ticker flex w-max items-center gap-6 px-6 hover:[animation-play-state:paused]">
            {loop.map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex h-32 w-64 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4"
                title={logo.name}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-28 w-auto opacity-65 grayscale transition hover:opacity-100 hover:grayscale-0"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-12 items-start">
        <div className="lg:col-span-5 lg:col-start-2 text-center lg:text-left">
          <p className="mx-auto lg:mx-0 w-fit text-xs uppercase tracking-[0.25em] text-white/50">
            Contact
          </p>
          <h2 className="mt-4 font-heading text-5xl sm:text-6xl leading-[0.9] tracking-tight">
            Let’s work together.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-white/70">
            Send a short message outlining your project goals and timeline. I’ll review the details and respond with a clear plan and next steps.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
            <span className="h-2 w-2 rounded-full bg-brand-red" />
            <p className="text-sm text-white/70">
              Replies within 24–48 hours
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
                    <form action="/send-mail.php" method="POST" className="grid gap-4">
            <input type="hidden" name="source" value="homepage" />

            <Field label="Name">
              <input
                name="name"
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-white/20"
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </Field>

            <Field label="Email">
              <input
                name="email"
                type="email"
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-white/20"
                placeholder="you@email.com"
                autoComplete="email"
                required
              />
            </Field>

            <Field label="Message">
              <textarea
                name="message"
                className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-white/20"
                placeholder="Tell me about your project..."
                required
              />
            </Field>

            <button
              type="submit"
              className="mt-2 rounded-full bg-brand-red px-6 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              Send message
            </button>
          </form>

          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className="text-xs uppercase tracking-[0.25em] text-white/50">
        {label}
      </span>
      {children}
    </label>
  );
}

