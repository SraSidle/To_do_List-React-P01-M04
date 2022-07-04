import React, { useState, useEffect } from "react";
import { TasksServices } from "../../services/TasksServices";
import { Api } from "../../helpers/Api";
import "./header.css";

function Header() {
  const [newTask, setnewTask] = useState();

   const create = async (task) => {
    const response =  fetch(Api.baseURL, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(task),
    });

    const res = await response; //.json(); dava erro de promisse
    setnewTask(res);
    console.log("Res", res)
    console.log("response", response)
    console.log("newTask", newTask)
  }

  const handlerCreateTask = async () => {
    const value = await document.getElementById("input--create").value;
    console.log("value", value) // o que queremos está no value
    await create(value);
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
          // onChange={handlerChangeCreate}
        />
      </div>
    </header>
  );
}

export default Header;
