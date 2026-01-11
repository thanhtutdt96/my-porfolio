import type { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMoon } from "@fortawesome/free-regular-svg-icons";
import { useTheme } from "../hooks/useTheme";

export type SideNavItem = {
  id: string;
  label: string;
};

type Props = {
  items: readonly SideNavItem[];
  activeId: string;
  visible: boolean;
};

export const SideNav: FC<Props> = ({ items, activeId, visible }) => {
  const { theme, toggle, isDarkMode } = useTheme();
  const themeTooltip = theme === "dracula" ? "Light mode" : "Dark mode";

  return (
    <div
      className={[
        "fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:flex",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
        "transition-opacity animate-in fade-in duration-500 ease-in-out",
      ].join(" ")}
      aria-hidden={!visible}
    >
      <div className="flex flex-col items-center gap-3 rounded-full border border-base-200 bg-base-100/80 px-3 py-4 shadow-sm backdrop-blur">
        <nav aria-label="Section navigation" className="flex flex-col gap-3">
          {items.map((it) => {
            const isActive = activeId === it.id;
            return (
              <div
                key={it.id}
                className="tooltip tooltip-left"
                data-tip={it.label}
              >
                <a
                  href={`#${it.id}`}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "block h-3 w-3 rounded-full",
                    isActive
                      ? "bg-primary"
                      : "bg-base-content/20 hover:bg-base-content/35",
                    "transition-colors",
                  ].join(" ")}
                >
                  <span className="sr-only">{it.label}</span>
                </a>
              </div>
            );
          })}
        </nav>

        <div className="h-px w-6 bg-base-200" />

        <div className="tooltip tooltip-left" data-tip={themeTooltip}>
          <button
            type="button"
            className="btn btn-ghost btn-xs btn-circle"
            onClick={toggle}
            aria-label={themeTooltip}
          >
            <FontAwesomeIcon
              icon={isDarkMode ? faMoon : faLightbulb}
              className="h-4 w-4"
            />
          </button>
        </div>

        <div className="tooltip tooltip-left" data-tip="Scroll to top">
          <button
            type="button"
            className="btn btn-primary btn-xs btn-circle"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M12 4.5a.75.75 0 0 1 .53.22l7 7a.75.75 0 1 1-1.06 1.06l-5.72-5.72V19.5a.75.75 0 0 1-1.5 0V7.06l-5.72 5.72a.75.75 0 1 1-1.06-1.06l7-7A.75.75 0 0 1 12 4.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
