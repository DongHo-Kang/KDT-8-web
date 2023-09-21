import { useState } from "react";

export default function CounterFunc() {
  //   const state = useState();
  //     //[undefined, f]가 나온다.
  //     //undefinded는 우리가 필요한 초기값을 넣으면 되고, f에는 함수를 넣으면 된다.
  //   console.log(state);

  const [number, setNumber] = useState(0);
  console.log(number);

  function handleIncrement() {
    setNumber(number + 1);
  }
  const handleDecrement = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={handleIncrement}>증가</button>
      <button onClick={handleDecrement}>감소</button>
    </div>
  );
}
