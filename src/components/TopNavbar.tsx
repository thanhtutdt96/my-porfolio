import { cv } from "../data/resumeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { useTheme } from "../hooks/useTheme";
import type { FC } from "react";

export type NavItem = {
  id: string;
  label: string;
};

const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const NavLinks: FC = () => {
  return (
    <>
      {navItems.map((item) => (
        <li key={item.id}>
          <a href={`#${item.id}`} className="font-medium">
            {item.label}
          </a>
        </li>
      ))}
    </>
  );
};

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const initials = (parts[0]?.[0] ?? "") + (parts.at(-1)?.[0] ?? "");
  return initials.toUpperCase();
}

export const TopNavbar: FC = () => {
  const initials = getInitials(cv.name);
  const { toggle } = useTheme();
  const linkIconByLabel: Record<string, unknown> = {
    GitHub: faGithub,
    LinkedIn: faLinkedin,
  };

  return (
    <div className="animate-in slide-in-from-top-full duration-500 ease-in-out sticky top-0 z-50 border-b border-base-200/70 bg-base-200 backdrop-blur">
      <div className="navbar mx-auto max-w-6xl px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-1 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <NavLinks />
            </ul>
          </div>
          <button
            type="button"
            className="btn btn-link group px-2 no-underline"
            aria-label="Toggle theme"
            onClick={toggle}
          >
            <div className="avatar placeholder">
              <div className="mask mask-squircle flex w-10 items-center justify-center bg-neutral text-neutral-content">
                <span className="text-sm font-semibold group-hover:hidden">
                  {initials}
                </span>
                <span className="hidden group-hover:inline-flex">
                  <FontAwesomeIcon icon={faLightbulb} size="lg" />
                </span>
              </div>
            </div>
          </button>
          <a href="#about" className="link font-semibold no-underline">
            Portfolio
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end gap-2">
          {cv.links.map((l) => (
            <div
              key={l.href}
              className="tooltip tooltip-bottom"
              data-tip={l.label}
            >
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer"
                aria-label={l.label}
                className="btn btn-ghost btn-sm btn-square hidden sm:inline-flex"
              >
                <FontAwesomeIcon
                  icon={(linkIconByLabel[l.label] as IconProp) ?? faGithub}
                  size="xl"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
