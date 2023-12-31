import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import modals from '../modals'
import { closeModal } from '../stores/modal'

function modal() {
  const dispatch = useDispatch();
  const { name, data} = useSelector(state => state.modal)
  

  const close = () => {
    dispatch(closeModal())
  }

  const modal = modals.find(m => m.name === name)
  return (
    <div className="modal">
      <div className="modal-inner">
        <modal.element close={close} data={data} />
      </div>
    </div>
  )
}

export default modal