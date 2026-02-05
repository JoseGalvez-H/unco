"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;

  /** Start slightly lower (px) */
  offsetY?: number;

  /** Fade/slide duration (ms) */
  durationMs?: number;

  /** Delay (ms) for staggering */
  delayMs?: number;

  /** Trigger only once (recommended) */
  once?: boolean;

  /** IntersectionObserver options */
  threshold?: number;
  rootMargin?: string;
};

export default function Reveal({
  children,
  className = "",
  offsetY = 24,
  durationMs = 700,
  delayMs = 0,
  once = true,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Respect reduced motion
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={[
        "transform-gpu will-change-transform",
        "transition-all ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0",
        className,
      ].join(" ")}
      style={{
        transitionDuration: `${durationMs}ms`,
        transitionDelay: `${delayMs}ms`,
        transform: isVisible ? "translateY(0px)" : `translateY(${offsetY}px)`,
      }}
    >
      {children}
    </div>
  );
}
