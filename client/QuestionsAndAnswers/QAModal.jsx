import React, { useState, useCallback } from 'react'
import { render } from 'react-dom'
import { useModal } from 'react-hooks-use-modal'
import QAExitIcon from '../assets/QAExitIcon.png'

const QAModal = () => {
  const [Modal, open, close, isOpen] = useModal('App', {
    preventScroll: true,
    closeOnOverlayClick: true
  })
  return (
    <div>
      <button className='QAModalBtn' onClick={open}>
        Add New Answer
      </button>
      <Modal>
        <div className='QAModalOverlay'>
          <div className='QAModalHeader'>
            <div>Answer Form</div>
            <button className='QAModalExit' onClick={close}>
              <img src={QAExitIcon} />
            </button>
          </div>
          <input
            className='QAModalInputText'
            placeholder='Type your answer here'
          />
          <button className='QAModalSubmit' onClick={close}>Submit</button>
        </div>
      </Modal>
    </div>
  )
}
export default QAModal
