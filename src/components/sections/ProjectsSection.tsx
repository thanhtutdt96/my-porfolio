import { Section } from "../Section";
import { cv } from "../../data/resumeData";
import type { FC } from "react";
import { ProjectsSectionSkeleton } from "../common/skeletons/ProjectsSectionSkeleton";

export const ProjectsSection: FC = () => {
  return (
    <Section
      id="projects"
      title="Projects"
      eyebrow="Personal work"
      skeleton={<ProjectsSectionSkeleton />}
    >
      <div className="grid gap-4 md:grid-cols-2 animate-in slide-in-from-bottom-20 duration-500">
        {cv.projects.map((p) => (
          <div
            key={p.href}
            className="card border border-base-200 bg-base-300 shadow-sm hover:-translate-y-2 transition-all duration-500 ease-in-out cursor-pointer"
          >
            <div className="card-body">
              <h3 className="text-xl font-bold">{p.name}</h3>

              <p className="mt-2 text-sm leading-relaxed text-base-content/80">
                {p.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="badge cursor-pointer badge-secondary badge-outline transition-all duration-200 hover:-translate-y-0.5 hover:border-secondary hover:bg-secondary hover:text-primary-content"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="card-actions mt-4 justify-end animate-in fade-in duration-2000">
                {p.website && (
                  <a
                    className="btn btn-primary btn-sm"
                    href={p.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Website
                  </a>
                )}
                <a
                  className="btn btn-ghost btn-sm"
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
