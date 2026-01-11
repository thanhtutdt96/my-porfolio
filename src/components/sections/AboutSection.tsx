import { cv } from "../../data/resumeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faLaravel,
  faPhp,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import TextType from "../common/TextType";
import { useState, type FC } from "react";
import { useActiveSectionIds } from "../../hooks/useActiveSection";
import { AboutSectionSkeleton } from "../common/skeletons/AboutSectionSkeleton";
import resumePdf from "../../assets/tupham_resume.pdf";
import { Modal } from "../common/Modal";

const helloWorld = "Hello World!";

function getFirstName(fullName: string) {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  return parts[0] ?? fullName;
}

export const AboutSection: FC = () => {
  const firstName = getFirstName(cv.name);
  const activeIds = useActiveSectionIds();
  const isActive = activeIds.length > 0 ? activeIds.includes("about") : true;
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const resumeUrl = `${resumePdf}#view=FitH`;

  const handleViewResumeMobile = () => {
    window.open(resumeUrl, "_blank");
  };

  const handleViewResume = () => {
    setIsResumeOpen(true);
  };

  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        {!isActive ? (
          <AboutSectionSkeleton />
        ) : (
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left: coding illustration */}
            <div className="animate-in slide-in-from-left-20 duration-500 ease-in-out mx-auto w-full max-w-md">
              <div className="relative aspect-square w-full">
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/60 via-secondary/40 to-accent/50 opacity-70 blur-[1px]" />
                <div className="text-5xl font-bold  flex items-center justify-center absolute inset-[10px] rounded-2xl border border-base-200 bg-base-100/70 shadow-sm backdrop-blur">
                  <TextType
                    text={helloWorld}
                    typingSpeed={100}
                    deletingSpeed={60}
                    pauseDuration={4000}
                  />
                </div>

                <div className="absolute bottom-6 right-6 flex items-center gap-3">
                  <div className="rounded-xl border border-base-200 bg-base-100/80 px-4 py-3 shadow-sm backdrop-blur">
                    <div className="flex items-center text-base font-semibold">
                      <span className="font-mono">&lt;h1&gt;</span>
                      <span className="font-mono">{helloWorld}</span>
                      <span className="font-mono">&lt;/h1&gt;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: headline + short summary */}
            <div className="animate-in slide-in-from-right-20 duration-500 ease-in-out">
              <h1 className="text-2xl font-bold tracking-tight sm:text-4xl">
                Hi, I’m <span className="text-primary">{firstName}</span>
                <span className="text-2xl font-medium mt-2 block text-base-content/60">
                  {cv.title}
                </span>
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-base-content/80">
                {cv.summary}
              </p>

              <div className="mt-4 flex flex-wrap gap-2 animate-in fade-in duration-2000 ease-in-out">
                <div className="tooltip" data-tip="React">
                  <span className="inline-flex size-9 items-center justify-center rounded-full border border-base-200 bg-base-100/80 text-primary shadow-sm">
                    <FontAwesomeIcon icon={faReact} />
                  </span>
                </div>
                <div className="tooltip" data-tip="Vue">
                  <span className="inline-flex size-9 items-center justify-center rounded-full border border-base-200 bg-base-100/80 text-primary shadow-sm">
                    <FontAwesomeIcon icon={faVuejs} />
                  </span>
                </div>
                <div className="tooltip" data-tip="Laravel">
                  <span className="inline-flex size-9 items-center justify-center rounded-full border border-base-200 bg-base-100/80 text-primary shadow-sm">
                    <FontAwesomeIcon icon={faLaravel} />
                  </span>
                </div>
                <div className="tooltip" data-tip="TypeScript">
                  <span className="inline-flex size-9 items-center justify-center rounded-full border border-base-200 bg-base-100/80 text-primary shadow-sm">
                    <FontAwesomeIcon icon={faJs} />
                  </span>
                </div>
                <div className="tooltip" data-tip="PHP">
                  <span className="inline-flex size-9 items-center justify-center rounded-full border border-base-200 bg-base-100/80 text-primary shadow-sm">
                    <FontAwesomeIcon icon={faPhp} />
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 animate-in slide-in-from-bottom-full duration-2000 ease-in-out">
                <button
                  type="button"
                  onClick={handleViewResumeMobile}
                  className="btn btn-sm btn-primary lg:hidden block"
                >
                  View resume
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-primary lg:block hidden"
                  onClick={handleViewResume}
                >
                  View resume
                </button>
                <a href="#projects" className="btn btn-sm btn-ghost">
                  View projects
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <Modal
        open={isResumeOpen}
        title="Resume"
        onClose={() => setIsResumeOpen(false)}
      >
        <iframe
          title="Resume PDF"
          src={resumeUrl}
          className="h-[75vh] w-full"
        />
      </Modal>
    </section>
  );
};
