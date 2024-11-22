import React from 'react';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';
import './styles/TodoApp.css';

const TodoApp = () => {
  return (
    <div className="todo-app">
      <h1>Todo Application</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default TodoApp;
