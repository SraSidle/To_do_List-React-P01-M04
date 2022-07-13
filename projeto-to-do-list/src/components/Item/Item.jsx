import React from "react";
import "./Item.css";

function Item({task, onModalEdit, onModalDelete}) {

  const [delTaskModal, setDelTaskModal] = useState(false)

  return (
    <div className="task--list--item" key={`task--list-${"index"}`}>
      <div className="check--item">
        <input className="checkbox" type="checkbox" />
        <p className="Task-name">{task.title}</p>
      </div>
      <div className="icons-edit-delete">
        <button type="button" className="" onClick={() => onModalEdit(task.id)}>
          <i className="bi bi-pencil-square"></i>
        </button>
        <button type="button" className="" onClick={() => onModalDelete(task.id)}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Item;
