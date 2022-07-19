import React from "react";
import { useState } from "react";
import "./ModalEdit.css";
import Modal from "../Modal/Modal";
import { TasksServices } from "../../services/TasksServices";

function ModalEdit({ closeModal, taskTitle, taskId }) {
  // const [taskToUpdate, setTaskToUpdate] = useState({title:""});

  const [taskUpdated, setTaskUpdated] = useState({
    title: taskTitle,
    id: taskId,
    checked: false,
  });

  const editTask = async (tasks, taskupdate) => {
    // tasks = taskId;
    delete taskupdate.id;
    const response = await TasksServices.updateById(tasks, taskupdate);
    closeModal();
    // taskupdate = taskToUpdate
    // setTaskUpdated(response)
  };

  return (
    <Modal closeModal={closeModal}>
      <form
        className="form__edit"
        onSubmit={(event) => {
          console.log(taskId);
          event.preventDefault(); // senão vai tentar mandar os dados via navegador, muda a url e coloca as informaçoes, não manda pra API
          editTask(taskUpdated.id, taskUpdated);
        }}
      >
        <input
          type="text"
          placeholder={taskTitle}
          value={taskUpdated.title} //
          name="title" //add name e value
          onChange={(event) =>
            setTaskUpdated({ ...taskUpdated, title: event.target.value })
          }
        />
        <button type="submit">
          {/* //onClick={() => editTask()} */}
          Atualizar
        </button>
      </form>
    </Modal>
  );
}

export default ModalEdit;
