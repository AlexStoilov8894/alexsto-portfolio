"use client";

import React from "react";

export default function ContactForm() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,3,3,0.14),transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

          <form action="/send-mail.php" method="POST" className="relative grid gap-4">
      <input type="hidden" name="source" value="contact-page" />

      {/* Name */}
      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.25em] text-white/50">Name</span>
        <input
          name="name"
          className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-white/20"
          placeholder="Your name"
          autoComplete="name"
          required
        />
      </label>

      {/* Email */}
      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.25em] text-white/50">Email</span>
        <input
          name="email"
          type="email"
          className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-white/20"
          placeholder="you@email.com"
          autoComplete="email"
          required
        />
      </label>

      {/* Message */}
      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.25em] text-white/50">Message</span>
        <textarea
          name="message"
          className="min-h-[160px] w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-white/20"
          placeholder="What do you need? Any references?"
          required
        />
      </label>

      <button
        type="submit"
        className="mt-2 rounded-full bg-brand-red px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
      >
        Send message
      </button>
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
