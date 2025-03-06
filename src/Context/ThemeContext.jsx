import React, { createContext, useState, useEffect } from "react";

// Create Context
export const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    // Remove previous theme class and add new theme class
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);

    // Save the theme in localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
