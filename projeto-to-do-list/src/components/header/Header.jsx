import React,{useState, useEffect }  from 'react'
import { TasksServices } from '../../services/TasksServices';
import {Api} from '../../helpers/Api'
import "./header.css";

function Header() {
  const [newTask, setnewTask] = useState();

  useEffect(()=>{
     TasksServices.getlista().then(setnewTask)
  }, [])

  const task = newTask

  async function create(task){
    const response = await fetch(Api.baseURL, {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(task),
    })
    const newTask = await response.json()
    setnewTask([newTask])
  }

  return (
    <header>
      <h1>
        <i className="bi bi-list-check"></i>To do List
      </h1>
      <div>
        <button type="button" className="bi" onClick={() => create(task)}>
          <i className="bi bi-plus-lg"></i>
        </button>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
         // value={task}
         //onChange={(ev) => setnewTask(ev.target.value)}
        />
      </div>
    </header>
  );
}

export default Header;
