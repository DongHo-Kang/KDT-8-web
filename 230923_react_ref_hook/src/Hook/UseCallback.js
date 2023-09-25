import { useState, useCallback } from "react";

export default function ParentComponent() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const IncrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <>
      <input onChange={(e) => setInputValue(e.target.value)} />
      <ChildComponent1 onClick={IncrementCount} />
      <ChildComponent2 />
      <p> Count: {count}</p>
    </>
  );
}

function ChildComponent1({ onClick }) {
  console.log("child component render");
  return <button onClick={onClick}>Increment Count</button>;
}

function ChildComponent2() {
  return <button>Child component2</button>;
}
