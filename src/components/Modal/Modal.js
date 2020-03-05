import React, { useState } from 'react'
import './Modal.css'

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
    <button onClick={() => toggleModal()}>toggle modal</button>
      {
        isOpen && (
          <div className='modal-container'>

          </div>
        )
      }
      
    </>
  )
}

export default Modal
