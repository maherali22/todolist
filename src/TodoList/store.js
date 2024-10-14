import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../TodoList/slice";

export const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
});
