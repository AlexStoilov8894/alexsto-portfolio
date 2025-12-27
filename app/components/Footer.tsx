import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <img src="/brand/logo-red.svg" alt="Alexsto" className="h-10 w-auto" />
          <div>
            <p className="text-sm font-semibold">Alexsto</p>
            <p className="text-xs text-white/55">Niche Digital Solutions</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/60">
          <Link className="hover:text-white" href="/projects">Projects</Link>
          <Link className="hover:text-white" href="/about">About</Link>
          <Link className="hover:text-white" href="/contact">Contact</Link>
        </div>

        <p className="text-xs text-white/50 text-center sm:text-right">
          © {new Date().getFullYear()} Alexsto. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
