// import {useState} from "react"
import "./App.css";
import Modal from "../../components/Modal/Modal"
import Header from "../../components/Header/Header";
import TaskList from "../../components/TaskList/TaskList";

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
