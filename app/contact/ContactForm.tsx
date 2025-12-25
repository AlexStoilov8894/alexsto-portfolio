"use client";

import React from "react";

export default function ContactForm() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,3,3,0.14),transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

      <form
        className="relative grid gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form wiring (backend) will be added next.");
        }}
      >
        <Field label="Name">
          <input
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-white/20"
            placeholder="Your name"
            autoComplete="name"
          />
        </Field>

        <Field label="Email">
          <input
            type="email"
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-white/20"
            placeholder="you@email.com"
            autoComplete="email"
          />
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Budget (optional)">
            <input
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-white/20"
              placeholder="€ / $"
            />
          </Field>

          <Field label="Timeline (optional)">
            <input
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-white/20"
              placeholder="e.g. 2–4 weeks"
            />
          </Field>
        </div>

        <Field label="Message">
          <textarea
            className="min-h-[160px] w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-white/20"
            placeholder="What do you need? What should it feel like? Any references?"
          />
        </Field>

        <button
          type="submit"
          className="mt-2 rounded-full bg-brand-red px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
        >
          Send message
        </button>

        <p className="text-xs text-white/55 text-center">
          Backend/email sending will be added after pages are finalized.
        </p>
      </form>
    </div>
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
