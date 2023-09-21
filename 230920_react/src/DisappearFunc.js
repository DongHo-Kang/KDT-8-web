import { useState } from "react";

export default function DisappearFunc() {
  const [appear, setAppear] = useState(true);

  function appearButton() {
    setAppear(!appear);
  }

  return (
    <>
      <h1>{appear && "안녕하세요"}</h1>
      <button onClick={appearButton}>{appear ? "사라지기" : "보여라"}</button>
    </>
  );
}
