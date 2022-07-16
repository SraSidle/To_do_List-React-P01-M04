import React from "react";
import { useState } from "react";
import "./ModalEdit.css";
import Modal from "../Modal/Modal";
import { TasksServices } from "../../services/TasksServices";

function ModalEdit({ closeModal, taskTitle, taskId}) {
  const [taskToUpdate, setTaskToUpdate] = useState({title:""});
  const [taskUpdated, setTaskUpdated] = useState({title: "", id: "", checked: false,})

  const editTask = async (tasks,taskupdate) => {
    tasks = taskId;
    taskupdate = taskToUpdate
    const response = await TasksServices.updateById(tasks, taskupdate);
    closeModal();
    // setTaskUpdated(response)
  };

  return (
    <Modal closeModal={closeModal}>
      <form className="form__edit"
      onSubmit={(event) => {event.preventDefault();
      editTask()}}>
          <input
           type="text"
            placeholder={taskTitle}
            onChange={(event) => setTaskToUpdate(event.target.value)}
          />
        <button type="button" onClick={() => editTask()}>Atualizar</button>
      </form>
    </Modal>
  );
}

export default ModalEdit;
