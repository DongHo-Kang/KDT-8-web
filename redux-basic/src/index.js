// import { createStore } from "redux";
// const add = document.querySelector("#add");
// const minus = document.querySelector("#minus");
// const num = document.querySelector("#num");

// //redux를 이용한 코드
// //npm i redux
// const ADD = "ADD";
// const MINUS = "MINUS";

// const countReducer = (state = 0, action) => {
//   console.log(state, action);
//   switch (action.type) {
//     case ADD:
//       return state + 1;
//     case MINUS:
//       return state - 1;
//     default:
//       return state;
//   }
// };

// //store는 데이터를 넣는 곳
// //createStore(): store 생성, 리듀서 함수 필수
// const countStore = createStore(countReducer);
// console.log(countStore);

// //subscribe()는 함수를 반환하여 데이터와 저장소가 변경될 때마다 함수를 실행
// countStore.subscribe(() => {
//   //getState를 통해 새로운 값을 받아올 수 있다.
//   num.textContent = countStore.getState();
// });

// // countStore.dispatch({ type: "ADD" });
// //dispatch가 실행시켜준다.
// add.addEventListener("click", () => {
//   countStore.dispatch({ type: "ADD" });
// });

// minus.addEventListener("click", () => {
//   countStore.dispatch({ type: "MINUS" });
// });
// //====javascript를 이용한 +1, -1 코드====//
// // let count = 0;
// // num.textContent = count;

// // add.addEventListener("click", () => {
// //   count = count + 1;
// //   console.log(count);
// //   num.textContent = count;
// // });

// // minus.addEventListener("click", () => {
// //   count = count - 1;
// //   console.log(count);
// //   num.textContent = count;
// // });

/*
// == To Dos 실습 문제 코드//
import { createStore } from "redux";

const input = document.querySelector("input");
const form = document.querySelector("form");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

//reducer
const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      const newTodo = { text: action.text, id: Date.now() };
      return [...state, newTodo];
    case DELETE_TODO:
      return state.filter((el) => el.id !== action.id);
    default:
      return state;
  }
};
//store
const store = createStore(reducer);

const removeTodo = (event) => {
  event.preventDefault();
  console.log(event);
  store.dispatch({ type: DELETE_TODO, id: Number(event.target.parentNode.id) });
};

//subsribe: 스토어의 데이터가 변경될 때 ()안에 있는 함수가 실행됨.
//store.subscribe(() => console.log(store.getState()));
store.subscribe(() => {
  //최신 값 저장
  const todos = store.getState();
  ul.innerText = "";
  todos.map((value) => {
    console.log(value);
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "삭제";

    btn.addEventListener("click", removeTodo); //삭제 이벤트
    li.innerText = value.text;
    li.id = value.id;
    li.appendChild(btn);
    ul.appendChild(li);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault(); //폼 제출 정지
  store.dispatch({ type: ADD_TODO, text: input.value });
  input.value = "";
});
*/
/*
//redux , legacy.js//
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/;egacy";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
*/

//redux_toolkit , index.js //
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
