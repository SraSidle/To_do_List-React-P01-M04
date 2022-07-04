import React, { useState, useEffect } from "react";
import { TasksServices } from "../../services/TasksServices";
import { Api } from "../../helpers/Api";
import "./header.css";

function Header() {
  const [newTask, setnewTask] = useState();

  async function createT(task) {
    const response = await fetch(Api.baseURL, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(task),
    });

    const res = await response.json();
    setnewTask(res);
    console.log("newTask", newTask)
  }

  const handlerCreateTask = async () => {
    const value = document.getElementById("input--create").value;
    await createT(value);
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
