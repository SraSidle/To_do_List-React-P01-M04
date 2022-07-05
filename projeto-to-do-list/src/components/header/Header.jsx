import React, { useState, useEffect } from "react";
import { TasksServices } from "../../services/TasksServices";
import { Api } from "../../helpers/Api";
import "./header.css";

function Header() {

  const [tasks, setTasks] = useState([]);

  const [newTask, setnewTask] = useState();

  console.log(tasks)
   const create = async () => {
    const response = await fetch(Api.baseURL + "/tasks", {//null
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(newTask),
    });

    const createdTask = await response.json()
    console.log("esse é o cre",createdTask)
    setTasks([createdTask]);
  
   // console.log("Res", res)
    console.log("response", response)
    console.log("newTask", newTask)
  }

  const handlerCreateTask = async () => {
    const value = await document.getElementById("input--create").value;
   console.log("value", value) // o que queremos está no value

   if(value !== ""){
      await create(value);
   } else {
     
   }
   
  };

  useEffect(() => {
    handlerCreateTask(); 
}, []);

  return (
    <header>
      <h1>
        <i className="bi bi-list-check"></i>To do List
      </h1>
      <div>
        <button
          type="button"
          className="bi"
          onClick={() => handlerCreateTask()}
        >
          <i className="bi bi-plus-lg"></i>
        </button>
        <input
          id="input--create"
          type="text"
          placeholder="Adicione uma nova tarefa"
          //value=""
          //onChange={handlerChangeCreate}
        />
      </div>
    </header>
  );
}

export default Header;
