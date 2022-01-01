import '../../bundle/styles.css';
import React from 'react';
import QAExitIcon from '../assets/QAExitIcon.png'
const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <br></br>
        <div className="closeModal">
          <br></br>
        <button className="ReviewModalExit" type="button" onClick={handleClose}> Close Form

        </button>
        </div>
      </section>
    </div>
  );
};

export default Modal;

{/* <img src={QAExitIcon}/> */}