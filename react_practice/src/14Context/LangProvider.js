import { useState } from "react";
import LangContext from "./store/lang-context";

export default function LangProvider(props) {
  const [lang, setLang] = useState("English");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {props.children}
    </LangContext.Provider>
  );
}
