import { useContext } from "react";
import ThemeContext from "./store/theme-context";

export default function ThemeSelector() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <h2>현재 테마: {theme}</h2>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="dark">Dark</option>
        <option value="light">light</option>
      </select>
    </div>
  );
}
