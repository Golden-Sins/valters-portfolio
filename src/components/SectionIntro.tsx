import { Reveal } from "@/components/Reveal";

export function SectionIntro({
  index,
  title,
  className = "mb-4",
}: {
  index: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -top-8 -left-1 z-0 font-mono font-bold text-[4.5rem] md:text-[6rem] leading-none text-white/[0.04] whitespace-nowrap"
      >
        {index}
      </span>
      <Reveal className="relative z-10">
        <p className="section-label flex items-center gap-3">
          <span className="h-px w-6 bg-accent/70" />
          {index} · {title}
        </p>
      </Reveal>
    </div>
  );
}
