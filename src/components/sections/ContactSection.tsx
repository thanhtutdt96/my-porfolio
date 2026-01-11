import { Section } from "../Section";
import { cv } from "../../data/resumeData";
import type { FC } from "react";
import { ContactSectionSkeleton } from "../common/skeletons/ContactSectionSkeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const ContactSection: FC = () => {
  const githubHref = cv.links.find((l) => l.label === "GitHub")?.href ?? "";
  const linkedInHref = cv.links.find((l) => l.label === "LinkedIn")?.href ?? "";

  const contactCards = [
    {
      label: "Linkedin",
      sublabel: linkedInHref ? linkedInHref.replace(/^https?:\/\//, "") : "",
      href: linkedInHref,
      icon: faLinkedin,
      external: true,
    },
    {
      label: cv.phone,
      sublabel: "Phone",
      href: `tel:${cv.phone.replace(/\s+/g, "")}`,
      icon: faPhone,
      external: false,
    },
    {
      label: "GitHub",
      sublabel: githubHref ? githubHref.replace(/^https?:\/\//, "") : "",
      href: githubHref,
      icon: faGithub,
      external: true,
    },
    {
      label: "E-mail",
      sublabel: cv.email,
      href: `mailto:${cv.email}`,
      icon: faEnvelope,
      external: false,
    },
  ] as const;

  return (
    <Section
      id="contact"
      title="Contact"
      eyebrow="Let’s work together"
      skeleton={<ContactSectionSkeleton />}
    >
      <div className="grid gap-6">
        <div className="mt-4 grid gap-3 sm:grid-cols-2 animate-in fade-in duration-2000">
          {contactCards.map((c) => (
            <a
              key={`${c.label}-${c.href}`}
              className={[
                "group flex items-center justify-between gap-4 rounded-xl border border-base-200 bg-base-100 px-4 py-4 shadow-sm",
                "transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-base-200/30 hover:shadow",
                c.href ? "" : "pointer-events-none opacity-50",
              ].join(" ")}
              href={c.href || undefined}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noreferrer" : undefined}
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-base-200 bg-base-200/50 text-base-content/80 transition-colors duration-200 group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:text-primary">
                  <FontAwesomeIcon icon={c.icon} size="lg" />
                </div>

                <div className="min-w-0">
                  <div className="truncate text-base lg:text-lg font-semibold">
                    {c.label}
                  </div>
                  <div className="truncate text-sm lg:text-base text-base-content/60">
                    {c.sublabel}
                  </div>
                </div>
              </div>

              <div className="shrink-0 text-base-content/50 transition-colors duration-200 group-hover:text-primary">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};
