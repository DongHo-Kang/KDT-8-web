import React, { useState, useCallback } from 'react';

export default function UseCallback() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    console.log('not useCallback count : ', count);
  };

  const incrementCount = useCallback(() => {
    console.log('count : ', count);
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <>
      <button onClick={incrementCount}>Increment Count</button>
      <p>Count: {count}</p>
    </>
  );
}
