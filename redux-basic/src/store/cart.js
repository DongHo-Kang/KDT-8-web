import { createStore } from "redux";

export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";

//리듀서 함수
//ProductList.js에서 addProduct에서 dispatch를 누르면 action으로 받아온다. 그래서 action.type은 dispatch의 type을 의미하고 action.product로 product를 받아온다.
const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_CART:
      //findIndex()는 배열의 index값을 찾아주며 존재하지 않는다면 -1반환, 존재할 시 해당 index값 반환
      const findIndex = state.findIndex(
        (element) => element.id === action.product.id
      );
      //존재하지 않으면 -1
      if (findIndex !== -1) {
        //존재할 때
        const newState = [...state];
        console.log(newState);
        newState[findIndex].quantity++;
        return newState;
      } else {
        //존재하지 않을 때
        return [...state, { ...action.product, quantity: 1 }];
      }
    case REMOVE_CART:
      return state.filter((el) => el.id !== action.id);
    default:
      return state;
  }
};

//스토어 생성, 리듀서 함수가 필수
const store = createStore(reducer);

export default store;
