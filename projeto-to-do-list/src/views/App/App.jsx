// import {useState} from "react"
import React, { useState } from "react";
import "./App.css";
import Modal from "../../components/Modal/Modal";
import Mcreate from "../../components/ModalCreate/Mcreate";
import Header from "../../components/Header/Header";
import TaskList from "../../components/TaskList/TaskList";

function App() {
  const [updateList, setUpdateList] = useState();

  return (
    <div className="App">
      <Modal />
      <Mcreate />
      <Header setUpdateList = {setUpdateList} />
      <TaskList updateList = {updateList} />
    </div>
  );
}

export default App;
