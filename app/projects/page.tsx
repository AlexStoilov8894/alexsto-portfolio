import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-brand-black text-white font-body">
      <section className="mx-auto max-w-6xl px-6 pt-28 pb-16">
        <p className="text-xs uppercase tracking-[0.25em] text-white/50 text-center">
          Projects
        </p>
        <h1 className="mt-4 font-heading text-5xl sm:text-6xl leading-[0.9] tracking-tight text-center">
          Selected work
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-white/70 text-center">
          A curated set of brand and digital projects. Click any project to view the full case.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[16/11] w-full">
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,3,3,0.12),transparent_55%)]" />
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                  {p.subtitle}
                </p>
                <h2 className="mt-3 font-heading text-3xl sm:text-4xl leading-[0.95]">
                  {p.title}
                </h2>
                <p className="mt-3 text-sm text-white/70">
                  {p.description}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/70">
                  <span className="h-2 w-2 rounded-full bg-brand-red" />
                  <span className="group-hover:text-white transition">View project</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/#contact"
            className="rounded-full bg-brand-red px-8 py-4 text-sm font-medium text-white hover:bg-brand-red/90 transition"
          >
            Start a project
          </Link>
        </div>
      </section>
    </main>
  );
}
