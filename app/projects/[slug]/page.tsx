import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects"; // adjust only if your file lives elsewhere

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next = currentIndex >= 0 && currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  // ✅ Defensive: ensure cover never appears in the gallery (even if accidentally added later)
  const gallery = (project.gallery || []).filter((src) => src !== project.cover);

  return (
    <main className="min-h-screen bg-brand-black text-white font-body">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pt-28 pb-10">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition"
        >
          <span className="h-2 w-2 rounded-full bg-brand-red" />
          Back to projects
        </Link>

        <h1 className="mt-6 font-heading text-5xl sm:text-6xl leading-[0.9] tracking-tight">
          {project.title}
        </h1>

        <p className="mt-4 text-base sm:text-lg text-white/70">
          {project.description}
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {project.year ? <MetaCard label="Year" value={project.year} /> : null}
          {project.role ? <MetaCard label="Role" value={project.role} /> : null}
          {project.services?.length ? (
            <MetaCard label="Services" value={project.services.join(" · ")} />
          ) : null}
        </div>
      </section>



  {/* Full-width gallery – no gaps on mobile */}
<section className="w-full">
  <div className="grid gap-0">
    {gallery.map((src, i) => (
      <figure key={src} className="relative w-full m-0">
        <div className="relative w-full aspect-[16/9] sm:h-[72svh] sm:aspect-auto lg:h-[92svh]">
          <Image
             src={src}
              alt={`${project.title} image ${i + 1}`}
              fill
              sizes="100vw"
              className="object-cover"
              priority={i < 1}
          />
        </div>
      </figure>
    ))}
  </div>
</section>


      {/* Prev / Next section */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="grid gap-4 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className="group relative overflow-hidden bg-white/5 hover:bg-white/10 transition p-7"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-white/55">
                  Previous project
                </p>
                <p className="mt-3 font-heading text-3xl leading-[0.95]">
                  {prev.title}
                </p>
                <p className="mt-3 text-sm text-white/65">{prev.subtitle}</p>
                <div className="mt-6 text-sm text-white/70 group-hover:text-white transition">
                  ← View
                </div>
              </Link>
            ) : (
              <div className="p-7 bg-white/5 opacity-40">
                <p className="text-xs uppercase tracking-[0.25em] text-white/55">
                  Previous project
                </p>
                <p className="mt-3 font-heading text-3xl leading-[0.95]">
                  None
                </p>
              </div>
            )}

            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="group relative overflow-hidden bg-white/5 hover:bg-white/10 transition p-7 text-left sm:text-right"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-white/55">
                  Next project
                </p>
                <p className="mt-3 font-heading text-3xl leading-[0.95]">
                  {next.title}
                </p>
                <p className="mt-3 text-sm text-white/65">{next.subtitle}</p>
                <div className="mt-6 text-sm text-white/70 group-hover:text-white transition">
                  View →
                </div>
              </Link>
            ) : (
              <div className="p-7 bg-white/5 opacity-40 text-left sm:text-right">
                <p className="text-xs uppercase tracking-[0.25em] text-white/55">
                  Next project
                </p>
                <p className="mt-3 font-heading text-3xl leading-[0.95]">
                  None
                </p>
              </div>
            )}
          </div>

          {/* Optional CTA row */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/#contact"
              className="rounded-full bg-brand-red px-8 py-4 text-sm font-medium text-white hover:bg-brand-red/90 transition"
            >
              Contact me
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-medium text-white hover:bg-white/10 transition"
            >
              All projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function MetaCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-xs uppercase tracking-[0.25em] text-white/50">{label}</p>
      <p className="mt-2 text-sm text-white/80">{value}</p>
    </div>
  );
}
