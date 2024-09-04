import { createSlice } from "@reduxjs/toolkit";

const counterSlics = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});
export const { increment, decrement } = counterSlics.actions;

export default counterSlics.reducer;
