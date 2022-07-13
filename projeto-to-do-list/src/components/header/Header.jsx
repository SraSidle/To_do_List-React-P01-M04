import React, { useState } from "react";
import { Api } from "../../helpers/Api";
import "./header.css";

function Header({ setUpdateList }) {
  const [newTask, setnewTask] = useState();

  const create = async () => {
    const response = await fetch(Api.baseURL + "/tasks", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        title: newTask,
        checked: false,
      }),
    });
    setUpdateList((prev) => !prev);
  };

  const handlerCreateTask = async () => {
    if (newTask) {
      await create(newTask);
      document.querySelector(".Modal--create--overlay").style.display = "flex";
      setTimeout(() => {
        document.querySelector(".Modal--create--overlay").style.display =
          "none";
      }, 2e3);
    }
  };

  return (
    <header>
      <h1>
        <i className="bi bi-list-check"></i>To do List
      </h1>
      <div className="Modal--create--overlay">
        <div className="Modal--create">
          <p>Tarefa criada com sucesso!</p>
        </div>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handlerCreateTask();
        }}
      >
        <button type="submit" className="bi">
          <i className="bi bi-plus-lg"></i>
        </button>
        <input
          id="input--create"
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={(event) => setnewTask(event.target.value)}
        />
      </form>
    </header>
  );
}

export default Header;
