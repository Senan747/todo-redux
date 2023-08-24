import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../stores/todo'

function item() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth)

  const deleteHandle = () => {
    dispatch(deleteTodo(todo.id))
  }
  return (
    <li>
      <span>
        {todo.title} - {todo.user}
      </span>
      {
        todo.user === user.id && (
          <>
            <button onClick={editHandle}>Fix</button>
            <button onClick={deleteHandle}>delete</button>
          </>
        )
      }
    </li>
  )
}

export default item