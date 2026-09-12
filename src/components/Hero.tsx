"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { meta } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-end overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero-cliff.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_30%] saturate-[0.8] contrast-[1.05]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, rgba(10,10,13,0.55) 0%, rgba(10,10,13,0.82) 45%, rgba(10,10,13,0.94) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,10,13,0.95) 0%, rgba(10,10,13,0.4) 55%, rgba(10,10,13,0.15) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full px-6 pb-24 pt-40 md:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="section-label mb-5"
        >
          {meta.location} · {meta.remote}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
          className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.03] font-semibold tracking-tight text-paper max-w-3xl"
        >
          {meta.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
          className="mt-4 max-w-2xl text-[clamp(1rem,2vw,1.25rem)] text-paper-dim"
        >
          {meta.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.18 }}
          className="mt-6 max-w-xl text-[clamp(0.95rem,1.3vw,1.05rem)] text-paper/90"
        >
          {meta.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-accent text-ink font-mono text-sm uppercase tracking-wider px-6 py-3 hover:bg-accent-dim transition-colors"
          >
            View Projects
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-hairline-strong text-paper font-mono text-sm uppercase tracking-wider px-6 py-3 hover:border-accent hover:text-accent transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-paper-dim font-mono text-sm uppercase tracking-wider px-2 py-3 hover:text-accent transition-colors"
          >
            <Download size={16} />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
