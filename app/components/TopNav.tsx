"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaInstagram, FaDribbble, FaBehance, FaFacebookF } from "react-icons/fa";


export default function TopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false); // lg
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

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Active state for #contact only (works on pages that have #contact)
  useEffect(() => {
    const update = () => {
      const el = document.getElementById("contact");
      if (!el) return setContactActive(false);
      const r = el.getBoundingClientRect();
      const inView =
        r.top < window.innerHeight * 0.5 && r.bottom > window.innerHeight * 0.25;
      setContactActive(inView);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const isActive = (href: string) => {
    if (href === "#contact") return contactActive;
    return pathname === href || (href === "/projects" && pathname?.startsWith("/projects"));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Full-width blur/backdrop */}
      <div className="absolute inset-0 bg-brand-black/55 backdrop-blur border-b border-white/10" />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/brand/logo-red.svg" alt="Alexsto" className="h-12 sm:h-14 w-auto" />
          </Link>

          {/* Desktop nav (only on lg+) */}
          <nav className="hidden lg:flex items-center gap-2 text-sm">
            <NavLink href="/projects" active={isActive("/projects")}>Projects</NavLink>
            <NavLink href="/about" active={isActive("/about")}>About</NavLink>
            <NavLink href="/contact" active={isActive("/contact")}>Contact</NavLink>
          </nav>

          <div className="hidden lg:flex items-center gap-2">
  <SocialIcon href="https://instagram.com/alexsto.digital" label="Instagram">
    <FaInstagram />
  </SocialIcon>

  <SocialIcon href="https://dribbble.com/alexsto-digital" label="Dribbble">
    <FaDribbble />
  </SocialIcon>

  <SocialIcon href="https://behance.net/alexanderstoilov" label="Behance">
    <FaBehance />
  </SocialIcon>

  <SocialIcon href="https://facebook.com/alexsto.digital" label="Facebook">
    <FaFacebookF />
  </SocialIcon>
</div>


          {/* Burger (mobile + tablet) */}
          <button
            type="button"
            aria-label={open ? "Menu open" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={[
              "lg:hidden inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 transition",
              open ? "opacity-0 pointer-events-none" : "opacity-100",
            ].join(" ")}
          >
            <span className="relative block h-4 w-5">
              <span className="absolute left-0 top-0 h-[2px] w-5 bg-white" />
              <span className="absolute left-0 top-[7px] h-[2px] w-5 bg-white opacity-90" />
              <span className="absolute left-0 top-[14px] h-[2px] w-5 bg-white opacity-80" />
            </span>
          </button>
        </div>
      </div>

      {/* Fullscreen mobile menu (mobile + tablet) */}
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

        {/* Close button */}
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
          <img src="/brand/logo-red.svg" alt="Alexsto" className="h-12 w-auto" />
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
            <MobileNavLink href="/contact" onClick={() => setOpen(false)}>
              Contact
            </MobileNavLink>
          </nav>

         <div className="mt-12 flex justify-center gap-4">
  <SocialIcon href="https://instagram.com/alexsto.digital" label="Instagram">
    <FaInstagram />
  </SocialIcon>

  <SocialIcon href="https://dribbble.com/alexsto.digital" label="Dribbble">
    <FaDribbble />
  </SocialIcon>

  <SocialIcon href="https://behance.net/alexanderstoilov" label="Behance">
    <FaBehance />
  </SocialIcon>

  <SocialIcon href="https://facebook.com/alexsto.digital" label="Facebook">
    <FaFacebookF />
  </SocialIcon>
</div>

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

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={[
        "rounded-full px-3 py-1.5 transition hover:bg-white/10",
        active ? "text-brand-red" : "text-white/70 hover:text-white",
      ].join(" ")}
    >
      {children}
    </Link>
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

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="
        flex h-9 w-9 items-center justify-center
        rounded-full border border-white/10
        bg-white/5 text-white/70
        transition
        hover:bg-brand-red hover:text-white
      "
    >
      <span className="text-sm">{children}</span>
    </a>
  );
}

