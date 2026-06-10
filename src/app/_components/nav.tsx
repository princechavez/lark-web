"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "./icon";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/80 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "py-1 shadow-sm" : "py-unit"
      }`}
    >
      <div className="mx-auto flex max-w-container-max items-center justify-between px-gutter">
        <Link
          href="/"
          className="font-display-lg text-headline-md tracking-tighter text-on-surface"
        >
          LARK ADVERTISING
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body-md text-body-md uppercase tracking-wider transition-colors ${
                isActive(link.href)
                  ? "border-b-2 border-primary font-bold text-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-primary px-6 py-2 font-body-md text-body-md uppercase tracking-widest text-on-primary transition-all hover:bg-primary-container active:scale-95"
          >
            Let&apos;s Fly
          </Link>
        </nav>

        <button
          className="text-primary md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-outline-variant/30 bg-surface px-gutter py-4 md:hidden">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`py-3 font-body-md text-body-md uppercase tracking-wider ${
                isActive(link.href)
                  ? "font-bold text-primary"
                  : "text-on-surface-variant"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 bg-primary px-6 py-3 text-center font-body-md text-body-md uppercase tracking-widest text-on-primary"
          >
            Let&apos;s Fly
          </Link>
        </nav>
      )}
    </header>
  );
}
