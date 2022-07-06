import React from "react";
import "./Item.css";

function Item(props) {
  return (
    <div className="task--list--item" key={`task--list-${"index"}`}>
      <div className="check--item">
         <input className="checkbox" type="checkbox" /> 
        <p className="Task-name">{props.task.title}</p>
      </div>    
      <div className="icons-edit-delete">
        <i className="bi bi-pencil-square"></i>
        <i className="bi bi-trash"></i>
      </div>
    </div>
  );
}

export default Item;
