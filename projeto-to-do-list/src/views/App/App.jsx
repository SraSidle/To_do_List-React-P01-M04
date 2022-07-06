// import {useState} from "react"
import React, { useState } from "react";
import "./App.css";
import Modal from "../../components/Modal/Modal";
import Header from "../../components/Header/Header";
import TaskList from "../../components/TaskList/TaskList";
import Footer from "../../components/Footer/Footer"

function App() {
  const [updateList, setUpdateList] = useState();

  return (
    <div className="App">
      <Modal />
      <Header setUpdateList = {setUpdateList} />
      <TaskList updateList = {updateList} />
      <Footer />
    </div>
  );
}

export default App;
