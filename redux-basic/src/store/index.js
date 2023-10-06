import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import loginSlice from "./login";

//createSlice(): redux와 action을 함께 생성하는 함수
// const counterSlice = createSlice({
//   name: "counter",
//   initialState: { counter: 0 },
//   reducers: {
//     increment(state, action) {
//       state.counter++;
//     },
//     decrement(state, action) {
//       state.counter--;
//     },
//     plus(state, action) {
//       console.log(action);
//       const { ten, minus } = action.payload;
//       state.counter = state.counter + ten + action.payload.minus;
//     },
//   },
// });

// const initLogin = { isLogin: false };
// const loginSlice = createSlice({
//   name: "login",
//   initialState: initLogin,
//   reducers: {
//     login(state) {
//       state.isLogin = true;
//     },
//     logout(state) {
//       state.isLogin = false;
//     },
//   },
// });

const store = configureStore({
  reducer: { counterReducer: counterSlice.reducer, login: loginSlice.reducer },
});

// export const counterAction = counterSlice.actions;
// export const loginAction = loginSlice.actions;

export default store;
