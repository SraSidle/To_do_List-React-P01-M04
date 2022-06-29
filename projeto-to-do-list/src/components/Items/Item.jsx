import "./Item.css";

function Item() {
  return (
    
    <div className="item">
      <div className="task--list--item"  key={`task--list-${index}`}>
        <div className="check--item">
          <input type="checkbox" />
          {task.toDo}
        </div>
        <div className="icons-edit-delete">
          <i className="bi bi-pencil-square"></i>
          <i className="bi bi-trash"></i>
        </div>
      </div>
    </div>
  );
}

export default Item;

// Na linha 6/ o key vai ficar no tasklist, rever a aula 