import { Section } from "../Section";
import { cv } from "../../data/resumeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faFlask,
  faScrewdriverWrench,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import type { FC } from "react";
import clsx from "clsx";
import { SkillsSectionSkeleton } from "../common/skeletons/SkillsSectionSkeleton";

type SkillGroupProps = {
  title: string;
  icon: typeof faCode;
  items: readonly string[];
  className?: string;
};

const SkillGroup: FC<SkillGroupProps> = ({ title, icon, items, className }) => {
  return (
    <div
      className={clsx(
        "card border border-base-200 bg-base-300 shadow-sm",
        className
      )}
    >
      <div className="card-body">
        <h3 className="card-title text-lg font-semibold">
          <FontAwesomeIcon icon={icon} className="text-primary" />
          <span>{title}</span>
        </h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {items.map((s) => (
            <span
              key={s}
              className="badge badge-secondary badge-outline transition-all duration-200 hover:-translate-y-0.5 hover:border-secondary hover:bg-secondary hover:text-secondary-content"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const SkillsSection: FC = () => {
  return (
    <Section
      id="skills"
      title="Skills"
      eyebrow="What I use day-to-day"
      skeleton={<SkillsSectionSkeleton />}
    >
      <div className="grid gap-4 sm:grid-cols-2 animate-in slide-in-from-bottom-20 duration-500">
        <SkillGroup
          title="FrontEnd"
          icon={faCode}
          items={cv.skills.frontEnd}
          className="hover:-translate-y-2 transition-all duration-500 ease-in-out cursor-pointer"
        />
        <SkillGroup
          title="State & Data"
          icon={faDatabase}
          items={cv.skills.stateAndData}
          className="hover:-translate-y-2 transition-all duration-500 ease-in-out cursor-pointer"
        />
        <SkillGroup
          title="Testing"
          icon={faFlask}
          items={cv.skills.testing}
          className="hover:-translate-y-2 transition-all duration-500 ease-in-out cursor-pointer"
        />
        <SkillGroup
          title="BackEnd"
          icon={faServer}
          items={cv.skills.backEnd}
          className="hover:-translate-y-2 transition-all duration-500 ease-in-out cursor-pointer"
        />
        <SkillGroup
          title="Tools"
          icon={faScrewdriverWrench}
          items={cv.skills.tools}
          className="hover:-translate-y-2 transition-all duration-500 ease-in-out cursor-pointer"
        />
      </div>
    </Section>
  );
};
