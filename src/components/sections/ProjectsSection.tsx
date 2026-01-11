import { Section } from "../Section";
import { cv } from "../../data/resumeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faReact, faVuejs } from "@fortawesome/free-brands-svg-icons";
import {
  faCalculator,
  faCode,
  faFlagCheckered,
  faMusic,
  faRightLeft,
} from "@fortawesome/free-solid-svg-icons";
import type { FC } from "react";
import { ProjectsSectionSkeleton } from "../common/skeletons/ProjectsSectionSkeleton";

const getProjectIcon = (
  name: string,
  stack: readonly string[]
): IconDefinition => {
  const nameLower = name.toLowerCase();
  const stackLower = stack.map((s) => s.toLowerCase());

  switch (true) {
    case nameLower.includes("calculator"):
      return faCalculator;
    case nameLower.includes("converter"):
      return faRightLeft;
    case nameLower.includes("music"):
      return faMusic;
    case nameLower.includes("horse") || nameLower.includes("racing"):
      return faFlagCheckered;
    case stackLower.some((s) => s.includes("react")):
      return faReact;
    case stackLower.some((s) => s.includes("vue")):
      return faVuejs;
    default:
      return faCode;
  }
};

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
              <h3 className="text-base lg:text-lg font-semibold flex items-center gap-2">
                <FontAwesomeIcon
                  icon={getProjectIcon(p.name, p.stack)}
                  className="h-5 w-5 text-primary"
                />
                <span>{p.name}</span>
              </h3>

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
