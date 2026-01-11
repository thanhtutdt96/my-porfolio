import { createContext } from "react";
import type { ReactNode } from "react";
import type { ActiveSectionState } from "../hooks/useActiveSection";

const ActiveSectionIdContext = createContext<ActiveSectionState | null>(null);

const ActiveSectionProvider = ({
  value,
  children,
}: {
  value: ActiveSectionState;
  children: ReactNode;
}) => {
  return (
    <ActiveSectionIdContext.Provider value={value}>
      {children}
    </ActiveSectionIdContext.Provider>
  );
};

export { ActiveSectionProvider, ActiveSectionIdContext };
