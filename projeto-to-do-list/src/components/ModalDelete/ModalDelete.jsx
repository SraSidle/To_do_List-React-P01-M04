import React from 'react'
import "./ModalDelete.css";
import Modal from "../Modal/Modal.jsx"
import { TasksServices } from '../../services/TasksServices';


function ModalDelete({closeModal, taskToDelete, onDeleteTask}) {

  const handleDeleteTask = async (task) => {
     await TasksServices.deleteById(task.id)
     onDeleteTask(task);
     closeModal();
  }

  return(     
  <Modal closeModal={closeModal}>
    <p> Tem certeza que deseja remover esse item?</p>             
        <div className="choice">
          <button 
            className="yes"
            onClick={() => handleDeleteTask(taskToDelete)}
            >Sim</button>
          <button
          className="no"
          onClick={closeModal}
          >Não</button>
          </div>
        <p className="alert"> Em caso de remoção. Esse item deverá ser criado novamente!</p>
  </Modal>    
)
}

export default ModalDelete;
