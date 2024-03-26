import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggle: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // localStorage + useEffect
  // toggle button to change theme
  const toggle = () => {
    const newValue = theme == "light" ? "dark" : "light";

    if (newValue === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
