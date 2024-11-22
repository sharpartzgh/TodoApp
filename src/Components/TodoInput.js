// TodoInput.js
// This component handles the input field and the add button.
// It allows users to type in a new task and add it to the list.

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/slices/todoSlice';

const TodoInput = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      dispatch(addTodo(input.trim()));
      setInput(''); // Clear the input field
    }
  };

  return (
    <section id="todo-input">
      <input
        type="text"
        id="new-todo"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button id="add-todo" onClick={handleAddTodo}>
        Add
      </button>
    </section>
  );
};

export default TodoInput;
