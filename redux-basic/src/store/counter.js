import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    plus(state, action) {
      console.log(action);
      const { ten, minus } = action.payload;
      state.counter = state.counter + ten + action.payload.minus;
    },
  },
});

//action은 해당하는 곳에서 내보내기
export const counterAction = counterSlice.actions;

export default counterSlice.reducer;
