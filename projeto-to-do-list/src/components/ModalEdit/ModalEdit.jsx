import React from "react";
import { useState } from "react";
import "./ModalEdit.css";
import Modal from "../Modal/Modal";
import { TasksServices } from "../../services/TasksServices";

function ModalEdit({ closeModal, taskTitle, taskId }) {
  const [taskUpdated, setTaskUpdated] = useState({
    title: taskTitle,
    id: taskId,
    checked: false,
  });

  const editTask = async (tasks, taskupdate) => {
    delete taskupdate.id;
    await TasksServices.updateById(tasks, taskupdate);
    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <p className="title-edit">Editar Tarefa</p>
      <form
        className="form__edit"
        onSubmit={(event) => {
          console.log(taskId);
          event.preventDefault(); // senão vai tentar mandar os dados via navegador, muda a url e coloca as informaçoes, não manda pra API
          editTask(taskUpdated.id, taskUpdated);
        }}
      >
        <input
          className="input-edit"
          type="text"
          placeholder={taskTitle}
          value={taskUpdated.title} //
          name="title" //add name e value, essenciais para o input controlado
          onChange={(event) =>
            setTaskUpdated({ ...taskUpdated, title: event.target.value })
          }
        />
        <button type="submit" className="button-edit">
          Atualizar
        </button>
      </form>
    </Modal>
  );
}

export default ModalEdit;
