import { skillGroups } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="section-label mb-4">04 · Skills</p>
      </Reveal>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
        {skillGroups.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.04}>
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent mb-4">
              {group.group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-sm text-paper/85 border border-hairline px-3 py-1.5 hover:border-hairline-strong transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
