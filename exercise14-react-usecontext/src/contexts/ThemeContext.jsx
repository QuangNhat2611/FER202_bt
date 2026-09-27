import React, { createContext, useState, /* các hook khác nếu có */ } from 'react';
export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#61dafb"
  }
};

export const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState("light");

  const toggleTheme = () => {
    setThemeName((current) =>
      current === "light" ? "dark" : "light"
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: themes[themeName],
        themeName,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}