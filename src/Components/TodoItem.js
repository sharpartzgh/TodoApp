// TodoItem.js
// This component renders a single todo item.
// It displays the todo text, a checkbox to mark it as completed, and a delete button.

import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../Redux/slices/todoSlice';

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  function handleToggleComplete() {
        dispatch(toggleComplete(index));
    }

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(index));
  };

  return (
    <li className={todo.completed ? 'completed' : ''}>
      <input
        type="checkbox"
        className="toggle-complete"
        checked={todo.completed}
        onChange={handleToggleComplete}
      />
      <span className="todo-text">{todo.text}</span>
      <button className="delete-todo" onClick={handleDeleteTodo}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
