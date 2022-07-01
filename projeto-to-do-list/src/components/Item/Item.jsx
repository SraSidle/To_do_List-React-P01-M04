import { useState } from "react";
import "./Item.css";
import { tasks } from "../../mocks/list";

function Item() {
  return (
    <div className="task--list--item" key={`task--list-${"index"}`}>
      <div className="check--item">
        <label className="style-checkbox">
          <input type="checkbox" />
        </label>
        {tasks.toDo}
      </div>
      <div className="icons-edit-delete">
        <i className="bi bi-pencil-square"></i>
        <i className="bi bi-trash"></i>
      </div>
    </div>
  );
}

export default Item;
// Na linha 6/ o key vai ficar no tasklist, rever a aula / na key tem o "index" no template e na 9 trm um task.toDo
