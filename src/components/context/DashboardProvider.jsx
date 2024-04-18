import { useState } from "react";
import { DashboardContext } from "./DashboardContext";

export const DashboardProvider = ({ children }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <DashboardContext.Provider
      value={{
        setShowNav,
        showNav,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
