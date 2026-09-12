import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { meta } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionIntro index="06" title="Contact" />

        <Reveal delay={0.05}>
          <div className="flex items-center gap-4 mb-10">
            <div className="relative h-11 w-11 rounded-full overflow-hidden hairline shrink-0">
              <Image
                src="/images/avatar-candid.jpg"
                alt={meta.name}
                fill
                sizes="44px"
                className="object-cover saturate-[0.85]"
              />
            </div>
            <div>
              <p className="text-paper font-medium">{meta.name}</p>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {meta.remote}
              </span>
            </div>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <Reveal delay={0.08}>
            <a
              href={`mailto:${meta.email}`}
              className="flex items-center gap-3 text-paper/85 hover:text-accent transition-colors"
            >
              <Mail size={16} className="text-paper-dim" />
              <span className="text-sm break-all">{meta.email}</span>
            </a>
          </Reveal>
          <Reveal delay={0.11}>
            <a
              href={`tel:${meta.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-3 text-paper/85 hover:text-accent transition-colors"
            >
              <Phone size={16} className="text-paper-dim" />
              <span className="text-sm">{meta.phone}</span>
            </a>
          </Reveal>
          <Reveal delay={0.14}>
            <a
              href={meta.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-paper/85 hover:text-accent transition-colors"
            >
              <LinkedinIcon size={16} className="text-paper-dim" />
              <span className="text-sm">{meta.linkedin}</span>
            </a>
          </Reveal>
          <Reveal delay={0.17}>
            <a
              href={meta.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-paper/85 hover:text-accent transition-colors"
            >
              <GithubIcon size={16} className="text-paper-dim" />
              <span className="text-sm">{meta.github}</span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex items-center gap-3 text-paper-dim">
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
