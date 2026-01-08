// app/about/page.tsx
import Link from "next/link";

const values = [
  {
    title: "Precision",
    desc: "Details matter. Typography, spacing, hierarchy, and finish are treated as craft.",
  },
  {
    title: "Creativity",
    desc: "Every concept starts from a blank page — no templates, no shortcuts.",
  },
  {
    title: "Growth",
    desc: "Design should remain relevant and effective over time, not just follow trends.",
  },
  {
    title: "Collaboration",
    desc: "The best work comes from trust and shared vision — clients are partners.",
  },
  {
    title: "Impact",
    desc: "Brands should leave a mark and be remembered, not just seen.",
  },
  {
    title: "Trust",
    desc: "Long-term relationships matter more than one-off projects.",
  },
];

const keywords = ["Bold", "Timeless", "Precision", "Crafted", "Rare", "Impact"];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-black text-white font-body">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pt-28 sm:pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0b0b0b]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,3,3,0.16),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] topo" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mx-auto w-fit text-xs uppercase tracking-[0.25em] text-white/50">
            About
          </p>

          <h1 className="mt-5 font-heading text-6xl sm:text-7xl leading-[0.92] tracking-tight">
            THE MAN BEHIND THE BRAND
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-white/70">
            I’m Alex Stoilov - graphic designer and the person behind Alexsto.
I help brands define who they are and how they’re remembered, through focused strategy and carefully crafted visual systems.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-brand-red px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
            >
              View projects
            </Link>
            <Link
              href="/#contact"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
            >
              Contact
            </Link>
          </div>

          {/* ✅ FIX: index is defined here */}
        </div>
      </section>

      {/* BIO + POSITIONING */}
      <section className="px-6 py-18 sm:py-22 border-y border-white/10">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5 lg:col-start-2">
            <p className="w-fit text-xs uppercase tracking-[0.25em] text-white/50">
              Alex Stoilov
            </p>
            <h2 className="mt-4 font-heading text-5xl sm:text-6xl leading-[0.92] tracking-tight">
              Alexsto Digital
            </h2>
            <p className="mt-6 text-white/70 text-base sm:text-lg">
              My professional background spans both in-house and freelancer work. Over the years I've worked on variety of projects ranging from brand identities and product packaging to large-scale advertising campaigns.

              I don't believe in the phrase "Don't judge a book by its cover." Branding is the invisible communication between a business and a customer, and I believe that I and my fellow designers are responsible for creating it in the most effective way possible.

            </p>
          </div>

          <div className="lg:col-span-5">
             <p className="w-fit text-xs uppercase tracking-[0.25em] text-white/50">
              My services
            </p>
            < div className="mt-4">
            <ol className="grid gap-3">
              <ProcessStep
                n="01"
                title="Brand Identities"
                desc="Positioning, references, constraints, objectives."
              />
              <ProcessStep
                n="02"
                title="Packaging"
                desc="Concept routes, visual language, and tone."
              />
              <ProcessStep
                n="03"
                title="Social Media Visuals"
                desc="Logo, typography, color, assets, and rules."
              />
              <ProcessStep
                n="04"
                title="Ui & Web Design"
                desc="Packaging, web, social, motion, and rollout."
              />
            </ol>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="px-6 py-18 sm:py-22 border-y border-white/10">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5 lg:col-start-2">
            <p className="w-fit text-xs uppercase tracking-[0.25em] text-white/50">
              Mission
            </p>
            <h3 className="mt-4 font-heading text-4xl sm:text-5xl leading-[0.95] tracking-tight">
              Designed to mean something.
            </h3>
            <p className="mt-6 text-white/70 text-base sm:text-lg">
              My mission is to help brands communicate clearly and confidently through strong visual systems.
            </p>
          </div>

          <div className="lg:col-span-5">
            <p className="w-fit text-xs uppercase tracking-[0.25em] text-white/50">
              Vision
            </p>
            <h3 className="mt-4 font-heading text-4xl sm:text-5xl leading-[0.95] tracking-tight">
              Modern work. Lasting Value.
            </h3>
            <p className="mt-6 text-white/70 text-base sm:text-lg">
              I aim to grow Alexsto as a innovative design brand, known for delivering focused, high-quality digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 py-18 sm:py-22">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">

            <h2 className="mt-4 font-heading text-5xl sm:text-6xl leading-[0.92] tracking-tight">
              My values
            </h2>
          
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <ValueCard key={v.title} title={v.title} desc={v.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-18 sm:py-22 border-y border-white/10">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5 lg:col-start-2">
            <p className="w-fit text-xs uppercase tracking-[0.25em] text-white/50">
              Process
            </p>
            <h2 className="mt-4 font-heading text-5xl sm:text-6xl leading-[0.92] tracking-tight">
               Brief → Design → Delivery
            </h2>
            <p className="mt-6 text-white/70 text-base sm:text-lg">
              Every project starts with a clear brief. By understanding the goals, audience, and constraints, I’m able to design with purpose and direction. The process moves from concept to execution with clarity at every step, resulting in a cohesive brand system that’s ready to be used in real-world applications.
            </p>
          </div>

          <div className="lg:col-span-5">
            <ol className="grid gap-3">
              <ProcessStep
                n="01"
                title="Brief"
                desc="Defining goals, audience, scope, and constraints."
              />
              <ProcessStep
                n="02"
                title="Direction"
                desc="Exploring concepts and visual directions."
              />
              <ProcessStep
                n="03"
                title="Design System"
                desc="Building the core identity: logo, typography, color, layout rules, and key assets."
              />
              <ProcessStep
                n="04"
                title="Applications"
                desc="Applying the system to real-world use cases."
              />
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,3,3,0.18),transparent_60%)]" />
            <div className="relative">
              <p className="mx-auto w-fit text-xs uppercase tracking-[0.25em] text-white/50">
                Ready?
              </p>
              <h2 className="mt-4 font-heading text-5xl sm:text-6xl leading-[0.92] tracking-tight">
                Let’s work together.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-white/70 text-base sm:text-lg">
                Send a short message outlining your project goals and timeline. I’ll review the details and respond with a clear plan and next steps.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/projects"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
                >
                  Explore projects
                </Link>
                <Link
                  href="/#contact"
                  className="rounded-full bg-brand-red px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
                >
                  Contact me
                </Link>
              </div>

              <p className="mt-6 text-xs text-white/55">
                Typically replies within 24–48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* --------------------------- small components --------------------------- */

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-xs uppercase tracking-widest text-white/50">{title}</p>
      <p className="mt-2 text-sm font-medium text-white/85">{value}</p>
    </div>
  );
}

function ValueCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7">
      <p className="text-xs uppercase tracking-[0.25em] text-white/50">
        Value
      </p>
      <h3 className="mt-3 font-heading text-3xl leading-[0.95]">{title}</h3>
      <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function ProcessStep({
  n,
  title,
  desc,
}: {
  n: string;
  title: string;
  desc: string;
}) {
  return (
    <li className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7">
      <div className="flex items-start gap-4">
        <div className="mt-1 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/70">
          {n}
        </div>
        <div>
          <p className="text-lg font-semibold text-white">{title}</p>
          <p className="mt-1 text-sm text-white/65">{desc}</p>
        </div>
      </div>
    </li>
  );
}

function MiniPill({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 text-center">
      {children}
    </div>
  );
}
