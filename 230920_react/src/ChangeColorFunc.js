import { useState } from "react";

export default function ChangeColorFunc() {
  const [color, setColor] = useState("black");
  const [text, setText] = useState("검은색");

  function ButtonRed() {
    setColor("red");
    setText("빨간색");
  }
  function ButtonBlue() {
    setColor("blue");
    setText("파란색");
  }
  const style = {
    color: `${color}`,
  };
  return (
    <>
      <h1 style={style}>{text}</h1>
      <button onClick={ButtonRed}>빨간색</button>
      <button onClick={ButtonBlue}>파란색</button>
    </>
  );
}
