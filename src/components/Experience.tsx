import { experience } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-y border-hairline bg-ink-raised/25"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 -z-10 h-[480px] w-[480px] rounded-full bg-accent/10 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-56 -right-32 -z-10 h-[420px] w-[420px] rounded-full bg-accent-2/10 blur-[110px]"
      />

      <div className="mx-auto max-w-6xl px-6 py-28">
        <SectionIntro index="02" title="Experience" />

        <div className="mt-8 space-y-6">
          {experience.map((job, i) => (
            <Reveal key={job.title + job.dates} delay={i * 0.06}>
              <div className="group relative hairline overflow-hidden bg-ink-raised/30 px-7 py-7 md:px-9 md:py-8 transition-colors hover:border-accent/40">
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-accent to-accent-2 opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <span
                  aria-hidden
                  className="pointer-events-none select-none absolute -top-6 right-4 z-0 font-mono font-bold text-[3.5rem] leading-none text-white/[0.035]"
                >
                  0{i + 1}
                </span>

                <div className="relative flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                  <h3 className="text-[clamp(1.15rem,2vw,1.4rem)] font-semibold text-paper">
                    {job.title}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent shrink-0">
                    {job.dates}
                  </span>
                </div>
                <p className="relative font-mono text-sm text-paper-dim mt-1">
                  {job.company} · {job.location}
                </p>

                <ul className="relative mt-4 space-y-2">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-[0.95rem] leading-relaxed text-paper/80 pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-accent/70"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
