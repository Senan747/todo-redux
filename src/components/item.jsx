import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../stores/todo";
import { openModal } from "../stores/modal";

function item({ todo }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const deleteHandle = () => {
    dispatch(deleteTodo(todo.id));
  };

  const editHandle = () => {
    dispatch(
      openModal({
        name: "edit-todo",
        data: todo,
      })
    );
  };  
  return (
    <li className="list">
      <div className={todo.done ? 'done' : " "}>{todo.title}</div>
      <div>
        {todo.user === user.id && (
          <>
            <button onClick={editHandle}>Fix</button>
            <button onClick={deleteHandle}>delete</button>
          </>
        )}
      </div>
    </li>
  );
}

export default item;
