// TodoItem.js
// This component renders a single todo item.
// It displays the todo text, a checkbox to mark it as completed, and a delete button.

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo, editTodo } from '../Redux/slices/todoSlice';

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  function handleToggleComplete() {
        dispatch(toggleComplete(index));
    }

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(index));
  };

  const handleSaveEdit = () => {
    if (newText.trim()) {
      dispatch(editTodo({ index, newText })); // Dispatch the edit action
      setIsEditing(false); // Exit editing mode
    }
  };

  const handleCancelEdit = () => {
    setNewText(todo.text); // Reset the input
    setIsEditing(false); // Exit editing mode
  };

  return (
    <li className={todo.completed ? 'completed' : ''}>
      {isEditing ? (
        <div className="editing">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      ) : (
        <>
          <input
            type="checkbox"
            className="toggle-complete"
            checked={todo.completed}
            onChange={handleToggleComplete}
          />
          <span className="todo-text">{todo.text}</span>
          <button className="edit-todo" onClick={() => setIsEditing(true)}>Edit</button>
          <button className="delete-todo" onClick={handleDeleteTodo}>
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
