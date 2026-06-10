"use client";

import { useState } from "react";

type Category = "digital" | "events" | "development";

type Project = {
  title: string;
  tag: string;
  category: Category;
  image: string;
  alt: string;
  span: string;
  aspect: string;
  blurb?: string;
};

const PROJECTS: Project[] = [
  {
    title: "NEO-FLIGHT ECOSYSTEM",
    tag: "DIGITAL CAMPAIGN",
    category: "digital",
    image: "/lark/work-neoflight.png",
    alt: "A futuristic digital interface on multiple monitors with a teal color wash.",
    span: "md:col-span-8",
    aspect: "aspect-[16/9]",
    blurb: "A 360-degree digital activation for a global aerospace leader.",
  },
  {
    title: "ZENITH SUMMIT 2024",
    tag: "ON-SITE ACTIVATION",
    category: "events",
    image: "/lark/work-zenith.png",
    alt: "An aerial view of a high-end corporate launch event in a glass pavilion.",
    span: "md:col-span-4",
    aspect: "aspect-square",
  },
  {
    title: "LARK ANALYTICS CORE",
    tag: "CUSTOM SOFTWARE",
    category: "development",
    image: "/lark/work-analytics.png",
    alt: "Macro photography of a laptop showing code with teal syntax highlighting.",
    span: "md:col-span-4",
    aspect: "aspect-square",
  },
  {
    title: "VELOCITY MEDIA GRID",
    tag: "SOCIAL STRATEGY",
    category: "digital",
    image: "/lark/work-velocity.png",
    alt: "Abstract digital art with flowing aerodynamic shapes in teal and charcoal.",
    span: "md:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    title: "WINGS OF INNOVATION",
    tag: "EXPERIENTIAL",
    category: "events",
    image: "/lark/work-wings.png",
    alt: "A minimalist conference stage with large LED screens showing teal wing motifs.",
    span: "md:col-span-4",
    aspect: "aspect-square",
  },
];

const FILTERS: { key: "all" | Category; label: string }[] = [
  { key: "all", label: "ALL PROJECTS" },
  { key: "digital", label: "DIGITAL" },
  { key: "events", label: "EVENTS" },
  { key: "development", label: "DEVELOPMENT" },
];

export function PortfolioGrid() {
  const [filter, setFilter] = useState<"all" | Category>("all");

  const visible = PROJECTS.filter(
    (p) => filter === "all" || p.category === filter,
  );

  return (
    <>
      {/* Filter bar */}
      <section className="mx-auto mb-16 max-w-container-max px-gutter">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-outline-variant pb-6">
          <div className="flex flex-wrap gap-8">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`pb-2 font-label-sm text-label-sm uppercase tracking-widest transition-all ${
                  filter === f.key
                    ? "border-b-2 border-primary text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="font-label-sm text-label-sm text-on-surface-variant">
            SHOWING {String(visible.length).padStart(2, "0")} RECENT SUCCESSES
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto mb-section-gap grid max-w-container-max grid-cols-1 gap-8 px-gutter md:grid-cols-12">
        {visible.map((p) => (
          <div
            key={p.title}
            className={`group relative overflow-hidden border border-outline-variant/30 bg-surface-container-low ${p.span} ${p.aspect}`}
          >
            <img
              className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              alt={p.alt}
              src={p.image}
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background/90 to-transparent p-8">
              <span className="mb-2 block font-label-sm text-label-sm text-primary">
                {p.tag}
              </span>
              <h3 className="font-headline-md text-headline-md">{p.title}</h3>
              {p.blurb && (
                <p className="translate-y-4 font-body-md text-body-md text-on-surface-variant opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {p.blurb}
                </p>
              )}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
