import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TODO, DELETE_TODO } from "./store/legacy";

export default function Main() {
  const [text, setText] = useState("");

  //useSelector(): redux store의 state를 조회
  //인자로 콜백함수, 콜백함수의 매개변수로 state를 받을 수 있다.
  //자동으로 구독(subscribe 계속 지켜본다)기능이 있다. 그래서 데이터가 변형되면 자동으로 컴포넌트가 재실행된다.
  // state : store  index.js의 state를 가져온다.
  const todos = useSelector((state) => state);
  //console.log(todos);
  //dispatch는 우리가 호출 할 수 있는 함수
  const dispatch = useDispatch();

  //Todo 추가
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_TODO, text: text });
    setText("");
  };

  //Todo 삭제
  const onClick = (id) => {
    console.log(id);
    dispatch({ type: DELETE_TODO, id: id });
  };

  return (
    <div>
      <h1>To Dos</h1>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} id={todo.id}>
            {todo.text}
            <button onClick={() => onClick(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
