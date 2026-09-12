"use client";

import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/lib/content";
import { Reveal, RevealGroup, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="section-label mb-4">03 · Projects</p>
        <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold text-paper max-w-2xl">
          Shipped, verifiable work
        </h2>
      </Reveal>

      <RevealGroup className="mt-12 grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <motion.article
            key={project.name}
            variants={revealItem}
            className="group hairline p-7 md:p-8 flex flex-col hover:border-hairline-strong transition-colors bg-ink-raised/20"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-xs text-accent">{project.year}</span>
                <h3 className="mt-2 text-[clamp(1.1rem,1.8vw,1.35rem)] font-semibold text-paper">
                  {project.name}
                </h3>
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

            <p className="mt-4 text-sm leading-relaxed text-paper/80">{project.description}</p>

            <ul className="mt-4 space-y-2">
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

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-paper-dim group-hover:text-accent transition-colors w-fit"
            >
              {project.repo}
              <ArrowUpRight size={13} />
            </a>
          </motion.article>
        ))}
      </RevealGroup>
    </section>
  );
}
