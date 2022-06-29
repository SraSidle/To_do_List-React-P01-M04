// import {useState} from "react"
import "./App.css";
import Modal from "../Modal/Modal"
import Header from "../header/Header";
import TaskList from "../TaskList/TaskList";

function App() {
  return (
    <div className="App">
      <Modal />
      <Header />
      <TaskList />
    </div>
  );
}

export default App;
