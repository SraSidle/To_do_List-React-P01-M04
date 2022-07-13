import "./TaskList.css";
import React, { useState, useEffect } from "react";
import { TasksServices } from "../../services/TasksServices";
import ModalDelete from "../ModalDelete/ModalDelete";
import SearchTask from "../Search/Search";
import Item from "../Item/Item";

function TaskList({ updateList, updateTask, deleteTask, deletedTask }) {
  //A chave é colocada para desconstruir a sintaxe props.updateList para se tornar apenas updateList
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    TasksServices.getlista().then(setTasks);
  }, [updateList, updateTask, deletedTask]);

  return (
    <div className="task--list">
      <SearchTask setTasks={setTasks} />
      {tasks &&
        tasks.map((task, index) => (
          <Item
            key={`task--list-${index}`}
            task={task}
            // onModalDelete={setDelTaskModal(true)}
            // onModalEdit={}
          />
        ))}
    </div>
  );
}

export default TaskList;

//Toda vez que o updateList mudar o useEffect será chamado e atualizará a lista de tarefas.
// Existem 3 formas de utilizar o useEffect("Ciclos de vida") //quando o componente é atualizado, renderizado e desmontado
// 1- Se o UE não tem array de dependências: Atualiza sempre de acordo com seus ciclos de vida
// 2- Array de dep. vazio []: vai executar só quando for renderizado.
// 3- Com array de dependências: Quando renderizado e quando algum estado no Array de dependencias é atualizado
