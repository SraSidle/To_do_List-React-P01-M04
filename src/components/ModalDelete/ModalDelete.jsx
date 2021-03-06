import React from "react";
import "./ModalDelete.css";
import Modal from "../Modal/Modal.jsx";
import { TasksServices } from "../../services/TasksServices";

function ModalDelete({ closeModal, taskToDelete }) {
  const handleDeleteTask = async (tasks) => {
    await TasksServices.deleteById(tasks);
    closeModal();
  };

  return (
    <Modal className="Modal" closeModal={closeModal}>
      <p className="text__p"> Tem certeza que deseja remover esse item?</p>
      <div className="choice">
        <button className="yes" onClick={() => handleDeleteTask(taskToDelete)}>
          Sim
        </button>
        <button className="no" onClick={closeModal}>
          Não
        </button>
      </div>
      <p className="alert">
        {" "}
        <i className="bi bi-info-circle"></i> Em caso de remoção. Essa tarefa
        deverá ser criada novamente!
      </p>
    </Modal>
  );
}

export default ModalDelete;
