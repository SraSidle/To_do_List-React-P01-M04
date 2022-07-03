import React from 'react'
import "./modal.css";


function Modal() {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="header-modal">
        <span>X</span>
          <p> Tem certeza que deseja remover esse item?</p>       
        </div>
        <div className="choice">
          <button className="yes">Sim</button>
          <button className="no">Não</button>
        </div>
        <p className="alert"> Em caso de remoção. Esse item deverá ser criado novamente!</p>
      </div>
    </div>
  );
}

export default Modal;
