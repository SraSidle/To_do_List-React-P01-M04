import "./header.css";
import { useState } from "react";

function Header() {
  const [task, setTask] = useState("");
  return (
    <header>
      <h1>
        <i className="bi bi-list-check"></i>To do List
      </h1>
      <div>
        <button className="bi">
          <i className="bi bi-plus-lg"></i>
        </button>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={task}
          onChange={(ev) => setTask(ev.target.value)}
        />
      </div>
    </header>
  );
}

export default Header;
