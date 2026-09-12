"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { meta, stats } from "@/lib/content";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative min-h-screen flex items-end overflow-hidden bg-ink"
    >
      <motion.div className="absolute inset-0" style={{ y: parallaxY }}>
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: "easeOut" }}
        >
          <Image
            src="/images/hero-cliff.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[68%_30%] saturate-[0.8] contrast-[1.05]"
          />
        </motion.div>
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
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(700px circle at 8% 82%, rgba(242,184,75,0.14), transparent 60%)",
          }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-6xl w-full px-6 pb-24 pt-40 md:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="section-label mb-5 flex items-center gap-2"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
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
            className="inline-flex items-center gap-2 bg-accent text-ink font-mono text-sm uppercase tracking-wider px-6 py-3 hover:bg-accent-dim hover:-translate-y-0.5 transition-all"
          >
            View Projects
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-hairline-strong text-paper font-mono text-sm uppercase tracking-wider px-6 py-3 hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all"
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

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        className="hidden lg:block absolute right-10 xl:right-16 top-40 z-10 w-60 hairline bg-ink/70 backdrop-blur-md px-6 py-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]"
      >
        <div className="font-mono text-4xl font-medium text-accent tabular-nums">
          {stats[0].value}
          {stats[0].suffix}
        </div>
        <div className="mt-2 font-mono text-xs uppercase tracking-wider text-paper-dim leading-relaxed">
          {stats[0].label}
        </div>
        <div className="mt-5 pt-5 border-t border-hairline font-mono text-[0.7rem] text-paper-dim/80">
          Yggdrasil Gaming · 2024–2025
        </div>
      </motion.div>
    </section>
  );
}
