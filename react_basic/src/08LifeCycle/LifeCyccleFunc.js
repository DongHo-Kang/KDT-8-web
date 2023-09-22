import { useState, useEffect } from "react";

function MyComponent(props) {
  const [text, setText] = useState();

  //랜더될 때 : 한번은 다 실행된다.
  useEffect(() => {
    console.log("항상 실행된다");
  });
  //함수 뒤에 배열이 있을때
  //빈 배열이 있으면 한번만 생성
  //배열안에는 useState 값이 들어간다.
  //[text] => text의 값이 변경될때 실행된다.
  useEffect(() => {
    console.log("생성될때 실행됩니다.");
    return () => {
      console.log("제거될 때 실행됩니다.");
    };
  }, []);

  useEffect(() => {
    console.log("state가 변경될 때");
  }, [text]);

  return (
    <>
      <div>My Component {props.number}</div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}

export default function LifeCycleFunc() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumberState = () => {
    setNumber(() => number + 1);
  };

  const changeVisibleState = () => {
    setVisible(() => !visible);
  };

  return (
    <>
      <button onClick={changeNumberState}>PLUS</button>
      <button onClick={changeVisibleState}>ON/OFF</button>
      {visible && <MyComponent number={number} />}
    </>
  );
}
