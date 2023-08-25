import React from 'react'
import { useSelector } from 'react-redux'

function editTodo() {
  const { data, close } = useSelector(state => state.modal)
  return (
    <div>
      {JSON.stringify(data, null, 2)}
      <button onClick={close}>

      </button>
    </div>
  )
}

export default editTodo