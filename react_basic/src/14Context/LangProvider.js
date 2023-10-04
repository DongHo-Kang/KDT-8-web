import MyContext from "./store/lang-context";
import { useState } from "react";

export default function LanguageProvider(props) {
  const [language, setLanguage] = useState("ko");

  return (
    <MyContext.Provider
      value={{ language: language, setLanguage: setLanguage }}
    >
      {props.children}
    </MyContext.Provider>
  );
}
