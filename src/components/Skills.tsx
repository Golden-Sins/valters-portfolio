import { skillGroups } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";

export function Skills() {
  return (
    <section id="skills" className="border-y border-hairline bg-ink-raised/25">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <SectionIntro index="04" title="Skills" />

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {skillGroups.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.04}>
              <h3 className="font-mono text-xs uppercase tracking-wider text-accent mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-paper/85 border border-hairline px-3 py-1.5 hover:border-accent/60 hover:text-paper transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
