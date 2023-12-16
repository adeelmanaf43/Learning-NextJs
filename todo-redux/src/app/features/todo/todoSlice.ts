import { configureStore, nanoid } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "1", text: "Learn Java" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },
    eeditTodo: (state, action) => {
      state.todos = state.todos.map((todo: any) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        } else {
          return todo;
        }
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo: any) => todo.id !== action.payload
      );
    },
  },
});

export const { addTodo, eeditTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
