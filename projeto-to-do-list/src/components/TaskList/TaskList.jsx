import "./TaskList.css";
import { tasks } from "../../mocks/list";
import Search from "../Search/Search";
//import Item from "../Items/Item";

function TaskList() {
  return (
    <div className="task--list">
      {" "}
      <Search />
      {tasks.map((task, index) => (
        <div className="task--list--item" key={`task--list-${index}`}>
          <div className="check--item">
            <input type="checkbox" />
            {task.toDo}
          </div>
          <div className="icons-edit-delete">
            <i className="bi bi-pencil-square"></i>
            <i className="bi bi-trash"></i>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
