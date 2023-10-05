import { createStore } from "redux";
const todo = document.querySelector("#todo");
const add = document.querySelector("#add");
const li = document.querySelector("#li");

const todoReducer = (state = [], action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD":
      return [...state, { text: todo.value, id: Date.now() }];
    case "DELETE":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

const todoStore = createStore(todoReducer);
console.log(todoStore);

todoStore.subscribe(() => {
  li.innerHTML = "할일 나열하기";
  todoStore.getState().forEach((item, index) => {
    const listItem = document.createElement("li");
    const deleteItem = document.createElement("button");
    listItem.textContent = `${item.text}`;
    deleteItem.textContent = "DEL";
    deleteItem.addEventListener("click", () => {
      todoStore.dispatch({ type: "DELETE", id: item.id });
    });
    listItem.appendChild(deleteItem);
    li.appendChild(listItem);
    todo.value = "";
  });
});

add.addEventListener("click", () => {
  console.log("todo", todo.value);
  todoStore.dispatch({ type: "ADD" });
});
