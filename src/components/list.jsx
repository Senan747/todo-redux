import React from "react";
import TodoItem from "./item";
import { useSelector } from "react-redux";

function list() {
  const {todos} = useSelector((state) => state.todo.todos);
  return (
    <ul>
      {todos.map((todo, key) => (
        <TodoItem />
      ))}
    </ul>
  );
}

export default list;
