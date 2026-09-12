import { skillGroups } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";

const dotColors = ["bg-accent", "bg-accent-2"];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-y border-hairline bg-ink-raised/25"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent-2/10 blur-[130px]"
      />

      <div className="mx-auto max-w-6xl px-6 py-28">
        <SectionIntro index="04" title="Skills" />

        <Reveal delay={0.05}>
          <div className="mt-8 hairline overflow-hidden bg-ink/80 backdrop-blur-sm shadow-[0_30px_70px_-35px_rgba(0,0,0,0.7)]">
            <div className="flex items-center gap-2 border-b border-hairline bg-ink-raised/60 px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="ml-3 font-mono text-xs text-paper-dim">
                ~/valters — skills --list
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 px-6 py-9 md:px-9 md:py-10">
              {skillGroups.map((group, i) => (
                <Reveal key={group.group} delay={i * 0.04}>
                  <h3 className="font-mono text-xs uppercase tracking-wider text-paper mb-4 flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${dotColors[i % 2]}`} />
                    {group.group}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-sm text-paper/85 border border-hairline px-3 py-1.5 hover:border-accent/60 hover:text-paper hover:bg-accent/5 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
