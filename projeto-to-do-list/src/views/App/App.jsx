// import {useState} from "react"
import React from 'react'
import "./App.css";
import Modal from "../../components/Modal/Modal"
import Mcreate from '../../components/ModalCreate/Mcreate';
import Header from "../../components/Header/Header";
import TaskList from "../../components/TaskList/TaskList";

function App() {
  return (
    <div className="App">
      <Modal />
      <Mcreate />
      <Header />
      <TaskList />
    </div>
  );
}

export default App;
