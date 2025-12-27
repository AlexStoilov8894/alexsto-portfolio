"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  strength?: number;
};

export default function ParallaxImage({
  src,
  alt,
  priority = false,
  className = "",
  strength = 100,
}: Props) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [y, setY] = useState(0);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let raf = 0;

    const update = () => {
      if (!wrapperRef.current) return;

      const r = wrapperRef.current.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      // progress: 0 when top hits bottom of viewport, 1 when bottom hits top
      const progress = (vh - r.top) / (vh + r.height);
      const clamped = Math.max(0, Math.min(1, progress));

      // Map progress to -strength/2 .. +strength/2
      const offset = (clamped - 0.5) * strength;
      setY(offset);
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
  }, [prefersReducedMotion, strength]);

  return (
    <div ref={wrapperRef} className={"relative w-full overflow-hidden " + className}>
      {/* inner layer moves */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translate3d(0, ${y}px, 0)`,
          willChange: "transform",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
