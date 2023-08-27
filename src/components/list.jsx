import React from "react";
import TodoItem from "./item";
import { useSelector } from "react-redux";

function List() {
  const todos = useSelector((state) => state.todo.todos); // Accessing the 'todos' array from your Redux store

  return (
    <ul>
      {todos.length > 0 &&
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} /> // Assuming 'id' is a unique identifier for each todo
        ))}
    </ul>
  );
}

export default List;
