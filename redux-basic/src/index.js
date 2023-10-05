import { createStore } from "redux";
const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const num = document.querySelector("#num");

//redux를 이용한 코드
//npm i redux
const ADD = "ADD";
const MINUS = "MINUS";

const countReducer = (state = 0, action) => {
  console.log(state, action);
  switch (action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
};

//store는 데이터를 넣는 곳
//createStore(): store 생성, 리듀서 함수 필수
const countStore = createStore(countReducer);
console.log(countStore);

//subscribe()는 함수를 반환하여 데이터와 저장소가 변경될 때마다 함수를 실행
countStore.subscribe(() => {
  //getState를 통해 새로운 값을 받아올 수 있다.
  num.textContent = countStore.getState();
});

// countStore.dispatch({ type: "ADD" });
//dispatch가 실행시켜준다.
add.addEventListener("click", () => {
  countStore.dispatch({ type: "ADD" });
});

minus.addEventListener("click", () => {
  countStore.dispatch({ type: "MINUS" });
});
//====javascript를 이용한 +1, -1 코드====//
// let count = 0;
// num.textContent = count;

// add.addEventListener("click", () => {
//   count = count + 1;
//   console.log(count);
//   num.textContent = count;
// });

// minus.addEventListener("click", () => {
//   count = count - 1;
//   console.log(count);
//   num.textContent = count;
// });
