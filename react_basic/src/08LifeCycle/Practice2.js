import { useState, useEffect } from "react";
import axios from "axios";

export default function Practice2() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([...data, users]);
  });

  return (
    <>
      {data.map((value) => {
        return (
          <div key={value.id}>
            <h1>{value.name}</h1>
            <h2>{value.email}</h2>
          </div>
        );
      })}
    </>
  );
}
