import { useRef } from "react";

const UseRef1 = () => {
  //1. ref 객체 만들기
  const inputRef = useRef();
  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <p>(함수형 컴포넌트) 버튼 클릭 시 input에 focus 처리</p>

      <input ref={inputRef} />
      <button onClick={handleFocus}>focus</button>
    </>
  );
};

export default UseRef1;
