import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../stores/todo";
import { nanoid } from "@reduxjs/toolkit";

function add() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [todo, setTodo] = useState();

  const submitHandle = (e) => {
    e.preventDefault();

    if (todo !== "") {
      dispatch(
        addTodo({
          title: todo,
          done: false,
          id: nanoid(),
          user: user.id,
        })
      );
      setTodo("");
    }
  };
  return (
    <div>
      <form action="" onSubmit={submitHandle}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
}

export default add;
