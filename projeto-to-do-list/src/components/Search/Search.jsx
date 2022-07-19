import React, { useState, useEffect } from "react";
import "./search.css";
import { TasksServices } from "../../services/TasksServices";

function SearchTask({ setTasks }) {
  const [taskSearch, setTaskSearch] = useState();

  const searchClick = async () => {
    if (taskSearch) {
      const response = await TasksServices.getById(taskSearch);
      setTasks([response]);
    } else {
      TasksServices.getlista().then(setTasks);
    }
  };

  useEffect(() => {}, [setTasks]);

  return (
    <div className="align-end">
      <form
        className="search--task"
        onSubmit={(event) => {
          event.preventDefault();
          searchClick();
        }}
      >
        <input
          id="search--input"
          className="search"
          type="text"
          placeholder="Pesquise uma Tarefa"
          onChange={(event) => setTaskSearch(event.target.value)}
        />
        <button
          id="button-search"
          type="submit"
        >
          <i className="bi bi-search"></i>
        </button>
      </form>
    </div>
  );
}

export default SearchTask;
