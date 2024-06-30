import React from "react";
import '../App.css'

const Todo = ({ todo, deleteTodo, updateStatusTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.status}
        onChange={() => updateStatusTodo(todo.id, !todo.status)}
      />
      <span className={todo.status ? 'active line-through' : ''}>{todo.title}</span>
      <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
    </li>
  );
};

export default Todo;
