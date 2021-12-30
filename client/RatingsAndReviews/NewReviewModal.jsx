import '../../bundle/styles.css';
import React from 'react';
import QAExitIcon from '../assets/QAExitIcon.png'
const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button className="ReviewModalExit" type="button" onClick={handleClose}>
          <img src={QAExitIcon}/>
        </button>
      </section>
    </div>
  );
};

export default Modal;