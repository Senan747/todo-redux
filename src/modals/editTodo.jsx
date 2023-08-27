import React, { useState } from "react";
import { useSelector } from "react-redux";
import { editTodo } from "../stores/todo";
import { useDispatch } from "react-redux";

function edit({data, close}) {
  const [todo, setTodo] = useState(data.title)
  const [done, setDone] = useState(data.done)

  const dispatch = useDispatch();

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(editTodo({
      id: data.id,
      title: todo,
      done
    }))
    close();
  }
  return (
    <div>
      <form action="" onSubmit={submitHandle}>
        <input type="text"  value={todo} onChange={e => setTodo(e.target.value)}/>
        <label htmlFor="">
          <input type="checkbox" checked={done} onChange={e => setDone(e.target.checked)} />
          It was finished
        </label>
        <button type="submit">submit</button>
      </form>
      <button onClick={close}>close</button>
    </div>
  );
}

export default edit;
