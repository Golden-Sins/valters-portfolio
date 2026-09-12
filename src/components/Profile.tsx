import Image from "next/image";
import { Quote } from "lucide-react";
import { profile, testimonial } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";

export function Profile() {
  return (
    <section id="profile" className="mx-auto max-w-6xl px-6 py-28">
      <SectionIntro index="01" title="Profile" />

      <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-start">
        <Reveal delay={0.05}>
          <p className="text-[clamp(1.05rem,1.6vw,1.25rem)] leading-relaxed text-paper/90">
            {profile.body}
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative aspect-[4/5] w-full max-w-xs mx-auto md:mx-0 hairline overflow-hidden">
            <Image
              src="/images/about-action.jpg"
              alt="Valters in motion, working"
              fill
              sizes="(min-width: 768px) 320px, 60vw"
              className="object-cover saturate-[0.85] contrast-[1.05]"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,10,13,0.1) 0%, rgba(10,10,13,0.35) 100%)",
              }}
            />
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-16">
        <figure className="hairline border-l-2 border-l-accent bg-ink-raised/40 px-8 py-8 md:px-10 md:py-10 shadow-[0_0_50px_-15px_rgba(242,184,75,0.18)]">
          <Quote className="text-accent mb-4" size={22} />
          <blockquote className="text-[clamp(1.05rem,1.6vw,1.3rem)] leading-relaxed text-paper/90">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-6 font-mono text-sm text-paper-dim">
            <span className="text-paper">{testimonial.author}</span>
            {" — "}
            {testimonial.role}
            <br />
            <span className="text-paper-dim/80">
              {testimonial.relation} · {testimonial.note}
            </span>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
