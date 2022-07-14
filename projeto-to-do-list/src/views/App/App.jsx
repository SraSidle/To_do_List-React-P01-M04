// import {useState} from "react"
import React, { useState } from "react";
import "./App.css";
import Header from "../../components/Header/Header";
import TaskList from "../../components/TaskList/TaskList";
import Footer from "../../components/Footer/Footer";
// import ModalDelete from "../../components/ModalDelete/ModalDelete";

function App(taskToDelete) {
  const [updateList, setUpdateList] = useState();

  const [updateTask, setUpdateTask] = useState();

  const [deleteTask, setDeleteTask] = useState();

  const [deletedTask, setDeletedTask] = useState();

  const handleDeleteTask = (taskToDelete) => {
    setDeleteTask(taskToDelete);
  };

  const handleCloseModal = () => {
    setUpdateTask();
    setDeleteTask();
  };

  return (
    <div className="App">
      {/* <ModalDelete
        closeModal={handleCloseModal}
        taskToDelete={deletedTask}
        onDeleteTask={(task) => setDeletedTask(task)}
      /> */}
      <Header setUpdateList={setUpdateList} />
      <TaskList
        updateList={updateList}
        deleteTask={handleDeleteTask}
        deletedTask={deletedTask}
      />
      <Footer />
      {/* {taskToDelete && (
        <ModalDelete
          taskToDelete={taskToDelete}
          closeModal={() => setDelTaskModal(true)}
        />
      )} */}
    </div>
  );
}

export default App;
