import { useState, createContext, useEffect } from "react";

export const themeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleItems = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <themeContext.Provider value={{ theme, toggleItems }}>
      {children}
    </themeContext.Provider>
  );
};
