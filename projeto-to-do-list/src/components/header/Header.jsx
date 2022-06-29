import "./header.css";

function Header() {
  return (
    <header>
      <h1><i className="bi bi-list-check"></i>To do List</h1>
      <div>
        <button className="bi">
          <i className="bi bi-plus-lg"></i>
        </button>
        <input type="text" placeholder="Adicione uma nova tarefa" />
      </div>
    </header>
  );
}

export default Header;
