// import {useState} from "react"
import React, { useState } from "react";
import "./App.css";
import Header from "../../components/Header/Header";
import TaskList from "../../components/TaskList/TaskList";
import Footer from "../../components/Footer/Footer";

function App() {
  const [updateList, setUpdateList] = useState();

  // const [updateTask, setUpdateTask] = useState();

  // const handleDeleteTask = (taskToDelete) => {
  //   setDeleteTask(taskToDelete);
  // };

  // const handleCloseModal = () => {
  //   setUpdateTask();
  //   setDeleteTask();
  // };

  return (
    <div className="App">
      <Header setUpdateList={setUpdateList} />
      <TaskList
      // taskToDelete={}
      />
      <Footer />
    </div>
  );
}

export default App;
