"use client";

import { useRef } from "react";
import type { PointerEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects, type Project } from "@/lib/content";
import { Reveal, RevealGroup, revealItem } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { motion } from "framer-motion";

type Variant = "default" | "featured" | "wide";

const spanClass: Record<Variant, string> = {
  default: "md:col-span-1",
  featured: "md:col-span-2 md:row-span-2",
  wide: "md:col-span-3",
};

function ProjectCard({ project, variant = "default" }: { project: Project; variant?: Variant }) {
  const ref = useRef<HTMLElement>(null);

  function onPointerMove(e: PointerEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  const isWide = variant === "wide";
  const isFeatured = variant === "featured";

  return (
    <motion.article
      ref={ref}
      variants={revealItem}
      onPointerMove={onPointerMove}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`group relative hairline flex overflow-hidden hover:border-accent/50 transition-colors ${
        spanClass[variant]
      } ${isFeatured ? "bg-ink-raised/30 p-8 md:p-10 flex-col" : isWide ? "bg-ink-raised/20 p-7 md:p-9 flex-col md:flex-row md:items-start gap-6 md:gap-10" : "bg-ink-raised/20 p-7 md:p-8 flex-col"}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(320px circle at var(--x, 50%) var(--y, 50%), rgba(242,184,75,0.09), transparent 70%)",
        }}
      />

      <div className={isWide ? "relative md:w-64 shrink-0" : "relative"}>
        <div className="flex items-start justify-between gap-4">
          <div>
            {isFeatured && (
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent/80 border border-accent/40 px-2 py-0.5">
                Flagship
              </span>
            )}
            <div className={isFeatured ? "mt-3" : ""}>
              <span className="font-mono text-xs text-accent">{project.year}</span>
              <h3
                className={`mt-2 font-semibold text-paper ${
                  isFeatured
                    ? "text-[clamp(1.4rem,2.4vw,1.85rem)]"
                    : "text-[clamp(1.1rem,1.8vw,1.35rem)]"
                }`}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.name} on GitHub`}
            className="shrink-0 inline-flex items-center justify-center h-10 w-10 border border-hairline text-paper-dim hover:border-accent hover:text-accent transition-colors"
          >
            <GithubIcon size={18} />
          </a>
        </div>

        {isWide && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 hidden md:inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-paper-dim group-hover:text-accent transition-colors w-fit"
          >
            {project.repo}
            <ArrowUpRight size={13} />
          </a>
        )}
      </div>

      <div className="relative flex flex-col flex-1">
        <p
          className={`text-paper/80 leading-relaxed ${
            isFeatured ? "mt-5 text-base" : "mt-4 text-sm"
          }`}
        >
          {project.description}
        </p>

        <ul className={isFeatured ? "mt-5 space-y-2.5" : "mt-4 space-y-2"}>
          {project.highlights.map((h) => (
            <li
              key={h}
              className="text-sm leading-relaxed text-paper-dim pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-paper-dim/50"
            >
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[0.7rem] uppercase tracking-wider text-paper-dim border border-hairline px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {!isWide && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-paper-dim group-hover:text-accent transition-colors w-fit"
          >
            {project.repo}
            <ArrowUpRight size={13} />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export function Projects() {
  const variants: Variant[] = ["featured", "default", "default", "wide"];

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionIntro index="03" title="Projects" />
      <Reveal delay={0.05}>
        <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold text-paper max-w-2xl">
          Shipped, verifiable work
        </h2>
      </Reveal>

      <RevealGroup className="mt-12 grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 items-stretch">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} variant={variants[i] ?? "default"} />
        ))}
      </RevealGroup>
    </section>
  );
}
