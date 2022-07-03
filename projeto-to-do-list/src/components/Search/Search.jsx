import React,{useState, useEffect} from 'react'
import { TasksServices } from '../../services/TasksServices';
import "./search.css";

function SearchTask() {

  const [found, setFound] = useState([]);

  useEffect(()=>{
     TasksServices.getById().then(setFound)
  }, [])

  return (
    <div className="align-end">
      <div className="search--task">
        <input
          className="search"
          type="text"
          placeholder="Pesquise uma Tarefa"
        />
        <i className="bi bi-search"></i>
      </div>
    </div>
  );
}

export default SearchTask;
