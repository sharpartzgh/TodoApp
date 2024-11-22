// todoSlice.js
// This file contains the Redux logic for managing todo state.
// It includes actions for adding, toggling, and deleting todos.

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push({ text: action.payload, completed: false });
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((_, index) => index !== action.payload);
    },
    toggleComplete: (state, action) => {
      const todo = state.items[action.payload];
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo: (state, action) => {
      const { index, newText } = action.payload;
      const todo = state.items[index];
      if (todo) {
        todo.text = newText;
      }
    } 
  },
});

export const { addTodo, deleteTodo, toggleComplete, editTodo } = todosSlice.actions;
export default todosSlice.reducer;
