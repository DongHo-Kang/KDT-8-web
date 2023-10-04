import { useState } from "react";
import ThemeContext from "./store/theme-context";

export default function ThemeProvider(props) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
