import "./TaskList.css";
import { tasks } from "../../mocks/list";
import Search from "../Search/Search";
import Item from "../Items/Item";

function TaskList() {
  return (
    <div className="task--list">
      {" "}
      <Search />
      {tasks.map((task, index) => (      
         <Item />
))}
    </div>
  );
}

export default TaskList;

// linha 11 erro pq index e task nao esta disponivel
