import styled from "styled-components";
import { useState } from "react";

const _Input = styled.input``;
const _Button = styled.button`
  background-color: aqua;
  width: 50px;
  height: 40px;
`;
const _Table = styled.table`
  max-height: 200px;
`;

const _TableDiv = styled.div`
  height: 200px;
  overflow-y: auto;
  width: 50%;
`;

export default function StyledPractice2() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  function addButton() {
    setList([...list, todo]);
  }

  return (
    <div>
      <_Input
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      ></_Input>
      <_Button type="button" onClick={addButton}>
        Add
      </_Button>
      <_TableDiv>
        <_Table>
          {list.map((value, index) => (
            <tr key={index}>
              <td>{value}</td>
            </tr>
          ))}
        </_Table>
      </_TableDiv>
    </div>
  );
}
