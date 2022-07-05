import React, { useState, useEffect } from "react";
import "./search.css";
//import { tasks } from "../../mocks/list";
//import { Api } from "../../helpers/Api";
// import Item from "../Item/Item";
// import { render } from "@testing-library/react";
import { TasksServices } from "../../services/TasksServices";

function SearchTask() {
  const [found, setFound] = useState();

  const searchClick = async () => {
    const task_id_search = document.getElementById("search--input").value;
    const response = await TasksServices.getById(task_id_search);
    console.log("response:", response)
    console.log("found:", found) //found só tem o mesmo valor de response após dois clicks
    setFound(response);  
};

  useEffect(() => {
    searchClick(); 
  }, []);

  return (
    <>
      {" "}
      <div className="align-end">
        <div className="search--task">
          <input
            id="search--input"
            className="search"
            type="text"
            placeholder="Pesquise uma Tarefa"
          />
          <button
            type="button"
            onClick={() => {
              searchClick();
            }}
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div> 
    </>
  );
}

export default SearchTask;