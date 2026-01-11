import { TopNavbar } from "./components/TopNavbar";
import { SideNav } from "./components/SideNav";
import { AboutSection } from "./components/sections/AboutSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ContactSection } from "./components/sections/ContactSection";
import { useActiveSection } from "./hooks/useActiveSection";
import { useHasScrolled } from "./hooks/useHasScrolled";
import { ActiveSectionProvider } from "./contexts/activeSectionContext";
import type { FC } from "react";

const App: FC = () => {
  const sectionIds = ["about", "skills", "projects", "contact"] as const;
  const activeSection = useActiveSection(sectionIds);
  const hasScrolled = useHasScrolled(220);

  return (
    <>
      <div className="min-h-dvh bg-base-100">
        <TopNavbar />

        <ActiveSectionProvider value={activeSection}>
          <main>
            <div className="bg-linear-to-b from-base-100 to-base-200/40">
              <AboutSection />
            </div>

            <div className="border-t border-base-200">
              <SkillsSection />
            </div>

            <div className="border-t border-base-200 bg-base-200/40">
              <ProjectsSection />
            </div>

            <div className="border-t border-base-200">
              <ContactSection />
            </div>

            <footer className="border-t border-base-200 py-10">
              <div className="mx-auto max-w-6xl px-4 text-sm text-base-content/60">
                © {new Date().getFullYear()} — Tu Pham. Built with Vite, React,
                TailwindCSS, and DaisyUI.
              </div>
            </footer>
          </main>
        </ActiveSectionProvider>
      </div>
      <SideNav
        items={[
          { id: "about", label: "About" },
          { id: "skills", label: "Skills" },
          { id: "projects", label: "Projects" },
          { id: "contact", label: "Contact" },
        ]}
        activeId={activeSection.activeId}
        visible={hasScrolled}
      />
    </>
  );
};

export default App;
