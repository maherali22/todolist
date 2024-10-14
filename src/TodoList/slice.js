import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    done: (state, action) => {
      const todo = state[action.payload];
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    remove: (state, action) => {
      return state.filter((val, index) => index !== action.payload);
    },
  },
});

export const { add, done, remove } = todoSlice.actions;
export default todoSlice.reducer;
