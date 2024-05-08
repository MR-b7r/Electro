import React, { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import PropTypes from "prop-types";
const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const prefersDarkTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    prefersDarkTheme,
    "isDarkMode"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
DarkModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext used outside Provider");
  return context;
}

export { DarkModeProvider, useDarkMode };
