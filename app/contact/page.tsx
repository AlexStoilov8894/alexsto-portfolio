import Link from "next/link";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-black text-white font-body">
      <section className="relative overflow-hidden px-6 pt-28 sm:pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0b0b0b]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,3,3,0.16),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] topo" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mx-auto w-fit text-xs uppercase tracking-[0.25em] text-white/50">
            Contact
          </p>
          <h1 className="mt-5 font-heading text-6xl sm:text-7xl leading-[0.92] tracking-tight">
            Let’s work together.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-white/70">
            Send a short message outlining your project goals and timeline. I’ll review the details and respond with a clear plan and next steps.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/projects"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
            >
              Explore projects
            </Link>
            <a
              href="mailto:hello@alexsto.eu"
              className="rounded-full bg-brand-red px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
            >
              Email me
            </a>
          </div>

          <p className="mt-6 text-xs text-white/55">
            Typically replies within 24–48 hours.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 mt-20 sm:pb-24">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5 lg:col-start-2 text-center lg:text-left">
            <p className="w-fit mx-auto lg:mx-0 text-xs uppercase tracking-[0.25em] text-white/50">
              Get in touch
            </p>
            <h2 className="mt-4 font-heading text-5xl sm:text-6xl leading-[0.92] tracking-tight">
              Tell me what you’re building
            </h2>
            <p className="mt-6 text-base sm:text-lg text-white/70">
              The more context you share, the faster I can propose the right
              direction, scope, and timeline.
            </p>

            <div className="mt-10 grid gap-3">
              <InfoCard label="Email" value="hello@alexsto.eu" />
              <InfoCard label="Location" value="EU / Remote worldwide" />
              <InfoCard label="Specialties" value="Branding · Packaging · Digital" />
            </div>
          </div>

          <div className="lg:col-span-5">
            <ContactForm/>

            <div className="mt-6 text-center text-sm text-white/60">
              Prefer email?{" "}
              <a className="text-white hover:text-brand-red transition" href="mailto:hello@alexsto.com">
                hello@alexsto.eu
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-xs uppercase tracking-widest text-white/50">{label}</p>
      <p className="mt-2 text-sm font-medium text-white/85">{value}</p>
    </div>
  );
}
