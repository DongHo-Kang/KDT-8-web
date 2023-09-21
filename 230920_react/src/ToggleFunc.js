import { useState } from "react";

export default function ToggleFunc() {
  const [status, setStatus] = useState(false);

  const handleToggle = () => {
    if (status === false) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };

  return (
    <div>
      {/* false일 때는 안보이고, true 일 때 보인다.*/}
      <p>{status && "보여라"}</p>
      <button onClick={handleToggle}>토글</button>
    </div>
  );
}
