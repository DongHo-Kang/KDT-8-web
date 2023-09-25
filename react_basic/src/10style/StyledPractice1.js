import styled from "styled-components";
import { useState } from "react";
const _Button = styled.button`
  background-color: ${(props) => props.color};
  width: 100px;
  height: 80px;
  color: ${(props) => props.text};
`;

export default function StyledPractice1() {
  const [color, setColor] = useState("blue");
  const [text, setText] = useState("white");
  function buttonClick() {
    if (color === "blue") {
      setColor("red");
      setText("black");
    } else {
      setColor("blue");
      setText("white");
    }
  }
  return (
    <div>
      <_Button color={color} text={text} onClick={buttonClick}>
        색상변경!
      </_Button>
    </div>
  );
}
