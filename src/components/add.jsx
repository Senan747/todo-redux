import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../stores/todo'
import { nanoid } from '@reduxjs/toolkit';

function add() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  const submitHandle = e => {
    e.preventDefault();
    dispatch(addTodo({
      title: todo,
      done: false,
      id: nanoid(),
      user: user.id
    }));
  }
  return (
    <div>
      <form action="" onSubmit={submitHandle}>
        <input type="text" />
        <button type='submit'></button>
      </form>
    </div>
  )
}

export default add