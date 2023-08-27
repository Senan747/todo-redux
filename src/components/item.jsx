import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../stores/todo'
import { openModal } from '../stores/modal'

function item({ todo }) {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth)


  const deleteHandle = () => {
    dispatch(deleteTodo(todo.id))
  }

  const editHandle = () => {
    dispatch(openModal({
      name: 'edit-todo',
      data: todo
    }))
  }
  return (
    <li>
      <span>
        {todo.title}
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