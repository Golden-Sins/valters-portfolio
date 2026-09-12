import { experience } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="section-label mb-4">02 · Experience</p>
      </Reveal>

      <div className="mt-8 relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-hairline-strong md:left-[7px]" />

        <ol className="space-y-14">
          {experience.map((job, i) => (
            <Reveal key={job.title + job.dates} delay={i * 0.06}>
              <li className="relative pl-10">
                <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full bg-ink border-2 border-accent" />

                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                  <h3 className="text-[clamp(1.15rem,2vw,1.4rem)] font-semibold text-paper">
                    {job.title}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">
                    {job.dates}
                  </span>
                </div>
                <p className="font-mono text-sm text-paper-dim mt-1">
                  {job.company} · {job.location}
                </p>

                <ul className="mt-4 space-y-2">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-[0.95rem] leading-relaxed text-paper/80 pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-paper-dim/60"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
