import { createContext, useState } from "react";

//context
const ThemeContext = createContext({
  language: "",
  theme: "",
  setLanguage: () => {},
  setTheme: () => {},
});

//provider component
export function ThemeProvider({ children }) {
  const [language, setLanguage] = useState("ko");
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ language, setLanguage, theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
