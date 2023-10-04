import { useContext } from "react";
import LangContext from "./store/lang-context";

export default function LangSelector() {
  const value = useContext(LangContext);

  return (
    <div>
      <h2>선택된 테마 {value.lang}</h2>
      <select
        value={value.lang}
        onChange={(e) => value.setLang(e.target.value)}
      >
        <option value="English">영어</option>
        <option value="Korean">한국어</option>
      </select>
    </div>
  );
}
