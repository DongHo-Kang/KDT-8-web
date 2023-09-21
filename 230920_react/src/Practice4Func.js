import React, { useState } from "react";

export default function Practice4Func() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});

  function addButton() {
    if (list.length >= 10) {
      alert("할일이 너무 많아요!");
      return;
    }
    setList([...list, todo]);
    setTodo("");
  }

  function toggleCheckbox(index) {
    setCheckedItems((prevState) => {
      const updatedCheckedItems = { ...prevState };
      updatedCheckedItems[index] = !updatedCheckedItems[index];
      return updatedCheckedItems;
    });
  }

  function deleteButton() {
    setList((prevList) => prevList.filter((_, index) => !checkedItems[index]));
    setCheckedItems({});
  }

  return (
    <>
      <form>
        <input
          placeholder="할 일 입력..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="button" onClick={addButton}>
          추가
        </button>
      </form>
      <ul>
        {list.map((value, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={checkedItems[index] || false}
              onChange={() => toggleCheckbox(index)}
            />
            {value}
          </li>
        ))}
      </ul>
      <button type="button" onClick={deleteButton}>
        완료된 일 삭제
      </button>
    </>
  );
}
