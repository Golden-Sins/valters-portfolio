import { certifications, languages } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function CertsAndLanguages() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="section-label mb-4">05 · Certifications & Education</p>
      </Reveal>

      <div className="mt-8 grid md:grid-cols-[1.6fr_1fr] gap-12">
        <Reveal delay={0.05}>
          <ul className="divide-y divide-hairline hairline">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 px-5 py-4"
              >
                <span className="text-[0.95rem] text-paper/90">{cert.name}</span>
                <span className="font-mono text-xs uppercase tracking-wider text-paper-dim shrink-0">
                  {cert.date}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="font-mono text-xs uppercase tracking-wider text-accent mb-4">
            Languages
          </h3>
          <ul className="hairline divide-y divide-hairline">
            {languages.map((lang) => (
              <li
                key={lang.name}
                className="flex items-center justify-between px-5 py-4"
              >
                <span className="text-[0.95rem] text-paper/90">{lang.name}</span>
                <span className="font-mono text-xs uppercase tracking-wider text-paper-dim">
                  {lang.level}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
