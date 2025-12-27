import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-brand-black text-white font-body flex items-center justify-center px-6">
      <section className="w-full max-w-3xl text-center">
        <p className="mx-auto w-fit text-xs uppercase tracking-[0.25em] text-white/50">
          Message sent
        </p>

        <h1 className="mt-6 font-heading text-5xl sm:text-6xl leading-[0.95] tracking-tight">
          Thank you for reaching out
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg text-white/70">
          Your message has been successfully sent.  
          I’ll review the details and get back to you within 24–48 hours.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-brand-red px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
          >
            Back to home
          </Link>

          <Link
            href="/projects"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
          >
            View projects
          </Link>
        </div>

        <p className="mt-10 text-xs text-white/45">
          Alexsto · Niche Digital Solutions
        </p>
      </section>
    </main>
  );
}
