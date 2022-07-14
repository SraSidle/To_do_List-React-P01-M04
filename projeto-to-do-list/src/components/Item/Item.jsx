import React from "react";
import {useState, useEffect} from "react"
import ModalDelete from "../ModalDelete/ModalDelete";
import "./Item.css";

function Item({ task, onModalEdit, onModalDelete}) {

  const [delTaskModal, setDelTaskModal] = useState(false);

  const booleanModal = () => {
      setDelTaskModal(true)
  }
  
  return (
    <div className="task--list--item" key={`task--list-${"index"}`}>
          {delTaskModal && <ModalDelete closeModal={() => setDelTaskModal(false)} />}
      <div className="check--item">
        <input className="checkbox" type="checkbox" />
        <p className="Task-name">{task.title}</p>
      </div>
      <div className="icons-edit-delete">
        <button type="button" className="" onClick={() => onModalEdit(task.id)}>
          <i className="bi bi-pencil-square"></i>
        </button>
        <button
          type="button"
          className=""
          onClick={() => booleanModal()}
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Item;
