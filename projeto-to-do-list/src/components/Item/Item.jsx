import React from "react";
import "./Item.css";

function Item(props) {
  return (
    <div className="task--list--item" key={`task--list-${"index"}`}>
      <div className="check--item">
        <label className="style-checkbox">
          <input type="checkbox" />
        </label>
        {props.task.title}
      </div>
      <div className="icons-edit-delete">
        <i className="bi bi-pencil-square"></i>
        <i className="bi bi-trash"></i>
      </div>
    </div>
  );
}

export default Item;
