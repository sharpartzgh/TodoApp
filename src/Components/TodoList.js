// TodoList.js
// This component is responsible for rendering the list of todo items.
// It receives the list of todos from the Redux store and maps them to TodoItem components.

import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.items);

  return (
    <section id="todo-list">
      <ul>
        {todos.length === 0 ? (
          <p>No tasks yet! Add one above.</p>
        ) : (
          todos.map((todo, index) => (
            <TodoItem key={index} todo={todo} index={index} />
          ))
        )}
      </ul>
    </section>
  );
};

export default TodoList;
