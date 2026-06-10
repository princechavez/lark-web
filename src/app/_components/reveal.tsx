"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in milliseconds. */
  delay?: number;
};

/**
 * Wraps content in the `.reveal` scroll-in animation. Content is visible by
 * default for users with reduced motion; the observer just adds polish.
 */
export function Reveal({ children, className, delay }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties | undefined =
    delay !== undefined ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <div
      ref={ref}
      className={`reveal ${active ? "active" : ""} ${className ?? ""}`}
      style={style}
    >
      {children}
    </div>
  );
}
