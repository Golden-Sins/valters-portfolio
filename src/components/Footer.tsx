import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { meta } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-hairline">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
      />

      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionIntro index="06" title="Contact" />

        <Reveal delay={0.03}>
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold text-paper max-w-2xl leading-[1.1]">
            Let&rsquo;s make your integrations{" "}
            <span className="text-accent">boring</span> — in the good way.
          </h2>
        </Reveal>

        <Reveal delay={0.05} className="mt-10">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 rounded-full overflow-hidden hairline shrink-0 shadow-[0_0_0_3px_rgba(242,184,75,0.12)]">
              <Image
                src="/images/avatar-candid.jpg"
                alt={meta.name}
                fill
                sizes="48px"
                className="object-cover saturate-[0.85]"
              />
            </div>
            <div>
              <p className="text-paper font-medium">{meta.name}</p>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                {meta.remote}
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Reveal delay={0.08}>
            <a
              href={`mailto:${meta.email}`}
              className="group flex items-center gap-3 hairline px-4 py-4 hover:border-accent/50 hover:bg-accent/5 transition-colors"
            >
              <Mail size={16} className="text-paper-dim group-hover:text-accent transition-colors shrink-0" />
              <span className="text-sm text-paper/85 break-all group-hover:text-paper transition-colors">
                {meta.email}
              </span>
            </a>
          </Reveal>
          <Reveal delay={0.11}>
            <a
              href={`tel:${meta.phone.replace(/\s+/g, "")}`}
              className="group flex items-center gap-3 hairline px-4 py-4 hover:border-accent/50 hover:bg-accent/5 transition-colors"
            >
              <Phone size={16} className="text-paper-dim group-hover:text-accent transition-colors shrink-0" />
              <span className="text-sm text-paper/85 group-hover:text-paper transition-colors">
                {meta.phone}
              </span>
            </a>
          </Reveal>
          <Reveal delay={0.14}>
            <a
              href={meta.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 hairline px-4 py-4 hover:border-accent/50 hover:bg-accent/5 transition-colors"
            >
              <LinkedinIcon size={16} className="text-paper-dim group-hover:text-accent transition-colors shrink-0" />
              <span className="text-sm text-paper/85 group-hover:text-paper transition-colors">
                {meta.linkedin}
              </span>
            </a>
          </Reveal>
          <Reveal delay={0.17}>
            <a
              href={meta.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 hairline px-4 py-4 hover:border-accent/50 hover:bg-accent/5 transition-colors"
            >
              <GithubIcon size={16} className="text-paper-dim group-hover:text-accent transition-colors shrink-0" />
              <span className="text-sm text-paper/85 group-hover:text-paper transition-colors">
                {meta.github}
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-6 flex items-center gap-3 text-paper-dim">
            <MapPin size={16} />
            <span className="text-sm">{meta.location}</span>
          </div>
        </Reveal>

        <div className="mt-16 pt-8 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-paper-dim">
            © {new Date().getFullYear()} {meta.name}
          </p>
          <p className="font-mono text-xs text-paper-dim">{meta.domain}</p>
        </div>
      </div>
    </footer>
  );
}
