import type { Metadata } from "next";
import {
  meta,
  profile,
  experience,
  projects,
  skillGroups,
  certifications,
  languages,
} from "@/lib/content";
import { PrintButton } from "./PrintButton";

export const metadata: Metadata = {
  title: `${meta.name} — Resume`,
  description: "Printable resume / CV.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans print:p-0 p-8 md:p-12 max-w-[850px] mx-auto">
      <PrintButton />

      <header className="mb-8">
        <h1 className="text-3xl font-bold">{meta.name}</h1>
        <p className="text-sm mt-1">{meta.title}</p>
        <p className="text-xs mt-3 font-mono text-gray-600">
          {meta.location} · {meta.remote} · {meta.phone} · {meta.email} · {meta.linkedin} ·{" "}
          {meta.github}
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-xs font-mono uppercase tracking-wider border-b border-black pb-1 mb-3">
          Profile
        </h2>
        <p className="text-sm leading-relaxed">{profile.body}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xs font-mono uppercase tracking-wider border-b border-black pb-1 mb-3">
          Experience
        </h2>
        <div className="space-y-5">
          {experience.map((job) => (
            <div key={job.title + job.dates}>
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-semibold">{job.title}</h3>
                <span className="text-xs font-mono">{job.dates}</span>
              </div>
              <p className="text-xs font-mono text-gray-600 mb-1.5">
                {job.company} · {job.location}
              </p>
              <ul className="text-sm space-y-1 list-disc list-inside">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8 break-inside-avoid">
        <h2 className="text-xs font-mono uppercase tracking-wider border-b border-black pb-1 mb-3">
          Projects
        </h2>
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.name}>
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-semibold">
                  {project.name} <span className="font-normal text-gray-600">— {project.year}</span>
                </h3>
                <span className="text-xs font-mono text-gray-600">{project.repo}</span>
              </div>
              <p className="text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8 break-inside-avoid">
        <h2 className="text-xs font-mono uppercase tracking-wider border-b border-black pb-1 mb-3">
          Skills
        </h2>
        <div className="space-y-1.5">
          {skillGroups.map((group) => (
            <p key={group.group} className="text-sm">
              <span className="font-semibold">{group.group}:</span> {group.items.join(" · ")}
            </p>
          ))}
        </div>
      </section>

      <section className="mb-8 break-inside-avoid grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-wider border-b border-black pb-1 mb-3">
            Certifications & Education
          </h2>
          <ul className="text-sm space-y-1">
            {certifications.map((cert) => (
              <li key={cert.name} className="flex justify-between gap-4">
                <span>{cert.name}</span>
                <span className="text-xs font-mono text-gray-600 shrink-0">{cert.date}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-mono uppercase tracking-wider border-b border-black pb-1 mb-3">
            Languages
          </h2>
          <ul className="text-sm space-y-1">
            {languages.map((lang) => (
              <li key={lang.name} className="flex justify-between">
                <span>{lang.name}</span>
                <span className="text-xs font-mono text-gray-600">{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
