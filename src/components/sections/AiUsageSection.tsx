import { Section } from "../Section";
import { cv } from "../../data/resumeData";
import TextType from "../common/TextType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faClipboardList,
  faMagnifyingGlass,
  faPlug,
  faRobot,
  faRocket,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import type { FC } from "react";

const aiUsageIconById: Record<string, IconDefinition> = {
  accelerate: faRocket,
  planning: faClipboardList,
  mcp: faPlug,
  review: faMagnifyingGlass,
  ownership: faUserCheck,
};

function getAiUsageIcon(id: string): IconDefinition {
  return aiUsageIconById[id] ?? faRobot;
}

export const AiUsageSection: FC = () => {
  return (
    <Section
      id="ai"
      title="AI Usage Experience"
      eyebrow="How I work with AI tools"
    >
      <ul className="grid gap-4 animate-in slide-in-from-bottom-20 duration-500">
        {cv.aiUsageExperience.map((item) => (
          <li
            key={item.id}
            className="card border border-base-200 bg-base-300 shadow-sm"
          >
            <div className="card-body flex flex-row gap-4 p-5 sm:p-6 items-center">
              <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-base-200 bg-base-100/80 text-primary shadow-sm">
                <FontAwesomeIcon
                  icon={getAiUsageIcon(item.id)}
                  className="h-4 w-4"
                />
              </span>
              <TextType
                text={item.text}
                as="p"
                loop={false}
                startOnVisible
                typingSpeed={15}
                showCursor={false}
                className="text-sm leading-relaxed text-base-content/85 sm:text-base"
              />
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};
