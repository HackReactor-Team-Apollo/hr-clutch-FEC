import React, { useState, useCallback } from 'react'
import { render } from 'react-dom'
import QAExitIcon from '../assets/QAExitIcon.png'

const QAModal = ({ handleClose, submit, show, children, product_id }) => {
  const showHideClassName = show
    ? 'QAModalOverlay display-block'
    : 'QAModalOverlay display-none'

  return (
    <div className={showHideClassName}>
      {children}
      <button className="QACloseAndSubmitBtns" type='button' onClick={handleClose}>
        Close
      </button>
      <button className="QACloseAndSubmitBtns" onClick={submit}>Submit</button>
    </div>
  )
}
export default QAModal
