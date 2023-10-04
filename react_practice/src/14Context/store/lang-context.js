import { createContext } from "react";

const LangContext = createContext({
  lang: "English",
  setLang: () => {},
});

export default LangContext;
