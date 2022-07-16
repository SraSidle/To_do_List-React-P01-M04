import React from "react";
import { useState } from "react";
import ModalDelete from "../ModalDelete/ModalDelete";
import ModalEdit from "../ModalEdit/ModalEdit"
import "./Item.css";

function Item({ task, taskToDelete}) {
  const [delTaskModal, setDelTaskModal] = useState(false);

  const [editTaskModal, setEditTaskModal] = useState(false)

  return (
    <div className="task--list--item" key={`task--list-${"index"}`}>
      {delTaskModal && (
        <ModalDelete
          taskToDelete={task.id}
          closeModal={() => setDelTaskModal(false)}
          onDeleteTask={taskToDelete}
        />
      )}
      {editTaskModal && (
        <ModalEdit 
        taskTitle={task.title}
        taskId={task.id}
        closeModal={() => setEditTaskModal(false)}
        />
      )}
      <div className="check--item">
        <input className="checkbox" type="checkbox" />
        <p className="Task-name">{task.title}</p>
      </div>
      <div className="icons-edit-delete">
        <button type="button" className="" onClick={() => setEditTaskModal(true)}>
          <i className="bi bi-pencil-square"></i>
        </button>
        <button type="button" className="" onClick={() => setDelTaskModal(true)}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Item;
