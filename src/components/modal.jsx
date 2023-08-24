import React from 'react'
import { useSelector } from 'react-redux'

function modal() {
  const {close: isModalClose} = useSelector(state => state.modal)
  return (
    <div>modal 
      <button onClick={close}></button>
    </div>
  )
}

export default modal