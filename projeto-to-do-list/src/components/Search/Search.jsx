import "./search.css";

function SearchTask() {
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
