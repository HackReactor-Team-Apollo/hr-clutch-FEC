import '../../bundle/styles.css';
import React from 'react';
import QAExitIcon from '../assets/QAExitIcon.png'
const ImageModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main imagemodal">
        {children}
        <br></br>
        <div className="closeModal">
          <br></br>

        </div>
        <div className="modalClose">
          <button className="ImageModalExit" type="button" onClick={handleClose}> Close

          </button>
        </div>
      </section>
    </div>
  );
};

export default ImageModal;

{/* <img src={QAExitIcon}/> */}