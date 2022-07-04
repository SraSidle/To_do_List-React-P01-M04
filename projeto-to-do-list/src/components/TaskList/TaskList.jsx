import "./TaskList.css";
import React,{useState, useEffect} from 'react'
import { TasksServices } from "../../services/TasksServices";
import SearchTask from "../Search/Search";
import Item from "../Item/Item";

function TaskList() {

  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
     TasksServices.getlista().then(setTasks)
  }, [])

  return (
    <div className="task--list">
      {" "}
      <SearchTask />
      {tasks.map((task, index) => (
        <Item key={`task--list-${index}`} task={task}/>
      ))}
    </div>
  );
}

export default TaskList;

