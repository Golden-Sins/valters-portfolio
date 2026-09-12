import { Award, Globe } from "lucide-react";
import { certifications, languages } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";

const levelStrength: Record<string, number> = {
  Native: 5,
  Fluent: 4,
  Advanced: 4,
  Intermediate: 3,
  Conversational: 3,
  Basic: 2,
  Beginner: 1,
};

function LevelDots({ level }: { level: string }) {
  const strength = levelStrength[level] ?? 3;
  return (
    <div className="flex items-center gap-1" aria-label={level}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${
            i < strength ? "bg-accent-2" : "bg-white/10"
          }`}
        />
      ))}
    </div>
  );
}

export function CertsAndLanguages() {
  return (
    <section className="relative overflow-hidden mx-auto max-w-6xl px-6 py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 -z-10 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]"
      />

      <SectionIntro index="05" title="Certifications & Education" />

      <div className="mt-8 grid md:grid-cols-[1.6fr_1fr] gap-6">
        <Reveal delay={0.05}>
          <div className="hairline bg-ink-raised/20 divide-y divide-hairline overflow-hidden">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="group flex items-center gap-4 px-5 py-4 hover:bg-accent/5 transition-colors"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-hairline text-accent group-hover:border-accent/60">
                  <Award size={15} />
                </span>
                <span className="text-[0.95rem] text-paper/90 flex-1">{cert.name}</span>
                <span className="font-mono text-xs uppercase tracking-wider text-paper-dim shrink-0">
                  {cert.date}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="hairline bg-ink-raised/20 h-full">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent px-5 pt-5 mb-1 flex items-center gap-2">
              <Globe size={13} />
              Languages
            </h3>
            <div className="divide-y divide-hairline">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between px-5 py-4">
                  <span className="text-[0.95rem] text-paper/90">{lang.name}</span>
                  <LevelDots level={lang.level} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
