"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { stats } from "@/lib/content";

function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 1.2, ease: "easeOut" });
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, value, count, rounded]);

  return <span ref={ref}>{display}</span>;
}

export function Stats() {
  return (
    <section className="border-y border-hairline bg-ink-raised/40">
      <div className="mx-auto max-w-6xl px-6 py-14 grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`text-center md:text-left px-2 md:px-6 py-2 ${
              i > 0 ? "md:border-l md:border-hairline" : ""
            }`}
          >
            <div className="font-mono text-[clamp(2rem,5vw,3rem)] font-medium text-accent tabular-nums">
              <CountUp value={stat.value} />
              {stat.suffix}
            </div>
            <div className="mt-2 font-mono text-xs uppercase tracking-wider text-paper-dim">
              {stat.label}
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="mt-4 h-px w-10 bg-accent/60 origin-left mx-auto md:mx-0"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
